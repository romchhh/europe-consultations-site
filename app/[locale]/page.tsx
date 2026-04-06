import { notFound } from "next/navigation";
import { isLocale, type Locale } from "../../lib/i18n";
import { buildServices } from "../../lib/localized-services";
import { getMessages } from "../../lib/messages";
import HomePage from "./HomePage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function LocalizedHome({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const locale = raw as Locale;
  const messages = getMessages(locale);
  const services = buildServices(messages);

  return (
    <HomePage locale={locale} messages={messages} services={services} />
  );
}
