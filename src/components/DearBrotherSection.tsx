"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const DearBrotherSection: React.FC = () => {
  const lines = [
    "You have never just been my brother.",
    "You became my guide.",
    "My protector.",
    "My motivation.",
    "My confidence.",
    "Whenever I felt lost, you believed in me.",
    "Whenever I failed, you reminded me to stand again.",
    "Whenever I doubted myself, you saw the person I could become.",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="dear-brother" className="py-24 px-4 relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        {/* Handwritten Style Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex flex-col items-center"
        >
          <div className="flex items-center gap-2 text-amber-400 mb-2">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span className="text-sm tracking-widest uppercase font-semibold">Chapter I</span>
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif-heading italic text-purple-200 drop-shadow-md">
            Dear Brother
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-purple-500 rounded-full mt-4" />
        </motion.div>

        {/* Glass Card for Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card glass-gold-border p-8 sm:p-12 rounded-3xl relative shadow-2xl overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-purple-600/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 text-slate-200 text-lg sm:text-2xl font-light leading-relaxed"
          >
            {lines.map((line, idx) => (
              <motion.p
                key={idx}
                variants={lineVariants}
                className={
                  idx === 0
                    ? "text-amber-300 font-medium text-xl sm:text-3xl mb-8"
                    : idx >= 1 && idx <= 4
                    ? "text-purple-200 font-serif-heading italic text-xl sm:text-2xl"
                    : "text-slate-200 font-sans-body"
                }
              >
                {line}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
