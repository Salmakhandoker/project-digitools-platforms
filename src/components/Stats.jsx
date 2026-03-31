

const Stats = () => {
  return (
    <div className="bg-purple-600 text-white py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8 text-center px-6">
        <div>
          <div className="text-5xl font-bold">50K+</div>
          <div className="text-purple-200 mt-2">Active Users</div>
        </div>
        <div>
          <div className="text-5xl font-bold">200+</div>
          <div className="text-purple-200 mt-2">Premium Tools</div>
        </div>
        <div>
          <div className="text-5xl font-bold">4.9</div>
          <div className="text-purple-200 mt-2">Rating</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;