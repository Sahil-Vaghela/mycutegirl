
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Sparkles } from 'lucide-react';

const Surprise: React.FC = () => {
  const [showSurprise, setShowSurprise] = useState(false);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; color: string }[]>([]);

  const triggerSurprise = () => {
    setShowSurprise(true);
    // Create random confetti
    const newParticles = Array.from({ length: 50 }).map((_, i) => ({
      id: Date.now() + i,
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + 100,
      color: ['#fb7185', '#f43f5e', '#fff1f2', '#fda4af'][Math.floor(Math.random() * 4)],
    }));
    setParticles(newParticles);

    // Auto close popup after 8 seconds
    setTimeout(() => setShowSurprise(false), 8000);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-romantic text-5xl text-rose-800 mb-12 text-center">One Last Thing...</h2>
      
      <motion.button
        onClick={triggerSurprise}
        whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
        whileTap={{ scale: 0.9 }}
        className="relative p-12 glass rounded-full flex items-center justify-center text-rose-500 shadow-2xl hover:text-rose-600 transition-all group overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-rose-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <Gift size={64} className="z-10" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-full h-full border-2 border-dashed border-rose-300 rounded-full"
          />
        </div>
      </motion.button>
      
      <p className="mt-8 text-rose-500 font-medium animate-pulse">Click for a surprise!</p>

      <AnimatePresence>
        {showSurprise && (
          <>
            {/* Darkened Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-rose-950/40 backdrop-blur-sm z-[150]"
              onClick={() => setShowSurprise(false)}
            />

            {/* Confetti Particles */}
            {particles.map((p) => (
              <motion.div
                key={p.id}
                initial={{ y: window.innerHeight + 100, x: p.x, opacity: 1 }}
                animate={{ 
                  y: -100, 
                  x: p.x + (Math.random() - 0.5) * 200, 
                  rotate: 360 
                }}
                transition={{ duration: Math.random() * 3 + 2, ease: "easeOut" }}
                className="fixed z-[200] pointer-events-none"
                style={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: p.color,
                  borderRadius: Math.random() > 0.5 ? '50%' : '2px',
                }}
              />
            ))}

            {/* Surprise Modal */}
            <motion.div
              initial={{ scale: 0, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0, opacity: 0, y: 100 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg z-[200] text-center"
            >
              <div className="glass p-12 rounded-3xl shadow-[0_0_50px_rgba(251,113,133,0.5)] border-2 border-white/50 relative overflow-hidden">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="mb-8"
                >
                  <Sparkles size={64} className="text-rose-400 mx-auto" />
                </motion.div>
                
                <h3 className="font-romantic text-6xl text-rose-600 mb-6">Will You Be My Valentine?</h3>
                
                <p className="text-rose-900 text-lg font-light leading-relaxed mb-8">
                  I promise to keep choosing you, day after day, year after year. Let's make more magic together.
                </p>

                <div className="flex gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowSurprise(false)}
                    className="bg-rose-500 text-white px-8 py-3 rounded-full font-bold shadow-lg"
                  >
                    YES, FOREVER! ❤️
                  </motion.button>
                </div>

                {/* Animated fireworks inside the box */}
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [0, 1.5], opacity: [0, 1, 0] }}
                      transition={{ delay: i * 0.5, duration: 2, repeat: Infinity }}
                      className="absolute rounded-full border border-rose-300"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: '100px',
                        height: '100px',
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Surprise;
