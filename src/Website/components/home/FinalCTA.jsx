// FinalCTA.jsx
const FinalCTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Main Heading - Orange for impact */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
          Ready to grow your restaurant business?
        </h2>

        {/* Subtext - Dark gray for readability */}
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-text-gray">
          Join 50,000+ restaurants already boosting their sales with Kitchen Cloud. 
          Zero upfront cost, quick approval, and instant orders.
        </p>
{/* Buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        
          <button className="btn-primary text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Register Your Restaurant Free
          </button>

       
          <button className="text-lg px-10 py-4 rounded-xl border-2 border-text-dark text-text-dark hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 font-medium">
            Talk to Our Team
          </button>
        </div> */}

        {/* Benefits List - Orange ticks with dark text */}
        <p className="mt-12 text-lg font-medium text-text-dark">
          <span className="text-primary text-2xl mr-2">✅</span> No commission for first month  
          <span className="mx-4">|</span>  
          <span className="text-primary text-2xl mr-2">✅</span> Free marketing support  
          <span className="mx-4">|</span>  
          <span className="text-primary text-2xl mr-2">✅</span> Weekly payouts
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;