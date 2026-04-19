import { NextRequest, NextResponse } from "next/server";
import {
  checkRateLimit,
  containsDangerousPatterns,
  validateJsonInput,
} from "@/lib/security";

const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;
const EMAILJS_PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY;
/** Лише з `.env` / змінних середовища — без дефолту в коді */
const RECIPIENT_EMAIL = process.env.EMAILJS_RECIPIENT_EMAIL;

/** Значення `value` з форми контактів — мають збігатися з `contact.serviceOptions` */
const ALLOWED_SERVICES = new Set([
  "citizenship",
  "employment-eu",
  "permits-pesel",
  "status-change",
  "risks",
  "europe-bank",
  "business",
  "grants",
  "other",
]);

const ALLOWED_CONTACT_KEYS = new Set([
  "phone",
  "email",
  "whatsapp",
  "telegram",
  "viber",
]);

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const clientId =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";
    const rateLimit = checkRateLimit(clientId, 20, 60000);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const bodyText = await req.text();

    const jsonValidation = validateJsonInput(bodyText, 50000);
    if (!jsonValidation.valid) {
      return NextResponse.json(
        { error: "Invalid input", details: jsonValidation.error },
        { status: 400 },
      );
    }

    const body = JSON.parse(bodyText) as Record<string, unknown>;
    const fullName =
      typeof body.fullName === "string" ? body.fullName.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const email =
      typeof body.email === "string" ? body.email.trim().slice(0, 254) : "";
    const service = typeof body.service === "string" ? body.service : "";
    const serviceLabel =
      typeof body.serviceLabel === "string"
        ? body.serviceLabel.trim().slice(0, 400)
        : "";
    const preferredContact =
      typeof body.preferredContact === "string"
        ? body.preferredContact
        : "";
    const preferredContactLabel =
      typeof body.preferredContactLabel === "string"
        ? body.preferredContactLabel.trim().slice(0, 120)
        : "";
    const taskDescription =
      typeof body.taskDescription === "string"
        ? body.taskDescription.trim().slice(0, 8000)
        : "";

    if (!fullName || fullName.length > 200) {
      return NextResponse.json({ error: "Full name is required" }, { status: 400 });
    }

    if (!phone || phone.length > 50) {
      return NextResponse.json({ error: "Phone is required" }, { status: 400 });
    }

    if (!ALLOWED_SERVICES.has(service)) {
      return NextResponse.json({ error: "Invalid topic" }, { status: 400 });
    }

    if (!ALLOWED_CONTACT_KEYS.has(preferredContact)) {
      return NextResponse.json(
        { error: "Invalid contact method" },
        { status: 400 },
      );
    }

    if (!serviceLabel) {
      return NextResponse.json({ error: "Service label is required" }, { status: 400 });
    }

    if (!preferredContactLabel) {
      return NextResponse.json(
        { error: "Contact method label is required" },
        { status: 400 },
      );
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    const contentToCheck = `${fullName} ${phone} ${email} ${service} ${serviceLabel} ${preferredContact} ${preferredContactLabel} ${taskDescription}`;
    if (containsDangerousPatterns(contentToCheck)) {
      return NextResponse.json(
        { error: "Dangerous patterns detected in form data" },
        { status: 400 },
      );
    }

    if (
      !EMAILJS_SERVICE_ID ||
      !EMAILJS_TEMPLATE_ID ||
      !EMAILJS_PUBLIC_KEY ||
      !EMAILJS_PRIVATE_KEY ||
      !RECIPIENT_EMAIL?.trim()
    ) {
      console.error("EmailJS configuration is not set");
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Set EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, EMAILJS_PRIVATE_KEY, and EMAILJS_RECIPIENT_EMAIL on the server.",
        },
        { status: 500 },
      );
    }

    const recipientEmail = RECIPIENT_EMAIL.trim();

    const fn = escapeHtml(fullName);
    const ph = escapeHtml(phone);
    const em = email ? escapeHtml(email) : "";
    const sl = escapeHtml(serviceLabel);
    const pcl = escapeHtml(preferredContactLabel);
    const td =
      taskDescription.length > 0
        ? escapeHtml(taskDescription).replace(/\n/g, "<br>")
        : "";

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #222221;">Заявка з сайту (консультації)</h2>
        <p><strong>Імʼя / ФІО:</strong> ${fn}</p>
        <p><strong>Телефон:</strong> ${ph}</p>
        ${em ? `<p><strong>Email:</strong> ${em}</p>` : ""}
        <p><strong>Тема:</strong> ${sl}</p>
        <p><strong>Бажаний спосіб звʼязу:</strong> ${pcl}</p>
        ${
          td
            ? `<p><strong>Коментар:</strong><br>${td}</p>`
            : ""
        }
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
        <p style="color: #666; font-size: 12px;">Лист надіслано з форми «Консультації — Європа».</p>
      </div>
    `;

    const emailText = [
      "Заявка з сайту (консультації)",
      "",
      `Імʼя / ФІО: ${fullName}`,
      `Телефон: ${phone}`,
      ...(email ? [`Email: ${email}`] : []),
      `Тема: ${serviceLabel}`,
      `Спосіб звʼязу: ${preferredContactLabel}`,
      ...(taskDescription ? ["", "Коментар:", taskDescription] : []),
    ].join("\n");

    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          accessToken: EMAILJS_PRIVATE_KEY,
          template_params: {
            to_email: recipientEmail,
            subject: `Заявка з сайту — ${fullName}`,
            message: emailHtml,
            message_text: emailText,
            reply_to: email || recipientEmail,
          },
        }),
      },
    );

    const responseData = await response.text();

    if (!response.ok) {
      console.error("EmailJS API error:", responseData);
      return NextResponse.json(
        { error: "Failed to send email", details: responseData },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
