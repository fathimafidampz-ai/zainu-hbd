"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Mail, Heart, Edit3, Sparkles, RotateCcw } from "lucide-react";

export const LetterSection: React.FC = () => {
  const [replayKey, setReplayKey] = useState(0);

  const paragraphs = [
    { id: 1, text: "Dear Brother,", isHeading: true },
    { id: 2, text: "I know this birthday wish is late, but my gratitude for you never will be.", highlight: true },
    { id: 3, text: "You have given me strength when I had none." },
    { id: 4, text: "You believed in me even when I didn't believe in myself." },
    { id: 5, text: "Every opportunity I have today... Every achievement... Every dream... Exists because you stood behind me.", isQuote: true },
    { id: 6, text: "You are the strongest pillar of my life.", isStrong: true },
    { id: 7, text: "No words will ever fully describe how thankful I am." },
    { id: 8, text: "Thank you for sacrificing your comfort to make mine possible." },
    { id: 9, text: "Thank you for loving me without expecting anything in return." },
    { id: 10, text: "If I become successful one day, your name will always be part of my story.", highlight: true },
    { id: 11, text: "Happy Belated Birthday.", isSubHeading: true },
    { id: 12, text: "I love you more than words can express. ❤️", isSign: true },
  ];

  // Framer Motion Variants for Fast Word-by-Word Animation
  const letterContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger paragraphs
      },
    },
  };

  const paragraphVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04, // Fast word-by-word typing speed!
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 8, filter: "blur(4px)", scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 0.15,
      },
    },
  };

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
          <div className="flex items-center justify-center gap-4">
            <p className="text-slate-400 text-base sm:text-lg flex items-center gap-2">
              <span>Written word by word</span>
              <Edit3 className="w-4 h-4 text-amber-400 animate-bounce" />
            </p>
            <button
              onClick={() => setReplayKey((prev) => prev + 1)}
              className="px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 hover:border-amber-400/50 text-slate-300 hover:text-amber-300 text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
              title="Replay Handwritten Animation"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Replay</span>
            </button>
          </div>
        </motion.div>

        {/* Premium Glass Card Letter */}
        <motion.div
          key={replayKey}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="glass-card glass-gold-border p-8 sm:p-14 rounded-3xl relative shadow-2xl overflow-hidden text-slate-100 border border-amber-500/30"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 text-amber-400 pointer-events-none">
            <Heart className="w-72 h-72" />
          </div>

          <motion.div
            variants={letterContainerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 max-w-2xl mx-auto space-y-6"
          >
            {paragraphs.map((p) => {
              const words = p.text.split(" ");

              return (
                <motion.div
                  key={p.id}
                  variants={paragraphVariants}
                  className="relative"
                >
                  {p.isHeading && (
                    <h3 className="text-3xl sm:text-5xl font-handwritten-script font-bold gold-gradient-text tracking-wide mb-6 flex flex-wrap gap-x-2 gap-y-1">
                      {words.map((word, i) => (
                        <motion.span key={i} variants={wordVariants} className="inline-block">
                          {word}
                        </motion.span>
                      ))}
                    </h3>
                  )}

                  {p.isSubHeading && (
                    <h4 className="text-2xl sm:text-4xl font-handwritten-script font-bold text-amber-300 tracking-wide mt-8 flex flex-wrap gap-x-2 gap-y-1">
                      {words.map((word, i) => (
                        <motion.span key={i} variants={wordVariants} className="inline-block">
                          {word}
                        </motion.span>
                      ))}
                    </h4>
                  )}

                  {p.isSign && (
                    <p className="text-2xl sm:text-4xl font-handwritten-script font-semibold text-pink-300 mt-2 flex flex-wrap gap-x-2 gap-y-1">
                      {words.map((word, i) => (
                        <motion.span key={i} variants={wordVariants} className="inline-block">
                          {word}
                        </motion.span>
                      ))}
                    </p>
                  )}

                  {p.isQuote && (
                    <blockquote className="my-4 py-3 px-5 border-l-4 border-amber-400/80 bg-amber-500/10 rounded-r-2xl font-handwritten text-2xl sm:text-3xl text-amber-200 leading-relaxed shadow-inner flex flex-wrap gap-x-2 gap-y-1">
                      {words.map((word, i) => (
                        <motion.span key={i} variants={wordVariants} className="inline-block">
                          {word}
                        </motion.span>
                      ))}
                    </blockquote>
                  )}

                  {p.isStrong && (
                    <p className="font-handwritten text-3xl sm:text-4xl font-bold text-white tracking-wide my-3 flex flex-wrap gap-x-2 gap-y-1">
                      {words.map((word, i) => (
                        <motion.span key={i} variants={wordVariants} className="inline-block">
                          {word}
                        </motion.span>
                      ))}
                    </p>
                  )}

                  {!p.isHeading && !p.isSubHeading && !p.isSign && !p.isQuote && !p.isStrong && (
                    <p
                      className={`font-handwritten text-2xl sm:text-3xl tracking-wide leading-relaxed flex flex-wrap gap-x-2 gap-y-1 ${
                        p.highlight ? "text-amber-300 font-semibold" : "text-slate-200"
                      }`}
                    >
                      {words.map((word, i) => (
                        <motion.span key={i} variants={wordVariants} className="inline-block">
                          {word}
                        </motion.span>
                      ))}
                    </p>
                  )}
                </motion.div>
              );
            })}

            {/* Glowing Ink Pen Status Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="inline-flex items-center gap-2 text-amber-400 font-handwritten text-xl pt-2"
            >
              <Sparkles className="w-5 h-5 text-amber-400 animate-spin" />
              <span>Forever written in my heart</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
