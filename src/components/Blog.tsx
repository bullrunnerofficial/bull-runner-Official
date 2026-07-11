"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Mail, Sparkles } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const blogPosts = [
  {
    title: "Understanding Market Structure in 2024",
    category: "Price Action",
    categoryColor: "blue" as const,
    date: "10 Jul 2024",
    readTime: "5 min read",
    thumbnail: "chart" as const,
  },
  {
    title: "The Mindset of a Profitable Trader",
    category: "Trading Psychology",
    categoryColor: "red" as const,
    date: "07 Jul 2024",
    readTime: "4 min read",
    thumbnail: "candle" as const,
  },
  {
    title: "How to Manage Risk Like a Pro",
    category: "Risk Management",
    categoryColor: "red" as const,
    date: "05 Jul 2024",
    readTime: "4 min read",
    thumbnail: "portfolio" as const,
  },
];

function BlogThumbnail({ type }: { type: "chart" | "candle" | "portfolio" }) {
  return (
    <div className="relative w-full h-full bg-navy-800 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 chart-grid-bg opacity-50" />

      {type === "chart" && (
        <svg viewBox="0 0 200 120" className="w-full h-full p-4 opacity-40">
          <polyline
            points="10,90 30,70 50,80 70,50 90,60 110,30 130,40 150,20 170,35 190,15"
            stroke="#2563EB"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="190" cy="15" r="4" fill="#2563EB" />
        </svg>
      )}

      {type === "candle" && (
        <svg viewBox="0 0 200 120" className="w-full h-full p-4 opacity-40">
          {[30, 60, 90, 120, 150, 180].map((x, i) => (
            <g key={i}>
              <line
                x1={x}
                y1={20 + i * 5}
                x2={x}
                y2={100 - i * 5}
                stroke={i % 2 === 0 ? "#2563EB" : "#FF2D3D"}
                strokeWidth="1"
              />
              <rect
                x={x - 6}
                y={40 + i * 3}
                width="12"
                height={30 - i * 2}
                fill={i % 2 === 0 ? "#2563EB" : "#FF2D3D"}
                rx="1"
              />
            </g>
          ))}
        </svg>
      )}

      {type === "portfolio" && (
        <svg viewBox="0 0 200 120" className="w-full h-full p-4 opacity-40">
          <circle
            cx="100"
            cy="60"
            r="40"
            fill="none"
            stroke="#2563EB"
            strokeWidth="3"
            strokeDasharray="80 170"
          />
          <circle
            cx="100"
            cy="60"
            r="40"
            fill="none"
            stroke="#FF2D3D"
            strokeWidth="3"
            strokeDasharray="60 190"
            strokeDashoffset="-80"
          />
          <circle
            cx="100"
            cy="60"
            r="40"
            fill="none"
            stroke="#94A3B8"
            strokeWidth="3"
            strokeDasharray="40 210"
            strokeDashoffset="-140"
          />
        </svg>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-800/80 to-transparent" />
    </div>
  );
}

export default function Blog() {
  const [email, setEmail] = useState("");

  return (
    <SectionWrapper id="blog">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-blue/30 bg-accent-blue/10 mb-6">
          <span className="text-xs font-semibold text-accent-blue-light tracking-wide uppercase">
            Latest Market Insights
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4">
          Read My Latest Blog Posts
        </h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          Insights on price action, trading psychology, risk management, and
          market analysis to sharpen your edge.
        </p>
      </div>

      {/* Blog Grid + Newsletter */}
      <div className="grid lg:grid-cols-4 gap-5">
        {/* Blog Cards */}
        {blogPosts.map((post, i) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
          >
            {/* Thumbnail */}
            <div className="aspect-[16/10] overflow-hidden">
              <BlogThumbnail type={post.thumbnail} />
            </div>

            {/* Content */}
            <div className="p-5">
              {/* Category Badge */}
              <span
                className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-3 ${
                  post.categoryColor === "red"
                    ? "bg-accent-red/15 text-accent-red"
                    : "bg-accent-blue/15 text-accent-blue"
                }`}
              >
                {post.category}
              </span>

              <h3 className="text-base font-bold text-text-primary mb-3 group-hover:text-accent-blue transition-colors leading-snug">
                {post.title}
              </h3>

              <div className="flex items-center gap-3 text-xs text-text-muted">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-text-dim" />
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </motion.article>
        ))}

        {/* Newsletter Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="glass-card rounded-2xl p-6 flex flex-col justify-center relative overflow-hidden"
        >
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-red/10 rounded-full blur-[50px]" />

          <div className="relative z-10">
            <div className="w-11 h-11 rounded-xl bg-accent-red/10 flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5 text-accent-red" />
            </div>

            <h3 className="text-xl font-bold text-text-primary mb-2">
              Stay Updated
            </h3>
            <p className="text-sm text-text-muted mb-5 leading-relaxed">
              Get market insights and exclusive content delivered to your inbox.
            </p>

            <div className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-dim" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-navy-900 border border-border-subtle text-sm text-text-primary placeholder:text-text-dim focus:outline-none focus:border-accent-blue/40 focus:ring-1 focus:ring-accent-blue/20 transition-all"
                />
              </div>
              <button className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold rounded-xl bg-accent-red hover:bg-accent-red/90 text-white btn-glow-red transition-all">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
