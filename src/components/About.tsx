import { motion } from 'framer-motion';
import { Shield, Award, Clock, Users } from 'lucide-react';

const stats = [
  { icon: <Users size={22} />, value: '5,000+', label: 'Cars Serviced' },
  { icon: <Award size={22} />, value: '8+', label: 'Years Experience' },
  { icon: <Clock size={22} />, value: '24/7', label: 'Emergency Support' },
  { icon: <Shield size={22} />, value: '100%', label: 'Satisfaction Rate' },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
              <img
                src="https://images.pexels.com/photos/4119760/pexels-photo-4119760.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Quick Fix Motors Workshop"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-black/40 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-4 -right-4 sm:bottom-6 sm:right-6 glass-strong rounded-xl p-4 sm:p-5 red-glow"
            >
              <div className="text-brand-red font-black text-2xl sm:text-3xl">8+</div>
              <div className="text-white/70 text-xs sm:text-sm font-medium">Years of Trust</div>
            </motion.div>

            {/* Decorative corner */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-brand-red/30 rounded-tl-xl" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-brand-red text-sm font-semibold tracking-widest uppercase">
              About Us
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gradient leading-tight">
              Islamabad's Most Trusted Workshop
            </h2>
            <p className="mt-6 text-brand-gray text-base sm:text-lg leading-relaxed">
              Quick Fix Motors has been the go-to auto repair destination in Islamabad since 2016. Located in Jinnah Garden, we combine cutting-edge diagnostic technology with old-school craftsmanship to deliver repairs you can trust.
            </p>
            <p className="mt-4 text-brand-gray text-base sm:text-lg leading-relaxed">
              From routine oil changes to complex engine overhauls, our certified technicians treat every vehicle with the care and precision it deserves. We use only genuine parts and stand behind every repair with our satisfaction guarantee.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="text-center p-4 rounded-xl bg-brand-black-card border border-white/[0.06]"
                >
                  <div className="text-brand-red mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-white font-bold text-xl">{stat.value}</div>
                  <div className="text-brand-gray text-xs mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
