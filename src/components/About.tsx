"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const bullets = [
  "Price Action Specialist",
  "Risk Management Expert",
  "Market Psychology Trainer",
  "Live Market Support",
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left — Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative">
            {/* Background glow */}
            <div className="absolute -inset-4 bg-accent-blue/5 rounded-3xl blur-2xl" />

            {/* Image card */}
            <div className="relative glass-card rounded-3xl overflow-hidden p-1.5">
              <div className="relative rounded-2xl overflow-hidden bg-navy-800">
                <Image
                  src="/profile.png"
                  alt="Bull Runner — Photographer turned Trader, Scalper, IPO Investor"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover rounded-2xl"
                />

                {/* Cinematic overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent" />

                {/* Brand badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-card px-5 py-4 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent-blue/15 flex items-center justify-center">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-5 h-5 text-accent-blue"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                          <polyline points="16 7 22 7 22 13" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-text-primary">
                          BULL RUNNER
                        </p>
                        <p className="text-[11px] text-text-muted font-medium">
                          @bullrunner__official
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right — Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-red/30 bg-accent-red/10 mb-6">
            <span className="text-xs font-semibold text-accent-red tracking-wide uppercase">
              About Me
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            <span className="text-accent-red block text-xl mb-3 tracking-wide uppercase font-bold">Welcome to BULL RUNNER</span>
            <span className="text-text-primary">Trader Mentor </span>
            <br />
            <span className="gradient-text-red">Market Analyst</span>
          </h2>

          {/* Paragraph */}
          <p className="text-text-muted text-lg leading-relaxed mb-4 max-w-lg">
            I am a stock market trader and IPO investor with a strong interest in financial markets and wealth creation. My investment philosophy combines technical analysis, fundamental research, and disciplined risk management to identify high-potential opportunities.
          </p>
          <p className="text-text-muted text-base leading-relaxed mb-8 max-w-lg">
            We primarily focus on <span className="text-accent-blue font-semibold">Quick gains</span>. Quick gains are possible in two ways:
            <br />
            <span className="inline-block mt-2 font-medium text-text-primary">1. Trading</span>
            <br />
            <span className="inline-block mt-1 font-medium text-text-primary">2. IPO investment</span>
          </p>

          {/* Journey Highlight */}
          <div className="glass-card px-5 py-4 rounded-xl mb-8 inline-flex items-center gap-4 max-w-lg">
            <div className="flex items-center gap-3 text-sm">
              <span className="text-accent-red font-bold text-lg">₹50K</span>
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-text-muted" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
              <span className="text-accent-blue font-bold text-lg">₹25 Lakhs</span>
            </div>
            <div className="h-8 w-px bg-border-subtle" />
            <div className="text-xs text-text-muted">
              <span className="text-text-primary font-semibold">Made at 22</span>
              <br />
              Not SEBI Registered
            </div>
          </div>

          {/* Bullets */}
          <div className="space-y-4 mb-10">
            {bullets.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-accent-blue flex-shrink-0" />
                <span className="text-text-primary font-medium">{item}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl border border-accent-blue/40 bg-accent-blue/10 text-accent-blue-light hover:bg-accent-blue/20 hover:border-accent-blue/60 transition-all group"
          >
            Know More About Me
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
