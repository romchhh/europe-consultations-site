'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import { siteLinks } from '../data/site';

const CONTACT_BG =
  'https://i.pinimg.com/736x/b0/0e/32/b00e32836eaa93368c8f01b01cb25717.jpg';

const SERVICE_LABELS: Record<string, string> = {
  citizenship: 'Получение гражданства',
  'employment-eu': 'Легальное трудоустройство в Европе',
  'permits-pesel': 'ВНЖ, разрешения, номера, регистрации',
  'status-change': 'Смена статуса пребывания',
  risks: 'Риски, сроки и варианты действий',
  'europe-bank': 'Открытие р/с в банках Европы для физических и юридических лиц',
  business:
    'Бизнес: открытие предприятий (фирм), налогообложение (в т.ч. минимизация), р/с в банках Европы',
  other: 'Другое',
};

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: 'citizenship',
    preferredContact: 'Телефон',
    taskDescription: '',
  });
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!privacyAgreed) {
      setSubmitStatus({ type: 'error', message: 'Необходимо согласие с условиями обработки данных' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const serviceName = SERVICE_LABELS[formData.service] ?? formData.service;
      const lines = [
        'Заявка с сайта (консультации)',
        `ФИО: ${formData.fullName.trim()}`,
        `Телефон: ${formData.phone.trim()}`,
        formData.email.trim() ? `Email: ${formData.email.trim()}` : '',
        `Тема: ${serviceName}`,
        `Связь: ${formData.preferredContact}`,
        formData.taskDescription.trim() ? `Комментарий:\n${formData.taskDescription.trim()}` : '',
      ].filter(Boolean).join('\n');

      const tgBase = siteLinks.telegram.replace(/\/$/, '');
      const tgReady =
        tgBase.startsWith('https://t.me/') && tgBase.length > 'https://t.me/'.length;

      if (tgReady) {
        window.open(`${tgBase}?text=${encodeURIComponent(lines)}`, '_blank', 'noopener,noreferrer');
        setSubmitStatus({
          type: 'success',
          message:
            'Открыт Telegram с текстом заявки. Если окно не появилось, напишите нам через кнопку выше или оформите консультацию.',
        });
      } else {
        setSubmitStatus({
          type: 'success',
          message:
            'Почта с сайта не используется. Свяжитесь через кнопку «Оплатить консультацию» или Telegram выше.',
        });
      }

      setFormData({
        fullName: '',
        phone: '',
        email: '',
        service: 'citizenship',
        preferredContact: 'Телефон',
        taskDescription: '',
      });
      setPrivacyAgreed(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 scroll-mt-24">
      <div className="max-w-[1400px] mx-auto px-3 md:px-8 pt-4 pb-12">
        <div className="relative bg-white rounded-[2.5rem] shadow-2xl">
          <div className="relative h-[1100px] md:h-[700px] z-0 rounded-[2.5rem] overflow-hidden">
            <Image
              src={CONTACT_BG}
              alt=""
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
          </div>

          <div className="absolute inset-0 flex items-start md:items-center z-10 rounded-[2.5rem]">
            <div className="w-full max-w-[900px] mx-auto px-3 md:px-8 py-6 md:py-12">
              <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-[30px] p-5 md:p-12 shadow-2xl w-full">
                <div className="text-center mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4" style={{ fontFamily: 'Corbel, sans-serif' }}>
                    Связаться с нами
                  </h2>
                  <p className="text-white text-base drop-shadow-md" style={{ fontFamily: 'Corbel, sans-serif' }}>
                    Запрос на информационно-консультационную услугу. Ответим в удобный для вас способ.
                  </p>
                  <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
                    <a
                      href={siteLinks.payment}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex justify-center items-center bg-[#F9DC0A] hover:bg-[#e5ca09] text-[#222221] font-semibold px-6 py-2.5 rounded-lg transition-all text-sm sm:text-base"
                      style={{ fontFamily: 'Corbel, sans-serif' }}
                    >
                      Оплатить консультацию (PayU, Stripe, СБП)
                    </a>
                    <a
                      href={siteLinks.telegramChannel}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex justify-center items-center border border-white/60 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-white/10 text-sm sm:text-base"
                      style={{ fontFamily: 'Corbel, sans-serif' }}
                    >
                      Telegram (подписка)
                    </a>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  {submitStatus.type && (
                    <div className={`p-4 rounded-lg ${
                      submitStatus.type === 'success'
                        ? 'bg-green-500/20 border border-green-500/50 text-green-100'
                        : 'bg-red-500/20 border border-red-500/50 text-red-100'
                    }`}>
                      <p className="text-sm font-medium" style={{ fontFamily: 'Corbel, sans-serif' }}>
                        {submitStatus.message}
                      </p>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-white text-xs font-semibold mb-2 uppercase tracking-wider drop-shadow-md" style={{ fontFamily: 'Corbel, sans-serif' }}>
                        ФИО *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3.5 backdrop-blur-md bg-white/30 border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 text-white placeholder:text-white/70 transition-all"
                        placeholder="Как к вам обращаться"
                        style={{ fontFamily: 'Corbel, sans-serif' }}
                      />
                    </div>
                    <div>
                      <label className="block text-white text-xs font-semibold mb-2 uppercase tracking-wider drop-shadow-md" style={{ fontFamily: 'Corbel, sans-serif' }}>
                        Телефон *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 backdrop-blur-md bg-white/30 border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 text-white placeholder:text-white/70 transition-all"
                        placeholder="Номер для связи"
                        style={{ fontFamily: 'Corbel, sans-serif' }}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-white text-xs font-semibold mb-2 uppercase tracking-wider drop-shadow-md" style={{ fontFamily: 'Corbel, sans-serif' }}>
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 backdrop-blur-md bg-white/30 border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 text-white placeholder:text-white/70 transition-all"
                        placeholder="Если удобно ответить на почту"
                        style={{ fontFamily: 'Corbel, sans-serif' }}
                      />
                    </div>
                    <div>
                      <label className="block text-white text-xs font-semibold mb-2 uppercase tracking-wider drop-shadow-md" style={{ fontFamily: 'Corbel, sans-serif' }}>
                        Тема консультации
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3.5 backdrop-blur-md bg-white/30 border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 text-white transition-all"
                        style={{ fontFamily: 'Corbel, sans-serif' }}
                      >
                        <option value="citizenship" className="text-[#222221]">Получение гражданства</option>
                        <option value="employment-eu" className="text-[#222221]">Легальное трудоустройство в Европе</option>
                        <option value="permits-pesel" className="text-[#222221]">ВНЖ, разрешения, номера, регистрации</option>
                        <option value="status-change" className="text-[#222221]">Смена статуса пребывания</option>
                        <option value="risks" className="text-[#222221]">Риски, сроки и варианты действий</option>
                        <option value="europe-bank" className="text-[#222221]">Открытие р/с в банках Европы</option>
                        <option value="business" className="text-[#222221]">Бизнес</option>
                        <option value="other" className="text-[#222221]">Другое</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-xs font-semibold mb-2 uppercase tracking-wider drop-shadow-md" style={{ fontFamily: 'Corbel, sans-serif' }}>
                      Кратко опишите запрос
                    </label>
                    <textarea
                      value={formData.taskDescription}
                      onChange={(e) => setFormData({ ...formData, taskDescription: e.target.value })}
                      className="w-full px-4 py-3.5 backdrop-blur-md bg-white/30 border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 text-white placeholder:text-white/70 transition-all resize-none"
                      placeholder="Страна, цель, сроки (по желанию)"
                      rows={4}
                      style={{ fontFamily: 'Corbel, sans-serif' }}
                    />
                  </div>

                  <div className="space-y-3 md:space-y-4 pt-4 md:pt-6 border-t border-white/30">
                    <div>
                      <label className="block text-white text-sm font-semibold mb-3 drop-shadow-md" style={{ fontFamily: 'Corbel, sans-serif' }}>
                        Предпочтительный способ связи *
                      </label>
                      <div className="flex flex-wrap gap-6">
                        {['Телефон', 'Email', 'WhatsApp', 'Telegram', 'Viber'].map((method) => (
                          <label
                            key={method}
                            className="flex items-center cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="preferredContact"
                              value={method}
                              checked={formData.preferredContact === method}
                              onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                              className="mr-2 w-4 h-4 text-white focus:ring-white/50 accent-white"
                            />
                            <span className="text-white text-sm drop-shadow-md" style={{ fontFamily: 'Corbel, sans-serif' }}>{method}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4 pt-4 md:pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="backdrop-blur-md bg-white/40 hover:bg-white/50 border border-white/50 text-[#222221] font-semibold px-10 py-3.5 rounded-lg transition-all uppercase tracking-wider order-2 md:order-1 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ fontFamily: 'Corbel, sans-serif' }}
                    >
                      {isSubmitting ? 'Отправка…' : 'Отправить'}
                    </button>
                    <label className="flex items-start cursor-pointer order-1 md:order-2 gap-2">
                      <input
                        type="checkbox"
                        checked={privacyAgreed}
                        onChange={(e) => setPrivacyAgreed(e.target.checked)}
                        className="mt-1 w-4 h-4 text-white focus:ring-white/50 accent-white shrink-0"
                      />
                      <span className="text-white text-sm drop-shadow-md text-left" style={{ fontFamily: 'Corbel, sans-serif' }}>
                        Я согласен(на) на обработку персональных данных в целях ответа на обращение и предоставления консультации, в соответствии с действующим законодательством и GDPR.*
                      </span>
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
