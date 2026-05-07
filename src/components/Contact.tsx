import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

const contactInfo = [
  {
    icon: <MapPin size={20} />,
    label: 'Address',
    value: 'Shop No 1 Madni Plaza, near Noor e Mustafa Masjid, Block A, Jinnah Garden, Islamabad, Pakistan',
    href: 'https://www.google.com/maps/search/Quick+Fix+Motors+Jinnah+Garden+Islamabad',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '+92 333 5150401',
    href: 'tel:+923335150401',
  },
  {
    icon: <Mail size={20} />,
    label: 'Website',
    value: 'quickfixmotors.pk',
    href: 'https://quickfixmotors.pk',
  },
  {
    icon: <Clock size={20} />,
    label: 'Hours',
    value: 'Mon - Sat: 9:00 AM - 8:00 PM',
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 70% 80%, rgba(227,25,55,0.06) 0%, transparent 60%)',
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
            Get in Touch
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gradient">
            Visit Our Workshop
          </h2>
          <p className="mt-4 text-brand-gray max-w-xl mx-auto text-base sm:text-lg">
            Drop by or give us a call. We're always ready to get your car back on the road.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-brand-black-card border border-white/[0.06] hover:border-brand-red/20 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-brand-gray text-xs font-medium uppercase tracking-wider mb-1">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-white text-sm sm:text-base font-medium hover:text-brand-red transition-colors duration-300 inline-flex items-center gap-1.5"
                    >
                      {item.value}
                      {item.href.startsWith('http') && <ExternalLink size={12} className="text-brand-gray" />}
                    </a>
                  ) : (
                    <span className="text-white text-sm sm:text-base font-medium">
                      {item.value}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}

            {/* CTA */}
            <a
              href="tel:+923335150401"
              className="block w-full py-4 bg-brand-red hover:bg-brand-red-dark text-white text-center font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(227,25,55,0.3)] mt-6"
            >
              Call Now: +92 333 5150401
            </a>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-white/[0.06] h-[400px] lg:h-full min-h-[400px]"
          >
            <iframe
              title="Quick Fix Motors Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.5!2d73.05!3d33.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM5JzAwLjAiTiA3M8KwMDMnMDAuMCJF!5e0!3m2!1sen!2s!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
