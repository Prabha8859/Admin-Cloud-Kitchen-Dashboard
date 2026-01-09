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
    <section className="py-0 bg-gradient-to-b from-[var(--bg)] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--primary-light)] text-[var(--primary)] font-semibold text-sm mb-6">
            <span className="mr-2">✨</span>
            Trusted by 5,000+ Restaurants
          </div> */}
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--heading-color)] mb-6">
            Restaurants <span className="text-[var(--primary)]">Love</span> Partnering With Us
          </h2>
          
          <p className="text-lg md:text-xl text-[var(--text-gray)] max-w-3xl mx-auto leading-relaxed">
            Hear from thousands of restaurant owners who grew their business with Kitchen Cloud
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Background Decorative Element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[var(--primary-light)] to-transparent rounded-full -translate-y-12 translate-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-[var(--secondary-light)] opacity-20">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h8c3.3 0 6-2.7 6-6s-2.7-6-6-6H10zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h8c3.3 0 6-2.7 6-6s-2.7-6-6-6H24z"/>
                </svg>
              </div>

              {/* User Info */}
              <div className="flex items-start mb-8 relative z-10">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-2xl object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="font-bold text-lg text-[var(--text-dark)]">{item.name}</h4>
                  <p className="text-sm text-[var(--secondary)] font-medium">{item.restaurant}</p>
                  
                  {/* Star Rating with Count */}
                  <div className="flex items-center mt-2">
                    <div className="flex items-center mr-2">
                      {[...Array(item.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-[var(--primary)] fill-current mr-1"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-[var(--text-dark)]">{item.rating}.0</span>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <p className="text-[var(--text-gray)] text-lg leading-relaxed italic relative z-10 mb-6 pl-4 border-l-4 border-[var(--primary-light)]">
                "{item.quote}"
              </p>

              {/* Verified Badge */}
              <div className="flex items-center text-sm text-[var(--success)]">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Verified Partner • 6+ Months
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;