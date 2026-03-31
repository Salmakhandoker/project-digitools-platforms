import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import PremiumToolsPage from "./components/PremiumToolsPage";
import Steps from "./components/Steps";
import Toggle from "./components/Toggle";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

import productsData from "./data/products.json";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("products");

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success("Added to cart");
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
    toast.error("Removed from cart");
  };

  const checkout = () => {
    setCart([]);
    toast.info("Checkout successful");
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Banner />
      <Stats />
      <Steps />

    {/* Toggle */}
<Toggle setView={setView} />

{/* Products / Cart Section */}
{view === "products" && (
  <Products products={productsData} addToCart={addToCart} />
)}

{view === "cart" && (
  <Cart
    cart={cart}
    removeFromCart={removeFromCart}
    checkout={checkout}
  />
)}

{/* Pricing Section (ALWAYS BELOW) */}
<PremiumToolsPage />
      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;