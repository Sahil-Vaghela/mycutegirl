
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Send } from 'lucide-react';

const LoveLetter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const letterText = `My Dearest,

Words often fail me when I try to describe how much you mean to me. From the way your eyes light up when you laugh to the quiet strength you show every day, you are my constant inspiration.

This Valentine's Day, I want you to know that you are my home. No matter where we are, as long as I'm with you, I am exactly where I need to be.

Thank you for being you. Thank you for loving me.

Forever Yours,
Me ❤️`;

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-romantic text-5xl text-rose-800 mb-12 text-center">A Secret Letter</h2>
      
      <div className="relative perspective-1000 w-full max-w-lg aspect-[4/3]">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="envelope"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0, y: -50 }}
              onClick={() => setIsOpen(true)}
              className="w-full h-full bg-rose-200 rounded-lg shadow-2xl cursor-pointer relative overflow-hidden group border-4 border-rose-300"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-rose-100/50 absolute top-0" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 60%)' }} />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Heart size={48} fill="#f43f5e" className="text-rose-500 drop-shadow-md" />
                </motion.div>
                <p className="absolute bottom-10 font-romantic text-2xl text-rose-800">Click to Open</p>
              </div>
              <div className="absolute top-0 right-0 p-4">
                <div className="w-12 h-16 bg-white/40 border border-white/60 rounded flex items-center justify-center opacity-60">
                   <Heart size={20} className="text-rose-400" />
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="w-full min-h-[500px] bg-white p-8 md:p-12 shadow-2xl rounded-sm border-t-8 border-rose-500 relative"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-rose-300 hover:text-rose-500 transition-colors"
              >
                Close Letter
              </button>
              
              <div className="prose prose-rose max-w-none">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  className="font-romantic text-4xl text-rose-700 mb-6"
                >
                  My Dearest Love,
                </motion.div>
                
                <motion.p
                  className="text-rose-900 leading-relaxed font-light text-lg whitespace-pre-wrap"
                >
                  {letterText.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.03 + 0.5 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 10 }}
                className="mt-12 flex justify-center"
              >
                <Heart size={40} fill="#f43f5e" className="text-rose-600" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LoveLetter;
