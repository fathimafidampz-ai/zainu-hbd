"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Camera, X, ZoomIn } from "lucide-react";

interface GalleryItem {
  id: number;
  src: string;
  caption: string;
  subtitle: string;
}

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: "/images/gallery1.png",
      caption: "Forever Together",
      subtitle: "Side by side through every milestone of life.",
    },
    {
      id: 2,
      src: "/images/gallery2.png",
      caption: "Partners in Crime",
      subtitle: "Laughter, mischief, and unshakeable bonds.",
    },
    {
      id: 3,
      src: "/images/gallery3.png",
      caption: "The Best Days",
      subtitle: "Moments of quiet wisdom, guidance, and warmth.",
    },
    {
      id: 4,
      src: "/images/gallery4.png",
      caption: "My Hero",
      subtitle: "The steady pillar beneath my biggest aspirations.",
    },
  ];

  return (
    <section id="gallery" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-sm mb-3">
            <Camera className="w-4 h-4 text-pink-400" />
            <span>Chapter III</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-heading font-bold text-white mb-4">
            Memory Gallery
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            A visual anthology of memories, protection, and boundless sibling warmth.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedImage(item)}
              className="group cursor-pointer relative rounded-2xl overflow-hidden glass-card glass-gold-border aspect-[4/5] shadow-2xl flex flex-col justify-end"
            >
              {/* Background Image */}
              <Image
                src={item.src}
                alt={item.caption}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Zoom Icon Hint */}
              <div className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/60 backdrop-blur-md text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Caption */}
              <div className="relative p-6 z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-semibold mb-2 backdrop-blur-md">
                  ✨ {item.caption}
                </span>
                <p className="text-xs text-slate-300 font-light line-clamp-2">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full glass-card rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative w-full aspect-video sm:aspect-[16/10]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.caption}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 bg-[#0B1120]/90 backdrop-blur-md border-t border-white/10">
                <h3 className="text-2xl sm:text-3xl font-serif-heading font-bold gold-gradient-text mb-2">
                  {selectedImage.caption}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base">
                  {selectedImage.subtitle}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
