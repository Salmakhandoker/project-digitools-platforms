const Toggle = ({ view, setView }) => {
  return (
    <div className="flex justify-center mt-10">
      <div className="bg-gray-100 rounded-full p-1 flex">
        
        <button
          onClick={() => setView("products")}
          className={`px-6 py-2 rounded-full ${
            view === "products"
              ? "bg-purple-600 text-white"
              : "text-gray-600"
          }`}
        >
          Products
        </button>

        <button
          onClick={() => setView("cart")}
          className={`px-6 py-2 rounded-full ${
            view === "cart"
              ? "bg-purple-600 text-white"
              : "text-gray-600"
          }`}
        >
          Cart
        </button>

      </div>
    </div>
  );
};

export default Toggle;