"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Radio,
  BookOpen,
  PieChart,
  ArrowRight,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const services = [
  {
    icon: GraduationCap,
    title: "Mentorship",
    description:
      "One-on-one mentorship program to help you grow consistently. Get personalized guidance on your trading journey with structured learning paths.",
    color: "blue" as const,
  },
  {
    icon: Radio,
    title: "Live Market Support",
    description:
      "Daily market updates, real-time analysis and trade ideas. Join live sessions where we break down markets together in real-time.",
    color: "red" as const,
  },
  {
    icon: BookOpen,
    title: "Courses",
    description:
      "Structured courses from basics to advanced levels. Learn price action, risk management, and trading psychology at your own pace.",
    color: "blue" as const,
  },
  {
    icon: PieChart,
    title: "Portfolio Review",
    description:
      "Get your portfolio reviewed and optimized by an expert. Identify weaknesses, improve position sizing, and maximize returns.",
    color: "red" as const,
  },
];

export default function Services() {
  return (
    <SectionWrapper id="services">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-blue/30 bg-accent-blue/10 mb-6">
          <span className="text-xs font-semibold text-accent-blue-light tracking-wide uppercase">
            What I Offer
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4">
          Services That Help You{" "}
          <span className="gradient-text-blue">Grow</span>
        </h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          From mentorship to live market support — everything you need to level
          up your trading game and achieve consistent profitability.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`glass-card p-7 rounded-2xl group cursor-pointer ${
              service.color === "red"
                ? "hover:shadow-[0_0_30px_rgba(255,45,61,0.08)]"
                : "hover:shadow-[0_0_30px_rgba(37,99,235,0.08)]"
            }`}
          >
            <div
              className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 transition-colors ${
                service.color === "red"
                  ? "bg-accent-red/10 group-hover:bg-accent-red/15"
                  : "bg-accent-blue/10 group-hover:bg-accent-blue/15"
              }`}
            >
              <service.icon
                className={`w-7 h-7 ${
                  service.color === "red"
                    ? "text-accent-red"
                    : "text-accent-blue"
                }`}
              />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-3">
              {service.title}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed mb-5">
              {service.description}
            </p>
            <a
              href="#contact"
              className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors group/link ${
                service.color === "red"
                  ? "text-accent-red hover:text-accent-red/80"
                  : "text-accent-blue hover:text-accent-blue-light"
              }`}
            >
              Learn More
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
