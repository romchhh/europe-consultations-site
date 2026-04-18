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
                aria-label="Facebook"
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
                href={siteLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={socialLinkClass}
                aria-label="WhatsApp"
              >
                <svg
                  className="h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
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
              <a
                href={siteLinks.viber}
                target="_blank"
                rel="noopener noreferrer"
                className={socialLinkClass}
                aria-label="Viber"
              >
                <svg
                  className="h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path d="M12.02 0C5.48 0 .16 5.32.16 11.86c0 2.1.55 4.14 1.59 5.95L0 24l6.3-1.65a11.86 11.86 0 005.69 1.45h.01c6.55 0 11.88-5.32 11.88-11.86C23.88 5.32 18.56 0 12.02 0Z" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.89 14.34c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.41.25-.69.25-1.29.18-1.41-.07-.12-.25-.2-.52-.35Z"
                  />
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
