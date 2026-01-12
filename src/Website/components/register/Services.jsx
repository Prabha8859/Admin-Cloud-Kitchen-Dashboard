// src/components/register/Services.jsx
const Services = ({ next, update }) => {
  const handleSelect = () => {
    update({ serviceType: "Cloud Kitchen Services" });
    next();
  };

  return (
    <section className="min-h-[65vh] flex items-center justify-center bg-[#fffaf7] relative overflow-hidden">
      
      {/* subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(#ea580c 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative max-w-3xl w-full mx-4 bg-white rounded-[26px] shadow-[0_30px_90px_rgba(0,0,0,0.12)] px-10 py-10">
        
        {/* HEADER */}
        <div className="mb-8">
          <h2 className="text-[30px] font-semibold text-gray-900">
            Choose your kitchen type
          </h2>
          <p className="text-gray-600 mt-2 text-base">
            Select how you operate your kitchen to personalize your setup.
          </p>
        </div>

        {/* SERVICE CARD */}
        <div
          onClick={handleSelect}
          className="group relative cursor-pointer rounded-2xl
                     border border-orange-200/60
                     bg-gradient-to-br from-orange-50/70 to-white
                     hover:shadow-[0_20px_50px_rgba(234,88,12,0.18)]
                     hover:-translate-y-[2px]
                     transition-all duration-300 p-8"
        >
          {/* left accent */}
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-500 rounded-l-2xl" />

          <div className="flex items-start justify-between gap-8">
            
            {/* LEFT CONTENT */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Cloud Kitchen
              </h3>

              <p className="text-gray-600 mt-2 max-w-lg leading-relaxed">
                A delivery-only kitchen model with lower costs and faster growth.
              </p>

              {/* FEATURES */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 mt-6 text-sm text-gray-700">
                {[
                  "Delivery focused",
                  "Lower setup cost",
                  "Faster onboarding",
                  "City-wide reach",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-orange-500 rounded-full" />
                    {item}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-7 inline-flex items-center gap-2 text-orange-600 font-semibold">
                Continue setup
                <span className="text-lg group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>

            {/* ICON */}
            <div className="shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl shadow-inner">
                🍳
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
