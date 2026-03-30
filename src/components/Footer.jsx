
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 md:px-12 py-12">
      
      <div className="grid md:grid-cols-4 gap-8">
        
        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold text-purple-500">
            DigiTools
          </h2>
          <p className="mt-3 text-gray-400">
            All-in-one digital tools platform to help you
            work smarter and grow faster.
          </p>
        </div>

        {/* Links 1 */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a className="hover:text-white">About</a></li>
            <li><a className="hover:text-white">Careers</a></li>
            <li><a className="hover:text-white">Blog</a></li>
          </ul>
        </div>

        {/* Links 2 */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a className="hover:text-white">Help Center</a></li>
            <li><a className="hover:text-white">Contact</a></li>
            <li><a className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-3">Subscribe</h3>
          <input
            type="email"
            placeholder="Your email"
            className="input input-bordered w-full mb-3 text-black"
          />
          <button className="btn btn-primary w-full">
            Subscribe
          </button>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-6">
        © 2026 DigiTools. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;