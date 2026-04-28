export default function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">🛒 Cart</h2>

      {cart.length === 0 ? (
        <p>No items yet</p>
      ) : (
        cart.map((item, index) => (
          <div
            key={index}
            className="flex justify-between bg-white p-3 mb-2 rounded shadow"
          >
            <span>{item.name}</span>

            <div>
              <span className="mr-3">${item.price}</span>
              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500"
              >
                X
              </button>
            </div>
          </div>
        ))
      )}

      <h3 className="mt-4 font-bold">Total: ${total}</h3>
    </div>
  );
}