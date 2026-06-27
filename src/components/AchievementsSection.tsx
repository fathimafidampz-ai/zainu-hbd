"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, BookOpen, Laptop, Heart, Award } from "lucide-react";

export const AchievementsSection: React.FC = () => {
  const achievements = [
    {
      icon: Star,
      emoji: "🌟",
      text: "Every achievement I have today carries your fingerprints.",
      color: "from-amber-500/20 to-yellow-500/10",
      borderColor: "border-amber-500/40",
      iconColor: "text-amber-400",
    },
    {
      icon: BookOpen,
      emoji: "📚",
      text: "Every skill I learned was possible because you encouraged me.",
      color: "from-blue-500/20 to-indigo-500/10",
      borderColor: "border-blue-500/40",
      iconColor: "text-blue-400",
    },
    {
      icon: Laptop,
      emoji: "💻",
      text: "Every dream I chase became real because you believed before I did.",
      color: "from-purple-500/20 to-pink-500/10",
      borderColor: "border-purple-500/40",
      iconColor: "text-purple-400",
    },
    {
      icon: Heart,
      emoji: "❤️",
      text: "Behind every success of mine... there is a brother silently cheering for me.",
      color: "from-rose-500/20 to-red-500/10",
      borderColor: "border-rose-500/40",
      iconColor: "text-rose-400",
    },
  ];

  return (
    <section id="achievements" className="py-24 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm mb-3">
            <Award className="w-4 h-4 text-purple-400" />
            <span>Chapter II</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-heading font-bold text-white mb-4">
            My Achievements Are Yours Too
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Everything I reach toward has been paved by your relentless support.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-purple-500/30 ml-4 sm:ml-32 space-y-12">
          {achievements.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="relative pl-8 sm:pl-12"
              >
                {/* Timeline Circle */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#0B1120] border-2 border-amber-400 flex items-center justify-center shadow-lg shadow-amber-400/20 z-10">
                  <span className="text-sm">{item.emoji}</span>
                </div>

                {/* Glass Card */}
                <motion.div
                  whileHover={{ scale: 1.02, translateX: 5 }}
                  className={`glass-card p-6 sm:p-8 rounded-2xl border ${item.borderColor} bg-gradient-to-r ${item.color} shadow-xl backdrop-blur-xl transition-all`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-slate-900/60 border border-white/10 ${item.iconColor} shrink-0`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-slate-100 text-lg sm:text-xl font-medium leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
