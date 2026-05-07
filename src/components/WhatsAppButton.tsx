import { motion } from 'framer-motion';
import { MessageCircle, Facebook } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Facebook */}
      <motion.a
        href="https://www.facebook.com/Quickfixmotors5"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Facebook page"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2.1, type: 'spring', stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-[#1877F2] flex items-center justify-center shadow-[0_4px_20px_rgba(24,119,242,0.4)] hover:shadow-[0_4px_30px_rgba(24,119,242,0.6)] transition-shadow duration-300"
      >
        <Facebook size={26} className="text-white" fill="white" />
      </motion.a>

      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/923335150401?text=Hello%2C%20I%20want%20car%20repair%20service."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)] transition-shadow duration-300 relative"
      >
        <MessageCircle size={26} className="text-white" fill="white" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </motion.a>
    </div>
  );
}
