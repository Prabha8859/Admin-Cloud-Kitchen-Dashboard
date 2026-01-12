import React from "react";
import burgerImg from '../../../assets/images/Floating-burger-PNG.png';
import pizzaImg from '../../../assets/images/Pizza.png';
import momoImg from '../../../assets/images/momo.jpg';
import sushiImg from '../../../assets/images/suji.jpg';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-orange-50/50 to-orange-50/20 min-h-[100vh] flex items-center overflow-hidden pb-28 md:pb-36">

     
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
          50% { transform: translateY(-35px) rotate(4deg) scale(1.05); }
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
          50% { transform: translateY(-25px) rotate(-3deg) scale(1.04); }
        }

        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-float { animation: float 7.5s ease-in-out infinite; }
        .animate-float-slow { animation: floatSlow 11s ease-in-out infinite; }
        .floating-glow { filter: drop-shadow(0 15px 25px rgba(255, 107, 53, 0.25)); }

        .gradient-text {
          background: linear-gradient(90deg, #FF6B35, #FF8B4A, #FF6B35);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientFlow 8s ease infinite;
        }

        .stats-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(255, 107, 53, 0.2);
          transition: all 0.4s ease;
        }
      `}</style>

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-orange-100/30 via-transparent to-transparent opacity-60" />

      {/* Decorative curves */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        viewBox="0 0 1440 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M-100 400 Q300 150 700 450 T1400 380" stroke="#FF6B35" strokeWidth="4" opacity="0.18"/>
        <path d="M-200 650 Q200 400 900 680 T1600 550" stroke="#FF8B4A" strokeWidth="4" opacity="0.12"/>
      </svg>

      {/* Floating items */}
      <img
        src={burgerImg}
        className="absolute left-[4%] md:left-[7%] top-[14%] md:top-[16%] w-28 md:w-40 lg:w-48 animate-float-slow floating-glow z-20"
        alt="Burger"
      />
      <img
        src={pizzaImg}
        className="absolute right-[5%] md:right-[9%] bottom-[20%] md:bottom-[24%] w-32 md:w-44 lg:w-52 animate-float floating-glow z-20"
        alt="Pizza"
      />
      <img
        src={momoImg}
        className="absolute right-[10%] md:right-[14%] top-[11%] md:top-[13%] w-24 md:w-32 lg:w-36 animate-float-slow floating-glow z-20"
        alt="Momos"
      />
      <img
        src={sushiImg}
        className="hidden md:block absolute left-[12%] bottom-[18%] md:bottom-[22%] w-24 lg:w-32 animate-float floating-glow z-20"
        alt="Sushi"
      />

     
      <div className="relative z-30 max-w-5xl mx-auto text-center px-6 py-12 md:py-16 lg:py-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
          Better food for
          <br />
          <span className="gradient-text">more people</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-700 font-medium max-w-3xl mx-auto leading-relaxed">
          For over a decade, we've helped millions discover exciting new flavors,
          order from top restaurants, and enjoy hot meals delivered fast.
        </p>
      </div>
    </section>
  );
};

const Stat = ({ number, label }) => (
  <div className="text-center group">
    <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#FF6B35] tracking-tight group-hover:scale-105 transition-transform duration-300">
      {number}
    </h3>
    <p className="text-base md:text-lg font-semibold text-gray-700 mt-1">
      {label}
    </p>
  </div>
);

export default HeroSection;