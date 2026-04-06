import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "../../lib/i18n";
import { getMessages } from "../../lib/messages";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

const ogImage =
  "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&h=630&q=80";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams(): { locale: Locale }[] {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const m = getMessages(raw);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: m.meta.title,
      template: m.meta.titleTemplate,
    },
    description: m.meta.description,
    keywords: m.meta.keywords,
    authors: [{ name: m.meta.author }],
    openGraph: {
      type: "website",
      url: `/${raw}`,
      title: m.meta.ogTitle,
      description: m.meta.ogDescription,
      siteName: m.meta.ogSiteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: m.meta.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: m.meta.twitterTitle,
      description: m.meta.twitterDescription,
      images: [ogImage],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return children;
}
