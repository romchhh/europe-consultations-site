import type { Messages } from "./types";

export const en: Messages = {
  meta: {
    title:
      "Consultations on employment and legalisation in Europe — information support",
    titleTemplate: "%s | Consultations in Europe",
    description:
      "Individual information and advisory services on legal employment and stay in European countries. Online or in person.",
    keywords: [
      "Europe consultations",
      "legal employment Europe",
      "residence permit Europe",
      "work permit",
      "migration advice",
    ],
    author: "Consultations — Europe",
    ogTitle:
      "Consultations on employment and legalisation in Europe — information support",
    ogDescription:
      "We explain realistic options, documents and steps — without illusions or unnecessary costs.",
    ogSiteName: "Consultations in Europe",
    ogImageAlt: "Europe — information consultations on legalisation",
    twitterTitle:
      "Consultations on employment and legalisation in Europe",
    twitterDescription: "Information support. Legally. To the point.",
  },
  brand: {
    shortName: "Consultations — Europe",
    tagline: "Europe · consultations",
    legalNote1:
      "Information provided during consultations is for general guidance and recommendation only.",
    legalNote2:
      "By contacting us, you consent to the processing of personal data solely for the purpose of providing the consultation, in accordance with applicable law and the GDPR.",
  },
  nav: {
    home: "Home",
    services: "Areas",
    about: "About",
    faqs: "FAQ",
    contact: "Contact",
    cta: "Get in touch",
    menuOpen: "Menu",
    menuClose: "Close menu",
    language: "Site language",
  },
  langSwitcher: { uk: "UK", en: "EN", ru: "RU" },
  hero: {
    imageAlt: "Europe — consultations on legalisation and employment",
    title: "Consultations on employment and legalisation in Europe",
    line1: "Information support",
    line2: "Legally. To the point.",
    body: "We provide individual consultations on legal employment and stay in European countries. We explain realistic options, documents and steps — without illusions or unnecessary costs.",
    prevSlide: "Previous area",
    nextSlide: "Next area",
  },
  about: {
    sectionLabel: "About us",
    title: "Consultations on employment and legalisation in Europe",
    topicsHeading: "We advise on",
    topics: [
      "Citizenship",
      "Legal employment in Europe",
      "Residence permits, work permits, ID numbers, registrations",
      "Changing immigration status",
      "Risks, timelines and options",
      "Opening bank accounts in Europe for individuals and legal entities",
    ],
    principles: ["Legality", "Clarity", "Honesty"],
    imageAlt: "European city — legalisation consultations",
    ctaText:
      "Consultations — online or in person. Payment confirms your request for information and advisory services.",
    payButton: "Pay for a consultation",
    contactButton: "Contact us",
    telegramMore: "More information on",
  },
  faqs: {
    title: "Questions and answers",
    items: [
      {
        question: "What exactly do you provide?",
        answer:
          "We provide information and advisory services: we review your situation, explain typical requirements, documents and possible steps. This is not a substitute for official migration or legal representation in a specific country.",
      },
      {
        question: "How does a consultation work?",
        answer: [
          "Consultations can be online (call/video) or in person (office).",
          "Before the meeting, it helps to briefly describe your goal and country of interest via the contact form.",
        ],
      },
      {
        question: "Do you guarantee a visa, residence permit or citizenship?",
        answer:
          "No. Decisions are made by public authorities. We provide introductory and advisory information so you understand realistic options, risks and timelines — without false promises.",
      },
      {
        question: "How can I pay for a consultation?",
        answer: [
          "Payment is possible via PayU, Stripe, SBP or other methods — using the “Pay for a consultation” link.",
          "On the website or in the Telegram channel (the “Premium” button).",
          "Payment confirms your request for information and advisory services.",
        ],
      },
      {
        question: "Where can I find more information?",
        answer:
          "Additional materials and updates are published in our Telegram channel (paid subscription, €5/month). Social links are at the bottom of the page.",
      },
      {
        question: "Do you work with only one EU country?",
        answer:
          "Our focus is legal employment and stay in European countries in general.",
      },
    ],
  },
  services: {
    sectionTitle: "Consultation areas",
    items: [
      {
        title: "Citizenship",
        subtitle: "Consultations",
        description:
          "Review of grounds, timelines and documents — without “guaranteed” outcome promises, with a realistic assessment of options.",
      },
      {
        title: "Legal employment in Europe",
        subtitle: "Consultations",
        description:
          "Ways to arrange work, typical employer and migration authority requirements, what to consider before relocation.",
      },
      {
        title: "Residence permits, work permits, numbers, registrations",
        subtitle: "Consultations",
        description:
          "We explain the purpose of documents and statuses, typical steps and differences between countries — within an information consultation.",
      },
      {
        title: "Changing stay status",
        subtitle: "Consultations",
        description:
          "When a status change is realistic, common risks and timelines, documents usually requested.",
      },
      {
        title: "Risks, timelines and options",
        subtitle: "Consultations",
        description:
          "We openly discuss limitations, likely delays and alternative scenarios — without illusions or unnecessary costs.",
      },
      {
        title: "Business",
        subtitle: "Consultations",
        description:
          "Consultations on opening companies, taxation (including optimisation), and opening bank accounts in Europe.",
      },
    ],
  },
  contact: {
    title: "Contact us",
    subtitle:
      "Request for information and advisory services. We will respond using your preferred channel.",
    payButton: "Pay for a consultation (PayU, Stripe, SBP)",
    telegramButton: "Telegram (subscription)",
    privacyError: "You must agree to the data processing terms",
    tgSuccess:
      "Telegram opened with your request text. If the window did not appear, message us via the button above or book a consultation.",
    tgFallback:
      "We do not use on-site email. Please use “Pay for a consultation” or Telegram above.",
    serviceOptions: [
      { value: "citizenship", label: "Citizenship" },
      { value: "employment-eu", label: "Legal employment in Europe" },
      {
        value: "permits-pesel",
        label: "Residence permits, work permits, numbers, registrations",
      },
      { value: "status-change", label: "Changing stay status" },
      { value: "risks", label: "Risks, timelines and options" },
      {
        value: "europe-bank",
        label: "Opening bank accounts in Europe for individuals and companies",
      },
      {
        value: "business",
        label:
          "Business: companies, taxation (incl. optimisation), EU bank accounts",
      },
      { value: "other", label: "Other" },
    ],
    labels: {
      fullName: "Full name *",
      phone: "Phone *",
      email: "Email",
      topic: "Consultation topic",
      comment: "Briefly describe your request",
      preferredContact: "Preferred contact method *",
    },
    placeholders: {
      fullName: "How should we address you",
      phone: "Contact number",
      email: "If you prefer email replies",
      comment: "Country, goal, timeline (optional)",
    },
    contactMethods: {
      phone: "Phone",
      email: "Email",
      whatsapp: "WhatsApp",
      telegram: "Telegram",
      viber: "Viber",
    },
    submit: "Send",
    submitting: "Sending…",
    privacyCheckbox:
      "I agree to the processing of personal data to respond to my enquiry and provide the consultation, in accordance with applicable law and the GDPR.*",
    formHeader: "Website enquiry (consultations)",
  },
  footer: {
    tagline: "Information support. Legally. To the point.",
    socialTitle: "Social media",
    socialText:
      "Facebook, WhatsApp, Telegram, Viber — choose a convenient channel.",
    paymentTitle: "Payment",
    payLink: "Pay for a consultation (PayU, Stripe, SBP, etc.)",
    payNote:
      "Payment confirms your request for information and advisory services.",
    telegramMore: "More materials on",
    telegramSubscriptionNote: "(subscription).",
    copyright: "Site:",
  },
};
