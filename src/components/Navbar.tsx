"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Volume2, VolumeX, Moon, Sun, Heart } from "lucide-react";
import { pianoAudio } from "@/utils/pianoAudio";

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  isAudioPlaying: boolean;
  setIsAudioPlaying: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDarkMode,
  setIsDarkMode,
  isAudioPlaying,
  setIsAudioPlaying,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleAudio = () => {
    if (pianoAudio) {
      const newState = pianoAudio.toggle();
      setIsAudioPlaying(newState);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      <div
        className={`px-4 sm:px-8 py-3.5 transition-all duration-300 ${
          scrolled
            ? isDarkMode
              ? "bg-[#0B1120]/80 backdrop-blur-md border-b border-white/10 shadow-xl"
              : "bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-md text-slate-900"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Subtle Logo without spoil links */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-lg sm:text-xl font-serif-heading font-bold gold-gradient-text cursor-pointer"
            >
              <Heart className="w-5 h-5 text-amber-400 fill-amber-400 animate-pulse" />
              <span>Brother&apos;s Tribute</span>
            </motion.div>
          </Link>

          {/* Utility Controls (Audio & Theme only) */}
          <div className="flex items-center gap-3">
            {/* Audio Button */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleAudio}
              className={`p-2 sm:px-3 sm:py-2 rounded-full flex items-center gap-2 text-xs font-medium transition-all ${
                isAudioPlaying
                  ? "bg-purple-600/30 text-purple-300 border border-purple-500/50 shadow-lg shadow-purple-500/20 animate-pulse"
                  : "bg-slate-800/60 text-slate-400 border border-slate-700 hover:text-white"
              }`}
              title={isAudioPlaying ? "Mute Music" : "Play Piano Music"}
            >
              {isAudioPlaying ? (
                <>
                  <Volume2 className="w-4 h-4 text-purple-400" />
                  <span className="hidden sm:inline">Music On</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span className="hidden sm:inline">Play Music</span>
                </>
              )}
            </motion.button>

            {/* Dark/Light Mode */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDarkMode((prev) => !prev)}
              className="p-2 sm:p-2.5 rounded-full bg-slate-800/60 border border-slate-700 text-amber-400 hover:text-amber-300 transition-all"
              title="Toggle Theme"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4 text-purple-600" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
};
