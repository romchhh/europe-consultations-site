'use client';

import Link from "next/link";
import { useState } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import FAQs from "./components/FAQs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { siteBrand } from "./data/site";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-white border border-[#E0E0D8] rounded-[2rem] fixed top-6 md:top-4 left-1/2 transform -translate-x-1/2 z-50 shadow-lg w-[94%] md:w-[80%]">
        <div className="px-4 md:px-6 py-4 md:py-6 flex items-center justify-between relative">
          <Link href="#home" className="flex flex-col shrink-0 min-w-0 pr-2" onClick={closeMenu}>
            <span className="text-base sm:text-xl md:text-2xl font-bold text-[#222221] leading-tight break-words max-w-[220px] sm:max-w-none" style={{ fontFamily: 'Corbel, sans-serif' }}>
              {siteBrand.shortName}
            </span>
            <span className="text-[10px] sm:text-xs text-[#222221]/80 hidden sm:block" style={{ fontFamily: 'Corbel, sans-serif' }}>
              Европа · консультации
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <Link href="#home" className="text-[#222221] hover:text-[#6F6F6E] font-bold transition-colors" style={{ fontFamily: 'Corbel, sans-serif' }}>
              Главная
            </Link>
            <Link href="#services" className="text-[#222221] hover:text-[#6F6F6E] font-bold transition-colors" style={{ fontFamily: 'Corbel, sans-serif' }}>
              Направления
            </Link>
            <Link href="#about" className="text-[#222221] hover:text-[#6F6F6E] font-bold transition-colors" style={{ fontFamily: 'Corbel, sans-serif' }}>
              О нас
            </Link>
            <Link href="#faqs" className="text-[#222221] hover:text-[#6F6F6E] font-bold transition-colors" style={{ fontFamily: 'Corbel, sans-serif' }}>
              Вопросы
            </Link>
            <Link href="#contact" className="text-[#222221] hover:text-[#6F6F6E] font-bold transition-colors" style={{ fontFamily: 'Corbel, sans-serif' }}>
              Контакты
            </Link>
          </nav>

          <Link
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              closeMenu();
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="hidden md:inline-block bg-[#222221] hover:bg-[#6F6F6E] text-white font-semibold px-6 py-2.5 rounded-lg transition-all shadow-lg hover:shadow-xl"
            style={{ fontFamily: 'Corbel, sans-serif' }}
          >
            Связаться
          </Link>

          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 p-2 z-[60] relative"
            aria-label="Меню"
            type="button"
          >
            <span className={`w-6 h-0.5 bg-[#222221] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-[#222221] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-[#222221] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
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
              <div className="flex justify-end p-6">
                <button
                  onClick={closeMenu}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#F6F6F6] transition-colors"
                  aria-label="Закрыть меню"
                  type="button"
                >
                  <span className="text-3xl text-[#222221]">×</span>
                </button>
              </div>

              <nav className="flex flex-col flex-1 justify-center px-8 pb-20">
                <Link
                  href="#home"
                  className="text-[#222221] hover:text-[#6F6F6E] font-bold py-4 text-2xl transition-colors border-b border-[#E0E0D8]"
                  style={{ fontFamily: 'Corbel, sans-serif' }}
                  onClick={closeMenu}
                >
                  Главная
                </Link>
                <Link
                  href="#services"
                  className="text-[#222221] hover:text-[#6F6F6E] font-bold py-4 text-2xl transition-colors border-b border-[#E0E0D8]"
                  style={{ fontFamily: 'Corbel, sans-serif' }}
                  onClick={closeMenu}
                >
                  Направления
                </Link>
                <Link
                  href="#about"
                  className="text-[#222221] hover:text-[#6F6F6E] font-bold py-4 text-2xl transition-colors border-b border-[#E0E0D8]"
                  style={{ fontFamily: 'Corbel, sans-serif' }}
                  onClick={closeMenu}
                >
                  О нас
                </Link>
                <Link
                  href="#faqs"
                  className="text-[#222221] hover:text-[#6F6F6E] font-bold py-4 text-2xl transition-colors border-b border-[#E0E0D8]"
                  style={{ fontFamily: 'Corbel, sans-serif' }}
                  onClick={closeMenu}
                >
                  Вопросы
                </Link>
                <Link
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    closeMenu();
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="text-[#222221] hover:text-[#6F6F6E] font-bold py-4 text-2xl transition-colors border-b border-[#E0E0D8]"
                  style={{ fontFamily: 'Corbel, sans-serif' }}
                >
                  Контакты
                </Link>
                <Link
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    closeMenu();
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="mt-8 bg-[#222221] hover:bg-[#6F6F6E] text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg text-center text-xl"
                  style={{ fontFamily: 'Corbel, sans-serif' }}
                >
                  Связаться
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}

      <Hero />
      <About />
      <FAQs />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
