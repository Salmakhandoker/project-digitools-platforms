

const Toggle = ({ setView }) => {
  return (
    <div className="text-center my-6 space-x-2">
      
      <button
        onClick={() => setView("products")}
        className="btn"
      >
        Products
      </button>

      <button
        onClick={() => setView("cart")}
        className="btn"
      >
        Cart
      </button>

    </div>
  );
};

export default Toggle;