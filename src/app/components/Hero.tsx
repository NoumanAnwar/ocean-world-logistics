"use client";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, ShieldCheck, Globe } from "lucide-react";

// SEO-optimized image array with descriptive alt text
const images = [
  { 
    src: "/hero1.jpg", 
    alt: "Ocean World Logistics customs clearing and freight forwarding operations at Karachi port" 
  },
  { 
    src: "/pic03.jpg", 
    alt: "Professional road transportation and bonded carrier services across Pakistan" 
  },
  { 
    src: "/importexport.jpg", 
    alt: "Secure warehousing and DG cargo handling facilities by Ocean World Logistics" 
  },
  { 
    src: "/hero6.jpg", 
    alt: "Cross-border Afghan transit trade and regional logistics network under APTTA" 
  },
  { 
    src: "/1.jpg", 
    alt: "Expert import and export consultancy and documentation services in Pakistan" 
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Cycle through images every 5 seconds for a relaxed, cinematic feel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Staggered text animation variants
  const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

  return (
    <section 
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900" 
      aria-label="Ocean World Logistics Hero Section"
    >
      
      {/* 1. Advanced Cinematic Image Slider (SEO Optimized with <img> tags) */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.15, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{
  duration: 1.2,
  ease: [0.42, 0, 0.58, 1] as const,
}}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={images[current].src}
              alt={images[current].alt}
              className="w-full h-full object-cover"
              loading={current === 0 ? "eager" : "lazy"}
              width={1920}
              height={1080}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. Professional Multi-Layer Overlay for perfect text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-slate-950/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

      {/* 3. Hero Content with 3D Staggered Animations */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
          }}
          className="text-left"
        >
          <motion.div variants={textVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 border border-teal-500/30 rounded-full mb-6 backdrop-blur-sm">
            <ShieldCheck className="w-5 h-5 text-teal-400" />
            <span className="text-teal-300 font-semibold text-sm tracking-wide uppercase">Trusted Since 2017</span>
          </motion.div>

          <motion.h1 variants={textVariants} className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Seamless <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Cross-Border</span> <br className="hidden md:block" />
            Logistics & Clearance
          </motion.h1>

          <motion.p variants={textVariants} className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
            Your dependable partner for customs clearing, freight forwarding, and transportation across Pakistan, Afghanistan, and Iran. We move your cargo with precision, transparency, and zero surprises.
          </motion.p>

          <motion.div variants={textVariants} className="flex flex-wrap gap-4">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(45, 212, 191, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-full shadow-xl transition-all duration-300 text-lg"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="/services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg"
            >
              Explore Services
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side: 3D Floating Stats/Trust Card (Visible on Desktop) */}
        <motion.div 
          initial={{ opacity: 0, x: 50, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{
  duration: 1,
  delay: 0.6,
  type: "spring",
  stiffness: 120,
  damping: 18,
}}
          className="hidden lg:block perspective-1000"
        >
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl transform hover:rotate-y-2 transition-transform duration-500">
            <div className="absolute -top-6 -right-6 bg-teal-500 text-white p-4 rounded-2xl shadow-lg">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Regional Coverage</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-200">
                <div className="w-2 h-2 rounded-full bg-teal-400" />
                <span>Karachi, Punjab & KPK</span>
              </div>
              <div className="flex items-center gap-4 text-gray-200">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <span>Afghanistan (Kabul) via APTTA</span>
              </div>
              <div className="flex items-center gap-4 text-gray-200">
                <div className="w-2 h-2 rounded-full bg-indigo-400" />
                <span>Gwadar Port & Iran Corridors</span>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
              <div>
                <p className="text-3xl font-bold text-teal-400">24/7</p>
                <p className="text-sm text-gray-400">Client Support</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-400">100%</p>
                <p className="text-sm text-gray-400">Compliance</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* 4. Bottom Slider Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              current === idx ? "w-12 bg-teal-400" : "w-3 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}