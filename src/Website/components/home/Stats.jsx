// Stats.jsx
const Stats = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Why partner with us?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            ["1M+", "Monthly Orders"],
            ["50K+", "Restaurants"],
            ["24/7", "Support"],
            ["Fast", "Payments"],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-4xl font-bold text-blue-600">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
