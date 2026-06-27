"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Preparing a surprise...";
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(onComplete, 800);
        }, 600);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B1120] text-white overflow-hidden px-4"
        >
          <div className="relative flex flex-col items-center">
            {/* Glowing ambient background circle */}
            <div className="absolute -inset-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl opacity-30 animate-pulse-glow" />

            <div className="relative glass-card glass-gold-border px-8 py-10 rounded-3xl flex flex-col items-center max-w-md w-full text-center shadow-2xl">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 rounded-full border-4 border-t-amber-400 border-r-purple-500 border-b-pink-500 border-l-transparent mb-6 shadow-lg shadow-amber-500/20"
              />

              <div className="text-2xl font-serif-heading font-semibold tracking-wide min-h-[40px] flex items-center justify-center">
                <span className="gold-gradient-text">{text}</span>
                <span className="animate-pulse ml-1 text-amber-400">|</span>
              </div>

              <p className="text-xs text-slate-400 mt-4 tracking-widest uppercase font-light">
                A Tribute of Gratitude & Love
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
