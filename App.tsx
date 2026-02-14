
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Music, Pause, Play, ChevronDown } from 'lucide-react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Timeline from './components/Timeline';
import LoveLetter from './components/LoveLetter';
import Surprise from './components/Surprise';
import FloatingHearts from './components/FloatingHearts';

const App: React.FC = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error("Audio playback blocked", e));
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-50 via-pink-100 to-rose-200 overflow-hidden">
      {/* Background Music */}
      <audio 
        ref={audioRef}
        src="https://www.chosic.com/wp-content/uploads/2021/04/Warm-Memories-Emotional-Inspiring-Piano.mp3" 
        loop 
      />
      
      {/* Floating Hearts Animation */}
      <FloatingHearts />

      {/* Music Toggle UI */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={toggleMusic}
          className="p-4 glass rounded-full text-rose-600 hover:scale-110 transition-transform shadow-lg group"
        >
          {isMusicPlaying ? <Pause size={24} /> : <Play size={24} />}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {isMusicPlaying ? "Mute Romance" : "Play Music"}
          </span>
        </button>
      </div>

      <Hero onOpenHeart={() => scrollToSection('gallery')} />
      
      <section id="gallery" className="relative z-10 py-24 px-4 max-w-7xl mx-auto">
        <Gallery />
      </section>

      <section id="timeline" className="relative z-10 py-24 bg-white/10">
        <Timeline />
      </section>

      <section id="letter" className="relative z-10 py-24 px-4 max-w-4xl mx-auto">
        <LoveLetter />
      </section>

      <section id="surprise" className="relative z-10 py-24 px-4">
        <Surprise />
      </section>

      <footer className="relative z-10 py-12 text-center text-rose-900/60 font-light">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Heart size={16} fill="currentColor" className="text-rose-500 animate-pulse" />
          <span className="font-romantic text-2xl text-rose-600">Forever & Always</span>
          <Heart size={16} fill="currentColor" className="text-rose-500 animate-pulse" />
        </div>
        <p>Made with ❤️ by Your Secret Admirer</p>
        <p className="text-xs mt-2">&copy; 2025 Ethereal Romance Experience</p>
      </footer>
    </div>
  );
};

export default App;
