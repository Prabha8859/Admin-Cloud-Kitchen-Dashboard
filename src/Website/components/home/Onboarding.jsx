// Onboarding.jsx
import React from "react";
import kitchenCloudImage from '../../../assets/images/Kitchen Cloud.png';

const documents = [
  "PAN card",
  "FSSAI License",
  "Bank account details",
  "GST number (if applicable)",
  "Menu & food images",
];

const Onboarding = () => {
  return (
    <>
      {/* Custom Slow Float Animation - Inline Style (no need for global CSS) */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>

      <section className="relative z-30 -mt-36">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="h-1 bg-gradient-to-r from-[var(--primary)] to-orange-500"></div>

            <div className="p-4 md:p-5">
              <div className="text-center mb-4">
                <h3 className="text-lg md:text-xl font-extrabold text-text-dark mb-2">
                  Start Earning in Just <span className="text-[var(--primary)]">10 Minutes</span> ⏱️
                </h3>
                <div className="h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent max-w-32 mx-auto rounded-full opacity-70"></div>
              </div>

              <p className="text-center text-text-muted text-xs mb-4 max-w-md mx-auto">
                Sab ready kar lo — onboarding super fast hai!
              </p>

              <div className="grid md:grid-cols-2 gap-5 items-center">
                {/* Checklist */}
                <div className="order-2 md:order-1">
                  <h4 className="text-base font-bold text-text-dark mb-2.5 flex items-center gap-2">
                    <span className="text-lg">📋</span> Required Documents
                  </h4>

                  <div className="space-y-2">
                    {documents.map((item, index) => (
                      <div
                        key={index}
                        className="group flex items-center gap-3 rounded-lg p-1 transition-all duration-200 hover:bg-[var(--primary)]/5"
                      >
                        <div className="relative w-6 h-6 flex-shrink-0">
                          <div className="absolute inset-0 rounded-full bg-[var(--primary)]/20 blur-sm group-hover:blur-md transition-all"></div>
                          <div className="relative w-6 h-6 rounded-full bg-white border-2 border-[var(--primary)]/30 group-hover:border-[var(--primary)] flex items-center justify-center transition-colors">
                            <span className="text-[var(--primary)] text-sm font-bold">✓</span>
                          </div>
                        </div>

                        <span className="text-text-dark font-medium text-sm group-hover:text-[var(--primary)] transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image with Slow Floating Animation */}
                <div className="order-1 md:order-2">
                  <div className="rounded-2xl overflow-hidden shadow-md border-2 border-[var(--primary)]/10 animate-float">
                    <img
                      src={kitchenCloudImage}
                      alt="Kitchen Cloud Dashboard"
                      className="w-full h-40 md:h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Onboarding;