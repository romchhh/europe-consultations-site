import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Консультации по трудоустройству и легализации в Европе — информационная поддержка",
    template: "%s | Консультации в Европе",
  },
  description:
    "Индивидуальные информационно-консультационные услуги по легальному трудоустройству и пребыванию в странах Европы. Онлайн или лично.",
  keywords: [
    "консультации Европа",
    "легальное трудоустройство Европа",
    "ВНЖ Европа",
    "PESEL",
    "разрешение на работу",
    "миграционные консультации",
  ],
  authors: [{ name: "Консультации — Европа" }],
  openGraph: {
    type: "website",
    url: "/",
    title:
      "Консультации по трудоустройству и легализации в Европе — информационная поддержка",
    description:
      "Поясняем реальные возможности, документы и шаги — без иллюзий и лишних затрат.",
    siteName: "Консультации в Европе",
    images: [
      {
        url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Европа — информационные консультации по легализации",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Консультации по трудоустройству и легализации в Европе",
    description:
      "Информационная поддержка. Законно. По сути.",
    images: [
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&h=630&q=80",
    ],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
