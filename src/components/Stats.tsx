"use client";

import { motion } from "framer-motion";
import { Users, Clock, TrendingUp, Brain } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "384+",
    label: "Community Members",
    glowColor: "blue",
  },
  {
    icon: Clock,
    number: "4+",
    label: "Years Trading Experience",
    glowColor: "blue",
  },
  {
    icon: TrendingUp,
    number: "₹50K→25L",
    label: "Personal Journey",
    glowColor: "red",
  },
  {
    icon: Brain,
    number: "Top 1%",
    label: "Trader Mindset",
    glowColor: "blue",
  },
];

export default function Stats() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="section-divider mb-16" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`glass-card p-6 md:p-8 rounded-2xl text-center group cursor-default ${
                stat.glowColor === "red"
                  ? "hover:shadow-[0_0_30px_rgba(255,45,61,0.1)]"
                  : "hover:shadow-[0_0_30px_rgba(37,99,235,0.1)]"
              }`}
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-colors ${
                  stat.glowColor === "red"
                    ? "bg-accent-red/10 group-hover:bg-accent-red/15"
                    : "bg-accent-blue/10 group-hover:bg-accent-blue/15"
                }`}
              >
                <stat.icon
                  className={`w-6 h-6 ${
                    stat.glowColor === "red"
                      ? "text-accent-red"
                      : "text-accent-blue"
                  }`}
                />
              </div>
              <p className="text-3xl md:text-4xl font-extrabold text-text-primary mb-1">
                {stat.number}
              </p>
              <p className="text-sm text-text-muted font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
