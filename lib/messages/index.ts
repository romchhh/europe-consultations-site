import type { Locale } from "../i18n";
import { isLocale } from "../i18n";
import type { Messages } from "./types";
import { en } from "./en";
import { ru } from "./ru";
import { uk } from "./uk";

const byLocale: Record<Locale, Messages> = { ru, en, uk };

export function getMessages(locale: string): Messages {
  return isLocale(locale) ? byLocale[locale] : byLocale.ru;
}
