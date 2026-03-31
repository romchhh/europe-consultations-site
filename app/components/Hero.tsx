'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { heroServices } from '../data/services';

const HERO_BG =
  "https://i.pinimg.com/1200x/b8/8b/8b/b88b8bcff6dec43c322a348dc32a219d.jpg";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroServices.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextService = () => {
    setCurrentIndex((prev) => (prev + 1) % heroServices.length);
    setIsAutoPlaying(false);
  };

  const prevService = () => {
    setCurrentIndex((prev) => (prev - 1 + heroServices.length) % heroServices.length);
    setIsAutoPlaying(false);
  };

  const currentService = heroServices[currentIndex];
  const nextServiceData = heroServices[(currentIndex + 1) % heroServices.length];

  return (
    <section id="home" className="relative pt-24 z-0">
      <div className="max-w-[1400px] mx-auto px-0 md:px-8 pt-4 pb-96 md:pb-12">
        <div className="relative bg-white md:rounded-[2.5rem] md:shadow-2xl">
          <div className="relative h-[700px] md:h-[800px] z-0 md:rounded-[2.5rem] overflow-hidden">
            <Image
              src={HERO_BG}
              alt="Европа — консультации по легализации и трудоустройству"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/40" />
          </div>

          <div className="absolute inset-0 flex items-center z-10 md:rounded-[2.5rem]">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="text-left space-y-6 pt-[44rem] md:pt-10">
                  <h1 className="text-left text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.15] tracking-tight" style={{ fontFamily: 'Corbel, sans-serif' }}>
                    Консультации по трудоустройству и легализации в Европе
                  </h1>
                  <p className="text-white text-xl font-normal tracking-wide" style={{ fontFamily: 'Corbel, sans-serif' }}>
                    Информационная поддержка
                  </p>
                  <p className="text-white text-lg font-light" style={{ fontFamily: 'Corbel, sans-serif' }}>
                    Законно. По сути.
                  </p>
                  <p className="text-white/90 text-base max-w-xl leading-relaxed" style={{ fontFamily: 'Corbel, sans-serif' }}>
                    Предоставляем индивидуальные консультации по вопросам легального трудоустройства и пребывания в странах Европы. Объясняем реальные возможности, документы и шаги — без иллюзий и лишних затрат.
                  </p>
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
                            <p className="text-white/80 text-xs mb-2 uppercase tracking-wider" style={{ fontFamily: 'Corbel, sans-serif' }}>
                              {currentService.subtitle}
                            </p>
                            <h3 className="text-lg md:text-xl font-bold text-white leading-snug break-words md:line-clamp-5" style={{ fontFamily: 'Corbel, sans-serif' }}>
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
                            <h3 className="text-lg md:text-xl font-bold text-white leading-snug break-words md:line-clamp-5" style={{ fontFamily: 'Corbel, sans-serif' }}>
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
                          aria-label="Предыдущее направление"
                          type="button"
                        >
                          <span className="text-xl">←</span>
                        </button>
                        <button
                          onClick={nextService}
                          className="w-12 h-12 rounded-full bg-white text-[#222221] flex items-center justify-center transition-all shadow-lg hover:shadow-xl hover:bg-[#F9DC0A] hover:text-[#222221]"
                          aria-label="Следующее направление"
                          type="button"
                        >
                          <span className="text-xl">→</span>
                        </button>
                      </div>
                      <div className="flex items-center md:ml-3">
                        <span className="text-gray-400 md:text-white text-2xl font-bold" style={{ fontFamily: 'Corbel, sans-serif' }}>
                          {String(currentIndex + 1).padStart(2, '0')}
                        </span>
                        <span className="text-gray-400 md:text-white/60 text-lg ml-1" style={{ fontFamily: 'Corbel, sans-serif' }}>
                          / {String(heroServices.length).padStart(2, '0')}
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
