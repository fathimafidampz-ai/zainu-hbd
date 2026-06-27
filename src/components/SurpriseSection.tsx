"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Gift, Sparkles, Heart } from "lucide-react";

export const SurpriseSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const triggerSurprise = () => {
    setIsOpen(true);

    // Confetti Cannon 1
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    // Fireworks sequence
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    const interval: NodeJS.Timeout = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        particleCount,
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors: ["#FFE259", "#FFA751", "#EC4899", "#A855F7", "#3B82F6"],
      });
    }, 250);
  };

  return (
    <section id="surprise" className="py-24 px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm mb-3">
            <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
            <span>Chapter VI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-heading font-bold text-white mb-4">
            A Special Surprise For You
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Click on the magical gift box to unwrap your special birthday message.
          </p>
        </motion.div>

        {/* Gift Box Container */}
        <div className="flex flex-col items-center justify-center min-h-[320px]">
          {!isOpen ? (
            <motion.div
              whileHover={{ scale: 1.08, rotate: [0, -5, 5, 0] }}
              whileTap={{ scale: 0.95 }}
              onClick={triggerSurprise}
              className="cursor-pointer group relative p-12 rounded-3xl glass-card glass-gold-border flex flex-col items-center shadow-2xl"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity" />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative z-10"
              >
                <div className="p-8 rounded-2xl bg-gradient-to-tr from-amber-500 to-purple-600 text-white shadow-xl mb-4">
                  <Gift className="w-20 h-20 animate-pulse" />
                </div>
              </motion.div>

              <span className="relative z-10 text-xl font-serif-heading font-bold gold-gradient-text">
                Tap to Open Surprise 🎁
              </span>
            </motion.div>
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="glass-card glass-gold-border p-10 sm:p-16 rounded-3xl max-w-2xl w-full text-center relative overflow-hidden shadow-2xl"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />

                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="inline-block p-6 rounded-full bg-rose-500/20 border border-rose-500/40 mb-6 text-rose-400"
                >
                  <Heart className="w-16 h-16 fill-rose-500" />
                </motion.div>

                <h3 className="text-3xl sm:text-5xl font-serif-heading font-extrabold text-white mb-6 leading-tight">
                  &ldquo;You are my greatest blessing.&rdquo;
                </h3>

                <p className="text-slate-300 text-lg sm:text-xl font-light mb-8">
                  Thank you for being the hero I look up to every single day.
                </p>

                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-xs text-slate-300 transition-colors border border-white/10"
                >
                  Wrap Gift Again 🔄
                </button>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
};
