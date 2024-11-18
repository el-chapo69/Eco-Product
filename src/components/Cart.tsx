import React from 'react';
import { ShoppingCart, X, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose} />
      
      <div className="fixed inset-y-0 right-0 flex max-w-full">
        <div className="w-screen max-w-md">
          <div className="flex h-full flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between px-4 py-6 sm:px-6">
              <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-500"
                onClick={onClose}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 px-4 py-6 sm:px-6">
                <div className="flex flex-col items-center justify-center h-full">
                  <ShoppingCart className="w-16 h-16 text-gray-400 mb-4" />
                  <p className="text-gray-500">Your cart is empty</p>
                </div>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="space-y-8">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-20 w-20 rounded-lg object-cover"
                        />
                        <div className="ml-4 flex-1">
                          <div className="flex justify-between">
                            <h3 className="text-sm font-medium text-gray-900">
                              {item.name}
                            </h3>
                            <button
                              type="button"
                              className="text-gray-400 hover:text-gray-500"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <X className="h-5 w-5" />
                            </button>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            ${item.price.toFixed(2)}
                          </p>
                          <div className="mt-2 flex items-center">
                            <button
                              className="p-1 text-gray-500 hover:text-gray-600"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="mx-2 min-w-[2rem] text-center">
                              {item.quantity}
                            </span>
                            <button
                              className="p-1 text-gray-500 hover:text-gray-600"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${totalPrice.toFixed(2)}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6">
                    <button className="w-full btn btn-primary">
                      Checkout
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}