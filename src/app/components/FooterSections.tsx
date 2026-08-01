import React from "react";
import Image from "next/image";
import Link from "next/link";

const FooterSections = () => {
  return (
    <div className="bg-linear-to-r from-black via-gray-600 to-blue-800 shadow-lg p-4 font-sans text-white pt-12 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-wrap justify-between gap-12 md:gap-6">
        {/* Logo & About */}
        <div className="max-w-80">
          <Image
            src="/logo.webp"
            alt="Ocean World Logistics - Customs Clearance and Freight Forwarding Company"
            width={180}
            height={90}
            priority
            quality={80}
            className="mb-4 h-20 md:h-28 w-auto"
          />

          <p className="text-sm text-white/90">
            Pakistan&apos;s Trusted Customs Clearance, Freight Forwarding &
            Logistics Company.
          </p>

          <div className="flex items-center gap-3 mt-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ocean World Logistics Instagram"
              title="Visit our Instagram"
            >
              <svg
                className="w-6 h-6 hover:text-gray-300 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM4.5 7.75A3.25 3.25 0 017.75 4.5h8.5a3.25 3.25 0 013.25 3.25v8.5a3.25 3.25 0 01-3.25 3.25h-8.5a3.25 3.25 0 01-3.25-3.25v-8.5zm9.5 1a4 4 0 11-4 4 4 4 0 014-4zm0 1.5a2.5 2.5 0 102.5 2.5 2.5 2.5 0 00-2.5-2.5zm3.5-.75a.75.75 0 11.75-.75.75.75 0 01-.75.75z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ocean World Logistics Facebook"
              title="Visit our Facebook"
            >
              <svg
                className="w-6 h-6 hover:text-gray-300 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.5 9H15V6.5h-1.5c-1.933 0-3.5 1.567-3.5 3.5v1.5H8v3h2.5V21h3v-7.5H16l.5-3h-3z" />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ocean World Logistics Twitter"
              title="Visit our Twitter"
            >
              <svg
                className="w-6 h-6 hover:text-gray-300 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 5.92a8.2 8.2 0 01-2.36.65A4.1 4.1 0 0021.4 4a8.27 8.27 0 01-2.6 1A4.14 4.14 0 0016 4a4.15 4.15 0 00-4.15 4.15c0 .32.04.64.1.94a11.75 11.75 0 01-8.52-4.32 4.14 4.14 0 001.29 5.54A4.1 4.1 0 013 10v.05a4.15 4.15 0 003.33 4.07 4.12 4.12 0 01-1.87.07 4.16 4.16 0 003.88 2.89A8.33 8.33 0 012 19.56a11.72 11.72 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.35-.01-.53A8.18 8.18 0 0022 5.92z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ocean World Logistics LinkedIn"
              title="Visit our LinkedIn"
            >
              <svg
                className="w-6 h-6 hover:text-gray-300 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48c0 1.1.88 1.98 1.98 1.98h.02c1.1 0 1.98-.88 1.98-1.98C6.98 4.38 6.1 3.5 4.98 3.5zM3 8.75h3.96V21H3V8.75zm6.25 0h3.8v1.68h.05c.53-.98 1.82-2.02 3.75-2.02 4.01 0 4.75 2.64 4.75 6.07V21H17v-5.63c0-1.34-.03-3.07-1.88-3.07-1.88 0-2.17 1.47-2.17 2.98V21H9.25V8.75z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-lg font-bold uppercase">Company</p>

          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/aboutus" },
              { name: "Services", href: "/services" },
              { name: "Our Clients", href: "/ourclients" },
              { name: "Contact Us", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-teal-300 transition-all duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <p className="text-lg font-bold uppercase">Our Services</p>

          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {[
              { name: "Customs Clearance", href: "/services" },
              { name: "Freight Forwarding", href: "/services" },
              { name: "Sea Freight", href: "/services" },
              { name: "Air Freight", href: "/services" },
              { name: "Road Transportation", href: "/services" },
              { name: "Warehousing", href: "/services" },
              { name: "Afghan Transit Trade (APTTA)", href: "/services" },
            ].map((service) => (
              <li key={service.name}>
                <Link
                  href={service.href}
                  className="hover:text-teal-300 transition-all duration-300"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="max-w-80">
          <p className="text-lg font-bold uppercase">Contact Info</p>

          <div className="mt-4 space-y-4 text-sm text-white/90">
            <div>
              <p className="font-semibold text-white">Office</p>

              <address className="not-italic leading-6">
                Office No. 04, Ground Floor,
                <br />
                State Life Building #7,
                <br />
                G-Allana Road, Karachi, Pakistan
              </address>
            </div>

            <div>
              <p className="font-semibold text-white">Phone</p>

              <a
                href="tel:+923333202090"
                className="hover:text-teal-300 transition-colors"
                aria-label="Call Ocean World Logistics"
              >
                +92 333 3202090
              </a>
            </div>

            <div>
              <p className="font-semibold text-white">Email</p>

              <a
                href="mailto:info@owl.com.pk"
                className="hover:text-teal-300 transition-colors"
                aria-label="Email Ocean World Logistics"
              >
                info@owl.com.pk
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-white/20 mt-10" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6 text-sm text-white/80">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">
            Ocean World Logistics
          </span>
          . All Rights Reserved.
        </p>

        <ul className="flex flex-wrap items-center gap-6">
          <li>
            <Link
              href="/aboutus"
              className="hover:text-teal-300 transition-colors"
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="hover:text-teal-300 transition-colors"
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              href="/services"
              className="hover:text-teal-300 transition-colors"
            >
              Services
            </Link>
          </li>

          <li>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-300 transition-colors"
            >
              Sitemap
            </a>
          </li>

          <li>
            <a
              href="/robots.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-300 transition-colors"
            >
              Robots
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterSections;
