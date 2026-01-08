import React from "react";
import kitchenCloud from '../../assets/images/Kitchen Cloud.png';
import services4 from '../../assets/images/Services4.webp';
import services3 from '../../assets/images/Services3.webp';

const PartnerPage = () => {
  const partnerLinks = [
    {
      title: "Become a Partner",
      description: "Join Kitchen Cloud and scale your food brand with our state-of-the-art cloud kitchens, advanced technology, dedicated operations team, and growth support.",
      gradient: "gradient-orange",
      image: services4,
    },
    {
      title: "Frequently Asked Questions",
      description: "Find clear answers to common questions about partnering, onboarding process, costs, support, revenue sharing, and day-to-day operations.",
      gradient: "gradient-blue",
      image: services3,
    },
    {
      title: "Terms & Conditions",
      description: "Review our transparent partnership terms, policies, responsibilities, revenue model, and commitments to ensure a successful collaboration.",
      gradient: "gradient-kitchen",
      image: kitchenCloud,
    },
  ];

  const benefits = [
    { title: "Zero Upfront Cost", desc: "No investment needed for kitchen setup or equipment" },
    { title: "Prime Locations", desc: "Cloud kitchens in high-demand delivery zones" },
    { title: "Full Tech Stack", desc: "Order management, analytics, and aggregator integration" },
    { title: "Marketing Support", desc: "Professional campaigns and customer acquisition" },
  ];

  return (
    <div className="bg-light text-dark min-h-screen">
      {/* HERO SECTION - No button */}
      <section className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('https://thumbs.dreamstime.com/b/two-business-professionals-shake-hands-over-counter-filled-fresh-vegetables-spices-modern-restaurant-kitchen-400234166.jpg')" }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Partner With Kitchen Cloud</h1>
          <p className="text-lg md:text-2xl max-w-4xl mx-auto opacity-95 leading-relaxed">
            Grow your food brand faster with our fully managed cloud kitchens, cutting-edge technology, 
            operational excellence, and dedicated marketing support.
          </p>
          {/* Button removed as requested */}
        </div>
      </section>

      {/* PARTNER OPTIONS - Compact & Professional Cards */}
      <section className="max-w-7xl mx-auto px-6 py-20 -mt-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-primary">Explore Partnership Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {partnerLinks.map((link) => (
            <div 
              key={link.title} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={link.image} 
                  alt={link.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
              <div className={`${link.gradient} py-8 px-6 text-center`}>
                <h3 className="text-2xl font-semibold text-white mb-4">{link.title}</h3>
                <p className="text-white/90 text-base leading-relaxed px-4">
                  {link.description}
                </p>
                {/* "Learn More" button removed */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS SECTION - Clean & Compact (Images removed) */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary">Why Partner With Kitchen Cloud?</h2>
          <p className="text-center text-lg md:text-xl text-gray mb-14 max-w-3xl mx-auto">
            We handle the heavy lifting so you can focus on creating amazing food and growing your brand
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {benefits.map((benefit) => (
              <div 
                key={benefit.title} 
                className="text-center bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-dark">{benefit.title}</h3>
                <p className="text-muted text-base md:text-lg leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - No buttons */}
      <section className="gradient-kitchen text-white py-28 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Scale Your Food Brand?</h2>
          <p className="text-xl md:text-2xl opacity-90">
            Join hundreds of successful partners already thriving with Kitchen Cloud.
          </p>
          {/* Buttons completely removed */}
        </div>
      </section>

    </div>
  );
};

export default PartnerPage;