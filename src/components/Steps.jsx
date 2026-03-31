

const Steps = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-4">Get Started in 3 Steps</h2>
      <p className="text-center text-gray-600 mb-12">Start using premium digital tools in minutes, not hours.</p>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">👤</div>
          <h3 className="font-semibold text-xl mb-3">Create Account</h3>
          <p className="text-gray-600">Sign up for free. No credit card required.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">📦</div>
          <h3 className="font-semibold text-xl mb-3">Choose Products</h3>
          <p className="text-gray-600">Browse and select the tools that fit your needs.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">🚀</div>
          <h3 className="font-semibold text-xl mb-3">Start Creating</h3>
          <p className="text-gray-600">Download and start using your premium tools immediately.</p>
        </div>
      </div>
    </div>
  );
};

export default Steps;