"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Camera, Handshake, Infinity as InfinityIcon } from "lucide-react";

interface CounterItemProps {
  icon: React.ElementType;
  value: string;
  targetNum?: number;
  label: string;
  suffix?: string;
  delay: number;
}

const CounterCard: React.FC<CounterItemProps> = ({
  icon: Icon,
  value,
  targetNum,
  label,
  suffix = "",
  delay,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && targetNum !== undefined) {
      let start = 0;
      const duration = 2000;
      const stepTime = 30;
      const totalSteps = duration / stepTime;
      const increment = targetNum / totalSteps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNum) {
          setCount(targetNum);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, targetNum]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05 }}
      className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center shadow-xl relative overflow-hidden group"
    >
      <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8" />
      </div>

      <div className="text-4xl sm:text-5xl font-serif-heading font-extrabold gold-gradient-text mb-2">
        {targetNum !== undefined ? `${count}${suffix}` : value}
      </div>

      <div className="text-slate-300 text-base sm:text-lg font-medium flex items-center gap-1.5">
        {label}
      </div>
    </motion.div>
  );
};

export const CounterSection: React.FC = () => {
  return (
    <section id="counter" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CounterCard
            icon={Heart}
            targetNum={19}
            suffix="+"
            value="19+"
            label="Years of Brotherhood ❤️"
            delay={0.1}
          />
          <CounterCard
            icon={Camera}
            targetNum={9999}
            suffix="+"
            value="9999+"
            label="Infinite Memories 📸"
            delay={0.2}
          />
          <CounterCard
            icon={Handshake}
            targetNum={100}
            suffix="%"
            value="100%"
            label="Unlimited Support 🤝"
            delay={0.3}
          />
          <CounterCard
            icon={InfinityIcon}
            value="∞"
            label="Endless Love ♾️"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};
