import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (



    <footer className="relative mt-24 gradient-blue text-white overflow-hidden">

      {/* 🌊 TOP CURVE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="w-full h-[90px]"
        >
          <path
            d="M0,60 C240,100 480,20 720,30 960,40 1200,90 1440,50 L1440,0 L0,0 Z"
            fill="var(--bg)"
          />
        </svg>
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-[var(--primary)]">
            Padoshi Kitchen
          </h2>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Cloud Kitchen Services helping food brands launch, operate and grow
            faster with technology & operational support.
          </p>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-semibold mb-5 text-white">Company</h3>
          <ul className="space-y-3 text-sm text-white/70">
            {["About", "Careers", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to="/about"
                  className="hover:text-[var(--primary)] cursor-pointer transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-semibold mb-5 text-white">Services</h3>
          <ul className="space-y-3 text-sm text-white/70">
            {[
              "Cloud Kitchen Setup",
              "Operations",
              "Growth & Marketing",
            ].map((item) => (
              <li key={item}>
                <Link
                  to="/service"
                  className="hover:text-[var(--primary)] cursor-pointer transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* PARTNER */}
        <div>
          <h3 className="font-semibold mb-5 text-white">Partner</h3>
          <ul className="space-y-3 text-sm text-white/70">
            {["Partner With Us", "FAQs", "Terms"].map((item) => (
              <li key={item}>
                <Link
                  to="/company"
                  className="hover:text-[var(--primary)] cursor-pointer transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Padoshi Kitchen · Cloud Kitchen Services
      </div>
    </footer>
  );
};

export default Footer;
