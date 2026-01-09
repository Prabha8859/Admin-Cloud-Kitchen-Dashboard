import React from "react";
import Card from "../components/ui/Card";
import services1 from "../../assets/images/services1.webp";
import Services3 from "../../assets/images/Services3.webp";
import Services4 from "../../assets/images/Services4.webp";

const ServicesPage = () => {
  const services = [
    {
      title: "Cloud Kitchen Setup",
      description: "End-to-end setup of cloud kitchens with modern equipment, smart layouts, and operational efficiency to help your food brand launch faster.",
      gradientClass: "gradient-orange",
      icon: (
        <svg className="w-14 h-14 mb-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h-4m-6 0H5a2 2 0 002-2v-4" />
        </svg>
      ),
      image: services1, // Professional cloud kitchen setup
    },
    {
      title: "Operations",
      description: "Operational support, staff training, kitchen management, and tech integration to ensure smooth daily operations.",
      gradientClass: "gradient-blue",
      icon: (
        <svg className="w-14 h-14 mb-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      image: Services3, // Professional staff/operations
    },
    {
      title: "Growth & Marketing",
      description: "Marketing strategies, online presence, and analytics to grow your brand, boost orders, and reach more customers.",
      gradientClass: "gradient-kitchen",
      icon: (
        <svg className="w-14 h-14 mb-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      image: Services4, // Growth analytics chart
    },
  ];

  return (
    <div className="bg-light text-dark min-h-screen">
      {/* HERO SECTION - No buttons + better image */}
      <section className="relative h-screen flex items-center justify-center text-center text-dark bg-cover bg-center"
        style={{ backgroundImage: "url('https://www.shutterstock.com/image-photo/wooden-countertop-foreground-blurred-modern-600nw-2631610587.jpg')" }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Launch & Grow Your Food Brand<br className="hidden md:block" />with Kitchen Cloud</h1>
          <p className="text-lg md:text-2xl max-w-4xl mx-auto opacity-95 leading-relaxed">
            Complete cloud kitchen solutions — from setup to operations and explosive growth on Swiggy, Zomato & more.
          </p>
          {/* Buttons removed */}
        </div>
      </section>

      {/* SERVICES CARDS - Compact & Professional */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-primary">Our Comprehensive Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service) => (
            <Card key={service.title} variant="default" hover={true} padding="none">
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className={`${service.gradientClass} py-8 px-6 text-center`}>
                {service.icon}
                <h3 className="text-2xl font-semibold text-dark mb-4">{service.title}</h3>
                <p className="text-dark/90 text-base leading-relaxed px-4">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>
                          
      {/* WHY CHOOSE US - More balanced */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-primary">Why Brands Trust Kitchen Cloud</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
            <div className="bg-gray-50 rounded-2xl p-10 shadow-md">
              <h3 className="text-5xl font-bold text-primary mb-4">500+</h3>
              <p className="text-xl text-gray">Kitchens Launched</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-10 shadow-md">
              <h3 className="text-5xl font-bold text-primary mb-4">3x</h3>
              <p className="text-xl text-gray">Average Growth</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-10 shadow-md">
              <h3 className="text-5xl font-bold text-primary mb-4">24/7</h3>
              <p className="text-xl text-gray">Dedicated Support</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-10 shadow-md">
              <h3 className="text-5xl font-bold text-primary mb-4">98%</h3>
              <p className="text-xl text-gray">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - Clean & Compact */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-primary">Simple 3-Step Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "1", title: "Consultation", desc: "We understand your brand vision and goals" },
              { step: "2", title: "Setup & Launch", desc: "Professional kitchen buildout and platform onboarding" },
              { step: "3", title: "Grow & Scale", desc: "Advanced marketing, analytics & optimization" }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">{item.title}</h3>
                <p className="text-lg text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - No button */}
      <section className="gradient-kitchen text-dark py-28 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Transform Your Food Business?</h2>
          <p className="text-xl md:text-2xl opacity-90">
            Join hundreds of successful brands growing with Kitchen Cloud.
          </p>
          {/* Button removed */}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;