/** Замініть значення через .env.local (NEXT_PUBLIC_*) або відредагуйте посилання нижче. */
export const siteLinks = {
  /** Укажите NEXT_PUBLIC_PAYMENT_URL в .env.local (PayU, Stripe, СБП и т.д.) */
  payment: process.env.NEXT_PUBLIC_PAYMENT_URL ?? "#",
  telegramChannel:
    process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "https://t.me/",
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "#",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "#",
  telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "https://t.me/",
  viber: process.env.NEXT_PUBLIC_VIBER_URL ?? "#",
};
