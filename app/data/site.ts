const DEFAULT_STRIPE_CHECKOUT =
  "https://buy.stripe.com/bJe3cva6Z2vGb0T7jbbfO00";

const DEFAULT_FACEBOOK_GROUP =
  "https://www.facebook.com/groups/3127249920793258?locale=ru_RU";

/** Замініть значення через .env.local (NEXT_PUBLIC_*) або відредагуйте посилання нижче. */
export const siteLinks = {
  /** Stripe Checkout. Перевизначення: NEXT_PUBLIC_PAYMENT_URL у .env.local */
  payment: process.env.NEXT_PUBLIC_PAYMENT_URL ?? DEFAULT_STRIPE_CHECKOUT,
  telegramChannel:
    process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "https://t.me/",
  facebook:
    process.env.NEXT_PUBLIC_FACEBOOK_URL ?? DEFAULT_FACEBOOK_GROUP,
  telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "https://t.me/",
};
