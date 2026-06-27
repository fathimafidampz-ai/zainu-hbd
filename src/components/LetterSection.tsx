"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Heart, Edit3, Sparkles, RotateCcw } from "lucide-react";

interface ParagraphItem {
  id: number;
  text: string;
  isHeading?: boolean;
  isSubHeading?: boolean;
  isSign?: boolean;
  isQuote?: boolean;
  isStrong?: boolean;
  highlight?: boolean;
}

export const LetterSection: React.FC = () => {
  const paragraphs: ParagraphItem[] = [
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

  // Calculate total number of words across the letter
  const flatWords = paragraphs.flatMap((p) =>
    p.text.split(" ").map((word) => ({ paragraphId: p.id, word }))
  );

  const [visibleWordCount, setVisibleWordCount] = useState(1);
  const [isWriting, setIsWriting] = useState(true);

  // Strictly sequential word-by-word timer
  useEffect(() => {
    if (visibleWordCount < flatWords.length) {
      const timer = setTimeout(() => {
        setVisibleWordCount((prev) => prev + 1);
      }, 140); // 140ms per word = comfortable, strictly one-by-one writing pace!
      return () => clearTimeout(timer);
    } else {
      setIsWriting(false);
    }
  }, [visibleWordCount, flatWords.length]);

  const handleReplay = () => {
    setVisibleWordCount(1);
    setIsWriting(true);
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
              <span>Writing strictly word by word</span>
              <Edit3 className="w-4 h-4 text-amber-400 animate-bounce" />
            </p>
            <button
              onClick={handleReplay}
              className="px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 hover:border-amber-400/50 text-slate-300 hover:text-amber-300 text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
              title="Replay Handwritten Animation"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Replay Animation</span>
            </button>
          </div>
        </motion.div>

        {/* Premium Glass Card Letter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="glass-card glass-gold-border p-8 sm:p-14 rounded-3xl relative shadow-2xl overflow-hidden text-slate-100 border border-amber-500/30"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 text-amber-400 pointer-events-none">
            <Heart className="w-72 h-72" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            {paragraphs.map((p) => {
              const allWordsInP = p.text.split(" ");
              
              // Determine how many words of this specific paragraph are visible
              // based on global visibleWordCount
              let wordsSoFarInPreviousParagraphs = 0;
              for (const prevP of paragraphs) {
                if (prevP.id === p.id) break;
                wordsSoFarInPreviousParagraphs += prevP.text.split(" ").length;
              }

              const visibleWordsInThisP = Math.max(
                0,
                Math.min(allWordsInP.length, visibleWordCount - wordsSoFarInPreviousParagraphs)
              );

              if (visibleWordsInThisP <= 0) return null;

              const wordsToRender = allWordsInP.slice(0, visibleWordsInThisP);

              return (
                <div key={p.id} className="relative">
                  {p.isHeading && (
                    <h3 className="text-3xl sm:text-5xl font-handwritten-script font-bold gold-gradient-text tracking-wide mb-6 flex flex-wrap gap-x-2 gap-y-1">
                      {wordsToRender.map((word, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, y: 6, filter: "blur(4px)" }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                          transition={{ duration: 0.2 }}
                          className="inline-block"
                        >
                          {word}
                        </motion.span>
                      ))}
                    </h3>
                  )}

                  {p.isSubHeading && (
                    <h4 className="text-2xl sm:text-4xl font-handwritten-script font-bold text-amber-300 tracking-wide mt-8 flex flex-wrap gap-x-2 gap-y-1">
                      {wordsToRender.map((word, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, y: 6, filter: "blur(4px)" }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                          transition={{ duration: 0.2 }}
                          className="inline-block"
                        >
                          {word}
                        </motion.span>
                      ))}
                    </h4>
                  )}

                  {p.isSign && (
                    <p className="text-2xl sm:text-4xl font-handwritten-script font-semibold text-pink-300 mt-2 flex flex-wrap gap-x-2 gap-y-1">
                      {wordsToRender.map((word, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, y: 6, filter: "blur(4px)" }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                          transition={{ duration: 0.2 }}
                          className="inline-block"
                        >
                          {word}
                        </motion.span>
                      ))}
                    </p>
                  )}

                  {p.isQuote && (
                    <blockquote className="my-4 py-3 px-5 border-l-4 border-amber-400/80 bg-amber-500/10 rounded-r-2xl font-handwritten text-2xl sm:text-3xl text-amber-200 leading-relaxed shadow-inner flex flex-wrap gap-x-2 gap-y-1">
                      {wordsToRender.map((word, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, y: 6, filter: "blur(4px)" }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                          transition={{ duration: 0.2 }}
                          className="inline-block"
                        >
                          {word}
                        </motion.span>
                      ))}
                    </blockquote>
                  )}

                  {p.isStrong && (
                    <p className="font-handwritten text-3xl sm:text-4xl font-bold text-white tracking-wide my-3 flex flex-wrap gap-x-2 gap-y-1">
                      {wordsToRender.map((word, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, y: 6, filter: "blur(4px)" }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                          transition={{ duration: 0.2 }}
                          className="inline-block"
                        >
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
                      {wordsToRender.map((word, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, y: 6, filter: "blur(4px)" }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                          transition={{ duration: 0.2 }}
                          className="inline-block"
                        >
                          {word}
                        </motion.span>
                      ))}
                    </p>
                  )}
                </div>
              );
            })}

            {/* Glowing Ink Pen Cursor indicator while writing */}
            {isWriting ? (
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="inline-flex items-center gap-2 text-amber-400 font-handwritten text-xl pt-2"
              >
                <Sparkles className="w-5 h-5 text-amber-400 animate-spin" />
                <span>Writing word by word...</span>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="inline-flex items-center gap-2 text-amber-300 font-handwritten text-xl pt-2"
              >
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>Forever written in my heart</span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
