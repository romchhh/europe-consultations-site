import Link from "next/link";
import { siteLinks } from "../data/site";
import type { Messages } from "../../lib/messages/types";

const socialLinkClass =
  "text-[#C9BD88] hover:text-[#F9DC0A] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F9DC0A]/70 rounded-sm";

type Props = {
  messages: Messages;
};

export default function Footer({ messages }: Props) {
  const { brand, footer } = messages;

  return (
    <footer className="bg-[#222221] rounded-b-[2rem] text-white">
      <div className="max-w-[1400px] mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="#home" className="inline-block mb-4">
              <span
                className="text-2xl md:text-3xl font-bold text-white tracking-tight block"

              >
                {brand.shortName}
              </span>
              <span
                className="text-sm text-[#6F6F6E] mt-1 block"

              >
                {footer.tagline}
              </span>
            </Link>
          </div>

          <div>
            <p
              className="text-xs uppercase tracking-wider mb-4 text-[#6F6F6E] font-bold"

            >
              {footer.socialTitle}
            </p>
            <p
              className="text-sm text-white/90 leading-relaxed mb-6"

            >
              {footer.socialText}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-6 sm:gap-7">
              <a
                href={siteLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={socialLinkClass}
                aria-label="Facebook — група"
              >
                <svg
                  className="h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={siteLinks.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className={socialLinkClass}
                aria-label="Telegram"
              >
                <svg
                  className="h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p
              className="text-xs uppercase tracking-wider mb-4 text-[#6F6F6E] font-bold"

            >
              {footer.paymentTitle}
            </p>
            <a
              href={siteLinks.payment}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-semibold text-[#F9DC0A] hover:text-white transition-colors mb-4"

            >
              {footer.payLink}
            </a>
            <p
              className="text-xs text-white/70 leading-relaxed"

            >
              {footer.payNote}
            </p>
            <div className="w-full h-px bg-[#6F6F6E]/50 my-4" />
            <p
              className="text-sm text-white/90"

            >
              {footer.telegramMore}{" "}
              <a
                href={siteLinks.telegramChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F9DC0A] hover:underline"
              >
                Telegram
              </a>{" "}
              {footer.telegramSubscriptionNote}
            </p>
          </div>
        </div>

        <div className="border-t border-[#6F6F6E]/50 pt-8 space-y-4">
          <p
            className="text-[11px] md:text-xs text-[#9a9a95] leading-relaxed max-w-4xl mx-auto text-center"

          >
            *{brand.legalNote1}
          </p>
          <p
            className="text-[11px] md:text-xs text-[#9a9a95] leading-relaxed max-w-4xl mx-auto text-center"

          >
            **{brand.legalNote2}
          </p>
          <p
            className="text-xs text-[#6F6F6E] text-center"

          >
            © {new Date().getFullYear()} {brand.shortName}. {footer.copyright}{" "}
            <Link
              href="https://new.telebots.site/en"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#F9DC0A] transition-colors text-white/80"
            >
              TeleBots
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
