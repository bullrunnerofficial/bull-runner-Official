"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "navbar-glass shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-18 items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 overflow-hidden flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Bull Runner Logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold tracking-wide text-text-primary">
                  BULL <span className="text-accent-blue">RUNNER</span>
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] text-text-muted uppercase">
                  Trade. Learn. Earn.
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-medium text-text-muted hover:text-text-primary transition-colors duration-200 rounded-lg hover:bg-white/[0.04]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-accent-blue hover:bg-accent-blue-light text-white btn-glow-blue transition-all"
              >
                Join Community
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-border-subtle text-text-muted hover:text-text-primary hover:border-border-hover transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-navy-900 border-l border-border-subtle shadow-2xl"
            >
              <div className="flex items-center justify-between p-5 border-b border-border-subtle">
                <span className="text-lg font-bold text-text-primary">
                  Menu
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-9 h-9 rounded-lg border border-border-subtle text-text-muted hover:text-text-primary transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col p-5 gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="px-4 py-3 text-base font-medium text-text-muted hover:text-text-primary hover:bg-white/[0.04] rounded-xl transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div className="mt-4 pt-4 border-t border-border-subtle">
                  <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold rounded-xl bg-accent-blue hover:bg-accent-blue-light text-white transition-all"
                  >
                    Join Community
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
