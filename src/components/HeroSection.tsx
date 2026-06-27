"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Calendar, ArrowRight } from "lucide-react";
import { pianoAudio } from "@/utils/pianoAudio";

interface HeroSectionProps {
  setIsAudioPlaying: (val: boolean) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ setIsAudioPlaying }) => {
  const handleOpenHeart = () => {
    if (pianoAudio) {
      pianoAudio.start();
      setIsAudioPlaying(true);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 pt-20 pb-12 overflow-hidden"
    >
      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-700/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-amber-500/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto z-10 flex flex-col items-center">
        {/* Date & Tribute Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm font-medium mb-8 backdrop-blur-md shadow-lg"
        >
          <Calendar className="w-4 h-4 text-amber-400" />
          <span>June 26 Birthday Tribute • Dedicated to My Elder Brother</span>
        </motion.div>

        {/* Large Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif-heading font-extrabold tracking-tight text-white mb-6 leading-tight"
        >
          HAPPY BELATED BIRTHDAY, <br className="hidden sm:inline" />
          <span className="gold-gradient-text drop-shadow-lg">
            MY BIGGEST SUPPORTER ❤️
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg sm:text-2xl text-slate-300 font-light max-w-2xl mb-12 leading-relaxed"
        >
          &ldquo;Some people celebrate birthdays with gifts. <br className="hidden sm:inline" />
          I wanted to celebrate yours on June 26 with memories.&rdquo;
        </motion.p>

        {/* Open My Heart Button -> Navigates to Next Page */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link href="/dear-brother" onClick={handleOpenHeart}>
            <motion.div
              whileHover={{ scale: 1.08, boxShadow: "0 0 35px rgba(245, 158, 11, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="relative group overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-purple-600 to-pink-600 text-white font-semibold text-lg shadow-xl flex items-center gap-3 border border-amber-300/40 cursor-pointer"
            >
              <div className="absolute inset-0 animate-shimmer pointer-events-none" />
              <Heart className="w-5 h-5 fill-white animate-bounce" />
              <span>Open My Heart</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
