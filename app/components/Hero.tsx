"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import type { Service } from "../data/services";
import { siteLinks } from "../data/site";
import type { Messages } from "../../lib/messages/types";

type Props = {
  hero: Messages["hero"];
  services: Service[];
  /** Текст як у кнопці «Звʼязатися» в хедері — скрол до #contact */
  contactCta: string;
};

function goToContact(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  document
    .getElementById("contact")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero({ hero, services, contactCta }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  const nextService = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setIsAutoPlaying(false);
  };

  const prevService = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + services.length) % services.length,
    );
    setIsAutoPlaying(false);
  };

  const currentService = services[currentIndex];
  const nextServiceData = services[(currentIndex + 1) % services.length];

  return (
    <section id="home" className="relative pt-24 z-0">
      <div className="max-w-[1400px] mx-auto px-0 md:px-8 pt-4 pb-96 md:pb-12">
        <div className="relative bg-white md:rounded-[2.5rem] md:shadow-2xl overflow-hidden">
          <div className="relative min-h-[520px] md:min-h-[800px] md:rounded-[2.5rem]">
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#2f2f2c] via-[#3d3d38] to-[#1a1a18] md:rounded-[2.5rem]"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_20%,rgba(249,220,10,0.08),transparent_55%)] md:rounded-[2.5rem] pointer-events-none"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent md:rounded-[2.5rem] pointer-events-none"
              aria-hidden
            />
          </div>

          <div className="absolute inset-0 flex items-center z-10 md:rounded-[2.5rem]">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-12">
              <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="text-left space-y-5 md:space-y-6 pt-4 md:pt-2">
                  <h1 className="text-left text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.15] tracking-tight">
                    {hero.title}
                  </h1>
                  <p className="text-white text-xl font-normal tracking-wide">
                    {hero.line1}
                  </p>
                  <p className="text-white text-lg font-light">{hero.line2}</p>
                  <p className="text-white/90 text-base max-w-xl leading-relaxed">
                    {hero.body}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={siteLinks.payment}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl bg-[#F9DC0A] px-8 py-3.5 text-base font-semibold text-[#222221] shadow-lg transition-all hover:bg-[#e5ca09] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
                    >
                      {hero.bookCta}
                    </a>
                    <a
                      href="#contact"
                      onClick={goToContact}
                      className="inline-flex items-center justify-center rounded-xl bg-[#222221] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#6F6F6E] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
                    >
                      {contactCta}
                    </a>
                  </div>
                </div>

                <div className="relative flex items-center justify-center md:justify-end">
                  <div className="relative w-full max-w-md">
                    <div className="relative">
                      <Link href="#services" className="block">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl w-[280px] h-[360px] transform -rotate-2 backdrop-blur-sm bg-white/70 transition-all duration-500 z-50 cursor-pointer hover:scale-105">
                          <Image
                            src={currentService.image}
                            alt={currentService.title}
                            fill
                            className="object-cover transition-opacity duration-500"
                            key={currentIndex}
                            sizes="280px"
                          />
                          <div className="absolute inset-0 bg-black/40" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                          <div className="absolute bottom-8 left-6 right-6 text-left">
                            <p className="text-white/80 text-xs mb-2 uppercase tracking-wider">
                              {currentService.subtitle}
                            </p>
                            <h3 className="text-lg md:text-xl font-bold text-white leading-snug break-words md:line-clamp-5">
                              {currentService.title}
                            </h3>
                          </div>
                        </div>
                      </Link>

                      <Link href="#services" className="block">
                        <div className="absolute top-24 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-right-16 rounded-3xl overflow-hidden shadow-2xl w-[260px] h-[340px] md:w-[280px] md:h-[360px] transform rotate-3 backdrop-blur-sm bg-white/70 transition-all duration-500 z-40 cursor-pointer hover:scale-105">
                          <Image
                            src={nextServiceData.image}
                            alt={nextServiceData.title}
                            fill
                            className="object-cover"
                            sizes="280px"
                          />
                          <div className="absolute inset-0 bg-black/40" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                          <div className="absolute bottom-8 left-6 right-6 text-left">
                            <h3 className="text-lg md:text-xl font-bold text-white leading-snug break-words md:line-clamp-5">
                              {nextServiceData.title}
                            </h3>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="relative mt-8 md:mt-0 md:absolute md:-bottom-16 md:left-0 flex flex-col md:flex-row items-center gap-3 z-50">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={prevService}
                          className="w-12 h-12 rounded-full bg-white text-[#222221] flex items-center justify-center transition-all shadow-lg hover:shadow-xl hover:bg-[#F9DC0A] hover:text-[#222221]"
                          aria-label={hero.prevSlide}
                          type="button"
                        >
                          <span className="text-xl">←</span>
                        </button>
                        <button
                          onClick={nextService}
                          className="w-12 h-12 rounded-full bg-white text-[#222221] flex items-center justify-center transition-all shadow-lg hover:shadow-xl hover:bg-[#F9DC0A] hover:text-[#222221]"
                          aria-label={hero.nextSlide}
                          type="button"
                        >
                          <span className="text-xl">→</span>
                        </button>
                      </div>
                      <div className="flex items-center md:ml-3">
                        <span className="text-white text-2xl font-bold">
                          {String(currentIndex + 1).padStart(2, "0")}
                        </span>
                        <span className="text-white/60 text-lg ml-1">
                          / {String(services.length).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
