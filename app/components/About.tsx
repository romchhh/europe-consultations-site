import Image from 'next/image';
import Link from 'next/link';
import { siteLinks } from '../data/site';

const ABOUT_IMG =
  'https://i.pinimg.com/736x/31/8a/17/318a17f320930b09806fb28be2ca4587.jpg';

const consultationTopics = [
  'Получение гражданства',
  'Легального трудоустройства в Европе',
  'ВНЖ, разрешений на работу, PESEL, номеров, регистраций',
  'Смены статуса пребывания',
  'Рисков, сроков и вариантов действий',
];

export default function About() {
  return (
    <section id="about" className="relative pt-120 pb-24 md:py-24 bg-[#F5F5F0] z-10 md:z-auto">
      <div className="max-w-[1400px] mx-auto px-0 md:px-8">
        <div className="relative flex flex-col lg:items-start lg:min-h-[800px]">
          <div className="relative z-20 w-full lg:w-[55%] lg:pr-8 flex items-center lg:items-start">
            <div className="bg-[#FAF5F1] rounded-none md:rounded-3xl p-8 md:p-12 shadow-2xl w-full">
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-[#222221] leading-tight mb-3 text-left" style={{ fontFamily: 'Corbel, sans-serif' }}>
                  Консультации по трудоустройству и легализации в Европе
                </h2>
              </div>

              <div className="space-y-5 mb-8 text-[#222221] max-w-[640px]">
                <p className="text-lg font-medium leading-relaxed text-justify md:text-left" style={{ fontFamily: 'Corbel, sans-serif' }}>
                  Наша работа — <span className="font-bold">информационно-консультационная поддержка</span> по вопросам легального трудоустройства и пребывания в странах Европы.
                </p>
                <p className="text-lg font-medium leading-relaxed text-justify md:text-left" style={{ fontFamily: 'Corbel, sans-serif' }}>
                  Объясняем реальные возможности, документы и шаги — <span className="font-bold">без иллюзий и лишних затрат</span>. Поясняем возможные варианты, требования и риски в рамках консультации.
                </p>

                <div className="bg-white/80 rounded-xl p-4 md:p-5 mt-6">
                  <p className="text-base md:text-lg font-bold text-[#222221] mb-3" style={{ fontFamily: 'Corbel, sans-serif' }}>
                    Консультируем по вопросам:
                  </p>
                  <ul className="space-y-2 text-[#222221] text-sm md:text-base font-medium list-none" style={{ fontFamily: 'Corbel, sans-serif' }}>
                    {consultationTopics.map((line) => (
                      <li key={line} className="flex gap-2">
                        <span className="text-[#F9DC0A] font-bold shrink-0">—</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>

          <div className="relative mt-6 w-full lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[65%]">
            <div className="relative h-[380px] md:h-[460px] lg:h-full lg:min-h-[800px] rounded-3xl overflow-hidden bg-[#F5F5F0]">
              <Image
                src={ABOUT_IMG}
                alt="Европейский город — консультации по легализации"
                fill
                className="object-cover object-center"
                priority
                sizes="(min-width: 1024px) 65vw, 100vw"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-10 max-w-4xl mx-auto p-2 md:p-3 text-center">
          <p className="text-xl md:text-2xl font-bold text-[#222221] mb-5 md:mb-6" style={{ fontFamily: 'Corbel, sans-serif' }}>
            Наши принципы
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-[#222221] text-base md:text-xl font-bold" style={{ fontFamily: 'Corbel, sans-serif' }}>
            <span className="flex items-center gap-2">
              <span className="text-[#F9DC0A] text-xl md:text-2xl">✓</span>
              <span>Законность</span>
            </span>
            <span className="text-[#6F6F6E] hidden md:inline text-lg">|</span>
            <span className="flex items-center gap-2">
              <span className="text-[#F9DC0A] text-xl md:text-2xl">✓</span>
              <span>Ясность</span>
            </span>
            <span className="text-[#6F6F6E] hidden md:inline text-lg">|</span>
            <span className="flex items-center gap-2">
              <span className="text-[#F9DC0A] text-xl md:text-2xl">✓</span>
              <span>Честность</span>
            </span>
          </div>
        </div>

        <div className="mt-6 md:mt-8 max-w-4xl mx-auto bg-[#FAF5F1] rounded-2xl p-6 md:p-8 shadow-lg border border-white/70 text-center">
          <p className="text-lg md:text-xl font-semibold text-[#222221]" style={{ fontFamily: 'Corbel, sans-serif' }}>
            👉 Консультация — онлайн или лично.
          </p>

          <div className="flex flex-col sm:flex-row justify-center flex-wrap gap-3 md:gap-4 pt-4">
            <a
              href={siteLinks.payment}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center bg-[#222221] hover:bg-[#6F6F6E] text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-lg text-center"
              style={{ fontFamily: 'Corbel, sans-serif' }}
            >
              Оплатить консультацию (PayU, Stripe, СБП и др.)
            </a>
            <Link
              href="#contact"
              className="inline-flex justify-center items-center border-2 border-[#222221] text-[#222221] hover:bg-[#222221] hover:text-white font-semibold px-6 py-3 rounded-lg transition-all text-center"
              style={{ fontFamily: 'Corbel, sans-serif' }}
            >
              Связаться с нами
            </Link>
          </div>

          <p className="text-sm text-[#6F6F6E] pt-3" style={{ fontFamily: 'Corbel, sans-serif' }}>
            Оплата подтверждает заказ информационно-консультационной услуги.
          </p>

          <p className="text-base text-[#222221] pt-2" style={{ fontFamily: 'Corbel, sans-serif' }}>
            Больше информации в{' '}
            <a
              href={siteLinks.telegramChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#222221] underline decoration-[#F9DC0A] decoration-2 underline-offset-2 hover:text-[#6F6F6E]"
            >
              Telegram
            </a>
            {' '}(подписка).
          </p>
        </div>
      </div>
    </section>
  );
}
