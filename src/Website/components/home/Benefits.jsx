// Benefits.jsx
import React, { useState, useEffect, useRef } from "react";
import Card from "../ui/Card";

// Smart Counter with K/M formatting (starts from 0)
const Counter = ({ end, suffix = "", duration = 2800 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
      const percentage = Math.min(progress / duration, 1);
      const eased = easeOutQuart(percentage);

      const currentValue = Math.floor(end * eased);
      setCount(currentValue);

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  // Custom K/M+ formatting (exactly like 50K+, 1M+)
  const formatCount = (num) => {
    if (num >= 1000000) {
      return `${Math.floor(num / 1000000)}M+`;
    } else if (num >= 1000) {
      return `${Math.floor(num / 1000)}K+`;
    }
    return num.toString();
  };

  return <span ref={ref}>{formatCount(count)}{suffix.replace(/^[MK]/, '')}</span>; // suffix mein extra M/K nahi daalte
};

const benefits = [
  {
    value: 1000000,
    title: "Monthly Orders",
    desc: "Reach millions of hungry customers every month",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    value: 50000,
    title: "Partner Chefs",
    desc: "Join India's fastest growing home chef network",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const Benefits = () => {
  return (
    <section className="bg-[var(--bg)] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[var(--text-dark)]">
            Why partner with <span className="text-[var(--primary)]">Kitchen Cloud</span>?
          </h2>
          <p className="text-sm md:text-base text-[var(--text-muted)] max-w-2xl mx-auto mt-3">
            Thousands of home chefs trust us to grow their business. Here's why.
          </p>
          <div className="h-0.5 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent w-32 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Compact Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              variant="elevated"
              className="p-5 md:p-6 text-center hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-100"
            >
              <Card.Body className="space-y-3">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)]">
                  {benefit.icon}
                </div>

                {/* Number (Animated for counters) */}
                <h3 className="text-3xl md:text-4xl font-extrabold text-[var(--primary)]">
                  {benefit.value ? (
                    <Counter end={benefit.value} />
                  ) : (
                    benefit.number
                  )}
                </h3>

                {/* Title */}
                <h4 className="text-base md:text-lg font-bold text-[var(--text-dark)]">
                  {benefit.title}
                </h4>

                {/* Description */}
                <p className="text-xs md:text-sm text-[var(--text-muted)] leading-relaxed">
                  {benefit.desc}
                </p>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;