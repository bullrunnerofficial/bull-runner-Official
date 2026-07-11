"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
} from "lucide-react";
import {
  InstagramIcon,
  YoutubeIcon,
  TelegramIcon,
  TwitterIcon,
} from "./SocialIcons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-18 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 chart-grid-bg opacity-40" />
      <div className="ambient-glow-blue -top-20 -left-40 opacity-50" />
      <div className="ambient-glow-red top-1/3 -right-20 opacity-30" />
      <div className="ambient-glow-blue bottom-0 right-1/4 opacity-20" />

      {/* Candlestick SVG Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute right-0 top-0 w-full h-full opacity-[0.04]"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="100" y1="200" x2="100" y2="600" stroke="#2563EB" strokeWidth="1" />
          <rect x="90" y="300" width="20" height="150" fill="#2563EB" rx="2" />
          <line x1="200" y1="150" x2="200" y2="550" stroke="#FF2D3D" strokeWidth="1" />
          <rect x="190" y="200" width="20" height="200" fill="#FF2D3D" rx="2" />
          <line x1="300" y1="250" x2="300" y2="500" stroke="#2563EB" strokeWidth="1" />
          <rect x="290" y="280" width="20" height="120" fill="#2563EB" rx="2" />
          <line x1="400" y1="180" x2="400" y2="520" stroke="#2563EB" strokeWidth="1" />
          <rect x="390" y="220" width="20" height="180" fill="#2563EB" rx="2" />
          <line x1="500" y1="300" x2="500" y2="600" stroke="#FF2D3D" strokeWidth="1" />
          <rect x="490" y="350" width="20" height="150" fill="#FF2D3D" rx="2" />
          <line x1="600" y1="200" x2="600" y2="480" stroke="#2563EB" strokeWidth="1" />
          <rect x="590" y="240" width="20" height="140" fill="#2563EB" rx="2" />
          <line x1="700" y1="280" x2="700" y2="550" stroke="#FF2D3D" strokeWidth="1" />
          <rect x="690" y="320" width="20" height="130" fill="#FF2D3D" rx="2" />
          <line x1="800" y1="150" x2="800" y2="450" stroke="#2563EB" strokeWidth="1" />
          <rect x="790" y="200" width="20" height="160" fill="#2563EB" rx="2" />
          <line x1="900" y1="220" x2="900" y2="500" stroke="#2563EB" strokeWidth="1" />
          <rect x="890" y="260" width="20" height="140" fill="#2563EB" rx="2" />
          <line x1="1000" y1="180" x2="1000" y2="480" stroke="#FF2D3D" strokeWidth="1" />
          <rect x="990" y="230" width="20" height="150" fill="#FF2D3D" rx="2" />
          <line x1="1100" y1="250" x2="1100" y2="520" stroke="#2563EB" strokeWidth="1" />
          <rect x="1090" y="290" width="20" height="130" fill="#2563EB" rx="2" />
          <polyline
            points="50,450 150,380 250,420 350,300 450,280 550,350 650,310 750,380 850,250 950,280 1050,320 1150,260"
            stroke="#2563EB"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Side — Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative z-10 lg:col-span-6 xl:col-span-5"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-blue/30 bg-accent-blue/10 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
              <span className="text-xs font-semibold text-accent-blue-light tracking-wide uppercase">
                Scalper • Option Buyer • IPO Investor
              </span>
            </motion.div>

            {/* Hero Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
              <span className="text-text-primary">DISCIPLINE </span>
              <span className="gradient-text-blue">TODAY</span>
              <span className="text-text-primary">,</span>
              <br />
              <span className="text-text-primary">FREEDOM </span>
              <span className="gradient-text-red">TOMORROW</span>
              <span className="text-text-primary">.</span>
            </h1>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-text-muted leading-relaxed max-w-lg mb-8"
            >
              Helping traders master the markets with knowledge, strategy, and
              psychology. Build consistency. Build confidence. Build wealth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl bg-accent-blue hover:bg-accent-blue-light text-white btn-glow-blue transition-all"
              >
                Join Our Community
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl border border-border-subtle bg-white/[0.03] hover:bg-white/[0.06] text-text-primary hover:border-border-hover transition-all"
              >
                Book Consultation
                <CalendarCheck className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <span className="text-xs font-medium text-text-dim tracking-wide">
                Connect with me:
              </span>
              {[
                { icon: InstagramIcon, href: "https://instagram.com/bullrunner__official", label: "Instagram" },
                { icon: YoutubeIcon, href: "#", label: "YouTube" },
                { icon: TelegramIcon, href: "#", label: "Telegram" },
                { icon: TwitterIcon, href: "#", label: "Twitter" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-xl border border-border-subtle bg-white/[0.02] text-text-muted hover:text-accent-blue hover:border-accent-blue/30 hover:bg-accent-blue/5 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side — Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block lg:col-span-6 lg:col-start-7"
          >
            <div className="relative">
              {/* Glow Background */}
              <div className="absolute inset-0 rounded-3xl">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-blue/20 rounded-full blur-[80px]" />
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent-red/15 rounded-full blur-[60px]" />
              </div>

              {/* Main Hero Image */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] w-full">
                <Image
                  src="/hero-image.png"
                  alt="Bull Runner — Trader, Mentor, Market Analyst with bull and candlestick charts"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover rounded-3xl"
                  priority
                />
                {/* Subtle overlay to blend edges */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-l from-transparent via-transparent to-navy-900/30 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-900/60 to-transparent pointer-events-none" />
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-6 -left-6 glass-card px-5 py-4 rounded-2xl glow-blue-subtle"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center">
                    <TrendingUpIcon className="w-5 h-5 text-accent-blue" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-text-primary">₹50K → ₹25L</p>
                    <p className="text-xs text-text-muted">Journey @ Age 22</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge — Top Right */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -top-3 -right-3 glass-card px-4 py-3 rounded-xl glow-red-subtle"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
                  <p className="text-xs font-bold text-accent-red">Indian Markets</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent pointer-events-none" />
    </section>
  );
}

function TrendingUpIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
