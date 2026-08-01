"use client";

import { Orbitron } from "next/font/google";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import Link from "next/link";

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
});

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
    <motion.nav aria-label="Main Navigation"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
  ? "bg-slate-900/90 backdrop-blur-md shadow-2xl border-b border-white/10 py-2" 
  : "bg-gradient-to-r from-black via-slate-900 to-blue-900 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">

        {/* 1. ENHANCED LOGO (Bigger, Visible, SEO Optimized) */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Ocean World Logistics Home">
          <motion.div
  whileHover={{ scale: 1.05, rotate: 2 }}
>
  <Image
    src="/logo.webp"
    alt="Ocean World Logistics Official Company Logo"
    width={80}
    height={80}
    quality={75}
    priority
    className="h-10 md:h-12 w-auto object-contain drop-shadow-2xl"
  />
</motion.div>
          <span
  className={`${orbitron.className} text-white font-extrabold text-base md:text-xl lg:text-2xl tracking-wide leading-tight group-hover:text-teal-300 transition-colors duration-300`}
>
            OCEAN WORLD <span className="text-teal-400">LOGISTICS</span>
          </span>
        </Link>

        {/* 2. DESKTOP MENU (3D Animated & Professional) */}
        <ul className="hidden lg:flex items-center space-x-2"  role="menubar">
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
                className="px-4 py-2 text-white font-semibold tracking-wide relative z-10 transition-colors duration-300 group-hover:text-teal-300"
              >
                {item.label}
                {/* Animated 3D-style underline */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 transition-all duration-300 group-hover:w-3/4 rounded-full shadow-[0_0_10px_rgba(45,212,191,0.8)]" />
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* 3. CONTACT CTA */}
<div className="hidden lg:flex items-center">
  <motion.div
    whileHover={{
      scale: 1.05,
      boxShadow: "0px 0px 20px rgba(45,212,191,0.35)",
    }}
    whileTap={{ scale: 0.96 }}
  >
    <Link
      href="/contact"
      prefetch
      className="flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 px-5 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:from-teal-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
      aria-label="Contact Ocean World Logistics"
    >
      <Phone
        className="w-5 h-5"
        aria-hidden="true"
      />
      <span>Contact Us</span>
    </Link>
  </motion.div>
</div>

        {/* 4. MOBILE MENU BUTTON */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Open mobile navigation menu"
        >
          <Menu className="w-8 h-8" aria-hidden="true"/>
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
                <span className={`${orbitron.className} text-white font-bold text-xl`}>
                  Menu
                </span>
                <motion.button
                  whileTap={{ scale: 0.9, rotate: 90 }}
                  onClick={() => setIsOpen(false)}
                  className="text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="Close mobile navigation menu"
                >
                  <X className="w-7 h-7" aria-hidden="true"/>
                </motion.button>
              </div>

              {/* Links */}
              <ul className="flex-1 overflow-y-auto py-8 px-6 space-y-2" role="menu">
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
  <motion.div
    whileTap={{ scale: 0.95 }}
  >
    <Link
      href="/contact"
      prefetch
      onClick={() => setIsOpen(false)}
      className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:from-teal-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
      aria-label="Contact Ocean World Logistics"
    >
      <Phone
        className="w-5 h-5"
        aria-hidden="true"
      />
      <span>Get in Touch</span>
    </Link>
  </motion.div>

  <p className="mt-4 text-center text-sm text-gray-400">
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