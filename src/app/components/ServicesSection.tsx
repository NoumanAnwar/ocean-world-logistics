"use client";

import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { 
  FileText, Truck, Shield, Globe, Package, Ship, 
  ArrowUpDown, TrendingUp, MapPin, ArrowRight,
  ChevronLeft, ChevronRight, CheckCircle
} from "lucide-react";

// Service Data from Company Profile
const services = [
  {
    id: 1,
    title: "Customs Clearance",
    icon: FileText,
    image: "/customs.jpg",
    shortDesc: "A service you can count on, at every border and port.",
    fullDesc: "Navigating customs regulations, documentation, and compliance requirements can slow down even the simplest shipment. Ocean World Logistics removes that friction.",
    features: [
      "Complete documentation management",
      "Duty assessment and calculation",
      "Liaison with customs authorities",
      "Pakistan Customs regulations expertise",
      "Cross-border compliance for Afghanistan and Iran"
    ],
    color: "blue"
  },
  {
    id: 2,
    title: "Transportation",
    icon: Truck,
    image: "/hero6.jpg",
    shortDesc: "Domestic reach. Regional connections.",
    fullDesc: "Ocean World Logistics provides road transportation across Karachi, Punjab, and Khyber Pakhtunkhwa, with extended cross-border service into Afghanistan, Gwadar, and Iran.",
    features: [
      "Road transportation across Pakistan",
      "Cross-border service to Afghanistan, Gwadar, Iran",
      "Efficient routing and vehicle configuration",
      "On-time delivery guarantee",
      "Growing fleet and driver network"
    ],
    color: "teal"
  },
  {
    id: 3,
    title: "Bonded Carrier",
    icon: Shield,
    image: "/dg.jpg",
    shortDesc: "Reliable bonded transportation, backed by full compliance.",
    fullDesc: "As a bonded carrier, we provide secure, compliant transportation for goods moving under bond — from the port to dry ports, bonded warehouses, and inland destinations.",
    features: [
      "Secure bonded transportation",
      "Port to dry port movements",
      "Bonded warehouse services",
      "Strict customs bonding compliance",
      "Operational flexibility"
    ],
    color: "indigo"
  },
  {
    id: 4,
    title: "Afghan Transit Trade",
    icon: Globe,
    image: "/pakafghan.jpg",
    shortDesc: "Connecting Karachi and Gwadar to Afghanistan and beyond.",
    fullDesc: "Operating under the Pakistan–Afghanistan Transit Trade Agreement (APTTA), we facilitate the movement of transit cargo from Karachi and Gwadar into Afghanistan, including Kabul.",
    features: [
      "APTTA compliant operations",
      "Karachi and Gwadar to Afghanistan corridors",
      "Kabul and onward destinations",
      "International partner network",
      "Full shipment visibility"
    ],
    color: "cyan"
  },
  {
    id: 5,
    title: "Project Cargo",
    icon: Package,
    image: "/projectcargo.png",
    shortDesc: "Hassle-free handling for oversized and heavy equipment.",
    fullDesc: "For heavy machinery, oversized equipment, and specialized project shipments, we provide dedicated project cargo services with careful planning from route surveys to equipment selection.",
    features: [
      "Heavy machinery transportation",
      "Oversized equipment handling",
      "Route surveys and planning",
      "Specialized equipment selection",
      "Cost-effective solutions"
    ],
    color: "purple"
  },
  {
    id: 6,
    title: "Freight Forwarding",
    icon: Ship,
    image: "/shippingservice.jpg",
    shortDesc: "Freight to the world, managed end to end.",
    fullDesc: "Successful freight forwarding requires deep knowledge of customs regulations, carrier networks, and documentation standards. We manage this complexity on your behalf, whether cargo is moving by road or by sea.",
    features: [
      "Road and sea freight solutions",
      "Fixed shipment schedules",
      "Consolidation options",
      "Tailored cargo solutions",
      "Full compliance and security"
    ],
    color: "blue"
  },
  {
    id: 7,
    title: "Shipping Services",
    icon: ArrowUpDown,
    image: "/1.jpg ",
    shortDesc: "We move your goods safely, every time.",
    fullDesc: "Shipping across borders comes with challenges — shifting regulations, documentation requirements, and unpredictable transit conditions. We offer a range of shipment services for your critical logistics needs.",
    features: [
      "Road freight movements",
      "Short-sea freight services",
      "Customs handling",
      "Adaptive supply chain solutions",
      "Real-time tracking"
    ],
    color: "teal"
  },
  {
    id: 8,
    title: "Import & Export",
    icon: TrendingUp,
    image: "/importexport.jpg",
    shortDesc: "Your dependable import and export partner.",
    fullDesc: "We support importers and exporters with end-to-end facilitation — from documentation and customs compliance to coordinating transportation for goods entering or leaving Pakistan.",
    features: [
      "End-to-end facilitation",
      "Documentation support",
      "Customs compliance",
      "Transportation coordination",
      "Regulatory guidance"
    ],
    color: "indigo"
  }
];

// Network Coverage Data
const networkLocations = [
  { city: "Karachi", country: "Pakistan", type: "domestic" },
  { city: "Punjab", country: "Pakistan", type: "domestic" },
  { city: "Khyber Pakhtunkhwa", country: "Pakistan", type: "domestic" },
  { city: "Kabul", country: "Afghanistan", type: "international" },
  { city: "Gwadar", country: "Pakistan", type: "domestic" },
  { city: "Iran", country: "Iran", type: "international" }
];

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(countRef, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={countRef} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Auto-rotate services
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveService((prev) => (prev + 1) % services.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const nextService = () => {
    setDirection(1);
    setActiveService((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setDirection(-1);
    setActiveService((prev) => (prev - 1 + services.length) % services.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction < 0 ? 45 : -45
    })
  };

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden bg-gradient-to-b from-gray-50 via-white to-blue-50">
      
      {/* 1. ANIMATED STATS COUNTER SECTION */}
      <div className="relative py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-teal-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              A Complete Logistics Offering
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              From origin to destination — integrated solutions tailored to your cargo, timeline, and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: 2017, suffix: "", label: "Established", icon: TrendingUp },
              { number: 8, suffix: "+", label: "Core Services", icon: Package },
              { number: 6, suffix: "", label: "Regions Covered", icon: MapPin },
              { number: 24, suffix: "/7", label: "Client Support", icon: Shield }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, rotateX: 5 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center group"
              >
                <stat.icon className="w-10 h-10 mx-auto mb-3 text-teal-300 group-hover:scale-110 transition-transform" />
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. FULL-SIZE 3D IMAGE SLIDER WITH SERVICE DETAILS */}
      <div className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Services</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Ocean World Logistics offers an integrated suite of logistics services designed to remove complexity from your supply chain.
            </p>
          </motion.div>

          {/* 3D Image Carousel */}
          <div className="relative mb-16">
            <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeService}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] as const }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={services[activeService].image}
                    alt={`${services[activeService].title} - Professional logistics services by Ocean World Logistics in Pakistan`}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                  
                  {/* Service Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="max-w-3xl"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-3 rounded-xl bg-${services[activeService].color}-500`}>
                          {(() => {
                            const IconComponent = services[activeService].icon;
                            return <IconComponent className="w-8 h-8 text-white" />;
                          })()}
                        </div>
                        <span className="text-teal-400 font-semibold text-lg">Service {activeService + 1} of {services.length}</span>
                      </div>
                      <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        {services[activeService].title}
                      </h3>
                      <p className="text-xl text-gray-200 mb-6">
                        {services[activeService].shortDesc}
                      </p>
                      <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        {services[activeService].fullDesc}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevService}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all"
                aria-label="Previous service"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={nextService}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all"
                aria-label="Next service"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Progress Dots */}
              <div className="absolute bottom-8 right-8 z-20 flex gap-2">
                {services.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > activeService ? 1 : -1);
                      setActiveService(idx);
                    }}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      idx === activeService ? "w-12 bg-teal-400" : "w-2 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Go to service ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Service Features Grid */}
          <motion.div
            key={`features-${activeService}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          >
            {services[activeService].features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all group"
              >
                <CheckCircle className={`w-6 h-6 text-${services[activeService].color}-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform`} />
                <p className="text-gray-700 font-medium">{feature}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-teal-500 hover:to-blue-600 text-white font-bold px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
            >
              Get Started with {services[activeService].title}
              <ArrowRight className="w-6 h-6" />
            </motion.a>
          </motion.div>

        </div>
      </div>

      {/* 3. NETWORK COVERAGE SECTION */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Network & Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Where we operate — one coordinated network from origin to final delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {networkLocations.map((location, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.05, rotateY: 5 }}
                className={`p-6 rounded-2xl text-center cursor-pointer ${
                  location.type === "international"
                    ? "bg-gradient-to-br from-blue-600 to-teal-600 text-white shadow-xl"
                    : "bg-white text-gray-900 shadow-lg hover:shadow-xl"
                }`}
              >
                <MapPin className={`w-10 h-10 mx-auto mb-3 ${
                  location.type === "international" ? "text-white" : "text-teal-600"
                }`} />
                <h3 className="font-bold text-lg mb-1">{location.city}</h3>
                <p className={`text-sm ${
                  location.type === "international" ? "text-blue-100" : "text-gray-600"
                }`}>
                  {location.country}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center max-w-4xl mx-auto"
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              Domestically, our teams operate out of Karachi, with inland transportation and distribution support across Punjab and Khyber Pakhtunkhwa. Cross-border, we run active transit corridors from Karachi and Gwadar into Afghanistan (including Kabul) under APTTA, alongside transportation services into Iran.
            </p>
          </motion.div>
        </div>
      </div>

    </section>
  );
}