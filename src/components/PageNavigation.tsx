"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PageNavigationProps {
  prevHref?: string;
  prevLabel?: string;
  nextHref?: string;
  nextLabel?: string;
}

export const PageNavigation: React.FC<PageNavigationProps> = ({
  prevHref,
  prevLabel,
  nextHref,
  nextLabel,
}) => {
  return (
    <div className="max-w-4xl mx-auto mt-12 mb-8 pt-8 border-t border-white/10 flex items-center justify-between gap-4 px-4 relative z-20 w-full">
      {prevHref ? (
        <Link href={prevHref}>
          <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-slate-800/80 border border-slate-700 hover:bg-slate-700 text-slate-300 hover:text-white transition-all text-sm font-medium group cursor-pointer shadow-lg">
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>{prevLabel || "Previous"}</span>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {nextHref ? (
        <Link href={nextHref}>
          <div className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-purple-600 to-pink-600 text-white shadow-xl hover:shadow-amber-500/30 hover:scale-105 transition-all text-base font-semibold group cursor-pointer border border-amber-300/40">
            <span>{nextLabel || "Next Chapter"}</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
};
