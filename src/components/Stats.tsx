"use client";

import { MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
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
    number: "₹50K → 25L",
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

function SpotlightCard({ stat }: { stat: typeof stats[0] }) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const glowRgb = stat.glowColor === "red" ? "255, 45, 61" : "37, 99, 235";

  return (
    <div
      onMouseMove={handleMouseMove}
      className="glass-card p-6 md:p-8 rounded-2xl text-center group cursor-default relative overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(${glowRgb}, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10">
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

        <p
          className={`font-extrabold text-text-primary mb-1 ${
            stat.label === "Personal Journey"
              ? "text-2xl sm:text-3xl md:text-4xl whitespace-nowrap"
              : "text-3xl md:text-4xl"
          }`}
        >
          {stat.number}
        </p>

        <p className="text-sm text-text-muted font-medium">
          {stat.label}
        </p>
      </div>
    </div>
  );
}

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
            >
              <SpotlightCard stat={stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
