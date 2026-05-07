import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-brand-black/80 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/50'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-brand-red flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(227,25,55,0.5)] transition-shadow duration-300">
                  <span className="text-white font-black text-sm sm:text-base">QF</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="text-white font-bold text-lg tracking-tight">Quick Fix</span>
                <span className="text-brand-red font-bold text-lg ml-1">Motors</span>
              </div>
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-brand-gray hover:text-white transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-brand-red group-hover:w-4/5 transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+923335150401"
                className="hidden sm:flex items-center gap-2 px-4 py-2.5 bg-brand-red hover:bg-brand-red-dark text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(227,25,55,0.4)]"
              >
                <Phone size={14} />
                <span>Call Now</span>
              </a>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2 text-white hover:text-brand-red transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-brand-black/95 backdrop-blur-2xl" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative flex flex-col items-center justify-center h-full gap-6 px-6"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                  className="text-2xl font-semibold text-white hover:text-brand-red transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="tel:+923335150401"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 flex items-center gap-2 px-8 py-3 bg-brand-red text-white font-semibold rounded-lg"
              >
                <Phone size={18} />
                Call Now
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
