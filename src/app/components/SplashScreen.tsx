"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[99999] overflow-hidden bg-[#020817]"
        >
          {/* Premium background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.18),transparent_60%)]" />

          {/* Moving light */}
          <motion.div
            animate={{
              x: ["-20%", "120%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 h-full w-40 rotate-12 bg-white/10 blur-3xl"
          />

          {/* Floating particles */}
{Array.from({ length: 25 }, (_, i) => (
  <motion.span
    key={i}
    className="absolute h-1 w-1 rounded-full rounded-full bg-cyan-300/70"
    style={{
      left: `${(i * 4) % 100}%`,
      bottom: "-20px",
    }}
    initial={{
      opacity: 0,
      y: 0,
    }}
    animate={{
      y: -1000,
      opacity: [0, 1, 0],
    }}
    transition={{
      duration: 5 + (i % 5),
      delay: i * 0.2,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
    }}
  />
))}

          {/* Content */}
          <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">

            {/* Logo */}
            <motion.div
              initial={{ scale: 0.3, opacity: 0, rotate: -10 }}
              animate={{
                scale: 1,
                opacity: 1,
                rotate: 0,
                y: [0, -10, 0],
              }}
              transition={{
                duration: 1.5,
                y: {
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                },
              }}
              className="drop-shadow-[0_0_40px_rgba(14,165,233,0.6)]"
            >
              <Image
                src="/logo.webp"
                alt="Ocean World Logistics"
                width={280}
                height={280}
                priority
                className="h-auto w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px]"
              />
            </motion.div>

            {/* Welcome */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-8 text-2xl font-bold uppercase tracking-[0.35em] text-white sm:text-3xl md:text-4xl"
            >
              Welcome To
            </motion.h1>

            {/* Brand */}
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 1 }}
              className="mt-4 bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text text-3xl font-black text-transparent sm:text-4xl md:text-6xl lg:text-7xl"
            >
              OCEAN WORLD
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9, duration: 0.8 }}
              className="mt-2 text-xl font-semibold tracking-[0.25em] text-cyan-300 sm:text-2xl md:text-3xl"
            >
              LOGISTICS
            </motion.h3>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4, duration: 0.8 }}
              className="mt-6 max-w-2xl text-sm text-slate-300 sm:text-base md:text-lg lg:text-xl"
            >
              Pakistan’s Trusted Global Clearing & Forwarding Partner
            </motion.p>

            {/* Loading Bar */}
            <div className="mt-10 h-1.5 w-64 overflow-hidden rounded-full bg-white/10 sm:w-72 md:w-96">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{
                  duration: 4,
                  ease: "linear",
                }}
                className="h-full w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300"
              />
            </div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              className="mt-4 text-xs tracking-[0.3em] text-slate-400 uppercase sm:text-sm"
            >
              Loading Experience
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}