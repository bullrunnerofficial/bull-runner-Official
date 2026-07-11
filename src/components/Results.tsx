"use client";

import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Users, Star } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const results = [
  {
    icon: TrendingUp,
    number: "+320%",
    label: "Average Returns",
    sublabel: "(Students)",
    color: "blue" as const,
  },
  {
    icon: DollarSign,
    number: "+1.2M",
    label: "Profit Generated",
    sublabel: "(Collectively)",
    color: "blue" as const,
  },
  {
    icon: Users,
    number: "+3,500",
    label: "Traders",
    sublabel: "Transformed",
    color: "red" as const,
  },
  {
    icon: Star,
    number: "4.9/5",
    label: "Average Rating",
    sublabel: "(From Students)",
    color: "blue" as const,
  },
];

export default function Results() {
  return (
    <SectionWrapper id="results">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/[0.03] rounded-full blur-[100px]" />
      </div>

      {/* Section Header */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-red/30 bg-accent-red/10 mb-6">
          <span className="text-xs font-semibold text-accent-red tracking-wide uppercase">
            Results & Achievements
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4">
          Real Results.{" "}
          <span className="gradient-text-red">Real Traders.</span>
        </h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          Numbers that speak for themselves. Our community of traders has
          achieved remarkable consistency and growth.
        </p>
      </div>

      {/* Result Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">
        {results.map((result, i) => (
          <motion.div
            key={result.label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`glass-card p-6 md:p-8 rounded-2xl text-center group cursor-default ${
              result.color === "red"
                ? "hover:shadow-[0_0_30px_rgba(255,45,61,0.1)]"
                : "hover:shadow-[0_0_30px_rgba(37,99,235,0.1)]"
            }`}
          >
            <div
              className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 transition-colors ${
                result.color === "red"
                  ? "bg-accent-red/10 group-hover:bg-accent-red/15"
                  : "bg-accent-blue/10 group-hover:bg-accent-blue/15"
              }`}
            >
              <result.icon
                className={`w-7 h-7 ${
                  result.color === "red"
                    ? "text-accent-red"
                    : "text-accent-blue"
                }`}
              />
            </div>
            <p
              className={`text-3xl md:text-4xl font-black mb-2 ${
                result.color === "red"
                  ? "gradient-text-red"
                  : "gradient-text-blue"
              }`}
            >
              {result.number}
            </p>
            <p className="text-sm font-semibold text-text-primary">
              {result.label}
            </p>
            <p className="text-xs text-text-muted mt-0.5">{result.sublabel}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
