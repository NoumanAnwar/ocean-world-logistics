"use client";
import { motion } from "framer-motion";
import { 
  FileText, 
  Truck, 
  Shield, 
  Globe, 
  Package, 
  Ship, 
  ArrowUpDown,
  MapPin,
  CheckCircle,
  Users,
  Award,
  TrendingUp,
  Clock,
  Zap
} from "lucide-react";

// TypeScript Interfaces
interface Service {
  title: string;
  description: string;
  icon: any;
  img: string;
  features: string[];
}

interface NetworkLocation {
  city: string;
  country: string;
  type: "domestic" | "international";
}

interface WhyChooseItem {
  icon: any;
  title: string;
  description: string;
}

// Services Data from Company Profile
const services: Service[] = [
  {
    title: "Customs Clearance",
    description: "A service you can count on, at every border and port. Navigating customs regulations, documentation, and compliance requirements can slow down even the simplest shipment. Ocean World Logistics removes that friction.",
    icon: FileText,
    img: "/customs.webp", // Placeholder: Change to your actual image path
    features: [
      "Complete documentation management",
      "Duty assessment and calculation",
      "Liaison with customs authorities",
      "Pakistan Customs regulations expertise",
      "Cross-border compliance for Afghanistan and Iran"
    ]
  },
  {
    title: "Transportation",
    description: "Domestic reach. Regional connections. Ocean World Logistics provides road transportation across Karachi, Punjab, and Khyber Pakhtunkhwa, with extended cross-border service into Afghanistan, Gwadar, and Iran.",
    icon: Truck,
    img: "/transport.webp", // Placeholder: Change to your actual image path
    features: [
      "Road transportation across Pakistan",
      "Cross-border service to Afghanistan, Gwadar, Iran",
      "Efficient routing and vehicle configuration",
      "On-time delivery guarantee",
      "Growing fleet and driver network"
    ]
  },
  {
    title: "Bonded Carrier",
    description: "Reliable bonded transportation, backed by full compliance. As a bonded carrier, we provide secure, compliant transportation for goods moving under bond — from the port to dry ports, bonded warehouses, and inland destinations.",
    icon: Shield,
    img: "/bonded.webp", // Placeholder: Change to your actual image path
    features: [
      "Secure bonded transportation",
      "Port to dry port movements",
      "Bonded warehouse services",
      "Strict customs bonding compliance",
      "Operational flexibility"
    ]
  },
  {
    title: "Afghan Transit Trade",
    description: "Connecting Karachi and Gwadar to Afghanistan and beyond. Operating under the Pakistan–Afghanistan Transit Trade Agreement (APTTA), we facilitate the movement of transit cargo from Karachi and Gwadar into Afghanistan, including Kabul.",
    icon: Globe,
    img: "/pakafghan.webp", // Placeholder: Change to your actual image path
    features: [
      "APTTA compliant operations",
      "Karachi and Gwadar to Afghanistan corridors",
      "Kabul and onward destinations",
      "International partner network",
      "Full shipment visibility"
    ]
  },
  {
    title: "Project Cargo",
    description: "Hassle-free handling for oversized and heavy equipment. For heavy machinery, oversized equipment, and specialized project shipments, we provide dedicated project cargo services with careful planning from route surveys to equipment selection.",
    icon: Package,
    img: "/projectcargo.webp", // Placeholder: Change to your actual image path
    features: [
      "Heavy machinery transportation",
      "Oversized equipment handling",
      "Route surveys and planning",
      "Specialized equipment selection",
      "Cost-effective solutions"
    ]
  },
  {
    title: "Freight Forwarding",
    description: "Freight to the world, managed end to end. Successful freight forwarding requires deep knowledge of customs regulations, carrier networks, and documentation standards. We manage this complexity on your behalf, whether cargo is moving by road or by sea.",
    icon: Ship,
    img: "/freight.webp", // Placeholder: Change to your actual image path
    features: [
      "Road and sea freight solutions",
      "Fixed shipment schedules",
      "Consolidation options",
      "Tailored cargo solutions",
      "Full compliance and security"
    ]
  },
  {
    title: "Shipping Services",
    description: "We move your goods safely, every time. Shipping across borders comes with challenges — shifting regulations, documentation requirements, and unpredictable transit conditions. We offer a range of shipment services for your critical logistics needs.",
    icon: ArrowUpDown,
    img: "/shippingservice.webp", // Placeholder: Change to your actual image path
    features: [
      "Road freight movements",
      "Short-sea freight services",
      "Customs handling",
      "Adaptive supply chain solutions",
      "Real-time tracking"
    ]
  },
  {
    title: "Import & Export",
    description: "Your dependable import and export partner. We support importers and exporters with end-to-end facilitation — from documentation and customs compliance to coordinating transportation for goods entering or leaving Pakistan.",
    icon: TrendingUp,
    img: "/importexport.webp", // Placeholder: Change to your actual image path
    features: [
      "End-to-end facilitation",
      "Documentation support",
      "Customs compliance",
      "Transportation coordination",
      "Regulatory guidance"
    ]
  }
];

// Network Coverage Data
const networkLocations: NetworkLocation[] = [
  { city: "Karachi", country: "Pakistan", type: "domestic" },
  { city: "Punjab", country: "Pakistan", type: "domestic" },
  { city: "Khyber Pakhtunkhwa", country: "Pakistan", type: "domestic" },
  { city: "Kabul", country: "Afghanistan", type: "international" },
  { city: "Gwadar", country: "Pakistan", type: "domestic" },
  { city: "Iran", country: "Iran", type: "international" }
];

// Why Choose Us Data
const whyChooseUs: WhyChooseItem[] = [
  {
    icon: Award,
    title: "Full-Service Provider",
    description: "Customs, transport, bonded carriage, and freight forwarding — all under one roof, coordinated by a single team."
  },
  {
    icon: Clock,
    title: "Established Local Expertise",
    description: "Active since 2017 across Karachi, Punjab, and KPK, with real on-ground knowledge of routes and regulations."
  },
  {
    icon: Globe,
    title: "Proven Cross-Border Reach",
    description: "Dependable capability into Afghanistan, Gwadar, and Iran, backed by trusted regional partners."
  },
  {
    icon: Users,
    title: "Hands-On Leadership",
    description: "Our Director and CEO stay close to major shipments, so clients always have a direct line to decision-makers."
  },
  {
    icon: Shield,
    title: "Compliance-First Approach",
    description: "Transparent pricing and full adherence to customs and regulatory requirements on every shipment."
  },
  {
    icon: Zap,
    title: "Flexible Solutions",
    description: "From routine cargo to specialized project shipments, we tailor the approach to each client's needs."
  }
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const
    }
  }
};

export default function ServicesSection() {
  return (
    <main className="w-full overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-teal-300 text-sm font-semibold mb-6"
            >
              Complete Logistics Solutions
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Our Services
            </h1>
            
            <p className="text-xl md:text-2xl text-teal-200 mb-6 font-semibold">
              A complete logistics offering, from origin to destination
            </p>
            
            <p className="text-lg text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Ocean World Logistics offers an integrated suite of logistics services designed to remove complexity from our clients' supply chains. Whether you need a single service or an end-to-end solution, our team tailors the approach to your cargo, your timeline, and your budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                {/* Large Image Container */}
                <div className="relative h-72 lg:h-80 overflow-hidden">
                  <img
                    src={service.img}
                    alt={`${service.title} - Professional logistics services by Ocean World Logistics in Pakistan`}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/40 to-transparent opacity-80" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-white/95 backdrop-blur-sm p-3 rounded-2xl shadow-lg">
                      <service.icon className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 lg:p-8">
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <motion.li
                        key={fIdx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: fIdx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm lg:text-base">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-teal-500 hover:from-teal-500 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full lg:w-auto"
                  >
                    Get Started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Network & Coverage Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Network & Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Where we operate
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-400 mx-auto rounded-full mt-4" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-12"
          >
            <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center max-w-4xl mx-auto">
              Ocean World Logistics is headquartered in Karachi and operates an active network covering key domestic and cross-border corridors. Our coverage allows us to offer clients a single, coordinated logistics solution rather than a patchwork of separate providers.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {networkLocations.map((location, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`p-6 rounded-2xl text-center ${
                    location.type === "international"
                      ? "bg-gradient-to-br from-blue-500 to-teal-500 text-white"
                      : "bg-gradient-to-br from-blue-50 to-teal-50 text-gray-900"
                  }`}
                >
                  <MapPin className={`w-8 h-8 mx-auto mb-3 ${
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
            
            <div className="mt-10 text-center">
              <p className="text-gray-700 text-base leading-relaxed max-w-4xl mx-auto">
                Domestically, our teams operate out of Karachi, with inland transportation and distribution support across Punjab and Khyber Pakhtunkhwa. Cross-border, we run active transit corridors from Karachi and Gwadar into Afghanistan (including Kabul) under APTTA, alongside transportation services into Iran — giving clients one coordinated network from origin to final delivery.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Ocean World Logistics advantage
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-400 mx-auto rounded-full mt-4" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-white p-4 rounded-xl inline-block mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-blue-900 via-blue-800 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Streamline Your Supply Chain?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Let Ocean World Logistics become your dependable partner for customs clearance, transportation, and cross-border logistics across Pakistan and beyond.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-teal-400 to-cyan-400 text-blue-900 font-bold rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
              >
                Get a Free Quote
              </motion.a>
              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all text-lg"
              >
                Learn More About Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}