import { useState } from 'react';
import Navbar from './component/navbar/Navbar';
import Hero from './component/hero/Hero';
import Premium from './component/premium/Premium';
import GetStep from './component/getstep/GetStep';
import Pricing from './component/pricing/Pricing';
import Footer from './component/footer/Footer';
import Cart from './component/cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("product"); // "product" or "cart"

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart!`);
  };

  const handleRemove = (id) => {
    setCart(cart.filter(item => item.id !== id));
    toast.error("Removed from cart");
  };

  const handleCheckout = () => {
    setCart([]);
    setView("product");
    toast.info("Checkout Complete! 🧾");
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar cartCount={cart.length} setView={setView} />
      <Hero />

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 py-10 bg-gray-50">
        <button 
          onClick={() => setView("product")}
          className={`px-8 py-2 rounded-full font-bold transition ${view === "product" ? 'bg-[#8035FF] text-white shadow-lg' : 'bg-white text-gray-600 border'}`}
        >
          Products
        </button>
        <button 
          onClick={() => setView("cart")}
          className={`px-8 py-2 rounded-full font-bold transition ${view === "cart" ? 'bg-[#8035FF] text-white shadow-lg' : 'bg-white text-gray-600 border'}`}
        >
          Cart ({cart.length})
        </button>
      </div>

      {/* Main Section */}
      <div className="bg-gray-50 pb-20 px-5">
        <div className="container mx-auto">
          {view === "product" ? (
            <Premium handleAddToCart={handleAddToCart} />
          ) : (
            <Cart cart={cart} handleRemove={handleRemove} handleCheckout={handleCheckout} />
          )}
        </div>
      </div>

      <GetStep />
      <Pricing />
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
} 

export default App;  