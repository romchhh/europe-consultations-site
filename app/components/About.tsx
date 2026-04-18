import Image from "next/image";
import Link from "next/link";
import { siteLinks } from "../data/site";
import type { Messages } from "../../lib/messages/types";

const ABOUT_IMG =
  "https://i.pinimg.com/736x/31/8a/17/318a17f320930b09806fb28be2ca4587.jpg";

type Props = {
  about: Messages["about"];
};

export default function About({ about }: Props) {
  return (
    <section
      id="about"
      className="relative mt-96 md:mt-0 pt-28 pb-24 md:py-32 bg-[#F5F5F0] z-10 md:z-auto"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 md:mb-24">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#6F6F6E] mb-5">
              {about.sectionLabel}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#222221] leading-[1.15] mb-8">
              {about.title}
            </h2>

            <div className="mt-2 md:mt-0">
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#6F6F6E] mb-4">
                {about.topicsHeading}
              </p>
              <ul className="space-y-3">
                {about.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-3">
                    <span className="mt-[6px] w-[6px] h-[6px] rounded-full bg-[#F9DC0A] shrink-0" />
                    <span className="text-[#222221] text-base font-medium">
                      {topic}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative h-[420px] md:h-[560px] rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
            <Image
              src={ABOUT_IMG}
              alt={about.imageAlt}
              fill
              className="object-cover object-center"
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-[#222221]/10" />
          </div>
        </div>

        <div className="rounded-2xl border border-[#E0E0D8] bg-white/90 shadow-sm backdrop-blur-sm px-5 py-8 md:px-10 md:py-10 mb-6 md:mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x md:divide-[#E8E8E2]">
            {about.principles.map((p) => (
              <div
                key={p}
                className="flex items-center justify-center gap-2.5 text-center md:px-4"
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9DC0A]/25 text-[#222221] text-sm font-bold"
                  aria-hidden
                >
                  ✓
                </span>
                <span className="text-base md:text-lg font-bold text-[#222221] tracking-wide">
                  {p}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-2xl rounded-3xl border border-[#E0E0D8] bg-white px-6 py-10 shadow-md md:px-12 md:py-12">
          <p className="text-center text-base md:text-lg leading-relaxed text-[#444443] mb-8">
            {about.ctaText}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8">
            <a
              href={siteLinks.payment}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center bg-[#222221] hover:bg-[#3a3a39] text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-sm md:text-base"
            >
              {about.payButton}
            </a>
            <Link
              href="#contact"
              className="inline-flex justify-center items-center border border-[#222221] text-[#222221] hover:bg-[#222221] hover:text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-sm md:text-base"
            >
              {about.contactButton}
            </Link>
          </div>

          <p className="text-center text-sm text-[#6F6F6E] leading-relaxed">
            {about.telegramMore}{" "}
            <a
              href={siteLinks.telegramChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#222221] underline decoration-[#F9DC0A] decoration-2 underline-offset-2 hover:text-[#6F6F6E] transition-colors"
            >
              Telegram
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
