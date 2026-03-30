

import { FaSearch, FaShoppingCart, FaCheckCircle } from "react-icons/fa";

const Steps = () => {
  const steps = [
    {
      icon: <FaSearch />,
      title: "Create Account",
      desc: "Sign up for free in seconds. No credit card required to get started.",
    },
    {
      icon: <FaShoppingCart />,
      title: "Choose Products",
      desc: "Browse our catalog and select the tools that fit your needs.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Start Creating",
      desc: "Download and start using your premium tools immediately.",
    },
  ];

  return (
    <div className="bg-white py-16 px-6 md:px-12 text-center">
      
      {/* Title */}
      <h2 className="text-3xl font-bold mb-12">
       Get Started in 3 Steps
      </h2>
      <p className="text-gray-500 text-sm">Start using premium digital tools in minutes, not hours.</p>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="p-6 rounded-xl shadow-lg bg-gray-50">
            
            {/* Icon */}
            <div className="text-3xl text-white bg-purple-600 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4">
              {step.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 mt-2 text-sm">
              {step.desc}
              
            </p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;