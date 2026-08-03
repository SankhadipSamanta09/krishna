"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Camera,
  Globe,
  Video,
  MessageCircle,
  CreditCard,
  Truck,
  ShieldCheck,
  RotateCcw,
  ChevronRight,
  Heart,
  Send,
} from "lucide-react";
import Link from "next/link";

// ─── Data ───────────────────────────────────────────────
const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Story", href: "/story" },
  { label: "Careers", href: "/careers" },
  { label: "Press & Media", href: "/press" },
  { label: "Blog", href: "/blog" },
  { label: "Store Locator", href: "/stores" },
];

const customerCare = [
  { label: "Contact Us", href: "/contact" },
  { label: "FAQs", href: "/faqs" },
  { label: "Shipping Policy", href: "/shipping" },
  { label: "Returns & Exchange", href: "/returns" },
  { label: "Track Order", href: "/track" },
  { label: "Size Guide", href: "/size-guide" },
];

const collections = [
  { label: "Yatra Collection", href: "/yatra" },
  { label: "Swarna Collection", href: "/swarna" },
  { label: "Diamond Dreams", href: "/diamond" },
  { label: "Bridal Jewellery", href: "/bridal" },
  { label: "Gold Coins", href: "/coins" },
  { label: "Gift Cards", href: "/gift-cards" },
];

const trustBadges = [
  { icon: Truck, label: "Free Shipping", sub: "On orders above ₹25,000" },
  { icon: ShieldCheck, label: "BIS Hallmarked", sub: "100% Certified Gold" },
  { icon: RotateCcw, label: "Easy Returns", sub: "30-day return policy" },
  { icon: CreditCard, label: "Secure Payment", sub: "SSL Encrypted" },
];

const socialLinks = [
  { icon: Camera, href: "https://instagram.com", label: "Instagram" },
  { icon: Globe, href: "https://facebook.com", label: "Facebook" },
  { icon: Video, href: "https://youtube.com", label: "YouTube" },
  { icon: MessageCircle, href: "https://twitter.com", label: "Twitter" },
];

const paymentMethods = ["Visa", "MasterCard", "RuPay", "UPI", "Paytm", "GPay"];

// ─── Component ──────────────────────────────────────────
export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="w-full bg-[#1a1209] text-white overflow-hidden">
      {/* ── Trust Badges Strip ── */}
      <div className="border-b border-[#3d2b1f]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3 md:gap-4"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#8b6914]/20 flex items-center justify-center flex-shrink-0">
                  <badge.icon className="w-5 h-5 md:w-6 md:h-6 text-[#c9a84c]" />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-semibold text-[#f5f0e8]">
                    {badge.label}
                  </p>
                  <p className="text-[10px] md:text-xs text-[#a09080]">
                    {badge.sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Newsletter Section ── */}
      <div className="border-b border-[#3d2b1f]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-serif text-[#c9a84c] mb-2">
                Join the Krishna Family
              </h3>
              <p className="text-sm text-[#a09080]">
                Subscribe for exclusive offers, new arrivals & divine inspiration
              </p>
            </div>
            <form
              onSubmit={handleSubscribe}
              className="w-full md:w-auto flex gap-2 md:gap-3"
            >
              <div className="relative flex-1 md:w-80">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 md:py-3.5 bg-[#2c1f14] border border-[#3d2b1f] rounded-lg text-sm text-white placeholder-[#6b5b4f] focus:outline-none focus:border-[#8b6914] focus:ring-1 focus:ring-[#8b6914]/30 transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-5 py-3 md:px-6 md:py-3.5 bg-[#8b6914] hover:bg-[#c9a84c] text-white rounded-lg text-sm font-medium flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#8b6914]/20 flex-shrink-0"
              >
                {subscribed ? (
                  <>
                    <Heart className="w-4 h-4 fill-current" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Subscribe
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ── Main Footer Content ── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-5">
              <h2 className="text-2xl md:text-3xl font-serif text-[#c9a84c] tracking-wider">
                KRISHNA
              </h2>
            </Link>
            <p className="text-sm text-[#a09080] leading-relaxed mb-6 max-w-sm">
              Crafting divine jewelry since 2000. Each piece tells a story of
              heritage, devotion, and timeless elegance. Experience the sacred
              art of fine jewelry.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#8b6914] mt-0.5 flex-shrink-0" />
                <p className="text-sm text-[#a09080]">
                  123 Temple Street, Puri, Odisha, India - 752001
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#8b6914] flex-shrink-0" />
                <p className="text-sm text-[#a09080]">+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#8b6914] flex-shrink-0" />
                <p className="text-sm text-[#a09080]">care@krishnajewellery.com</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#8b6914] flex-shrink-0" />
                <p className="text-sm text-[#a09080]">
                  Mon - Sat: 10:00 AM - 8:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-[#c9a84c] uppercase tracking-wider mb-4 md:mb-5">
              Company
            </h4>
            <ul className="space-y-2.5 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#a09080] hover:text-[#c9a84c] transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#8b6914]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-[#c9a84c] uppercase tracking-wider mb-4 md:mb-5">
              Customer Care
            </h4>
            <ul className="space-y-2.5 md:space-y-3">
              {customerCare.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#a09080] hover:text-[#c9a84c] transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#8b6914]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-[#c9a84c] uppercase tracking-wider mb-4 md:mb-5">
              Collections
            </h4>
            <ul className="space-y-2.5 md:space-y-3">
              {collections.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#a09080] hover:text-[#c9a84c] transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#8b6914]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & App */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-[#c9a84c] uppercase tracking-wider mb-4 md:mb-5">
              Follow Us
            </h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#2c1f14] border border-[#3d2b1f] flex items-center justify-center text-[#a09080] hover:bg-[#8b6914] hover:text-white hover:border-[#8b6914] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                </Link>
              ))}
            </div>

            <h4 className="text-sm font-semibold text-[#c9a84c] uppercase tracking-wider mb-3">
              Download App
            </h4>
            <div className="flex gap-2">
              <button className="px-3 py-2 bg-[#2c1f14] border border-[#3d2b1f] rounded-lg text-xs text-[#a09080] hover:border-[#8b6914] hover:text-[#c9a84c] transition-all">
                App Store
              </button>
              <button className="px-3 py-2 bg-[#2c1f14] border border-[#3d2b1f] rounded-lg text-xs text-[#a09080] hover:border-[#8b6914] hover:text-[#c9a84c] transition-all">
                Play Store
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Payment Methods ── */}
      <div className="border-t border-[#3d2b1f]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-[#6b5b4f]">We Accept:</p>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {paymentMethods.map((method) => (
                <span
                  key={method}
                  className="px-2.5 py-1 md:px-3 md:py-1.5 bg-[#2c1f14] border border-[#3d2b1f] rounded text-[10px] md:text-xs text-[#a09080]"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-[#3d2b1f] bg-[#140e07]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
            <p className="text-xs text-[#6b5b4f]">
              © 2026 Krishna Jewellery. All rights reserved.
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <Link
                href="/privacy"
                className="text-xs text-[#6b5b4f] hover:text-[#a09080] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-[#6b5b4f] hover:text-[#a09080] transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-xs text-[#6b5b4f] hover:text-[#a09080] transition-colors"
              >
                Sitemap
              </Link>
            </div>
            <p className="text-xs text-[#6b5b4f] flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-[#c41e3a] fill-current" /> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}