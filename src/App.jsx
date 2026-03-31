

import { useState } from "react";
import productsData from "./data/products.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import Steps from './components/Steps';
import Products from './components/Products';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart`);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
    toast.error("Removed from cart");
  };

  const checkout = () => {
    setCart([]);
    toast.info("Checkout successful! (Demo)");
    setShowCart(false);
  };

  return (
    <>
      <Navbar cartCount={cart.length} />

      {!showCart && (
        <>
          <Banner />
          <Stats />
          <Steps />
        </>
      )}

      {/* Products / Cart Toggle Buttons - Like in Figma */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6 flex justify-center gap-4">
        <button
          onClick={() => setShowCart(false)}
          className={`px-10 py-3 rounded-full font-medium text-lg transition-all ${
            !showCart 
              ? 'bg-purple-600 text-white shadow-lg' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Products
        </button>

        <button
          onClick={() => setShowCart(true)}
          className={`px-10 py-3 rounded-full font-medium text-lg transition-all ${
            showCart 
              ? 'bg-purple-600 text-white shadow-lg' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Cart ({cart.length})
        </button>
      </div>

      {/* Main Content Area */}
      <div className="min-h-screen">
        {showCart ? (
          <Cart 
            cart={cart} 
            removeFromCart={removeFromCart} 
            checkout={checkout} 
            onClose={() => setShowCart(false)}
          />
        ) : (
          <>
            <Products products={productsData} addToCart={addToCart} />
            <Pricing />
            <CTA />
          </>
        )}
      </div>

      {!showCart && <Footer />}

      <ToastContainer position="top-right" autoClose={2500} />
    </>
  );
}

export default App;