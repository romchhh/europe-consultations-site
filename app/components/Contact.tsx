"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { siteLinks } from "../data/site";
import type { Messages } from "../../lib/messages/types";

const CONTACT_BG =
  "https://i.pinimg.com/736x/b0/0e/32/b00e32836eaa93368c8f01b01cb25717.jpg";

const PREFERRED_KEYS = [
  "phone",
  "email",
  "whatsapp",
  "telegram",
  "viber",
] as const;

type PreferredKey = (typeof PREFERRED_KEYS)[number];

type Props = {
  contact: Messages["contact"];
};

const inputClass =
  "w-full px-4 py-3.5 rounded-xl border border-[#D8D8D2] bg-[#FAFAF8] text-[#222221] placeholder:text-[#6F6F6E] shadow-inner transition-all focus:outline-none focus:border-[#F9DC0A] focus:bg-white focus:ring-4 focus:ring-[#F9DC0A]/15";

export default function Contact({ contact }: Props) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: contact.serviceOptions[0]?.value ?? "citizenship",
    preferredContact: "phone" as PreferredKey,
    taskDescription: "",
  });
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const serviceLabelByValue = Object.fromEntries(
    contact.serviceOptions.map((o) => [o.value, o.label]),
  ) as Record<string, string>;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!privacyAgreed) {
      setSubmitStatus({
        type: "error",
        message: contact.privacyError,
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const serviceName =
      serviceLabelByValue[formData.service] ?? formData.service;
    const methodLabel =
      contact.contactMethods[formData.preferredContact] ??
      formData.preferredContact;

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          service: formData.service,
          serviceLabel: serviceName,
          preferredContact: formData.preferredContact,
          preferredContactLabel: methodLabel,
          taskDescription: formData.taskDescription.trim(),
        }),
      });

      let data: { error?: string } = {};
      try {
        data = (await res.json()) as { error?: string };
      } catch {
        /* ignore */
      }

      if (!res.ok) {
        setSubmitStatus({
          type: "error",
          message:
            typeof data.error === "string" ? data.error : contact.emailError,
        });
        return;
      }

      setSubmitStatus({
        type: "success",
        message: contact.emailSuccess,
      });

      setFormData({
        fullName: "",
        phone: "",
        email: "",
        service: contact.serviceOptions[0]?.value ?? "citizenship",
        preferredContact: "phone",
        taskDescription: "",
      });
      setPrivacyAgreed(false);
    } catch {
      setSubmitStatus({ type: "error", message: contact.emailError });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={CONTACT_BG}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a18]/92 via-[#252522]/88 to-[#222221]/94" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white shadow-[0_25px_80px_-12px_rgba(0,0,0,0.45)] md:flex md:min-h-[560px] md:rounded-[2rem]">
          {/* Ліва колонка — акцент */}
          <aside className="relative flex flex-col justify-between bg-gradient-to-b from-[#222221] to-[#2e2e2a] px-8 py-10 md:w-[42%] md:max-w-md md:px-10 md:py-12">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-[#F9DC0A]/10 blur-2xl" aria-hidden />
            <div>
              <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                {contact.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/85 md:text-base">
                {contact.subtitle}
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 md:mt-0 md:border-0 md:pt-0">
              <a
                href={siteLinks.payment}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#F9DC0A] px-5 py-3.5 text-center text-sm font-semibold text-[#222221] shadow-lg transition hover:bg-[#e5ca09]"
              >
                {contact.payButton}
              </a>
              <a
                href={siteLinks.telegramChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/25 bg-white/5 px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                {contact.telegramButton}
              </a>
            </div>
          </aside>

          {/* Форма */}
          <div className="flex-1 bg-white px-6 py-10 md:px-10 md:py-12">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#6F6F6E]">
              {contact.formHeader}
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {submitStatus.type && (
                <div
                  role="alert"
                  className={`rounded-xl border px-4 py-3 text-sm font-medium ${
                    submitStatus.type === "success"
                      ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                      : "border-red-200 bg-red-50 text-red-900"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#222221]">
                    {contact.labels.fullName}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className={inputClass}
                    placeholder={contact.placeholders.fullName}
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#222221]">
                    {contact.labels.phone}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className={inputClass}
                    placeholder={contact.placeholders.phone}
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#222221]">
                    {contact.labels.email}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={inputClass}
                    placeholder={contact.placeholders.email}
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#222221]">
                    {contact.labels.topic}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className={`${inputClass} cursor-pointer appearance-none bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat pr-10`}
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236F6F6E'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    }}
                  >
                    {contact.serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#222221]">
                  {contact.labels.comment}
                </label>
                <textarea
                  value={formData.taskDescription}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      taskDescription: e.target.value,
                    })
                  }
                  className={`${inputClass} resize-none`}
                  placeholder={contact.placeholders.comment}
                  rows={4}
                />
              </div>

              <div className="rounded-xl bg-[#F5F5F0] p-4 md:p-5">
                <label className="mb-3 block text-sm font-semibold text-[#222221]">
                  {contact.labels.preferredContact}
                </label>
                <div className="flex flex-wrap gap-2">
                  {PREFERRED_KEYS.map((key) => {
                    const active = formData.preferredContact === key;
                    return (
                      <label
                        key={key}
                        className={`cursor-pointer rounded-full border px-3 py-2 text-sm font-medium transition-all ${
                          active
                            ? "border-[#222221] bg-[#222221] text-white shadow-md"
                            : "border-[#D8D8D2] bg-white text-[#222221] hover:border-[#F9DC0A]/80"
                        }`}
                      >
                        <input
                          type="radio"
                          name="preferredContact"
                          value={key}
                          checked={active}
                          onChange={() =>
                            setFormData({
                              ...formData,
                              preferredContact: key,
                            })
                          }
                          className="sr-only"
                        />
                        {contact.contactMethods[key]}
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-4 border-t border-[#E8E8E2] pt-6 md:flex-row md:items-start md:justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="order-2 w-full rounded-xl bg-[#222221] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition hover:bg-[#3a3a39] disabled:cursor-not-allowed disabled:opacity-50 md:order-1 md:w-auto"
                >
                  {isSubmitting ? contact.submitting : contact.submit}
                </button>
                <label className="order-1 flex cursor-pointer items-start gap-3 md:order-2 md:max-w-md">
                  <input
                    type="checkbox"
                    checked={privacyAgreed}
                    onChange={(e) => setPrivacyAgreed(e.target.checked)}
                    className="mt-1 h-4 w-4 shrink-0 rounded border-[#D8D8D2] text-[#222221] focus:ring-[#F9DC0A]"
                  />
                  <span className="text-left text-sm leading-snug text-[#444443]">
                    {contact.privacyCheckbox}
                  </span>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
