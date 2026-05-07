import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';

const ratingData = {
  rating: 4.8,
  totalReviews: 324,
  distribution: [
    { stars: 5, percent: 78 },
    { stars: 4, percent: 14 },
    { stars: 3, percent: 5 },
    { stars: 2, percent: 2 },
    { stars: 1, percent: 1 },
  ],
};

export default function Reviews() {
  return (
    <section id="reviews" className="section-padding relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 30% 50%, rgba(227,25,55,0.05) 0%, transparent 60%)',
        }}
      />

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
            Google Reviews
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gradient">
            Rated by Islamabad
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Left: Big Rating */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-baseline gap-2">
              <span className="text-6xl sm:text-7xl md:text-8xl font-black text-white">
                {ratingData.rating}
              </span>
              <span className="text-2xl text-brand-gray font-medium">/5</span>
            </div>
            <div className="flex items-center gap-1 mt-3 justify-center lg:justify-start">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className={
                    i < Math.floor(ratingData.rating)
                      ? 'fill-brand-red text-brand-red'
                      : i < ratingData.rating
                      ? 'fill-brand-red/50 text-brand-red'
                      : 'text-brand-gray'
                  }
                />
              ))}
            </div>
            <p className="mt-3 text-brand-gray text-sm">
              Based on {ratingData.totalReviews}+ Google reviews
            </p>
            <a
              href="https://www.google.com/maps/search/Quick+Fix+Motors+Islamabad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 text-sm font-medium text-brand-red border border-brand-red/30 rounded-lg hover:bg-brand-red/10 transition-all duration-300"
            >
              Leave a Review
              <ExternalLink size={14} />
            </a>
          </motion.div>

          {/* Right: Distribution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            {ratingData.distribution.map((item) => (
              <div key={item.stars} className="flex items-center gap-3">
                <div className="flex items-center gap-1 w-12 text-sm text-brand-gray">
                  <span>{item.stars}</span>
                  <Star size={12} className="fill-brand-red text-brand-red" />
                </div>
                <div className="flex-1 h-2.5 rounded-full bg-white/[0.06] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-brand-red to-brand-red-light"
                  />
                </div>
                <span className="w-10 text-right text-sm text-brand-gray">{item.percent}%</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
