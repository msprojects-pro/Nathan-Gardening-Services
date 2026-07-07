import { motion } from 'motion/react';
import { Phone, MessageSquare } from 'lucide-react';

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 md:hidden flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/447957383264"
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors focus:outline-none focus:ring-4 focus:ring-green-300"
        aria-label="Contact on WhatsApp"
        id="floating-whatsapp-btn"
      >
        <MessageSquare className="w-7 h-7 fill-white text-green-500" />
      </motion.a>

      {/* Phone Button */}
      <motion.a
        href="tel:+447957383264"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', delay: 0.7 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-700 transition-colors focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Call Nathan"
        id="floating-phone-btn"
      >
        <Phone className="w-6 h-6 fill-white text-emerald-600" />
      </motion.a>
    </div>
  );
}
