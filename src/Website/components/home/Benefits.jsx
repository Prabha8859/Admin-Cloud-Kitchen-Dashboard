// Benefits.jsx
const benefits = [
  {
    number: "1M+",
    title: "Monthly Orders",
    desc: "Reach millions of hungry customers every month",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    number: "50K+",
    title: "Partner Restaurants",
    desc: "Join India's fastest growing restaurant network",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    number: "24/7",
    title: "Dedicated Support",
    desc: "We're here to help you anytime, day or night",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    )
  },
  {
    number: "Fast",
    title: "Weekly Payments",
    desc: "Get paid quickly and reliably every week",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const Benefits = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Why partner with Kitchen Cloud?
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto">
            Thousands of restaurants trust us to grow their business. Here's why.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group"
            >
              {/* Icon with gradient hover */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light text-primary mb-5 group-hover:bg-gradient-to-tr group-hover:from-orange-400 group-hover:to-red-500 group-hover:text-white transition-all duration-300">
                {benefit.icon}
              </div>

              {/* Number */}
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {benefit.number}
              </h3>

              {/* Title */}
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h4>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
