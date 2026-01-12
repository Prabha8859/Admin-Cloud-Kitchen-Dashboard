// src/components/AppDownload.jsx
import { useEffect, useRef, useState } from "react";
import PhoneImage from "../../../assets/images/App-Download.png";

const AppDownload = () => {
  const sectionRef = useRef(null);
  const [fillHeight, setFillHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let scrollProgress = Math.min(
        Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0),
        1
      );

      setFillHeight(scrollProgress * 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto p-8 md:p-16 overflow-hidden rounded-3xl mt-28"
      style={{
        background: "linear-gradient(135deg, #FFF7F4, #FFFDFB)",
      }}
    >
      {/* Decorative Shapes */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[var(--primary-light)] opacity-25 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-[var(--primary-gradient-end)] opacity-20 translate-x-1/4 translate-y-1/4 blur-3xl"></div>
      <div className="absolute top-1/3 right-1/2 w-60 h-60 rounded-full bg-[var(--secondary-light)] opacity-10 blur-2xl"></div>

      {/* Text Content */}
      <div className="md:w-1/2 mb-10 md:mb-0 z-10 relative">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--text-dark)] mb-5 leading-tight">
          Download Our App
        </h2>
        <p className="text-[var(--text-gray)] mb-8 text-lg md:text-xl leading-relaxed">
          Manage your kitchen efficiently, track orders in real-time, and give your customers a seamless experience. Everything you need is in one place.
        </p>

        {/* Buttons */}
        <div className="flex gap-5 flex-wrap">
          <a
            href="#"
            className="px-7 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
          >
            Google Play
          </a>
          <a
            href="#"
            className="px-7 py-4 border-2 border-[var(--primary)] text-[var(--primary-dark)] font-semibold rounded-2xl hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
          >
            App Store
          </a>
        </div>
      </div>

      {/* Phone Image */}
      <div className="relative md:w-1/2 w-full flex justify-center items-center z-10">
        <div className="relative group">
          <img
            src={PhoneImage}
            alt="Phone"
            className="relative w-64 md:w-80 rounded-3xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
          />

          {/* Animated Fill overlay */}
          <div
            style={{ height: `${fillHeight}%` }}
            className="absolute bottom-0 w-64 md:w-80 bg-gradient-to-t from-[var(--primary)] to-[var(--primary-dark)] opacity-25 rounded-b-3xl pointer-events-none transition-all duration-500 ease-out"
          />

          {/* Floating light effect */}
          <div className="absolute -top-10 left-1/2 w-32 h-32 rounded-full bg-gradient-to-tr from-[var(--primary)] to-[var(--secondary)] opacity-10 blur-3xl animate-pulse-slow pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
