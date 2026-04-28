export default function ProductList({ products, addToCart }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl shadow hover:scale-105 transition"
        >
          <img
            src={item.image}
            className="h-48 w-full object-cover rounded-t-2xl"
          />

          <div className="p-4">
            <h2 className="font-bold text-pink-600">{item.name}</h2>
            <p className="text-sm text-gray-500">{item.desc}</p>

            <div className="flex justify-between mt-3">
              <span>${item.price}</span>

              <button
                onClick={() => addToCart(item)}
                className="bg-pink-500 text-white px-3 py-1 rounded"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}