"use client";

import React, { useState, useEffect } from "react";

interface Heart {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

const HEART_COLORS = ["#f472b6", "#ec4899", "#ef4444", "#fbbf24", "#c084fc"];

export const ClickHearts: React.FC = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Don't spawn on button clicks if unwanted, but interactive floating hearts on click is requested
      const newHearts: Heart[] = Array.from({ length: 3 }).map((_, i) => ({
        id: Date.now() + i + Math.random(),
        x: e.clientX + (Math.random() * 40 - 20),
        y: e.clientY + (Math.random() * 20 - 10),
        size: Math.random() * 12 + 12,
        color: HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)],
      }));

      setHearts((prev) => [...prev, ...newHearts]);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (hearts.length === 0) return;
    const timer = setTimeout(() => {
      setHearts((prev) => prev.slice(3));
    }, 1500);
    return () => clearTimeout(timer);
  }, [hearts]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute animate-float-heart select-none"
          style={{
            left: `${h.x}px`,
            top: `${h.y}px`,
            fontSize: `${h.size}px`,
            color: h.color,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};
