import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Hero1 from "../../../assets/images/Hero1.webp";
import Hero2 from "../../../assets/images/Hero2.jpg";
import Hero3 from "../../../assets/images/Hero3.jpg";

const Hero = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  const user = localStorage.getItem("user");
  const isLoggedIn = token && user;

  return (
    <section className="relative bg-primary-light min-h-screen pb-32 overflow-hidden flex items-center">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-orange-50 to-secondary/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-dark mb-6 leading-tight">
              Discover Authentic<br />
              <span className="text-primary relative inline-block">
                Home-Cooked
                <span className="absolute -bottom-3 left-0 w-full h-4 bg-primary/30 rounded-full"></span>
              </span>{" "}
              Meals ❤️
            </h1>
            <p className="text-lg md:text-xl text-text-gray mb-10 max-w-2xl">
              Connect with passionate local home chefs and savor fresh, delicious, healthy meals made with love — delivered hot and fresh to your door.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              {isLoggedIn ? (
                <Button
                  onClick={() => navigate("/register-kitchen")}
                  variant="primary"
                  size="lg"
                  className="px-10 py-5 text-lg font-bold shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300"
                >
                  Register Your Kitchen
                </Button>
              ) : (
                <>
                  <Button
                    onClick={() => navigate("/signup")}
                    variant="primary"
                    size="lg"
                    className="px-10 py-5 text-lg font-bold shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300"
                  >
                    Start Cooking Today
                  </Button>
                  <Button
                    onClick={() => navigate("/login")}
                    variant="outline"
                    size="lg"
                    className="px-10 py-5 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Login
                  </Button>
                </>
              )}
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap gap-10 justify-center lg:justify-start text-text-muted">
              <div className="flex items-center gap-3">
                <span className="text-3xl">✓</span>
                <span className="font-medium">100% Homemade</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl">✓</span>
                <span className="font-medium">Fresh Ingredients</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl">✓</span>
                <span className="font-medium">Fast Delivery</span>
              </div>
            </div>
          </div>

          {/* Right: Floating Food Cards */}
          <div className="relative h-[500px] lg:h-[600px]">
            {/* Main Card */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-80 bg-white rounded-3xl shadow-2xl overflow-hidden transform rotate-3 hover:rotate-6 hover:scale-105 transition-all duration-500 z-30">
              <img
                src={Hero1}
                alt="Dal Makhani & Naan"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h4 className="font-bold text-xl text-text-dark">Dal Makhani & Naan</h4>
                <p className="text-text-muted text-sm mt-1">by Aunty Sharma • Delhi</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-primary font-bold text-2xl">₹249</span>
                  <span className="text-sm bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">4.9 ★</span>
                </div>
              </div>
            </div>

            {/* Left Card */}
            <div className="absolute top-40 left-0 w-72 bg-white rounded-3xl shadow-2xl overflow-hidden -rotate-12 hover:-rotate-6 hover:scale-105 transition-all duration-500 z-20">
              <img
                src={Hero2}
                alt="Chicken Biryani"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h4 className="font-bold text-lg text-text-dark">Chicken Biryani</h4>
                <p className="text-text-muted text-sm mt-1">by Khan Chacha • Hyderabad Style</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-primary font-bold text-xl">₹349</span>
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">4.8 ★</span>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="absolute bottom-8 right-4 w-80 bg-white rounded-3xl shadow-2xl overflow-hidden rotate-12 hover:rotate-6 hover:scale-105 transition-all duration-500 z-20">
              <img
                src={Hero3}
                alt="Gujarati Thali"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h4 className="font-bold text-xl text-text-dark">Gujarati Thali</h4>
                <p className="text-text-muted text-sm mt-1">by Meera Ben • Ahmedabad</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-primary font-bold text-2xl">₹299</span>
                  <span className="text-sm bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">4.9 ★</span>
                </div>
              </div>
            </div>

            {/* Floating Emojis */}
            <div className="absolute top-8 right-16 text-6xl animate-bounce">🔥</div>
            <div className="absolute bottom-32 left-12 text-5xl animate-pulse">🌶️</div>
            <div className="absolute top-32 right-4 text-5xl animate-bounce">😋</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;