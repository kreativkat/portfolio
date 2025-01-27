"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "/" },
        { label: "Projects", href: "/projects" },
        { label: "Services", href: "/services" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Social",
      links: [
        { label: "LinkedIn", href: "https://linkedin.com" },
        { label: "GitHub", href: "https://github.com" },
        { label: "Twitter", href: "https://twitter.com" },
      ],
    },
  ];

  const contactAddresses = [
    {
      name: "Creators Value",
      address: "Nevada, USA (Service Area)",
    },
    {
      name: "Kreativ Kat - Creators Value",
      address: "Cebu, PH",
    },
    {
      name: "FS Art and Design Studio - Creators Value",
      address: "Ontario, Canada",
    },
  ];

  return (
    <footer className="bg-primary font-hostGrotesk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-xl font-bold text-secondary hover:text-tertiary transition-colors duration-300"
            >
              Portfolio
            </Link>
            <p className="text-secondary/80 mt-2">
              Creating digital experiences with passion and purpose.
            </p>
            <div className="text-white flex flex-col gap-2">
              <h1 className="text-xl font-black">Address</h1>
              <div>
                <p>208 Evans Avenue, Toronto, Ontario M8Z 1J7</p>
              </div>
              {/* {contactAddresses.map((address, index) => (
                <div key={index}>
                  <h1 className="text-xl font-black">{address.name}</h1>
                  <p className="text-sm">{address.address}</p>
                </div>
              ))} */}
              <div>
                <p>+1 (647) 540‑5596</p>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-secondary font-semibold tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-secondary/80 hover:text-tertiary transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary/80 text-sm">
              © {currentYear} Your Name. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-secondary/80 hover:text-tertiary text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-secondary/80 hover:text-tertiary text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
