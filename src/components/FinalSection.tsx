"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Crown } from "lucide-react";

export const FinalSection: React.FC = () => {
  return (
    <section id="final" className="py-32 px-4 relative z-10 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="p-4 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 inline-block mb-4 shadow-lg shadow-amber-500/20">
            <Crown className="w-10 h-10 animate-bounce" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-6xl font-serif-heading font-extrabold text-white mb-12 leading-relaxed"
        >
          &ldquo;No matter how old we become... <br />
          <span className="gold-gradient-text">
            You&apos;ll always be the hero of my story.&rdquo;
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-card glass-gold-border p-8 sm:p-12 rounded-3xl max-w-xl w-full flex flex-col items-center shadow-2xl"
        >
          <Heart className="w-12 h-12 text-rose-500 fill-rose-500 animate-pulse mb-4" />
          <h3 className="text-2xl sm:text-4xl font-serif-heading font-bold text-white mb-6">
            Happy Belated Birthday, Brother.
          </h3>

          <div className="w-16 h-0.5 bg-amber-400/50 mb-6" />

          <p className="text-slate-300 text-base sm:text-lg italic font-serif-heading">
            Signed with endless love,
          </p>
          <p className="text-xl sm:text-2xl font-bold gold-gradient-text mt-1">
            Your Little Sister ❤️
          </p>
        </motion.div>
      </div>
    </section>
  );
};
