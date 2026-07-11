"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const testimonials = [
  {
    quote:
      "Bull Runner changed the way I see the market. His strategies and mindset training are on another level. I went from losing consistently to profitable in just 3 months.",
    name: "Rohit Sharma",
    role: "Swing Trader",
    initials: "RS",
    accentColor: "blue" as const,
  },
  {
    quote:
      "The mentorship program helped me become consistent and confident in my trading journey. The risk management framework alone was worth 10x the investment.",
    name: "Arjun Mehta",
    role: "Options Trader",
    initials: "AM",
    accentColor: "red" as const,
  },
  {
    quote:
      "Best decision of my life! The live support and guidance is truly priceless. Having real-time market analysis and a mentor who actually trades changed everything.",
    name: "Vikram S.",
    role: "Intraday Trader",
    initials: "VS",
    accentColor: "blue" as const,
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-blue/30 bg-accent-blue/10 mb-6">
          <span className="text-xs font-semibold text-accent-blue-light tracking-wide uppercase">
            Testimonials
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4">
          What My{" "}
          <span className="gradient-text-blue">Students</span> Say
        </h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          Hear from traders who transformed their journey through disciplined
          learning and market mastery.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className={`glass-card p-7 rounded-2xl flex flex-col group ${
              testimonial.accentColor === "red"
                ? "hover:shadow-[0_0_30px_rgba(255,45,61,0.08)]"
                : "hover:shadow-[0_0_30px_rgba(37,99,235,0.08)]"
            }`}
          >
            {/* Quote Icon */}
            <div
              className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5 ${
                testimonial.accentColor === "red"
                  ? "bg-accent-red/10"
                  : "bg-accent-blue/10"
              }`}
            >
              <Quote
                className={`w-5 h-5 ${
                  testimonial.accentColor === "red"
                    ? "text-accent-red"
                    : "text-accent-blue"
                }`}
              />
            </div>

            {/* Quote Text */}
            <p className="text-text-muted text-sm leading-relaxed flex-1 mb-6">
              &ldquo;{testimonial.quote}&rdquo;
            </p>

            {/* User Info */}
            <div className="flex items-center gap-3 pt-5 border-t border-border-subtle">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                  testimonial.accentColor === "red"
                    ? "bg-accent-red/15 text-accent-red"
                    : "bg-accent-blue/15 text-accent-blue"
                }`}
              >
                {testimonial.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary">
                  {testimonial.name}
                </p>
                <p className="text-xs text-text-muted">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
