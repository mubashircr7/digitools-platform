import React from 'react';

const Cart = ({ cart, handleRemove, handleCheckout }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed">
        <h2 className="text-2xl font-bold text-gray-300 italic">Your Cart is Empty! 🛒</h2>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-xl border border-gray-50">
      <h2 className="text-2xl font-bold mb-8">Items in Cart</h2>
      <div className="space-y-4">
        {cart.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
            <div className="flex items-center gap-4">
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h4 className="font-bold">{item.name}</h4>
                <p className="text-sm text-gray-500">${item.price}</p>
              </div>
            </div>
            <button onClick={() => handleRemove(item.id)} className="text-red-500 font-bold px-4 py-2 hover:bg-red-50 rounded-lg transition">Remove</button>
          </div>
        ))}
      </div>
      <div className="mt-10 border-t pt-6">
        <div className="flex justify-between text-xl font-bold mb-6">
          <span>Total:</span>
          <span className="text-[#8035FF]">${total}</span>
        </div>
        <button 
          onClick={handleCheckout}
          className="w-full bg-[#8035FF] text-white py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;