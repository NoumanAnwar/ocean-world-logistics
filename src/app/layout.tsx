import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import FooterSections from "./components/FooterSections";
import WhatsappButton from "./components/WhatsappButton";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

const WEBSITE_URL = "https://owl.com.pk";

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_URL),

  title: {
    default:
      "Ocean World Logistics | Customs Clearance & Freight Forwarding Pakistan",
    template: "%s | Ocean World Logistics",
  },

  description:
    "Ocean World Logistics provides professional customs clearance, freight forwarding, Afghan Transit Trade (APTTA), sea freight, air freight, road transportation, warehousing, bonded transportation and complete logistics solutions across Pakistan and international trade routes.",

  keywords: [
    "Ocean World Logistics",
    "Customs Clearance Pakistan",
    "Freight Forwarding Pakistan",
    "Clearing Agent Karachi",
    "Karachi Port",
    "Port Qasim",
    "Sea Freight",
    "Air Freight",
    "Road Transportation",
    "APTTA",
    "Afghan Transit Trade",
    "DG Cargo",
    "Project Cargo",
    "Bonded Carrier",
    "Warehousing",
    "Import Export Pakistan",
    "Logistics Company Pakistan",
  ],

  authors: [
    {
      name: "Ocean World Logistics",
    },
  ],

  creator: "Ocean World Logistics",

  publisher: "Ocean World Logistics",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: WEBSITE_URL,
  },

  openGraph: {
    title:
      "Ocean World Logistics | Customs Clearance & Freight Forwarding",

    description:
      "Professional Customs Clearance, Freight Forwarding, Warehousing, Transportation and Logistics Solutions.",

    url: WEBSITE_URL,

    siteName: "Ocean World Logistics",

    locale: "en_PK",

    type: "website",

    images: [
      {
        url: "/logo.webp",
        width: 512,
        height: 512,
        alt: "Ocean World Logistics",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Ocean World Logistics",

    description:
      "Professional Customs Clearance & Freight Forwarding Company in Pakistan.",

    images: ["/logo.webp"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TransportationService",

              name: "Ocean World Logistics",

              description:
                "Professional Customs Clearance, Freight Forwarding, Warehousing and Logistics Services in Pakistan.",

              url: WEBSITE_URL,

              logo: `${WEBSITE_URL}/logo.webp`,

              telephone: "+92-333-3202090",

              email: "info@owl.com.pk",

              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Office No. 04, Ground Floor, State Life Building #7, G-Allana Road",
                addressLocality: "Karachi",
                addressCountry: "PK",
              },

              areaServed: [
                "Pakistan",
                "Afghanistan",
                "China",
                "Middle East",
                "Central Asia",
              ],
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased bg-white text-gray-800`}
      >
        <Navbar />
        {children}
        <WhatsappButton />
        <FooterSections />
      </body>
    </html>
  );
}