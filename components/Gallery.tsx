
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { GalleryImage } from '../types';

const IMAGES: GalleryImage[] = [
  { id: 1, url: 'https://picsum.photos/id/10/800/600', caption: 'The first sunset we shared.', height: 'h-[300px]' },
  { id: 2, url: 'https://picsum.photos/id/111/800/1000', caption: 'Lost in the city, but found in you.', height: 'h-[500px]' },
  { id: 3, url: 'https://picsum.photos/id/114/800/700', caption: 'Our favorite cozy morning.', height: 'h-[350px]' },
  { id: 4, url: 'https://picsum.photos/id/119/800/1200', caption: 'The long road ahead, hand in hand.', height: 'h-[600px]' },
  { id: 5, url: 'https://picsum.photos/id/124/800/600', caption: 'Nature smiles with us.', height: 'h-[300px]' },
  { id: 6, url: 'https://picsum.photos/id/128/800/900', caption: 'Capturing these quiet moments.', height: 'h-[450px]' },
];

const Gallery: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedImage = IMAGES.find(img => img.id === selectedId);

  const navigate = (direction: 'next' | 'prev') => {
    if (selectedId === null) return;
    const currentIndex = IMAGES.findIndex(img => img.id === selectedId);
    let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (newIndex < 0) newIndex = IMAGES.length - 1;
    if (newIndex >= IMAGES.length) newIndex = 0;
    setSelectedId(IMAGES[newIndex].id);
  };

  return (
    <div>
      <h2 className="text-4xl md:text-5xl text-rose-900 font-romantic text-center mb-16">
        Our Beautiful Journey
      </h2>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {IMAGES.map((image) => (
          <motion.div
            key={image.id}
            layoutId={`card-${image.id}`}
            onClick={() => setSelectedId(image.id)}
            whileHover={{ y: -10 }}
            className={`relative overflow-hidden rounded-2xl cursor-pointer shadow-lg group glass border-white/40`}
          >
            <img
              src={image.url}
              alt={image.caption}
              className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <p className="text-white font-medium">{image.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && selectedImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-rose-950/90 backdrop-blur-xl"
            />

            <motion.div
              layoutId={`card-${selectedId}`}
              initial={{ scale: 0, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0, opacity: 0, rotate: 5 }}
              transition={{ type: "spring", damping: 15, stiffness: 100 }}
              className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <div className="absolute top-4 right-4 z-20">
                <button
                  onClick={() => setSelectedId(null)}
                  className="p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col md:flex-row h-full">
                <div className="relative flex-grow bg-black flex items-center justify-center min-h-[400px]">
                  <motion.img
                    key={selectedImage.url}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    src={selectedImage.url}
                    className="max-h-[80vh] w-full object-contain"
                  />
                  
                  {/* Heart Particles Animation when opening */}
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                        animate={{ 
                          scale: [1, 0], 
                          opacity: [1, 0],
                          x: (Math.random() - 0.5) * 400,
                          y: (Math.random() - 0.5) * 400 
                        }}
                        transition={{ duration: 0.8 }}
                        className="text-rose-500 absolute"
                      >
                        <Heart fill="currentColor" size={24} />
                      </motion.div>
                    ))}
                  </div>

                  <button
                    onClick={(e) => { e.stopPropagation(); navigate('prev'); }}
                    className="absolute left-4 p-4 text-white/70 hover:text-white transition-colors"
                  >
                    <ChevronLeft size={48} />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); navigate('next'); }}
                    className="absolute right-4 p-4 text-white/70 hover:text-white transition-colors"
                  >
                    <ChevronRight size={48} />
                  </button>
                </div>
                
                <div className="p-8 md:w-80 flex flex-col justify-center bg-rose-50">
                  <h3 className="font-romantic text-4xl text-rose-600 mb-4">Memory</h3>
                  <p className="text-rose-900 leading-relaxed italic">
                    "{selectedImage.caption}"
                  </p>
                  <div className="mt-8 pt-8 border-t border-rose-200">
                    <p className="text-rose-400 text-sm tracking-widest uppercase">Ethereal Moments</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
