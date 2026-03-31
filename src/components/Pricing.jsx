

const Pricing = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
        <p className="text-center text-gray-600 mb-12">Choose the plan that fits your needs</p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter, Pro, Enterprise cards – add your own details here */}
          <div className="bg-white rounded-3xl p-8 shadow">Starter - $0/month</div>
          <div className="bg-purple-600 text-white rounded-3xl p-8 shadow scale-105">Pro - $29/month</div>
          <div className="bg-white rounded-3xl p-8 shadow">Enterprise - $99/month</div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;