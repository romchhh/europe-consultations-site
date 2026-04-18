"use client";

import Link from "next/link";
import { useState } from "react";
import type { Service } from "../data/services";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import FAQs from "../components/FAQs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LanguageSwitcher from "../components/LanguageSwitcher";
import type { Locale } from "../../lib/i18n";
import type { Messages } from "../../lib/messages/types";

type Props = {
  locale: Locale;
  messages: Messages;
  services: Service[];
};

export default function HomePage({ locale, messages, services }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const { nav, brand, langSwitcher } = messages;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-white border border-[#E0E0D8] rounded-[2rem] fixed top-6 md:top-4 left-1/2 transform -translate-x-1/2 z-50 shadow-lg w-[94%] md:w-[80%]">
        <div className="px-4 md:px-6 py-4 md:py-6 flex items-center justify-between relative gap-2">
          <Link
            href="#home"
            className="flex flex-col shrink-0 min-w-0 pr-2"
            onClick={closeMenu}
          >
            <span
              className="text-base sm:text-xl md:text-2xl font-bold text-[#222221] leading-tight break-words max-w-[220px] sm:max-w-none"

            >
              {brand.shortName}
            </span>
            <span
              className="text-[10px] sm:text-xs text-[#222221]/80 hidden sm:block"

            >
              {brand.tagline}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8 absolute left-1/2 transform -translate-x-1/2">
            <Link
              href="#home"
              className="text-[#222221] hover:text-[#6F6F6E] font-bold transition-colors"

            >
              {nav.home}
            </Link>
            <Link
              href="#services"
              className="text-[#222221] hover:text-[#6F6F6E] font-bold transition-colors"

            >
              {nav.services}
            </Link>
            <Link
              href="#about"
              className="text-[#222221] hover:text-[#6F6F6E] font-bold transition-colors"

            >
              {nav.about}
            </Link>
            <Link
              href="#faqs"
              className="text-[#222221] hover:text-[#6F6F6E] font-bold transition-colors"

            >
              {nav.faqs}
            </Link>
            <Link
              href="#contact"
              className="text-[#222221] hover:text-[#6F6F6E] font-bold transition-colors"

            >
              {nav.contact}
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3 shrink-0">
            <LanguageSwitcher
              locale={locale}
              langSwitcher={langSwitcher}
              ariaLabel={nav.language}
              menuAlign="end"
            />
            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                closeMenu();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="inline-block bg-[#222221] hover:bg-[#6F6F6E] text-white font-semibold px-6 py-2.5 rounded-lg transition-all shadow-lg hover:shadow-xl"

            >
              {nav.cta}
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 p-2 z-[60] relative"
            aria-label={nav.menuOpen}
            type="button"
          >
            <span
              className={`w-6 h-0.5 bg-[#222221] transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`w-6 h-0.5 bg-[#222221] transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-6 h-0.5 bg-[#222221] transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] transition-opacity duration-300"
            onClick={closeMenu}
            aria-hidden
          />

          <div className="md:hidden fixed inset-0 z-[60] flex items-center justify-center">
            <div className="w-full h-full bg-white flex flex-col">
              <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-2">
                <LanguageSwitcher
                  locale={locale}
                  langSwitcher={langSwitcher}
                  ariaLabel={nav.language}
                  menuAlign="start"
                  onPick={closeMenu}
                  triggerClassName="min-h-11 min-w-11 justify-center sm:min-h-0 sm:min-w-0"
                />
                <button
                  onClick={closeMenu}
                  className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full hover:bg-[#F6F6F6] transition-colors"
                  aria-label={nav.menuClose}
                  type="button"
                >
                  <span className="text-3xl text-[#222221] leading-none">×</span>
                </button>
              </div>

              <nav className="flex flex-col flex-1 justify-center px-8 pb-20 pt-4">
                <Link
                  href="#home"
                  className="text-[#222221] hover:text-[#6F6F6E] font-bold py-4 text-2xl transition-colors border-b border-[#E0E0D8]"

                  onClick={closeMenu}
                >
                  {nav.home}
                </Link>
                <Link
                  href="#services"
                  className="text-[#222221] hover:text-[#6F6F6E] font-bold py-4 text-2xl transition-colors border-b border-[#E0E0D8]"

                  onClick={closeMenu}
                >
                  {nav.services}
                </Link>
                <Link
                  href="#about"
                  className="text-[#222221] hover:text-[#6F6F6E] font-bold py-4 text-2xl transition-colors border-b border-[#E0E0D8]"

                  onClick={closeMenu}
                >
                  {nav.about}
                </Link>
                <Link
                  href="#faqs"
                  className="text-[#222221] hover:text-[#6F6F6E] font-bold py-4 text-2xl transition-colors border-b border-[#E0E0D8]"

                  onClick={closeMenu}
                >
                  {nav.faqs}
                </Link>
                <Link
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    closeMenu();
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="text-[#222221] hover:text-[#6F6F6E] font-bold py-4 text-2xl transition-colors border-b border-[#E0E0D8]"

                >
                  {nav.contact}
                </Link>
                <Link
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    closeMenu();
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="mt-8 bg-[#222221] hover:bg-[#6F6F6E] text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg text-center text-xl"

                >
                  {nav.cta}
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}

      <Hero hero={messages.hero} services={services} />
      <About about={messages.about} />
      <FAQs faqs={messages.faqs} />
      <Services
        sectionTitle={messages.services.sectionTitle}
        services={services}
      />
      <Contact contact={messages.contact} />
      <Footer messages={messages} />
    </div>
  );
}
