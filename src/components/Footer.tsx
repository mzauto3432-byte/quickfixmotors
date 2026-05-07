import { motion } from 'framer-motion';
import { Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'Engine Diagnostics',
  'Suspension Work',
  'Electrical Repairs',
  'Denting & Painting',
  'Brake Service',
  'Oil Change',
  'AC Repair',
];

const socialLinks = [
  { icon: <Facebook size={18} />, href: '#', label: 'Facebook' },
  { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
  { icon: <Youtube size={18} />, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-brand-red flex items-center justify-center">
                <span className="text-white font-black text-sm">QF</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg">Quick Fix</span>
                <span className="text-brand-red font-bold text-lg ml-1">Motors</span>
              </div>
            </a>
            <p className="text-brand-gray text-sm leading-relaxed mb-5 max-w-xs">
              Islamabad's trusted auto workshop delivering precision repairs and premium service since 2016.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.06] flex items-center justify-center text-brand-gray hover:text-brand-red hover:border-brand-red/30 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-brand-gray text-sm hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-brand-gray text-sm hover:text-white transition-colors duration-300"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+923335150401"
                className="flex items-center gap-2.5 text-brand-gray text-sm hover:text-white transition-colors"
              >
                <Phone size={14} className="text-brand-red shrink-0" />
                +92 333 5150401
              </a>
              <div className="flex items-start gap-2.5 text-brand-gray text-sm">
                <MapPin size={14} className="text-brand-red shrink-0 mt-0.5" />
                <span>Shop No 1 Madni Plaza, near Noor e Mustafa Masjid, Block A, Jinnah Garden, Islamabad</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-gray text-xs">
            &copy; {new Date().getFullYear()} Quick Fix Motors. All rights reserved.
          </p>
          <motion.a
            href="#home"
            whileHover={{ y: -2 }}
            className="text-brand-gray text-xs hover:text-brand-red transition-colors"
          >
            Back to top &uarr;
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
