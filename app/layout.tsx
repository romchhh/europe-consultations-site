import type { Metadata } from "next";
import { Geist_Mono, Manrope } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { defaultLocale } from "../lib/i18n";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const LOCALE_HEADER = "x-locale";

export const metadata: Metadata = {
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const h = await headers();
  const locale = h.get(LOCALE_HEADER) ?? defaultLocale;

  return (
    <html lang={locale}>
      <body
        className={`${manrope.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
