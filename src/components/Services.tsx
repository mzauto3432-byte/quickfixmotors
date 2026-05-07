import { motion } from 'framer-motion';
import {
  Gauge,
  Car,
  Zap,
  Paintbrush,
  CircleDot,
  Droplets,
  Wind,
} from 'lucide-react';
import { type ReactNode } from 'react';

interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Gauge size={28} />,
    title: 'Engine Diagnostics',
    description: 'Advanced computerized scanning and fault detection to pinpoint issues before they become costly repairs.',
  },
  {
    icon: <Car size={28} />,
    title: 'Suspension Work',
    description: 'Complete suspension overhaul including shocks, struts, springs, and alignment for a smooth, safe ride.',
  },
  {
    icon: <Zap size={28} />,
    title: 'Electrical Repairs',
    description: 'Wiring diagnostics, battery replacement, alternator repair, and full electrical system troubleshooting.',
  },
  {
    icon: <Paintbrush size={28} />,
    title: 'Denting & Painting',
    description: 'Panel beating, dent removal, and factory-quality paint matching with a dust-free booth finish.',
  },
  {
    icon: <CircleDot size={28} />,
    title: 'Brake Service',
    description: 'Pad and rotor replacement, brake fluid flush, and complete brake system inspection and repair.',
  },
  {
    icon: <Droplets size={28} />,
    title: 'Oil Change',
    description: 'Premium synthetic and conventional oil changes with filter replacement and multi-point inspection.',
  },
  {
    icon: <Wind size={28} />,
    title: 'AC Repair',
    description: 'AC gas recharge, compressor repair, leak detection, and full climate control system service.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 50% 0%, rgba(227,25,55,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-brand-red text-sm font-semibold tracking-widest uppercase">
            What We Do
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gradient">
            Premium Services
          </h2>
          <p className="mt-4 text-brand-gray max-w-xl mx-auto text-base sm:text-lg">
            Every service is performed with precision tools, genuine parts, and the expertise your vehicle demands.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative p-6 sm:p-7 rounded-2xl bg-brand-black-card border border-white/[0.06] card-hover cursor-default"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-brand-red/[0.04] to-transparent" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red mb-5 group-hover:bg-brand-red/20 group-hover:border-brand-red/30 transition-all duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-brand-red-light transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-brand-gray leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-brand-red/0 via-brand-red/0 to-brand-red/0 group-hover:from-brand-red/40 group-hover:via-brand-red/20 group-hover:to-brand-red/40 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
