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
    <section className="relative z-30 -mt-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Mini Compact Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Thin accent */}
          <div className="h-1 bg-gradient-to-r from-primary to-orange-500"></div>

          <div className="p-5 md:p-6">
            {/* Super tight heading */}
            <h3 className="text-xl md:text-2xl font-extrabold text-center mb-2 text-text-dark">
              Start Earning in Just <span className="text-primary">10 Minutes</span> ⏱️
            </h3>

            <p className="text-center text-text-muted text-xs md:text-sm mb-5 max-w-lg mx-auto">
              Sab ready kar lo — onboarding super fast hai!
            </p>

            {/* Ultra tight grid */}
            <div className="grid md:grid-cols-2 gap-6 items-start">
              {/* Checklist */}
              <div className="order-2 md:order-1">
                <h4 className="text-base font-bold text-text-dark mb-3 flex items-center gap-2">
                  <span className="text-primary text-lg">📋</span> Required Documents
                </h4>

                <div className="space-y-2.5">
                  {documents.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 hover:bg-primary/5 rounded-lg p-1.5 -mx-1.5 transition-all"
                    >
                      <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary text-base font-bold">✓</span>
                      </div>
                      <span className="text-text-dark font-medium text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Smaller Image */}
              <div className="order-1 md:order-2">
                <div className="rounded-2xl overflow-hidden shadow-md border-2 border-primary/10">
                  <img
                    src={kitchenCloudImage}
                    alt="Kitchen Cloud Dashboard"
                    className="w-full h-48 md:h-56 object-cover" // Fixed height — yeh sabse bada change hai!
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Onboarding;