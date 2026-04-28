import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { products } from "./data/product";

export default function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);

  const addToCart = (item) => setCart([...cart, item]);
  const removeFromCart = (index) =>
    setCart(cart.filter((_, i) => i !== index));

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Navbar setPage={setPage} cartCount={cart.length} />

      <h1 className="text-4xl text-center font-bold text-pink-600 my-6">
        🌸 K-Beauty Glow Store
      </h1>

      {page === "home" && (
        <p className="text-center">Welcome to Korean skincare 💖</p>
      )}

      {page === "shop" && (
        <ProductList products={products} addToCart={addToCart} />
      )}

      {page === "cart" && (
        <Cart cart={cart} removeFromCart={removeFromCart} />
      )}
    </div>
  );
}