import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = ({ cartCount, setView }) => {
  const navItems = ["Products", "Features", "Pricing", "Testimonials"];
  
  return (
    <nav className="bg-white py-4 border-b border-gray-100 flex justify-between items-center px-10 md:px-20 sticky top-0 z-50">
      <div 
        className="text-2xl font-bold text-[#8035FF] cursor-pointer"
        onClick={() => setView("product")}
      >
        DigiTools
      </div>

      <div className="hidden lg:flex gap-8 text-gray-600 text-sm font-medium">
        {navItems.map((item) => (
          <a key={item} href="#" className="hover:text-[#8035FF] transition">{item}</a>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <div 
          className="relative text-2xl text-gray-700 cursor-pointer p-2 hover:bg-gray-100 rounded-full transition"
          onClick={() => setView("cart")}
        >
          <FiShoppingCart />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </div>
        <button className="bg-[#8035FF] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#6c29e0] transition">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;