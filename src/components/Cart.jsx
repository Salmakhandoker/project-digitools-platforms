

const Cart = ({ cart, removeFromCart, checkout }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-gray-500">Add some premium tools to get started.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Your Cart</h2>

      <div className="space-y-6">
        {cart.map((item, index) => (
          <div key={index} className="flex items-center justify-between bg-white p-6 rounded-2xl shadow">
            <div className="flex items-center gap-6">
              <div className="text-4xl">{item.icon}</div>
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <p className="text-2xl font-bold text-purple-600">${item.price}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 font-medium"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-white p-8 rounded-3xl shadow text-center">
        <p className="text-2xl">Total: <span className="font-bold text-purple-600">${total}</span></p>
        <button
          onClick={checkout}
          className="btn btn-primary w-full max-w-md mx-auto mt-6 py-4 text-lg"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;