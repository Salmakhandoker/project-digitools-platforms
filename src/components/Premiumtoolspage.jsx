import { useState } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";

const PremiumToolsPage = ({
  products,
  cart,
  addToCart,
  removeFromCart,
  checkout,
}) => {
  const [view, setView] = useState("products");

  return (
    <div className="bg-gray-50 py-16">

      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Premium Digital Tools</h2>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          Choose from our curated collection of premium digital products designed
          to boost your productivity and creativity.
        </p>
      </div>

      {/* Toggle (EXACT STYLE) */}
      <div className="flex justify-center mb-10">
        <div className="flex gap-3">

          <button
            onClick={() => setView("products")}
            className={`px-6 py-2 rounded-full font-medium transition ${
              view === "products"
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                : "border text-gray-600"
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setView("cart")}
            className={`px-6 py-2 rounded-full font-medium transition ${
              view === "cart"
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                : "border text-gray-600"
            }`}
          >
            Cart ({cart.length})
          </button>

        </div>
      </div>

      {/* Products Grid */}
      {view === "products" && (
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      )}

      {/* Cart */}
      {view === "cart" && (
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          checkout={checkout}
        />
      )}

    </div>
  );
};

export default PremiumToolsPage;