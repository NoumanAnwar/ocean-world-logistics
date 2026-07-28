"use client";

import { motion, type Variants } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  User, 
  Briefcase, 
  Send, 
  Clock, 
  Building2,
  ArrowRight
} from "lucide-react";

// 3D Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const card3DVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    rotateX: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function ContactPage() {
  return (
    <main className="w-full overflow-x-hidden bg-gray-50">
      
      {/* ==========================================
  c        1. HERO SECTION
      ========================================== */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6"
          >
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">Us</span>
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1.5 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto"
          >
            We would welcome the opportunity to discuss your logistics requirements and show you how Ocean World Logistics can become a dependable extension of your supply chain.
          </motion.p>
        </div>
      </section>

      {/* ==========================================
          2. LEADERSHIP CONNECTION (3D Cards)
      ========================================== */}
      <section className="relative z-20 -mt-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          
          {/* Director Card */}
          <motion.div
            variants={card3DVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -10, rotateY: 3, rotateX: 2 }}
            className="bg-white/95 backdrop-blur-md border border-blue-100 rounded-3xl p-8 text-center shadow-2xl group perspective-1000"
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-teal-500 rounded-full flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <User className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">Masroor Ahmed</h3>
            <p className="text-blue-600 font-semibold mb-4">Director</p>
            <p className="text-gray-600 text-sm italic leading-relaxed">
              "Our commitment to reliability and integrity remains unchanged."
            </p>
          </motion.div>

          {/* CEO Card */}
          <motion.div
            variants={card3DVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -10, rotateY: -3, rotateX: 2 }}
            className="bg-white/95 backdrop-blur-md border border-teal-100 rounded-3xl p-8 text-center shadow-2xl group perspective-1000"
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-teal-600 to-cyan-500 rounded-full flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">M. Rashid</h3>
            <p className="text-teal-600 font-semibold mb-4">Chief Executive Officer</p>
            <p className="text-gray-600 text-sm italic leading-relaxed">
              "Logistics is a business of details — we take ownership of every consignment."
            </p>
          </motion.div>

        </div>
      </section>

      {/* ==========================================
          3. MAIN CONTACT SECTION (Info + Form)
      ========================================== */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Left Column: Image, Map & Contact Info (2/5 width) */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Office Image */}
              <motion.div variants={itemVariants} className="relative group overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/office.webp"
                  alt="Ocean World Logistics Head Office in Karachi"
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Contact Details Cards */}
              <div className="space-y-5">
                {/* Address */}
                <motion.div variants={itemVariants} className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 group">
                  <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Head Office</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Office No. 04, Ground Floor,<br />
                      State Life Building #7, G-Allana Road,<br />
                      Karachi, Pakistan
                    </p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div variants={itemVariants} className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 group">
                  <div className="p-3 bg-teal-50 rounded-xl group-hover:bg-teal-600 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-teal-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Get in Touch</h3>
                    <p className="text-gray-600 text-sm">Tel: <a href="tel:02132200019" className="hover:text-teal-600 transition-colors font-medium">021-32200019</a></p>
                    <p className="text-gray-600 text-sm">Mobile: <a href="tel:03333202090" className="hover:text-teal-600 transition-colors font-medium">0333-3202090</a></p>
                    <p className="text-gray-600 text-sm">Mobile: <a href="tel:03062989415" className="hover:text-teal-600 transition-colors font-medium">0306-2989415</a></p>
                  </div>
                </motion.div>

                {/* Email & Web */}
                <motion.div variants={itemVariants} className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 group">
                  <div className="p-3 bg-indigo-50 rounded-xl group-hover:bg-indigo-600 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-indigo-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Digital Connect</h3>
                    <p className="text-gray-600 text-sm mb-1">Email: <a href="mailto:info@owl.com.pk" className="hover:text-indigo-600 transition-colors font-medium">info@owl.com.pk</a></p>
                    <p className="text-gray-600 text-sm">Web: <a href="https://www.owl.com.pk" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors font-medium">www.owl.com.pk</a></p>
                  </div>
                </motion.div>

                {/* Office Hours */}
                <motion.div variants={itemVariants} className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 group">
                  <div className="p-3 bg-amber-50 rounded-xl group-hover:bg-amber-500 transition-colors duration-300">
                    <Clock className="w-6 h-6 text-amber-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Office Hours</h3>
                    <p className="text-gray-600 text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 text-sm text-teal-600 font-medium">24/7 Client Support Available</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column: Contact Form (3/5 width) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3 bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 lg:p-10 relative overflow-hidden"
            >
              {/* Decorative Background Circle */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-50 rounded-full opacity-50 pointer-events-none" />
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 relative z-10">Send us a Message</h2>
              <p className="text-gray-600 mb-8 relative z-10">Fill out the form below and our team will get back to you within 24 hours.</p>
              
              <form className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Company Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Company Ltd." 
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+92 300 1234567" 
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Service Required</label>
                  <select className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-600">
                    <option>Customs Clearance</option>
                    <option>Transportation</option>
                    <option>Bonded Carrier</option>
                    <option>Afghan Transit Trade</option>
                    <option>Project Cargo</option>
                    <option>Freight Forwarding</option>
                    <option>Shipping Services</option>
                    <option>Import & Export</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us about your logistics requirements..." 
                    className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-teal-500 hover:to-blue-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ==========================================
          4. GOOGLE MAP SECTION
      ========================================== */}
      <section className="w-full h-[450px] bg-gray-200 relative group">
        <iframe 
          title="Ocean World Logistics Head Office Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.123456!2d67.00123!3d24.91234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e8a1234567%3A0xabcdef1234567890!2sOcean%20World%20Logistics!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true}
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale group-hover:grayscale-0 transition-all duration-700"
        ></iframe>
        
        {/* Floating Map Info Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-2xl max-w-xs hidden md:block border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Building2 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900">Head Office</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Office No. 04, Ground Floor, State Life Building #7, G-Allana Road, Karachi.
          </p>
          <a 
            href="https://maps.google.com/?q=State+Life+Building+7+Karachi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-teal-600 transition-colors group/link"
          >
            Get Directions 
            <ArrowRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>

    </main>
  );
}