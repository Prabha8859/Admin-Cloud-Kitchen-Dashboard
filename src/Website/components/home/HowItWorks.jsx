// HowItWorks.jsx
const steps = [
  {
    title: "Register your restaurant",
    desc: "Sign up with basic details and menu in minutes",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  {
    title: "Complete verification",
    desc: "Submit documents & get approved quickly",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Start receiving orders",
    desc: "Go live and boost your sales instantly",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

const HowItWorks = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3 text-gray-900">
          How it works
        </h2>
        <p className="text-center text-gray-500 text-base md:text-lg mb-12 max-w-2xl mx-auto">
          Join Kitchen Cloud in 3 simple steps and start growing your business today
        </p>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Step Number */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white text-xl font-semibold mb-4">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="text-primary mb-4">{step.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>

              {/* Description */}
              <p className="text-gray-500 text-sm">{step.desc}</p>

              {/* Mobile Arrow */}
              {index < steps.length - 1 && (
                <div className="md:hidden mt-6">
                  <svg
                    className="w-6 h-6 mx-auto text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
