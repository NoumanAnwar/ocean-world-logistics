"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect for a premium glassmorphism feel
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/aboutus", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/ourclients", label: "Our Clients" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-slate-900/90 backdrop-blur-md shadow-2xl border-b border-white/10 py-3" 
          : "bg-gradient-to-r from-black via-slate-900 to-blue-900 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">

        {/* 1. ENHANCED LOGO (Bigger, Visible, SEO Optimized) */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Ocean World Logistics Home">
          <motion.img
            whileHover={{ scale: 1.05, rotate: 2 }}
            src="/logo.png"
            alt="Ocean World Logistics Official Company Logo"
            className="h-14 md:h-16 w-auto object-contain drop-shadow-2xl"
            width={64}
            height={64}
          />
          <span
            className="text-white font-extrabold text-lg md:text-2xl lg:text-3xl tracking-wide leading-tight group-hover:text-teal-300 transition-colors duration-300"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            OCEAN WORLD <span className="text-teal-400">LOGISTICS</span>
          </span>
        </Link>

        {/* 2. DESKTOP MENU (3D Animated & Professional) */}
        <ul className="hidden lg:flex items-center space-x-2">
          {navLinks.map((item, idx) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Link
                href={item.href}
                className="px-5 py-2.5 text-white font-semibold tracking-wide relative z-10 transition-colors duration-300 group-hover:text-teal-300"
              >
                {item.label}
                {/* Animated 3D-style underline */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 transition-all duration-300 group-hover:w-3/4 rounded-full shadow-[0_0_10px_rgba(45,212,191,0.8)]" />
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* 3. CONTACT CTA (Replaced MapPin with a Premium Button) */}
        <div className="hidden lg:flex items-center">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(45, 212, 191, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white px-6 py-3 rounded-full font-bold shadow-lg transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            <span>Contact Us</span>
          </motion.a>
        </div>

        {/* 4. MOBILE MENU BUTTON */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Open mobile navigation menu"
        >
          <Menu className="w-8 h-8" />
        </motion.button>
      </div>

      {/* 5. PREMIUM MOBILE SIDEBAR (Smooth 3D Slide-in) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
            />
            
            {/* Sidebar Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-80 h-full bg-slate-900 border-l border-white/10 shadow-2xl z-50 lg:hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <span className="text-white font-bold text-xl" style={{ fontFamily: "Orbitron, sans-serif" }}>
                  Menu
                </span>
                <motion.button
                  whileTap={{ scale: 0.9, rotate: 90 }}
                  onClick={() => setIsOpen(false)}
                  className="text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="Close mobile navigation menu"
                >
                  <X className="w-7 h-7" />
                </motion.button>
              </div>

              {/* Links */}
              <ul className="flex-1 overflow-y-auto py-8 px-6 space-y-2">
                {navLinks.map((item, idx) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-4 px-4 text-lg font-semibold text-gray-200 rounded-xl hover:bg-white/10 hover:text-teal-400 hover:translate-x-2 transition-all duration-300"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile CTA */}
              <div className="p-6 border-t border-white/10">
                <motion.a
                  href="/contact"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-4 rounded-xl font-bold shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get in Touch</span>
                </motion.a>
                <p className="text-center text-gray-400 text-sm mt-4">
                  © 2026 Ocean World Logistics
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}