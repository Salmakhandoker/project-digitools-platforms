

import React from 'react';

const PremiumToolsPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header / Hero Section */}
      <div className="pt-16 pb-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Premium Digital Tools
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose from our curated collection of premium digital products designed 
          to boost your productivity and creativity.
        </p>

        <div className="flex justify-center gap-4 mt-10">
          <button className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-full transition-colors">
            Products
          </button>
          <button className="px-8 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 font-medium rounded-full transition-colors">
            Cart (2)
          </button>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:border-gray-300 transition-all">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-1">Starter</h3>
              <p className="text-gray-500 text-sm">Perfect for getting started</p>
            </div>

            <div className="mb-8">
              <span className="text-5xl font-bold">$0</span>
              <span className="text-gray-500">/month</span>
            </div>

            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-gray-600">
                <span className="text-green-500">✓</span>
                Access to 10 free tools
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="text-green-500">✓</span>
                Basic templates
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="text-green-500">✓</span>
                Community support
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="text-green-500">✓</span>
                1 project per month
              </li>
            </ul>

            <button className="w-full py-3.5 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-2xl transition-colors">
              Get Started Free
            </button>
          </div>

          {/* Pro Plan - Most Popular */}
          <div className="bg-violet-600 text-white rounded-3xl p-8 relative scale-105 shadow-2xl">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-6 py-1 rounded-full">
              MOST POPULAR
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-1">Pro</h3>
              <p className="text-violet-200 text-sm">Best for professionals</p>
            </div>

            <div className="mb-8">
              <span className="text-5xl font-bold">$29</span>
              <span className="text-violet-200">/month</span>
            </div>

            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3">✓ Access to all premium tools</li>
              <li className="flex items-center gap-3">✓ Unlimited templates</li>
              <li className="flex items-center gap-3">✓ Priority support</li>
              <li className="flex items-center gap-3">✓ Unlimited projects</li>
              <li className="flex items-center gap-3">✓ Cloud sync</li>
              <li className="flex items-center gap-3">✓ Advanced analytics</li>
            </ul>

            <button className="w-full py-3.5 bg-white hover:bg-gray-100 text-violet-600 font-semibold rounded-2xl transition-colors">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:border-gray-300 transition-all">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-1">Enterprise</h3>
              <p className="text-gray-500 text-sm">For teams and businesses</p>
            </div>

            <div className="mb-8">
              <span className="text-5xl font-bold">$99</span>
              <span className="text-gray-500">/month</span>
            </div>

            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-gray-600">✓ Everything in Pro</li>
              <li className="flex items-center gap-3 text-gray-600">✓ Team collaboration</li>
              <li className="flex items-center gap-3 text-gray-600">✓ Custom integrations</li>
              <li className="flex items-center gap-3 text-gray-600">✓ Dedicated support</li>
              <li className="flex items-center gap-3 text-gray-600">✓ SLA guarantee</li>
              <li className="flex items-center gap-3 text-gray-600">✓ Custom branding</li>
            </ul>

            <button className="w-full py-3.5 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-2xl transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Ready To Transform Your Workflow?
          </h2>
          <p className="text-xl text-violet-100 mb-10">
            Join thousands of professionals who are already using Digito to work smarter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-white text-violet-700 font-semibold rounded-2xl hover:bg-gray-100 transition-colors">
              Explore Products
            </button>
            <button className="px-10 py-4 border-2 border-white/80 hover:bg-white/10 font-semibold rounded-2xl transition-colors">
              View Pricing
            </button>
          </div>

          <p className="text-sm text-violet-200 mt-10">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default PremiumToolsPage;