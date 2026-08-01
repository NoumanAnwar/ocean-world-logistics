"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Truck, Shield, Clock, MapPin, Award, Users, 
  Target, Heart, Zap, CheckCircle, Quote 
} from "lucide-react";

// --- DATA FROM COMPANY PROFILE ---
const statsData = [
  { number: "2017", label: "Established", icon: Clock },
  { number: "8", label: "Core Services", icon: Award },
  { number: "6", label: "Regions Covered", icon: MapPin },
  { number: "24/7", label: "Client Support", icon: Users },
];

const atAGlanceData = [
  "Established in 2017 — years of hands-on regional logistics experience",
  "Head Office in Karachi with operational reach across Pakistan",
  "Active cross-border corridors to Afghanistan, Gwadar, and Iran",
  "Full-service offering: customs clearance, transportation, bonded carriage, freight forwarding, and project cargo",
  "A client-first culture led by a hands-on leadership team",
];

const valuesData = [
  {
    icon: Target,
    title: "Reliability",
    description: "We understand that our clients' businesses depend on their cargo arriving on time. We build our operations, routes, and fleet planning around consistency clients can count on.",
    color: "blue"
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Transparent pricing, honest communication, and full compliance with customs and regulatory requirements are non-negotiable at Ocean World Logistics.",
    color: "teal"
  },
  {
    icon: Heart,
    title: "Safety First",
    description: "From driver training to vehicle maintenance and cargo handling, safety governs every decision we make — for our people, our clients' goods, and the communities we operate in.",
    color: "indigo"
  },
  {
    icon: Zap,
    title: "Agility",
    description: "Regional trade routes and regulations shift quickly. Our team stays close to the ground so we can adapt fast and keep shipments moving without disruption.",
    color: "cyan"
  }
];

const leadershipData = [
  {
    name: "Masroor Khan",
    title: "Director",
    image: "/leadership/masroor.jpg",
    quote: "When we founded Ocean World Logistics, our goal was simple: build a logistics company that clients could genuinely rely on. Every shipment carries someone's business behind it, and we never lose sight of that. Our growth since 2017 has been driven by referrals and repeat clients — the strongest proof that our approach works. As we expand our network across Pakistan and into neighboring countries, our commitment to reliability and integrity remains unchanged."
  },
  {
    name: "M. Rashid",
    title: "Chief Executive Officer",
    image: "/leadership/rashid.jpg",
    quote: "Logistics is a business of details — the right paperwork, the right route, the right vehicle, at the right time. My focus as CEO is to make sure our operations run with that discipline every single day. We have built a team that takes ownership of every consignment, and partnerships with clients that go well beyond a single shipment. I am proud of what Ocean World Logistics has become, and even more excited about where we are headed."
  }
];

// 4 Images for the slow-motion flip slider (Replace with your actual image paths)
const heroImages = [
  "/1.webp", // e.g., Warehouse operations
  "/2.webp", // e.g., Truck fleet on highway
  "/3.webp", // e.g., Port/Shipping containers
  "/importexport.webp", // e.g., Cross-border transit
];

// --- MAIN COMPONENT ---
export default function AboutUsSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-cycle images every 5 seconds for a slow, professional feel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-full overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text Content */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-teal-300 text-sm font-semibold mb-6">
                Your Trusted Partner Since 2017
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">Ocean World</span> Logistics
              </h1>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed font-medium">
                Your trusted partner in regional trade and logistics.
              </p>
              <p className="text-base text-blue-50 mb-6 leading-relaxed">
                Ocean World Logistics is a Karachi-based freight, transportation, and customs clearance company built to move goods reliably across Pakistan and into the wider region. Established in 2017, we have grown into a dependable logistics partner for importers, exporters, manufacturers, and institutions who need their cargo handled with precision, transparency, and care.
              </p>
              <p className="text-base text-blue-50 mb-8 leading-relaxed">
                We operate across Karachi, Punjab, and Khyber Pakhtunkhwa, with cross-border reach into Afghanistan (Kabul), Gwadar, and Iran — giving our clients a single point of contact for domestic haulage, port operations, and regional transit trade.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a href="/services" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-gradient-to-r from-teal-400 to-cyan-400 text-blue-900 font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow">
                  Our Services
                </motion.a>
                <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all">
                  Contact Us
                </motion.a>
              </div>
            </motion.div>
            
            {/* Right Column: Image Slider + Info Card Below */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative">
              
              {/* Slow-Motion Flip Image Slider */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[16/10]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: [0.42, 0, 0.58, 1] }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={heroImages[currentImageIndex]}
                      alt={`Ocean World Logistics operations and fleet in Pakistan - Slide ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                      loading="eager"
                      width={800}
                      height={600}
                    />
                    {/* Gradient Overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Slider Indicators (Dots) */}
                <div className="absolute bottom-4 right-4 z-20 flex gap-2">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        currentImageIndex === idx ? "w-6 bg-teal-400" : "w-2 bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* "Since 2017" Card Moved BELOW the image for better responsiveness */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.8 }} 
                className="mt-6 bg-white rounded-xl shadow-xl p-5 flex items-center gap-4 border border-gray-100"
              >
                <div className="p-3 bg-teal-50 rounded-full flex-shrink-0">
                  <Truck className="w-8 h-8 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Since 2017</h4>
                  <p className="text-gray-600 text-sm">Moving cargo safely across Pakistan & beyond.</p>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. STATS COUNTER SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-teal-50 hover:shadow-xl transition-shadow"
              >
                <stat.icon className="w-10 h-10 mx-auto mb-3 text-teal-600" />
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. AT A GLANCE SECTION */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">At a Glance</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-400 mx-auto rounded-full" />
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {atAGlanceData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VISION & MISSION SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
              <div className="relative z-10">
                <Target className="w-12 h-12 mb-6 text-teal-300" />
                <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                <p className="text-blue-100 leading-relaxed text-lg">
                  To be recognized as one of Pakistan's most reliable and forward-thinking logistics companies — a partner of choice for regional and cross-border trade, known for consistency, integrity, and the ability to move any cargo, anywhere it needs to go.
                </p>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative bg-gradient-to-br from-teal-600 to-cyan-700 rounded-3xl p-10 text-white overflow-hidden">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32" />
              <div className="relative z-10">
                <Award className="w-12 h-12 mb-6 text-cyan-300" />
                <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                <p className="text-teal-100 leading-relaxed text-lg">
                  To deliver dependable, cost-effective, and fully compliant logistics solutions for every client we serve. We do this by combining local expertise with disciplined operations, investing in our people and fleet, and staying accountable to our clients at every stage of the journey — from pickup to final delivery.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. OUR VALUES SECTION */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">The principles that guide every decision we make and every shipment we handle.</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-400 mx-auto rounded-full mt-4" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {valuesData.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`inline-flex p-4 rounded-xl bg-${value.color}-100 mb-6 group-hover:scale-110 transition-transform`}>
                  <value.icon className={`w-8 h-8 text-${value.color}-600`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LEADERSHIP MESSAGES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Message from Leadership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Hear from the leaders driving Ocean World Logistics forward.</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-400 mx-auto rounded-full mt-4" />
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-10">
            {leadershipData.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 relative overflow-hidden"
              >
                <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-200 opacity-50" />
                <div className="flex items-start gap-6 mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-white shadow-lg bg-gray-200">
                      <img
                        src={leader.image}
                        alt={`${leader.name} - ${leader.title} of Ocean World Logistics`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width={80}
                        height={80}
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-teal-500 rounded-full border-4 border-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
                    <p className="text-teal-600 font-semibold">{leader.title}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 leading-relaxed italic relative">
                  <span className="text-5xl text-blue-300 absolute -top-4 -left-2">"</span>
                  {leader.quote}
                  <span className="text-5xl text-blue-300 absolute -bottom-8 -right-2">"</span>
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Move Your Cargo?</h2>
            <p className="text-xl text-blue-100 mb-10">
              Join hundreds of satisfied clients who trust Ocean World Logistics for their regional and cross-border shipping needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-10 py-4 bg-gradient-to-r from-teal-400 to-cyan-400 text-blue-900 font-bold rounded-full shadow-lg hover:shadow-xl transition-all text-lg">
                Get a Quote
              </motion.a>
              <motion.a href="/services" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all text-lg">
                Explore Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}