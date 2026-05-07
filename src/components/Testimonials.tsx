import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmed Raza',
    role: 'Toyota Corolla Owner',
    text: 'Best workshop in Islamabad, hands down. They diagnosed an issue that two other mechanics couldn\'t find. Fair pricing and honest advice.',
    rating: 5,
  },
  {
    name: 'Fatima Noor',
    role: 'Honda Civic Owner',
    text: 'Got my AC fixed right before summer. Ice cold in 30 minutes and the price was very reasonable. Highly recommend their AC service.',
    rating: 5,
  },
  {
    name: 'Usman Khalid',
    role: 'Suzuki Alto Owner',
    text: 'These guys are the real deal. Complete suspension overhaul and my car drives like new. Professional, clean workshop, and on-time delivery.',
    rating: 5,
  },
  {
    name: 'Ayesha Malik',
    role: 'Daihatsu Mira Owner',
    text: 'I trust Quick Fix Motors with all my car needs. They never upsell unnecessary work and always explain what\'s needed and why.',
    rating: 5,
  },
  {
    name: 'Hassan Ali',
    role: 'BMW 3 Series Owner',
    text: 'Finally found a workshop that can handle European cars properly. Their diagnostic equipment is top-notch and the team really knows their stuff.',
    rating: 5,
  },
  {
    name: 'Sana Tariq',
    role: 'Hyundai Tucson Owner',
    text: 'Excellent denting and paint work. You literally cannot tell where the damage was. The paint matching is perfect. Very satisfied!',
    rating: 4,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

export default function Testimonials() {
  return (
    <section className="section-padding relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-red text-sm font-semibold tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gradient">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              className="group relative p-6 sm:p-7 rounded-2xl bg-brand-black-card border border-white/[0.06] card-hover"
            >
              <Quote
                size={32}
                className="absolute top-5 right-5 text-brand-red/10 group-hover:text-brand-red/20 transition-colors duration-300"
              />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < t.rating
                        ? 'fill-brand-red text-brand-red'
                        : 'text-brand-gray/30'
                    }
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-brand-gray text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-red/15 border border-brand-red/20 flex items-center justify-center text-brand-red font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-brand-gray text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
