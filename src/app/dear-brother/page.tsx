"use client";

import React, { useState } from "react";
import { StarCanvas } from "@/components/StarCanvas";
import { ClickHearts } from "@/components/ClickHearts";
import { Navbar } from "@/components/Navbar";
import { DearBrotherSection } from "@/components/DearBrotherSection";
import { PageNavigation } from "@/components/PageNavigation";
import { Footer } from "@/components/Footer";

export default function DearBrotherPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  return (
    <div className={`min-h-screen relative flex flex-col justify-between transition-colors duration-500 ${isDarkMode ? "bg-[#0B1120] text-slate-100" : "bg-slate-900 text-slate-100"}`}>
      <StarCanvas />
      <ClickHearts />
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        isAudioPlaying={isAudioPlaying}
        setIsAudioPlaying={setIsAudioPlaying}
      />
      <main className="relative z-10 flex-1 flex flex-col justify-center pt-20 pb-8">
        <DearBrotherSection />
        <PageNavigation
          prevHref="/"
          prevLabel="Home"
          nextHref="/achievements"
          nextLabel="Next: Achievements"
        />
      </main>
      <Footer />
    </div>
  );
}
