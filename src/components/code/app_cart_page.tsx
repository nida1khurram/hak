'use client'

import Image from 'next/image'
import { Minus, Plus, X } from 'lucide-react'
import { useState } from 'react'

export default function Component() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Burger',
      price: 55.0,
      quantity: 1,
      rating: 4,
      image: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'Fresh Lime',
      price: 25.0,
      quantity: 1,
      rating: 3,
      image: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'Pizza',
      price: 15.0,
      quantity: 1,
      rating: 4,
      image: '/placeholder.svg'
    },
    {
      id: 4,
      name: 'Chocolate Muffin',
      price: 45.0,
      quantity: 1,
      rating: 5,
      image: '/placeholder.svg'
    },
    {
      id: 5,
      name: 'Cheese Butter',
      price: 15.0,
      quantity: 1,
      rating: 3,
      image: '/placeholder.svg'
    }
  ])

  const updateQuantity = (id: number, increment: boolean) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: increment ? item.quantity + 1 : Math.max(1, item.quantity - 1)
        }
      }
      return item
    }))
  }

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id))
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="max-w-[1920px] mx-auto px-4 py-8 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <table className="w-full">
          <thead className="border-b">
            <tr className="text-left">
              <th className="pb-4">Product</th>
              <th className="pb-4">Price</th>
              <th className="pb-4">Quantity</th>
              <th className="pb-4">Total</th>
              <th className="pb-4">Remove</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {items.map(item => (
              <tr key={item.id} className="text-sm md:text-base">
                <td className="py-4">
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <div className="flex gap-0.5 text-yellow-400 mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i}>
                            {i < item.rating ? '★' : '☆'}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4">${item.price.toFixed(2)}</td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
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
                <td className="py-4">${(item.price * item.quantity).toFixed(2)}</td>
                <td className="py-4">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-8 space-y-4">
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
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}