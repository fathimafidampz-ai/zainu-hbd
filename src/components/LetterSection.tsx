"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Heart, Edit3, Sparkles } from "lucide-react";

export const LetterSection: React.FC = () => {
  const paragraphs = [
    { text: "Dear Brother,", isHeading: true },
    { text: "I know this birthday wish is late, but my gratitude for you never will be.", highlight: true },
    { text: "You have given me strength when I had none." },
    { text: "You believed in me even when I didn't believe in myself." },
    { text: "Every opportunity I have today... Every achievement... Every dream... Exists because you stood behind me.", isQuote: true },
    { text: "You are the strongest pillar of my life.", isStrong: true },
    { text: "No words will ever fully describe how thankful I am." },
    { text: "Thank you for sacrificing your comfort to make mine possible." },
    { text: "Thank you for loving me without expecting anything in return." },
    { text: "If I become successful one day, your name will always be part of my story.", highlight: true },
    { text: "Happy Belated Birthday.", isSubHeading: true },
    { text: "I love you more than words can express. ❤️", isSign: true },
  ];

  const [visibleLinesCount, setVisibleLinesCount] = useState(1);
  const [isWriting, setIsWriting] = useState(true);

  useEffect(() => {
    if (visibleLinesCount < paragraphs.length) {
      const timer = setTimeout(() => {
        setVisibleLinesCount((prev) => prev + 1);
      }, 900);
      return () => clearTimeout(timer);
    } else {
      setIsWriting(false);
    }
  }, [visibleLinesCount, paragraphs.length]);

  return (
    <section id="letter" className="py-16 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm mb-3">
            <Mail className="w-4 h-4 text-rose-400" />
            <span>Chapter IV</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-heading font-bold text-white mb-3">
            Letter From My Heart
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto flex items-center justify-center gap-2">
            <span>Written with eternal gratitude</span>
            <Edit3 className="w-4 h-4 text-amber-400 animate-bounce" />
          </p>
        </motion.div>

        {/* Premium Glass Card Letter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="glass-card glass-gold-border p-8 sm:p-14 rounded-3xl relative shadow-2xl overflow-hidden text-slate-100 border border-amber-500/30"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 text-amber-400 pointer-events-none">
            <Heart className="w-72 h-72" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            {paragraphs.slice(0, visibleLinesCount).map((p, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                {p.isHeading && (
                  <h3 className="text-3xl sm:text-5xl font-handwritten-script font-bold gold-gradient-text tracking-wide mb-6">
                    {p.text}
                  </h3>
                )}

                {p.isSubHeading && (
                  <h4 className="text-2xl sm:text-4xl font-handwritten-script font-bold text-amber-300 tracking-wide mt-8">
                    {p.text}
                  </h4>
                )}

                {p.isSign && (
                  <p className="text-2xl sm:text-4xl font-handwritten-script font-semibold text-pink-300 mt-2">
                    {p.text}
                  </p>
                )}

                {p.isQuote && (
                  <blockquote className="my-4 py-3 px-5 border-l-4 border-amber-400/80 bg-amber-500/10 rounded-r-2xl font-handwritten text-2xl sm:text-3xl text-amber-200 leading-relaxed shadow-inner">
                    {p.text}
                  </blockquote>
                )}

                {p.isStrong && (
                  <p className="font-handwritten text-3xl sm:text-4xl font-bold text-white tracking-wide my-3">
                    {p.text}
                  </p>
                )}

                {!p.isHeading && !p.isSubHeading && !p.isSign && !p.isQuote && !p.isStrong && (
                  <p
                    className={`font-handwritten text-2xl sm:text-3xl tracking-wide leading-relaxed ${
                      p.highlight ? "text-amber-300 font-semibold" : "text-slate-200"
                    }`}
                  >
                    {p.text}
                  </p>
                )}
              </motion.div>
            ))}

            {/* Animated Golden Pen Cursor indicator while writing */}
            {isWriting && (
              <motion.div
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-flex items-center gap-2 text-amber-400 font-handwritten text-xl pt-2"
              >
                <Sparkles className="w-5 h-5 animate-spin" />
                <span>Writing with love...</span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
