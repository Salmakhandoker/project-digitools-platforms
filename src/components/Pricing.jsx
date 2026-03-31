
const Pricing = () => {
  return (
    <div className="bg-gray-50 py-20" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 text-lg">Choose the plan that fits your needs. No hidden fees.</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Starter Plan */}
          <div className="bg-white rounded-3xl p-10 shadow hover:shadow-xl transition-all border border-gray-100">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">Starter</h3>
              <p className="text-gray-500 mb-6">Perfect for getting started</p>
              
              <div className="mb-8">
                <span className="text-6xl font-bold">$0</span>
                <span className="text-gray-500">/month</span>
              </div>

              <ul className="space-y-4 text-left mb-10">
                <li className="flex items-center gap-3">✅ Access to 10 free tools</li>
                <li className="flex items-center gap-3">✅ Basic templates</li>
                <li className="flex items-center gap-3">✅ Community support</li>
                <li className="flex items-center gap-3">✅ 1 project per month</li>
              </ul>

              <button className="btn btn-outline w-full py-4 text-lg">
                Get Started Free
              </button>
            </div>
          </div>

          {/* Pro Plan - Most Popular (Highlighted) */}
          <div className="bg-purple-600 rounded-3xl p-10 shadow-xl border-2 border-purple-600 relative scale-105">
            {/* Most Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-sm font-medium px-6 py-1.5 rounded-full">
              Most Popular
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">Pro</h3>
              <p className="text-gray-500 mb-6">Best for professionals</p>
              
              <div className="mb-8">
                <span className="text-6xl font-bold">$29</span>
                <span className="text-gray-500">/month</span>
              </div>

              <ul className="space-y-4 text-left mb-10">
                <li className="flex items-center gap-3">✅ Access to all premium tools</li>
                <li className="flex items-center gap-3">✅ Unlimited templates</li>
                <li className="flex items-center gap-3">✅ Priority support</li>
                <li className="flex items-center gap-3">✅ Unlimited projects</li>
                <li className="flex items-center gap-3">✅ Advanced analytics</li>
              </ul>

              <button className="btn btn-primary w-full py-4 text-lg bg-purple-600 hover:bg-purple-700">
                Start Pro Trial
              </button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-3xl p-10 shadow hover:shadow-xl transition-all border border-gray-100">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">Enterprise</h3>
              <p className="text-gray-500 mb-6">For teams &amp; businesses</p>
              
              <div className="mb-8">
                <span className="text-6xl font-bold">$99</span>
                <span className="text-gray-500">/month</span>
              </div>

              <ul className="space-y-4 text-left mb-10">
                <li className="flex items-center gap-3">✅ Everything in Pro</li>
                <li className="flex items-center gap-3">✅ Custom integrations</li>
                <li className="flex items-center gap-3">✅ Dedicated support</li>
                <li className="flex items-center gap-3">✅ Team collaboration</li>
                <li className="flex items-center gap-3">✅ Custom branding</li>
              </ul>

              <button className="btn btn-outline w-full py-4 text-lg">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;