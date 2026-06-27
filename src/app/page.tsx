"use client";

import React, { useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { StarCanvas } from "@/components/StarCanvas";
import { ClickHearts } from "@/components/ClickHearts";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  return (
    <div className={`min-h-screen relative flex flex-col justify-between transition-colors duration-500 ${isDarkMode ? "bg-[#0B1120] text-slate-100" : "bg-slate-900 text-slate-100"}`}>
      {/* Interactive Loading Screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Animated Star Background */}
      <StarCanvas />

      {/* Click Floating Heart Particle FX */}
      <ClickHearts />

      {/* Header Controls */}
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        isAudioPlaying={isAudioPlaying}
        setIsAudioPlaying={setIsAudioPlaying}
      />

      {/* Main Single Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col justify-center">
        <HeroSection setIsAudioPlaying={setIsAudioPlaying} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
