"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Building2, CheckCircle2, ArrowRight } from "lucide-react";

// 1. Client Names Array (SEO-friendly, text-based for fast loading and indexing)
const clients = [
  "Ahmad Textile & Blanket Industry",
  "Royal Industry",
  "Fabrotex Industry",
  "Hazrat Trading Co",
  "Weave Zone Industry",
  "Moverz Enterprises",
  "Khyber Gold",
  "New Mustafa Textile Mills",
  "Majestic Textile Industry",
  "Chacha Nisar Tea",
  "Insaf Food",
  "Imtiaz Textile",
  "Bara Textile & Blanket Industries",
  "Zaitoon Industry",
  "Prism Industry",
  "Dream Textile",
  "Zabih Ullah Industry",
  "Best Tea & Food Industry",
  "Hnr pvt Ltd ",
  "Orient electronics pvt Ltd",
  "Interwood pvt Ltd",
  "Zrk Industry pvt Ltd",
  "TCL electronics pvt Ltd",
];

// 2. Slider Images (Replace these paths with your actual large logistics images)
const sliderImages = [
  "/hero1.webp", // e.g., Large warehouse or port operation
  "/transport.webp", // e.g., Fleet of trucks on highway
  "/shippingservice.webp", // e.g., Shipping containers at Karachi port
  "/importexport.webp", // e.g., Cross-border transit or team photo
];

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export default function OurClients() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-cycle slider images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ==========================================
            1. HEADING & CONTENT SECTION
        ========================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            <Building2 className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm tracking-wide">
              Trusted Partners
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              Clients
            </span>
          </h2>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            Trusted by manufacturers, traders, and exporters across Pakistan
          </h3>
          
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Ocean World Logistics is proud to serve a growing base of clients across textiles, food, and general trading sectors. 
            Their continued trust and repeat business are the clearest measure of our reliability.
          </p>
        </motion.div>

        {/* ==========================================
            2. MOVING IMAGES SLIDER (Below Heading)
        ========================================== */}
        <div className="relative w-full max-w-6xl mx-auto h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-20 border border-gray-200">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1] as const }} 
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={sliderImages[currentSlide]}
                alt={`Ocean World Logistics trusted partner operations showcase ${currentSlide + 1}`}
                className="w-full h-full object-cover"
                loading="eager"
                width={1200}
                height={600}
              />
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Slider Indicators (Dots) */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
            {sliderImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  currentSlide === idx 
                    ? "w-8 bg-teal-400" 
                    : "w-2 bg-white/60 hover:bg-white"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Left/Right Navigation Arrows (Optional but professional) */}
          <button 
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-all"
            aria-label="Previous slide"
          >
            <ArrowRight className="w-6 h-6 rotate-180" />
          </button>
          <button 
            onClick={() => setCurrentSlide((prev) => (prev + 1) % sliderImages.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-all"
            aria-label="Next slide"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        {/* ==========================================
            3. CLIENT DETAILS / NAMES GRID (Below Images)
        ========================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                y: -6, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white rounded-2xl p-5 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 flex items-center gap-4"
            >
              {/* Icon Badge */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center group-hover:from-blue-100 group-hover:to-teal-100 transition-colors duration-300">
                <CheckCircle2 className="w-5 h-5 text-blue-600 group-hover:text-teal-600 transition-colors duration-300" />
              </div>
              
              {/* Client Name (Semantic H3 for SEO) */}
              <h3 className="text-gray-800 font-semibold text-sm md:text-base leading-snug group-hover:text-blue-700 transition-colors duration-300">
                {client}
              </h3>

              {/* Subtle Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-900 to-teal-800 rounded-3xl p-10 lg:p-14 shadow-2xl relative overflow-hidden">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Join Our Growing Family
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Become part of Ocean World Logistics' success story. Experience reliable, efficient, and professional logistics services tailored to your business.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-teal-400 to-cyan-400 text-blue-900 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                Partner With Us
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}