"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Heart, Edit3, Sparkles } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export const LetterSection: React.FC = () => {
  const { isDarkMode } = useTheme();

  const letterLines = [
    { text: "Dear Brother,", type: "heading" },
    { text: "I know this birthday wish is late, but my gratitude for you never will be.", type: "highlight" },
    { text: "You have given me strength when I had none.", type: "normal" },
    { text: "You believed in me even when I didn't believe in myself.", type: "normal" },
    { text: "Every opportunity I have today... Every achievement... Every dream... Exists because you stood behind me.", type: "quote" },
    { text: "You are the strongest pillar of my life.", type: "strong" },
    { text: "No words will ever fully describe how thankful I am.", type: "normal" },
    { text: "Thank you for sacrificing your comfort to make mine possible.", type: "normal" },
    { text: "Thank you for loving me without expecting anything in return.", type: "normal" },
    { text: "If I become successful one day, your name will always be part of my story.", type: "highlight" },
    { text: "Happy Belated Birthday.", type: "subheading" },
    { text: "I love you more than words can express. ❤️", type: "sign" },
  ];

  // Calculate total words count across all lines
  const allWords = letterLines.flatMap((line, lineIndex) =>
    line.text.split(" ").map((word) => ({ word, lineIndex, type: line.type }))
  );

  const [visibleWordsCount, setVisibleWordsCount] = useState(0);

  useEffect(() => {
    if (visibleWordsCount < allWords.length) {
      const timer = setTimeout(() => {
        setVisibleWordsCount((prev) => prev + 1);
      }, 50); // Fast word-by-word reveal (50ms per word)
      return () => clearTimeout(timer);
    }
  }, [visibleWordsCount, allWords.length]);

  const isDoneWriting = visibleWordsCount >= allWords.length;

  return (
    <section id="letter" className="py-16 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm mb-3 ${
              isDarkMode
                ? "bg-rose-500/10 border-rose-500/30 text-rose-300"
                : "bg-rose-100 border-rose-300 text-rose-800 font-medium shadow-sm"
            }`}
          >
            <Mail className="w-4 h-4 text-rose-500" />
            <span>Chapter IV</span>
          </div>
          <h2
            className={`text-3xl sm:text-5xl font-serif-heading font-bold mb-3 ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Letter From My Heart
          </h2>
          <p
            className={`text-base sm:text-lg max-w-xl mx-auto flex items-center justify-center gap-2 ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            <span>Written with eternal gratitude</span>
            <Edit3 className="w-4 h-4 text-amber-500 animate-bounce" />
          </p>
        </motion.div>

        {/* Premium Glass Card Letter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="glass-card glass-gold-border p-8 sm:p-14 rounded-3xl relative shadow-2xl overflow-hidden"
        >
          <div
            className={`absolute top-0 right-0 p-8 opacity-10 pointer-events-none ${
              isDarkMode ? "text-amber-400" : "text-amber-600"
            }`}
          >
            <Heart className="w-72 h-72" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            {letterLines.map((line, lineIdx) => {
              // Find words belonging to this line that are currently visible
              const wordsInThisLine = allWords.filter((w) => w.lineIndex === lineIdx);
              const firstWordGlobalIndex = allWords.findIndex((w) => w.lineIndex === lineIdx);

              // If no words of this line have been revealed yet, hide the container
              if (visibleWordsCount <= firstWordGlobalIndex) return null;

              // Number of revealed words for this specific line
              const revealedWordsForLine = wordsInThisLine.slice(
                0,
                visibleWordsCount - firstWordGlobalIndex
              );

              return (
                <div key={lineIdx} className="relative">
                  {line.type === "heading" && (
                    <h3 className="text-3xl sm:text-5xl font-handwritten-script font-bold gold-gradient-text tracking-wide mb-6">
                      {revealedWordsForLine.map((w) => w.word).join(" ")}
                    </h3>
                  )}

                  {line.type === "subheading" && (
                    <h4
                      className={`text-2xl sm:text-4xl font-handwritten-script font-bold tracking-wide mt-8 ${
                        isDarkMode ? "text-amber-300" : "text-amber-800"
                      }`}
                    >
                      {revealedWordsForLine.map((w) => w.word).join(" ")}
                    </h4>
                  )}

                  {line.type === "sign" && (
                    <p
                      className={`text-2xl sm:text-4xl font-handwritten-script font-semibold mt-2 ${
                        isDarkMode ? "text-pink-300" : "text-pink-700"
                      }`}
                    >
                      {revealedWordsForLine.map((w) => w.word).join(" ")}
                    </p>
                  )}

                  {line.type === "quote" && (
                    <blockquote
                      className={`my-4 py-3 px-5 border-l-4 rounded-r-2xl font-handwritten text-2xl sm:text-3xl leading-relaxed shadow-inner ${
                        isDarkMode
                          ? "border-amber-400/80 bg-amber-500/10 text-amber-200"
                          : "border-amber-600 bg-amber-100/80 text-amber-950 font-semibold"
                      }`}
                    >
                      {revealedWordsForLine.map((w) => w.word).join(" ")}
                    </blockquote>
                  )}

                  {line.type === "strong" && (
                    <p
                      className={`font-handwritten text-3xl sm:text-4xl font-bold tracking-wide my-3 ${
                        isDarkMode ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {revealedWordsForLine.map((w) => w.word).join(" ")}
                    </p>
                  )}

                  {(line.type === "normal" || line.type === "highlight") && (
                    <p
                      className={`font-handwritten text-2xl sm:text-3xl tracking-wide leading-relaxed ${
                        line.type === "highlight"
                          ? isDarkMode
                            ? "text-amber-300 font-semibold"
                            : "text-amber-800 font-bold"
                          : isDarkMode
                          ? "text-slate-200"
                          : "text-slate-900 font-medium"
                      }`}
                    >
                      {revealedWordsForLine.map((w) => w.word).join(" ")}
                    </p>
                  )}
                </div>
              );
            })}

            {/* Fast Pen Writing Indicator */}
            {!isDoneWriting && (
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 0.4, repeat: Infinity }}
                className={`inline-flex items-center gap-2 font-handwritten text-2xl pt-2 ${
                  isDarkMode ? "text-amber-400" : "text-amber-700 font-bold"
                }`}
              >
                <Sparkles className="w-5 h-5 animate-spin text-amber-500" />
                <span>Writing fast with love...</span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
