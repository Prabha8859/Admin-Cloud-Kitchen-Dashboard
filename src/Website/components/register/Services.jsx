// src/components/register/Services.jsx
const Services = ({ next, update }) => {
  const handleSelect = () => {
    update({ serviceType: "Cloud Kitchen Services" });
    next();
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-[#fffaf7] relative overflow-hidden">
      
      {/* subtle pattern – toned down */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(#ea580c 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-3xl w-full mx-4 bg-white rounded-[28px] shadow-[0_40px_120px_rgba(0,0,0,0.12)] px-12 py-14">
        
        {/* HEADER */}
        <div className="mb-12">
          <h2 className="text-[32px] font-semibold text-gray-900 leading-tight">
            Choose your kitchen type
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl text-base">
            Tell us how you operate your kitchen so we can set up the right
            services and onboarding for you.
          </p>
        </div>

        {/* SERVICE CARD */}
        <div
          onClick={handleSelect}
          className="group relative cursor-pointer rounded-2xl
                     border border-orange-200/60
                     bg-gradient-to-br from-orange-50/70 to-white
                     hover:shadow-[0_24px_60px_rgba(234,88,12,0.18)]
                     hover:-translate-y-[2px]
                     transition-all duration-300 p-10"
        >
          {/* left accent */}
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-500 rounded-l-2xl" />

          <div className="flex items-start justify-between gap-10">
            
            {/* LEFT CONTENT */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Cloud Kitchen
              </h3>

              <p className="text-gray-600 mt-3 max-w-lg leading-relaxed">
                Run a delivery-only kitchen and reach customers across your city
                without the cost of a dine-in setup.
              </p>

              {/* FEATURES */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-8 text-sm text-gray-700">
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
              <div className="mt-10 inline-flex items-center gap-3 text-orange-600 font-semibold text-base">
                Continue setup
                <span className="text-xl group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>

            {/* ICON */}
            <div className="shrink-0">
              <div className="w-24 h-24 rounded-2xl bg-orange-100 flex items-center justify-center text-4xl shadow-inner">
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
