
const Toggle = ({ setView }) => {
  return (
    <div className="text-center my-6">
      <button onClick={() => setView("products")} className="btn">
        Products
      </button>
      <button onClick={() => setView("cart")} className="btn ml-2">
        Cart
      </button>
    </div>
  );
};

export default Toggle;