import { motion } from 'framer-motion';
import { ChevronDown, Phone, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-brand-black" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 20% 50%, rgba(227,25,55,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(227,25,55,0.08) 0%, transparent 50%)',
        }}
      />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Diagonal accent line */}
      <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden">
        <div className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-transparent via-brand-red/20 to-transparent" />
        <div className="absolute top-0 right-[40%] w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
          <span className="text-sm font-medium text-brand-gray">Islamabad's Trusted Auto Workshop</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.05] mb-6"
        >
          <span className="text-gradient">Reliable Auto Repairs</span>
          <br />
          <span className="text-brand-red">in Islamabad.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-brand-gray max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Precision diagnostics, expert repairs, and premium service for every make and model. Your car deserves the best.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#services"
            className="group px-8 py-4 bg-brand-red hover:bg-brand-red-dark text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(227,25,55,0.4)] flex items-center gap-2"
          >
            Explore Services
            <ChevronDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="tel:+923335150401"
            className="px-8 py-4 glass-strong hover:bg-white/10 text-white font-semibold rounded-xl transition-all duration-300 flex items-center gap-2"
          >
            <Phone size={18} className="text-brand-red" />
            +92 333 5150401
          </a>
        </motion.div>

        {/* Location tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 flex items-center justify-center gap-2 text-brand-gray/60 text-sm"
        >
          <MapPin size={14} />
          <span>Jinnah Garden, Islamabad</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-brand-red" />
        </motion.div>
      </motion.div>
    </section>
  );
}
