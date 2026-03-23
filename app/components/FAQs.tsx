'use client';

import { useState } from 'react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: 'Что именно вы предоставляете — это юридические услуги?',
      answer:
        'Мы оказываем информационно-консультационные услуги: разбираем вашу ситуацию, объясняем типовые требования, документы и возможные шаги. Это не замена официальному миграционному или юридическому представительству в конкретной стране.',
    },
    {
      question: 'Как проходит консультация?',
      answer:
        'Консультация может быть онлайн (звонок или видео) или лично — по предварительной договорённости. Перед встречей полезно кратко описать цель и страну интереса.',
    },
    {
      question: 'Гарантируете ли вы визу, ВНЖ или гражданство?',
      answer:
        'Нет. Решения принимают государственные органы. Мы даём ознакомительную и рекомендательную информацию, чтобы вы понимали реалистичные варианты, риски и сроки — без иллюзий.',
    },
    {
      question: 'Как оплатить консультацию?',
      answer:
        'Оплата возможна через PayU, Stripe, СБП или другие способы — по ссылке «Оплатить консультацию». Оплата подтверждает заказ информационно-консультационной услуги.',
    },
    {
      question: 'Где узнать больше новостей и материалов?',
      answer:
        'Дополнительные материалы и актуальная информация публикуются в нашем Telegram-канале (подписка). Ссылки на соцсети — внизу страницы.',
    },
    {
      question: 'Работаете ли вы только с одной страной ЕС?',
      answer:
        'Фокус — легальное трудоустройство и пребывание в странах Европы в целом; конкретные нюансы зависят от выбранной страны и вашего кейса — это уточняется на консультации.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="relative py-24 bg-gradient-to-br from-white via-[#F6F6F6] to-white">
      <div className="max-w-[1200px] mx-auto px-0 md:px-8">
        <div className="text-center mb-12 md:mb-16 px-8 md:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#222221] leading-tight mb-4" style={{ fontFamily: 'Corbel, sans-serif' }}>
            Вопросы и ответы
          </h2>
        </div>

        <div className="bg-white rounded-none md:rounded-3xl p-8 md:p-12 shadow-xl border border-[#6F6F6E]/10">
          <div className="space-y-0">
            {faqItems.map((item, index) => (
              <div
                key={item.question}
                className={`border-b border-[#E0E0D8] last:border-b-0 ${index === 0 ? 'pt-0' : 'pt-0'}`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center gap-4 py-5 md:py-6 text-left hover:bg-[#F6F6F6]/50 transition-colors rounded-xl px-2 -mx-2 group"
                  aria-expanded={openIndex === index}
                >
                  <span
                    className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ease-out ${
                      openIndex === index
                        ? 'border-[#F9DC0A] bg-[#F9DC0A]/20 shadow-[0_0_0_1px_rgba(249,220,10,0.35)]'
                        : 'border-[#222221]/15 bg-white group-hover:border-[#222221]/30 group-hover:bg-[#F6F6F6]'
                    }`}
                    aria-hidden
                  >
                    <span className="absolute h-0.5 w-4 rounded-full bg-[#222221]" />
                    <span
                      className={`absolute h-0.5 w-4 rounded-full bg-[#222221] transition-all duration-300 ease-out rotate-90 ${
                        openIndex === index ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                      }`}
                    />
                  </span>
                  <span className="text-[#222221] font-bold text-base md:text-lg flex-1 leading-snug min-w-0" style={{ fontFamily: 'Corbel, sans-serif' }}>
                    {item.question}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-[480px] pb-5' : 'max-h-0'
                  }`}
                >
                  <div className="pl-14 pr-2 pb-1 text-[#222221] text-base font-medium leading-relaxed text-justify md:text-left" style={{ fontFamily: 'Corbel, sans-serif' }}>
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
