"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Smile, Shield, Globe, Target, Users, Wand2, Heart } from "lucide-react";

export const ReasonsSection: React.FC = () => {
  const reasons = [
    {
      emoji: "❤️",
      title: "Unwavering Belief",
      text: "You never stopped believing in me.",
      icon: Heart,
      color: "from-pink-500/15 via-rose-500/10 to-transparent",
      accent: "text-rose-400",
    },
    {
      emoji: "💪",
      title: "Strongest Shield",
      text: "You always protected me.",
      icon: Shield,
      color: "from-blue-500/15 via-indigo-500/10 to-transparent",
      accent: "text-blue-400",
    },
    {
      emoji: "🌍",
      title: "Boundless Vision",
      text: "You taught me to dream bigger.",
      icon: Globe,
      color: "from-emerald-500/15 via-teal-500/10 to-transparent",
      accent: "text-emerald-400",
    },
    {
      emoji: "😊",
      title: "Joyous Light",
      text: "You always made me laugh.",
      icon: Smile,
      color: "from-amber-500/15 via-yellow-500/10 to-transparent",
      accent: "text-amber-400",
    },
    {
      emoji: "🎯",
      title: "Relentless Drive",
      text: "You inspired me to work harder.",
      icon: Target,
      color: "from-purple-500/15 via-violet-500/10 to-transparent",
      accent: "text-purple-400",
    },
    {
      emoji: "🤝",
      title: "Loyal Companion",
      text: "You stood beside me during difficult times.",
      icon: Users,
      color: "from-cyan-500/15 via-sky-500/10 to-transparent",
      accent: "text-cyan-400",
    },
    {
      emoji: "✨",
      title: "Eternal Inspiration",
      text: "You changed my life forever.",
      icon: Wand2,
      color: "from-amber-400/20 via-orange-500/10 to-transparent",
      accent: "text-amber-300",
      featured: true,
    },
  ];

  return (
    <section id="reasons" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm mb-3">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Chapter III</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-heading font-bold text-white mb-4">
            Reasons You&apos;re Amazing
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Just a few of the infinite reasons why you will always be my absolute hero.
          </p>
        </motion.div>

        {/* Animated Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`glass-card p-6 rounded-2xl border border-white/10 bg-gradient-to-br ${item.color} shadow-xl relative overflow-hidden flex flex-col justify-between ${
                  item.featured ? "md:col-span-2 lg:col-span-3 glass-gold-border" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl p-2 rounded-xl bg-slate-900/40 border border-white/10 shadow-inner">
                    {item.emoji}
                  </span>
                  <IconComp className={`w-6 h-6 ${item.accent} opacity-80`} />
                </div>

                <div>
                  <h3 className={`text-sm font-semibold uppercase tracking-wider ${item.accent} mb-1`}>
                    {item.title}
                  </h3>
                  <p className="text-slate-100 text-lg sm:text-xl font-medium leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
