import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const images = [
  {
    src: 'https://images.pexels.com/photos/3807285/pexels-photo-3807285.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Engine diagnostics bay',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/4148486/pexels-photo-4148486.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Brake service in progress',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/4210763/pexels-photo-4210763.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Car on hydraulic lift',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/4210886/pexels-photo-4210886.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Paint booth work',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/6264066/pexels-photo-6264066.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'AC system service',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/4210686/pexels-photo-4210686.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Workshop interior',
    span: 'md:col-span-2',
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding relative">
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
            Workshop
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gradient">
            Inside Our Workshop
          </h2>
          <p className="mt-4 text-brand-gray max-w-xl mx-auto text-base sm:text-lg">
            A glimpse into our state-of-the-art facility where precision meets passion.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative group cursor-pointer overflow-hidden rounded-xl ${img.span}`}
              onClick={() => setSelected(i)}
            >
              <div className="aspect-[4/3]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                <span className="text-white text-sm font-medium">{img.alt}</span>
                <ZoomIn size={18} className="text-white/70" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-brand-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={images[selected].src.replace('w=400', 'w=1200').replace('w=600', 'w=1200')}
            alt={images[selected].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
}
