export default function Navbar({ setPage, cartCount }) {
  return (
    <div className="flex justify-between items-center p-4 bg-pink-100 shadow">
      <h1 className="text-xl font-bold text-pink-600">
        🌸 K-Beauty Store
      </h1>

      <div className="space-x-4">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("shop")}>Shop</button>
        <button onClick={() => setPage("cart")}>
          Cart ({cartCount})
        </button>
      </div>
    </div>
  );
}