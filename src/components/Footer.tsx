"use client";

import { TrendingUp } from "lucide-react";
import Link from "next/link";
import {
  InstagramIcon,
  YoutubeIcon,
  TelegramIcon,
  TwitterIcon,
} from "./SocialIcons";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const resources = [
  { label: "Courses", href: "#" },
  { label: "Mentorship", href: "#" },
  { label: "Market Insights", href: "#" },
  { label: "Trading Psychology", href: "#" },
  { label: "Risk Management", href: "#" },
];

const support = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Disclaimer", href: "#" },
];

const socials = [
  { icon: InstagramIcon, href: "https://instagram.com/bullrunner__official", label: "Instagram" },
  { icon: YoutubeIcon, href: "#", label: "YouTube" },
  { icon: TelegramIcon, href: "#", label: "Telegram" },
  { icon: TwitterIcon, href: "#", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border-subtle bg-navy-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Block */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 pr-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent-blue/10 border border-accent-blue/20">
                <TrendingUp className="w-5 h-5 text-accent-blue" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold tracking-wide text-text-primary">
                  BULL <span className="text-accent-blue">RUNNER</span>
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] text-text-muted uppercase">
<<<<<<< HEAD
  Learn - Trade - Earn
=======
                  
>>>>>>> e884672 (Update footer)
                </span >
              </div >
            </Link >
    <p className="text-sm text-text-muted leading-relaxed max-w-xs mb-6">
      Empowering traders with knowledge, strategy and the right mindset
      to achieve financial freedom. Join the movement.
    </p>

  {/* Social Icons */ }
  <div className="flex items-center gap-2.5">
    <span className="text-xs text-text-dim font-medium mr-1">
      Let&apos;s Connect
    </span>
    {socials.map((social) => (
      <a
        key={social.label}
        href={social.href}
        aria-label={social.label}
        className="flex items-center justify-center w-9 h-9 rounded-lg border border-border-subtle bg-white/[0.02] text-text-muted hover:text-accent-blue hover:border-accent-blue/30 hover:bg-accent-blue/5 transition-all"
      >
        <social.icon className="w-4 h-4" />
      </a>
    ))}
  </div>
          </div >

    {/* Quick Links */ }
    < div >
            <h4 className="text-sm font-bold text-text-primary mb-5 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div >

    {/* Resources */ }
    < div >
            <h4 className="text-sm font-bold text-text-primary mb-5 tracking-wide">
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div >

    {/* Support */ }
    < div >
            <h4 className="text-sm font-bold text-text-primary mb-5 tracking-wide">
              Support
            </h4>
            <ul className="space-y-3">
              {support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div >
        </div >

    {/* Disclaimer Section */ }
    < div className = "py-8 border-t border-border-subtle" >
      <p className="text-xs text-text-dim leading-relaxed text-center max-w-5xl mx-auto">
        <strong className="text-text-muted">Disclaimer: We are not SEBI Registered.</strong> The content provided through my social media handles and this website is for informational and educational purposes only. Futures and Options (F&O) trading involves significant risk and is not suitable for all investors. You are solely responsible for your own investment and trading decisions. All investments carry risk, and past performance is not indicative of future results. Please consult with your financial advisor before taking any financial decisions.
      </p>
        </div >

    {/* Bottom Bar */ }
    < div className = "border-t border-border-subtle py-6 flex flex-col sm:flex-row items-center justify-between gap-4" >
          <p className="text-xs text-text-dim">
            © {new Date().getFullYear()} Bull Runner. All rights reserved.
          </p>
          <p className="text-xs text-text-dim">
            Built with discipline. Powered by the markets.
          </p>
        </div >
      </div >
    </footer >
  );
}
