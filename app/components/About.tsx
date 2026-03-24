import Image from 'next/image';
import Link from 'next/link';
import { siteLinks } from '../data/site';

const ABOUT_IMG =
  'https://i.pinimg.com/736x/31/8a/17/318a17f320930b09806fb28be2ca4587.jpg';

const consultationTopics = [
  'Получение гражданства',
  'Легального трудоустройства в Европе',
  'ВНЖ, разрешений на работу, номеров, регистраций',
  'Смены статуса пребывания',
  'Рисков, сроков и вариантов действий',
  'Открытие р/с в банках Европы для физических и юридических лиц',
];

const principles = ['Законность', 'Ясность', 'Честность'];

export default function About() {
  return (
    <section
      id="about"
      className="relative pt-28 pb-24 md:py-32 bg-[#F5F5F0] z-10 md:z-auto"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">

        {/* Hero row */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-28">

          {/* Left: text */}
          <div>
            <p
              className="text-xs font-bold tracking-[0.2em] uppercase text-[#6F6F6E] mb-5"
              style={{ fontFamily: 'Corbel, sans-serif' }}
            >
              О нас
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#222221] leading-[1.15] mb-8"
              style={{ fontFamily: 'Corbel, sans-serif' }}
            >
              Консультации по трудоустройству и легализации в Европе
            </h2>

            {/* Topics */}
            <div className="mt-2 md:mt-0" style={{ fontFamily: 'Corbel, sans-serif' }}>
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#6F6F6E] mb-4">
                Консультируем по вопросам
              </p>
              <ul className="space-y-3">
                {consultationTopics.map((topic) => (
                  <li key={topic} className="flex items-start gap-3">
                    <span
                      className="mt-[6px] w-[6px] h-[6px] rounded-full bg-[#F9DC0A] shrink-0"
                    />
                    <span className="text-[#222221] text-base font-medium">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative h-[420px] md:h-[560px] rounded-2xl overflow-hidden">
            <Image
              src={ABOUT_IMG}
              alt="Европейский город — консультации по легализации"
              fill
              className="object-cover object-center"
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            {/* subtle overlay */}
            <div className="absolute inset-0 bg-[#222221]/10" />
          </div>
        </div>

        {/* Principles */}
        <div
          className="flex flex-col md:flex-row justify-center items-center gap-0 border-t border-b border-[#D8D8D2] py-8 mb-16"
          style={{ fontFamily: 'Corbel, sans-serif' }}
        >
          {principles.map((p, i) => (
            <div key={p} className="flex items-center">
              <span className="flex items-center gap-2 px-8 md:px-12 py-2 text-base md:text-lg font-bold text-[#222221] tracking-wide">
                <span className="text-[#F9DC0A]">✓</span>
                {p}
              </span>
              {i < principles.length - 1 && (
                <span className="hidden md:block w-px h-5 bg-[#D8D8D2]" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="max-w-2xl mx-auto text-center"
          style={{ fontFamily: 'Corbel, sans-serif' }}
        >
          <p className="text-base md:text-lg text-[#444443] mb-7">
            Консультация — онлайн или лично. Оплата подтверждает заказ информационно-консультационной услуги.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-6">
            <a
              href={siteLinks.payment}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center bg-[#222221] hover:bg-[#3a3a39] text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-sm md:text-base"
            >
              Оплатить консультацию
            </a>
            <Link
              href="#contact"
              className="inline-flex justify-center items-center border border-[#222221] text-[#222221] hover:bg-[#222221] hover:text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-sm md:text-base"
            >
              Связаться с нами
            </Link>
          </div>

          <p className="text-sm text-[#6F6F6E]">
            Больше информации в{' '}
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