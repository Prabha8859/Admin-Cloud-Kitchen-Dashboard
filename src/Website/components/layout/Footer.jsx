import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative mt-0 overflow-hidden text-white bg-gradient-to-b from-[var(--secondary)] to-[var(--secondary-dark)]">

      {/* 🌊 TOP CURVE - Page background se match karta hai */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-px">
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="w-full h-[90px]"
        >
          <path
            d="M0,60 C240,100 480,20 720,30 960,40 1200,90 1440,50 L1440,0 L0,0 Z"
            fill="var(--bg)"  // Light page background
          />
        </svg>
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <h2 className="text-3xl font-bold">
            Padoshi <span className="text-[var(--primary)]">Kitchen</span>
          </h2>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Cloud Kitchen Services helping food brands launch, operate and grow
            faster with technology & operational support.
          </p>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-semibold mb-5 text-white uppercase tracking-wider text-lg">Company</h3>
          <ul className="space-y-3 text-sm">
            {["About", "Careers", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item === "About" ? "/about" : item === "Careers" ? "/careers" : "/contact"}
                  className="text-white/70 hover:text-[var(--primary)] transition duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-semibold mb-5 text-white uppercase tracking-wider text-lg">Services</h3>
          <ul className="space-y-3 text-sm">
            {[
              "Cloud Kitchen Setup",
              "Operations",
              "Growth & Marketing",
            ].map((item) => (
              <li key={item}>
                <Link
                  to="/services"
                  className="text-white/70 hover:text-[var(--primary)] transition duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* PARTNER */}
        <div>
          <h3 className="font-semibold mb-5 text-white uppercase tracking-wider text-lg">Partner</h3>
          <ul className="space-y-3 text-sm">
            {["Partner With Us", "FAQs", "Terms"].map((item) => (
              <li key={item}>
                <Link
                  to={item === "Partner With Us" ? "/partner" : item === "FAQs" ? "/faqs" : "/terms"}
                  className="text-white/70 hover:text-[var(--primary)] transition duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/20 py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Padoshi Kitchen · Cloud Kitchen Services
      </div>
    </footer>
  );
};

export default Footer;