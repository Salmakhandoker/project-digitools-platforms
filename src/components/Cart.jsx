

const Cart = ({ cart, removeFromCart, checkout }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-xl mx-auto p-6">
      
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">
          Your cart is empty
        </p>
      ) : (
        <>
          {cart.map(item => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white shadow p-4 rounded-lg mb-3"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{item.icon}</span>
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="btn btn-error btn-sm"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-6 text-right">
            <h2 className="text-xl font-bold">
              Total: ${total}
            </h2>

            <button
              onClick={checkout}
              className="btn btn-success mt-3 w-full"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;