import Image from 'next/image';
import { services } from '../data/services';

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-[#F5F5F0] z-30 md:z-auto">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#222221] leading-tight" style={{ fontFamily: 'Corbel, sans-serif' }}>
            Направления консультаций
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const imageOnLeftDesktop = service.imagePosition === 'left';
            const imageOnLeftMobile = index % 2 === 0;
            const imageOrderMobile = imageOnLeftMobile ? 'order-1' : 'order-2';
            const imageOrderDesktop = imageOnLeftDesktop ? 'md:order-1' : 'md:order-2';
            const textOrderMobile = imageOnLeftMobile ? 'order-2' : 'order-1';
            const textOrderDesktop = imageOnLeftDesktop ? 'md:order-2' : 'md:order-1';
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex min-h-[200px]"
              >
                <div className={`relative w-1/2 flex-shrink-0 min-h-[200px] ${imageOrderMobile} ${imageOrderDesktop}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 25vw, 50vw"
                  />
                </div>

                <div className={`w-1/2 flex flex-col justify-center p-4 sm:p-6 bg-[#77736D] ${textOrderMobile} ${textOrderDesktop}`}>
                  {service.Icon && (
                    <div className="text-white mb-3 text-center flex justify-center">
                      <service.Icon className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} />
                    </div>
                  )}

                  <h3 className="text-white text-base sm:text-lg font-bold mb-2 leading-tight text-center" style={{ fontFamily: 'Corbel, sans-serif' }}>
                    {service.title}
                  </h3>

                  <p className="text-white/90 text-xs sm:text-sm font-medium leading-relaxed text-center" style={{ fontFamily: 'Corbel, sans-serif' }}>
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
