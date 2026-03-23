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
        <div className="text-center mb-16 px-8 md:px-0">
          <h2 className="text-5xl md:text-6xl font-bold text-[#222221] leading-tight mb-4" style={{ fontFamily: 'Corbel, sans-serif' }}>
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
                  className="w-full flex items-center justify-between py-6 text-left hover:bg-[#F6F6F6]/50 transition-colors rounded-lg px-2 -mx-2"
                >
                  <span className="text-[#222221] font-bold text-lg pr-4 flex-1 leading-snug" style={{ fontFamily: 'Corbel, sans-serif' }}>
                    {item.question}
                  </span>
                  <span className={`text-[#6F6F6E] text-base flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-[480px] pb-5' : 'max-h-0'
                  }`}
                >
                  <div className="px-2 text-[#222221] text-base font-medium leading-relaxed text-justify md:text-left" style={{ fontFamily: 'Corbel, sans-serif' }}>
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
