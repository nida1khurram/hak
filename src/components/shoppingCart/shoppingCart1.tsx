'use client';
import { Container } from '../../components/container'
import Image from 'next/image';
import { Minus, Plus, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
export default function ShoppingCart() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Burger',
      price: 35.0,
      quantity: 1,
      rating: 4,
      image: '/shoppingcart/p1.png',
    },
    {
      id: 2,
      name: 'Fresh Lime',
      price: 25.0,
      quantity: 1,
      rating: 3,
      image: '/shoppingcart/p2.png',
    },
    {
      id: 3,
      name: 'Pizza',
      price: 15.0,
      quantity: 1,
      rating: 4,
      image: '/shoppingcart/p3.png',
    },
    {
      id: 4,
      name: 'Chocolate Muffin',
      price: 45.0,
      quantity: 1,
      rating: 5,
      image: '/shoppingcart/p4.png',
    },
    {
      id: 5,
      name: 'Cheese Butter',
      price: 15.0,
      quantity: 1,
      rating: 3,
      image: '/shoppingcart/p5.png',
    },
  ]);

  const updateQuantity = (id: number, increment: boolean) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: increment ? item.quantity + 1 : Math.max(1, item.quantity - 1),
          };
        }
        return item;
      })
    );
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container>
    <div className=" mx-auto px-4 py-8 md:px-6 lg:px-8 ">
      <div className="md:max-w-4xl mx-auto ">
        
        
        {/* Mobile view */}
        <div className="sm:hidden space-y-4">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <div className="flex gap-0.5 text-yellow mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>{i < item.rating ? '★' : '☆'}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Price:</span>
                <span>${item.price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, false)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, true)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium">Total:</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="w-full py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Desktop view */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
                <th scope="col" className="px-6 py-3">
                  Remove
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {items.map((item) => (
                <tr key={item.id} className="text-sm md:text-base">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <div className="flex gap-0.5 text-yellow mt-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i}>{i < item.rating ? '★' : '☆'}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">${item.price.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, false)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, true)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4">${(item.price * item.quantity).toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1 hover:text-red-500 rounded"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

{/*  */}

<div className="mt-8 grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Coupon Code</h2>
            <p className="text-sm text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter discount code"
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                Apply
              </button>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Total Bill</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Cart Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Charge</span>
                <span>$50.00</span>
              </div>
              <div className="flex justify-between font-semibold pt-2 border-t">
                <span>Total Amount</span>
                <span>${(subtotal + 50).toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full mt-4 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
              <Link href={'/checkout'}>Proceed to Checkout</Link>
            </button>
          </div>
        </div>


{/*  */}



      </div>
    </div>

    </Container>
  );
}

