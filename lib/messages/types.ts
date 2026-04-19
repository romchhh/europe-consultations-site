import type { Locale } from "../i18n";

export type ServiceMessages = {
  title: string;
  subtitle: string;
  description: string;
};

export type FaqMessages = {
  question: string;
  answer: string | string[];
};

export type ContactServiceOption = {
  value: string;
  label: string;
};

export type Messages = {
  meta: {
    title: string;
    titleTemplate: string;
    description: string;
    keywords: string[];
    author: string;
    ogTitle: string;
    ogDescription: string;
    ogSiteName: string;
    ogImageAlt: string;
    twitterTitle: string;
    twitterDescription: string;
  };
  brand: {
    shortName: string;
    tagline: string;
    legalNote1: string;
    legalNote2: string;
  };
  nav: {
    home: string;
    services: string;
    about: string;
    faqs: string;
    contact: string;
    cta: string;
    menuOpen: string;
    menuClose: string;
    language: string;
  };
  langSwitcher: Record<Locale, string>;
  hero: {
    imageAlt: string;
    title: string;
    line1: string;
    line2: string;
    body: string;
    bookCta: string;
    prevSlide: string;
    nextSlide: string;
  };
  about: {
    sectionLabel: string;
    title: string;
    topicsHeading: string;
    topics: string[];
    principles: string[];
    imageAlt: string;
    ctaText: string;
    payButton: string;
    contactButton: string;
    telegramMore: string;
  };
  faqs: {
    title: string;
    items: FaqMessages[];
  };
  services: {
    sectionTitle: string;
    items: ServiceMessages[];
  };
  contact: {
    title: string;
    subtitle: string;
    payButton: string;
    telegramButton: string;
    privacyError: string;
    tgSuccess: string;
    tgFallback: string;
    emailSuccess: string;
    emailError: string;
    serviceOptions: ContactServiceOption[];
    labels: {
      fullName: string;
      phone: string;
      email: string;
      topic: string;
      comment: string;
      preferredContact: string;
    };
    placeholders: {
      fullName: string;
      phone: string;
      email: string;
      comment: string;
    };
    contactMethods: Record<string, string>;
    submit: string;
    submitting: string;
    privacyCheckbox: string;
    formHeader: string;
  };
  footer: {
    tagline: string;
    socialTitle: string;
    socialText: string;
    paymentTitle: string;
    payLink: string;
    payNote: string;
    telegramMore: string;
    telegramSubscriptionNote: string;
    copyright: string;
  };
};
