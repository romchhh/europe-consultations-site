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
    <section id="contact" className="relative py-20 scroll-mt-24">
      <div className="max-w-[1400px] mx-auto px-3 md:px-8 pt-4 pb-12">
        <div className="relative bg-white rounded-[2.5rem] shadow-2xl">
          <div className="relative h-[1100px] md:h-[700px] z-0 rounded-[2.5rem] overflow-hidden">
            <Image
              src={CONTACT_BG}
              alt=""
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
          </div>

          <div className="absolute inset-0 flex items-start md:items-center z-10 rounded-[2.5rem]">
            <div className="w-full max-w-[900px] mx-auto px-3 md:px-8 py-6 md:py-12">
              <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-[30px] p-5 md:p-12 shadow-2xl w-full">
                <div className="text-center mb-8">
                  <h2
                    className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4"

                  >
                    {contact.title}
                  </h2>
                  <p
                    className="text-white text-base drop-shadow-md"

                  >
                    {contact.subtitle}
                  </p>
                  <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
                    <a
                      href={siteLinks.payment}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex justify-center items-center bg-[#F9DC0A] hover:bg-[#e5ca09] text-[#222221] font-semibold px-6 py-2.5 rounded-lg transition-all text-sm sm:text-base"

                    >
                      {contact.payButton}
                    </a>
                    <a
                      href={siteLinks.telegramChannel}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex justify-center items-center border border-white/60 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-white/10 text-sm sm:text-base"

                    >
                      {contact.telegramButton}
                    </a>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  {submitStatus.type && (
                    <div
                      className={`p-4 rounded-lg ${
                        submitStatus.type === "success"
                          ? "bg-green-500/20 border border-green-500/50 text-green-100"
                          : "bg-red-500/20 border border-red-500/50 text-red-100"
                      }`}
                    >
                      <p
                        className="text-sm font-medium"

                      >
                        {submitStatus.message}
                      </p>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label
                        className="block text-white text-xs font-semibold mb-2 uppercase tracking-wider drop-shadow-md"

                      >
                        {contact.labels.fullName}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full px-4 py-3.5 backdrop-blur-md bg-white/30 border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 text-white placeholder:text-white/70 transition-all"
                        placeholder={contact.placeholders.fullName}

                      />
                    </div>
                    <div>
                      <label
                        className="block text-white text-xs font-semibold mb-2 uppercase tracking-wider drop-shadow-md"

                      >
                        {contact.labels.phone}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3.5 backdrop-blur-md bg-white/30 border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 text-white placeholder:text-white/70 transition-all"
                        placeholder={contact.placeholders.phone}

                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label
                        className="block text-white text-xs font-semibold mb-2 uppercase tracking-wider drop-shadow-md"

                      >
                        {contact.labels.email}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3.5 backdrop-blur-md bg-white/30 border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 text-white placeholder:text-white/70 transition-all"
                        placeholder={contact.placeholders.email}

                      />
                    </div>
                    <div>
                      <label
                        className="block text-white text-xs font-semibold mb-2 uppercase tracking-wider drop-shadow-md"

                      >
                        {contact.labels.topic}
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-3.5 backdrop-blur-md bg-white/30 border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 text-white transition-all"

                      >
                        {contact.serviceOptions.map((opt) => (
                          <option
                            key={opt.value}
                            value={opt.value}
                            className="text-[#222221]"
                          >
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-white text-xs font-semibold mb-2 uppercase tracking-wider drop-shadow-md"

                    >
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
                      className="w-full px-4 py-3.5 backdrop-blur-md bg-white/30 border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 text-white placeholder:text-white/70 transition-all resize-none"
                      placeholder={contact.placeholders.comment}
                      rows={4}

                    />
                  </div>

                  <div className="space-y-3 md:space-y-4 pt-4 md:pt-6 border-t border-white/30">
                    <div>
                      <label
                        className="block text-white text-sm font-semibold mb-3 drop-shadow-md"

                      >
                        {contact.labels.preferredContact}
                      </label>
                      <div className="flex flex-wrap gap-6">
                        {PREFERRED_KEYS.map((key) => (
                          <label
                            key={key}
                            className="flex items-center cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="preferredContact"
                              value={key}
                              checked={formData.preferredContact === key}
                              onChange={() =>
                                setFormData({
                                  ...formData,
                                  preferredContact: key,
                                })
                              }
                              className="mr-2 w-4 h-4 text-white focus:ring-white/50 accent-white"
                            />
                            <span
                              className="text-white text-sm drop-shadow-md"

                            >
                              {contact.contactMethods[key]}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4 pt-4 md:pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="backdrop-blur-md bg-white/40 hover:bg-white/50 border border-white/50 text-[#222221] font-semibold px-10 py-3.5 rounded-lg transition-all uppercase tracking-wider order-2 md:order-1 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"

                    >
                      {isSubmitting ? contact.submitting : contact.submit}
                    </button>
                    <label className="flex items-start cursor-pointer order-1 md:order-2 gap-2">
                      <input
                        type="checkbox"
                        checked={privacyAgreed}
                        onChange={(e) => setPrivacyAgreed(e.target.checked)}
                        className="mt-1 w-4 h-4 text-white focus:ring-white/50 accent-white shrink-0"
                      />
                      <span
                        className="text-white text-sm drop-shadow-md text-left"

                      >
                        {contact.privacyCheckbox}
                      </span>
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
