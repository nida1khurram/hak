'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Search, ChevronDown, Star } from 'lucide-react'

export default function Shop() {
  const [sortBy, setSortBy] = useState('popularity')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = ['Sandwiches', 'Burger', 'Chicken', 'Pizza', 'Noodles', 'Sushi']

  const products = [
    { id: 1, name: 'Fresh Salad', price: 12.99, rating: 4.5, image: '/placeholder.svg', category: 'Sandwiches' },
    { id: 2, name: 'Chicken Burger', price: 15.99, rating: 4.8, image: '/placeholder.svg', category: 'Burger' },
    { id: 3, name: 'Veggie Pizza', price: 18.99, rating: 4.2, image: '/placeholder.svg', category: 'Pizza' },
    { id: 4, name: 'Sushi Platter', price: 24.99, rating: 4.9, image: '/placeholder.svg', category: 'Sushi' },
    { id: 5, name: 'Beef Noodles', price: 14.99, rating: 4.3, image: '/placeholder.svg', category: 'Noodles' },
    { id: 6, name: 'Grilled Chicken', price: 16.99, rating: 4.6, image: '/placeholder.svg', category: 'Chicken' },
    { id: 7, name: 'Vegetarian Wrap', price: 11.99, rating: 4.1, image: '/placeholder.svg', category: 'Sandwiches' },
    { id: 8, name: 'Pepperoni Pizza', price: 19.99, rating: 4.7, image: '/placeholder.svg', category: 'Pizza' },
    { id: 9, name: 'Shrimp Tempura', price: 22.99, rating: 4.4, image: '/placeholder.svg', category: 'Sushi' },
    { id: 10, name: 'Spicy Ramen', price: 13.99, rating: 4.5, image: '/placeholder.svg', category: 'Noodles' },
    { id: 11, name: 'Classic Cheeseburger', price: 14.99, rating: 4.6, image: '/placeholder.svg', category: 'Burger' },
    { id: 12, name: 'Grilled Chicken Salad', price: 13.99, rating: 4.2, image: '/placeholder.svg', category: 'Chicken' },
  ]

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="max-w-[1920px] mx-auto px-4 py-16 md:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-1/4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category}>
                  <button className="text-gray-600 hover:text-orange-500">{category}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main content */}
        <div className="w-full md:w-3/4">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <h1 className="text-3xl font-bold mb-4 sm:mb-0">Our Shop</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="popularity">Sort by Popularity</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="newest">Newest Arrivals</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-500 font-bold">${product.price.toFixed(2)}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <button className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}