// HowItWorks.jsx
import React from "react";
import Card from "../ui/Card";

const steps = [
  {
    title: "Register your kitchen",
    desc: "Sign up with basic details and menu in minutes",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  {
    title: "Complete verification",
    desc: "Submit documents & get approved quickly",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Start receiving orders",
    desc: "Go live and boost your sales instantly",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

const HowItWorks = () => {
  return (
    <section className="bg-[var(--bg)] py-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-[var(--primary)]/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-gradient-to-tr from-[var(--primary)]/5 to-transparent blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--text-dark)] mb-4 relative">
            How it works
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent rounded-full animate-pulse"></span>
          </h2>
          <p className="text-base md:text-lg text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed mt-8">
            Join Kitchen Cloud in 3 simple steps and start growing your business today
          </p>
          <div className="flex justify-center space-x-2 mt-6">
            {[1, 2, 3].map((dot) => (
              <div key={dot} className={`w-2 h-2 rounded-full ${dot === 2 ? 'bg-[var(--primary)] scale-125' : 'bg-[var(--text-muted)]/30'}`}></div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[var(--bg)] rounded-full border-4 border-[var(--bg)] z-20">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary)]/80 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
              </div>

              <Card 
                variant="elevated" 
                padding="large" 
                className="text-center pt-10 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-[var(--border)]/50"
              >
                <div className="relative z-10">
                  <Card.Body>
                    {/* Icon */}
                    <div className="relative inline-flex mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-transparent rounded-2xl blur-md group-hover:blur-xl transition-all duration-300"></div>
                      <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-lg border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-[var(--primary)] transform group-hover:scale-110 transition-transform duration-300">
                          {step.icon}
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[var(--text-dark)] mb-4 relative inline-block">
                      {step.title}
                      <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--primary)]/50 transition-all duration-500 rounded-full"></span>
                    </h3>

                    {/* Description */}
                    <p className="text-[var(--text-muted)] text-base leading-relaxed">
                      {step.desc}
                    </p>
                  </Card.Body>
                </div>
              </Card>

              {/* Animated Arrow (Desktop) - Wapas aa gaya! */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-10 transform -translate-y-1/2 z-10 opacity-60 group-hover:opacity-100 transition-all duration-500">
                  <div className="relative">
                    <div className="w-20 h-0.5 bg-gradient-to-r from-[var(--primary)]/50 to-transparent"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-5 h-5 border-r-4 border-t-4 border-[var(--primary)] rotate-45"></div>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[var(--primary)] rounded-full animate-ping"></div>
                  </div>
                </div>
              )}

              {/* Mobile Down Indicator */}
              {index < steps.length - 1 && (
                <div className="md:hidden mt-8 flex justify-center">
                  <div className="w-0.5 h-10 bg-gradient-to-b from-[var(--primary)] to-[var(--primary)]/30 relative">
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--primary)] animate-bounce"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Optional: Subtle Desktop Connection Line (background mein) */}
        <div className="hidden md:block absolute top-32 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default HowItWorks;