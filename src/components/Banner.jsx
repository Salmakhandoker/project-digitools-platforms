
// src/components/Banner.jsx

const Banner = () => {
  return (
    <div className="hero bg-gradient-to-r from-purple-50 to-white px-6 md:px-12 py-16">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        
        {/* RIGHT: Image */}
        <img
          src="./public/banner.png"
          className="max-w-sm md:max-w-md rounded-lg shadow-xl"
          alt="Digital workflow banner"
        />

        {/* LEFT: Text */}
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Supercharge Your <br />
            <span className="text-purple-600">Digital Workflow</span>
          </h1>

          <p className="py-6 text-gray-600">
            Discover powerful tools to boost your productivity, 
            streamline your work, and grow your business faster.
          </p>

          <div className="flex gap-4">
            <button className="btn btn-primary rounded-full">
              Explore Products
            </button>

            <button className="btn btn-outline rounded-full">
               Watch Demo
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;