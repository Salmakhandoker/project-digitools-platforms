

import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cartCount }) => {
  return (
    <div className="navbar bg-white shadow-md px-6 md:px-12">
      
      {/* LEFT: Logo */}
      <div className="navbar-start">
        <h1 className="text-2xl font-bold text-purple-600">
          DigiTools
        </h1>
      </div>

      {/* CENTER: Menu */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-gray-700">
          <li><a>Home</a></li>
          <li><a>Products</a></li>
          <li><a>Pricing</a></li>
          <li><a>Testimonials</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </div>

      {/* RIGHT: Cart + Button */}
      <div className="navbar-end gap-4">
        
        {/* Cart */}
        <div className="relative">
          <FaShoppingCart className="text-xl cursor-pointer" />

          {/* Cart Count Badge */}
          <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
            {cartCount}
          </span>
        </div>

        {/* CTA Button */}
        <button className="btn btn-primary rounded-full hidden md:block">
          Get Started
        </button>

        {/* Mobile Menu */}
        <div className="dropdown md:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            ☰
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a>Home</a></li>
            <li><a>Products</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;