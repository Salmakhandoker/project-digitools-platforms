
const Pricing = () => {
  const plans = [
    { name: "Starter", price: "$0", desc: "Basic features" },
    { name: "Pro", price: "$29", desc: "Best for professionals", highlight: true },
    { name: "Enterprise", price: "$99", desc: "Advanced features" },
  ];

  return (
    <div className="bg-gray-50 py-16 px-6 md:px-12 text-center">
      
      <h2 className="text-3xl font-bold mb-10">
        Simple Pricing
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`p-6 rounded-xl shadow-lg bg-white ${
              plan.highlight ? "border-2 border-purple-600 scale-105" : ""
            }`}
          >
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className="text-3xl font-bold text-purple-600 mt-3">
              {plan.price}
            </p>
            <p className="text-gray-500 mt-2">{plan.desc}</p>

            <button className="btn btn-primary w-full mt-6">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;