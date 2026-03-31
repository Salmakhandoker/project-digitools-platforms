

const CTA = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white py-20 text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">Ready To Transform Your Workflow?</h2>
        <p className="text-xl mb-10">Join thousands of professionals who are already using DigiTools.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn bg-white text-purple-600 hover:bg-gray-100 px-10 py-4 text-lg">Explore Products</button>
          <button className="btn border-2 border-white hover:bg-white hover:text-purple-600 px-10 py-4 text-lg">View Pricing</button>
        </div>
      </div>
    </div>
  );
};

export default CTA;