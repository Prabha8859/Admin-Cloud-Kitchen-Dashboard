// Testimonials.jsx
const testimonials = [
  {
    name: "Rajesh Kumar",
    restaurant: "Spice Route Restaurant, Delhi",
    quote: "Kitchen Cloud tripled our orders! Weekly payments and dedicated support are simply the best.",
    rating: 5,
    image: "/images/restaurant1.jpg"
  },
  {
    name: "Priya Sharma",
    restaurant: "The Biryani House, Mumbai",
    quote: "Registration took only 10 minutes and orders started coming in the next day. Highly recommended!",
    rating: 5,
    image: "/images/restaurant2.jpg"
  },
  {
    name: "Amit Patel",
    restaurant: "DOSA Express, Bangalore",
    quote: "Amazing customer reach. Saved on marketing costs and sales are growing consistently.",
    rating: 5,
    image: "/images/restaurant3.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Restaurants love partnering with us
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
            Hear from thousands of restaurant owners who grew their business with Kitchen Cloud
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* User Info */}
              <div className="flex items-center mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-orange-400"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.restaurant}</p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex items-center mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current mr-1"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 italic text-lg leading-relaxed">
                "{item.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
