"use client";

import React, { useState } from "react";
import { StarCanvas } from "@/components/StarCanvas";
import { ClickHearts } from "@/components/ClickHearts";
import { Navbar } from "@/components/Navbar";
import { LetterSection } from "@/components/LetterSection";
import { PageNavigation } from "@/components/PageNavigation";
import { Footer } from "@/components/Footer";

export default function LetterPage() {
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
        <LetterSection />
        <PageNavigation
          prevHref="/reasons"
          prevLabel="Back: Reasons You're Amazing"
          nextHref="/counter"
          nextLabel="Next: Brotherhood Counters"
        />
      </main>
      <Footer />
    </div>
  );
}
