import React from "react";
import Card from '../components/ui/Card';
import image5 from '../../assets/images/Image 5.jpg';
import services1 from '../../assets/images/services1.webp';
import growth from '../../assets/images/Growth.webp';
import services3 from '../../assets/images/Services3.webp';
import image4 from '../../assets/images/Image4.avif';

const AboutUs = () => {
  const services = [
    {
      title: "Cloud Kitchen Setup",
      description: "Complete turnkey setup with modern kitchen layouts, high-quality equipment, compliance standards, and optimized workflows for maximum efficiency.",
      image: image5,
      gradient: "gradient-orange",
    },
    {
      title: "Operations & Support",
      description: "Expert guidance, staff training, inventory management, real-time tech support, and performance analytics to keep your kitchen running smoothly 24/7.",
      image: services1,
      gradient: "gradient-blue",
    },
    {
      title: "Growth & Marketing",
      description: "Data-driven marketing, aggregator optimization, customer insights, loyalty programs, and growth strategies to boost orders and expand your brand.",
      image: growth,
      gradient: "gradient-kitchen",
    },
  ];

  return (
    <div className="bg-light text-dark min-h-screen">
      {/* HERO SECTION - Button removed */}
      <section className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${image4})` }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Kitchen Cloud</h1>
          <p className="text-lg md:text-2xl max-w-4xl mx-auto opacity-95 leading-relaxed">
            Revolutionizing the food business with cloud kitchens, technology, and operational expertise.<br className="hidden md:block" />
            Helping food brands grow faster, smarter, and more profitably.
          </p>
          {/* Button intentionally removed */}
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="max-w-7xl mx-auto px-6 py-20 -mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">Who We Are</h2>
            <p className="text-text-dark text-lg md:text-xl leading-relaxed mb-6">
              Kitchen Cloud is India's leading cloud kitchen platform, empowering food entrepreneurs and established brands to scale efficiently without the heavy burden of traditional restaurant setup.
            </p>
            <p className="text-text-dark text-lg md:text-xl leading-relaxed mb-6">
              We combine state-of-the-art kitchens, cutting-edge technology, operational excellence, and deep industry expertise — so you can focus on creating delicious food that customers love.
            </p>
            <p className="text-text-dark text-lg md:text-xl leading-relaxed">
              From menu optimization and seamless delivery integration to data-driven marketing, Kitchen Cloud is your complete partner in building a thriving food business in the digital era.
            </p>
          </div>
          <div>
            <img
              src={services3}
              alt="Modern Cloud Kitchen Operations"
              className="rounded-3xl shadow-2xl w-full object-cover h-full min-h-96"
            />
          </div>
        </div>
      </section>

      {/* OUR SERVICES - Cards ko chhota aur professional banaya */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary">Our Comprehensive Services</h2>
          <p className="text-center text-lg md:text-xl text-gray mb-14 max-w-3xl mx-auto">
            End-to-end solutions designed to launch, operate, and scale your cloud kitchen successfully
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service) => (
              <Card
                key={service.title}
                variant="elevated"
                className="overflow-hidden transition-all duration-300 hover:shadow-2xl"
                padding="none"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className={`${service.gradient} py-8 px-6 text-center`}>
                  <Card.Title className="text-white mb-4">{service.title}</Card.Title>
                  <Card.Description className="text-white/90 px-4">
                    {service.description}
                  </Card.Description>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION - Cards chhote aur clean */}
      <section className="bg-primary-light py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card
            variant="default"
            className="text-center transition-shadow duration-300 hover:shadow-xl"
            padding="large"
          >
            <Card.Title className="text-primary mb-5">Our Mission</Card.Title>
            <Card.Description>
              To empower every food entrepreneur with world-class cloud kitchen infrastructure, cutting-edge technology, and expert support — enabling them to scale rapidly while delivering exceptional food experiences to customers across India.
            </Card.Description>
          </Card>
          <Card
            variant="default"
            className="text-center transition-shadow duration-300 hover:shadow-xl"
            padding="large"
          >
            <Card.Title className="text-primary mb-5">Our Vision</Card.Title>
            <Card.Description>
              To become the most trusted and innovative cloud kitchen platform in India, transforming how food brands operate, grow, and succeed in the digital-first food delivery era.
            </Card.Description>
          </Card>
        </div>
      </section>

      {/* FINAL CTA - Buttons completely removed */}
      <section className="gradient-kitchen text-white py-28 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Start Your Cloud Kitchen Journey?</h2>
          <p className="text-xl md:text-2xl opacity-90">
            Join hundreds of successful food brands already growing with Kitchen Cloud.
          </p>
          {/* Buttons intentionally removed */}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;