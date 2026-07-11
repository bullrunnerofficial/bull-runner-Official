"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-800 to-navy-700" />
          <div className="absolute inset-0 chart-grid-bg opacity-30" />

          {/* Ambient glows */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-accent-blue/15 rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-accent-red/10 rounded-full blur-[80px]" />

          {/* Border */}
          <div className="absolute inset-0 rounded-3xl border border-border-subtle" />

          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-extrabold text-text-primary mb-4 max-w-3xl mx-auto leading-tight"
            >
              Ready to Transform Your{" "}
              <span className="gradient-text-blue">Trading Journey</span>?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-text-muted text-lg max-w-xl mx-auto mb-10"
            >
              Join a disciplined community of traders who are committed to
              growth, consistency, and financial freedom.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold rounded-xl bg-accent-blue hover:bg-accent-blue-light text-white btn-glow-blue transition-all"
              >
                Join Our Community
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold rounded-xl border border-border-subtle bg-white/[0.04] hover:bg-white/[0.08] text-text-primary hover:border-border-hover transition-all"
              >
                Book a Free Call
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
