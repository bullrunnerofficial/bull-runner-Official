"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MessageSquare } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    // TODO: Replace with your actual Web3Forms access key
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("sent");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus("idle"), 5000); // Reset button after 5s
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <main className="relative overflow-hidden w-full pt-24 min-h-screen flex flex-col">
      <SectionWrapper id="contact">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              <span className="text-text-primary">Get in </span>
              <span className="gradient-text-blue">Touch</span>
            </h1>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Ready to take your trading to the next level? Reach out for mentorship, course details, or partnership inquiries.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6">
              <div className="glass-card p-6 rounded-2xl glow-blue-subtle">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-4 border border-accent-blue/20">
                  <Mail className="w-6 h-6 text-accent-blue" />
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">Email Us</h3>
                <p className="text-sm text-text-muted mb-4">We usually respond within 24 hours.</p>
                <a href="mailto:bullrunnerofficial@gmail.com" className="text-accent-blue font-semibold hover:text-accent-blue-light transition-colors">
                  bullrunnerofficial@gmail.com
                </a>
              </div>

              <div className="glass-card p-6 rounded-2xl glow-red-subtle">
                <div className="w-12 h-12 rounded-xl bg-accent-red/10 flex items-center justify-center mb-4 border border-accent-red/20">
                  <MessageSquare className="w-6 h-6 text-accent-red" />
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">Community Support</h3>
                <p className="text-sm text-text-muted mb-4">Join our free telegram group for daily updates.</p>
                <a href="#" className="text-accent-red font-semibold hover:text-accent-red-light transition-colors">
                  Join Telegram
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/5 rounded-full blur-[80px]" />
                
                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                  {/* Honeypot Spam Protection */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-text-primary">Your Name</label>
                      <input 
                        type="text" 
                        name="name"
                        id="name"
                        required
                        className="w-full bg-navy-900/50 border border-border-subtle rounded-xl px-4 py-3 text-text-primary placeholder:text-text-dim focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-text-primary">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        id="email"
                        required
                        className="w-full bg-navy-900/50 border border-border-subtle rounded-xl px-4 py-3 text-text-primary placeholder:text-text-dim focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-text-primary">Subject</label>
                    <select 
                      name="subject"
                      id="subject"
                      className="w-full bg-navy-900/50 border border-border-subtle rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all appearance-none"
                    >
                      <option value="mentorship">Mentorship Inquiry</option>
                      <option value="webinar">Upcoming Webinars</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-text-primary">Message</label>
                    <textarea 
                      name="message"
                      id="message"
                      required
                      rows={5}
                      className="w-full bg-navy-900/50 border border-border-subtle rounded-xl px-4 py-3 text-text-primary placeholder:text-text-dim focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status !== "idle"}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold rounded-xl bg-accent-blue hover:bg-accent-blue-light text-white btn-glow-blue transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "idle" && (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                    {status === "sending" && "Sending..."}
                    {status === "sent" && "Message Sent Successfully!"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
