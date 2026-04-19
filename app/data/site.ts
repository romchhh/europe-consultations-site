const DEFAULT_STRIPE_CHECKOUT =
  "https://buy.stripe.com/bJe3cva6Z2vGb0T7jbbfO00";

/** Замініть значення через .env.local (NEXT_PUBLIC_*) або відредагуйте посилання нижче. */
export const siteLinks = {
  /** PayU, Stripe, СБП тощо. Перевизначення: NEXT_PUBLIC_PAYMENT_URL у .env.local */
  payment: process.env.NEXT_PUBLIC_PAYMENT_URL ?? DEFAULT_STRIPE_CHECKOUT,
  telegramChannel:
    process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "https://t.me/",
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "#",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "#",
  telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "https://t.me/",
  viber: process.env.NEXT_PUBLIC_VIBER_URL ?? "#",
};
