
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenHeart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenHeart }) => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-center px-4">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-[-1]"
        style={{ backgroundImage: `url('https://picsum.photos/id/431/1920/1080?grayscale&blur=2')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-rose-900/40 via-transparent to-rose-100" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block mb-6"
        >
          <Heart size={64} fill="#fb7185" className="text-rose-400 drop-shadow-[0_0_15px_rgba(251,113,133,0.8)]" />
        </motion.div>
        
        <h1 className="font-romantic text-7xl md:text-9xl text-white drop-shadow-lg mb-4">
          Happy Valentine's Day
        </h1>
        
        <p className="text-rose-900 text-lg md:text-2xl font-light tracking-[0.2em] uppercase mb-12 max-w-2xl mx-auto">
          Every moment with you is a beautiful adventure. I love you to the moon and back.
        </p>

        <motion.button
          onClick={onOpenHeart}
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(251,113,133,0.5)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-rose-500 text-white px-10 py-4 rounded-full text-xl font-semibold shadow-xl transition-all flex items-center gap-3 mx-auto group"
        >
          Open My Heart 💌
          <Heart size={20} className="group-hover:fill-white transition-colors" />
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 animate-bounce text-rose-400"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
