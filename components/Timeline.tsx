
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Memory } from '../types';

const MEMORIES: Memory[] = [
  { id: 1, date: "May 14, 2023", title: "The Day We Met", description: "A simple hello that changed everything. Your eyes was the brightest thing in the room." },
  { id: 2, date: "september 5, 2025", title: "First Real Date", description: "2nd floor room No 37 My room our first kiss " },
  { id: 3, date: "Aug 19, 2025", title: "First 'I Love You'", description: "Underneath the stars, with the world hushed, I finally said what my heart already knew." },
  { id: 4, date: "December 25, 2023", title: "Our First Holiday", description: "Wrapped in blanket, No cloths only your hotness touching with my body" },
  { id: 5, date: "Today", title: "Forever To Go", description: "Every day is a new page in our beautiful story. I'm so glad it's you." },
];

const TimelineItem: React.FC<{ memory: Memory; index: number }> = ({ memory, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative mb-24 last:mb-0 flex flex-col md:flex-row items-center justify-center">
      {/* Connector Line for Mobile */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-rose-300 z-0 hidden md:block" />
      
      <div className={`flex w-full items-center justify-center md:justify-between ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-[45%] z-10"
        >
          <div className="glass p-8 rounded-3xl shadow-xl relative group">
            <span className="text-rose-400 font-semibold text-sm tracking-widest block mb-2">{memory.date}</span>
            <h3 className="text-2xl font-bold text-rose-800 mb-4">{memory.title}</h3>
            <p className="text-rose-700 font-light leading-relaxed">{memory.description}</p>
            
            {/* Sparkle effect on hover */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border-2 border-rose-300 scale-105" />
          </div>
        </motion.div>

        {/* Center Heart Icon */}
        <div className="relative z-20 my-8 md:my-0">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center text-white shadow-lg shadow-rose-200"
          >
            <Heart size={20} fill="currentColor" />
          </motion.div>
        </div>

        <div className="hidden md:block md:w-[45%]" />
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-20">
        <h2 className="font-romantic text-5xl md:text-6xl text-rose-800 mb-4">The Story of Us</h2>
        <p className="text-rose-600/80 font-light max-w-lg mx-auto">
          Every milestone, every memory, etched in the rhythm of my heart.
        </p>
      </div>

      <div className="relative">
        {MEMORIES.map((memory, index) => (
          <TimelineItem key={memory.id} memory={memory} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
