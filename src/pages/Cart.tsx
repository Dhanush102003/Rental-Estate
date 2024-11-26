import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const calculateTotal = () => {
    const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
    const gst = subtotal * 0.18; // 18% GST
    return {
      subtotal,
      gst,
      total: subtotal + gst
    };
  };

  const { subtotal, gst, total } = calculateTotal();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Your cart is empty</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white rounded-lg shadow-md p-6 mb-4"
                >
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                    <div className="ml-6 flex-grow">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-gray-600">{item.location}</p>
                      <p className="text-primary-600 font-semibold">₹{item.price.toLocaleString()}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 h-fit">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (18%)</span>
                  <span>₹{gst.toLocaleString()}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <button className="w-full bg-primary-500 text-white mt-6 py-3 rounded-md hover:bg-primary-600 transition-colors flex items-center justify-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;