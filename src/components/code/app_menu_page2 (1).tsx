'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Search } from 'lucide-react'

export default function CodeMenu2() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = ['All', 'Starters', 'Main Course', 'Desserts', 'Drinks']

  const menuItems = [
    {
      category: 'starters',
      name: 'Alder Grilled Chinook Salmon',
      description: 'Toasted Pine Nut-Sweet Pepper Relish',
      price: 32.95,
      image: '/placeholder.svg'
    },
    {
      category: 'starters',
      name: 'Roasted wild prawns fish',
      description: 'Asparagus, leeks, avocado, wasabi',
      price: 45.95,
      image: '/placeholder.svg'
    },
    {
      category: 'starters',
      name: 'Tormentoso Bush Pizza Pinotage',
      description: 'Grilled corn, avocado, mixed and basil',
      price: 19.95,
      image: '/placeholder.svg'
    },
    {
      category: 'main',
      name: 'Garlic Big Breakfast Combo Menu',
      description: 'Mixed fresh mushrooms with garlic bread',
      price: 35.95,
      image: '/placeholder.svg'
    },
    {
      category: 'main',
      name: 'Cashew Chicken With Stir-Fry',
      description: 'Vegetables, herbs, Asparagus, wasabi',
      price: 45.95,
      image: '/placeholder.svg'
    },
    {
      category: 'main',
      name: 'Vegetables & Green Salad',
      description: 'Mixed fresh vegetables, served with salad',
      price: 14.95,
      image: '/placeholder.svg'
    }
  ]

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory.toLowerCase())

  return (
    <div className="max-w-[1920px] mx-auto px-4 py-16 md:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Menu</h1>
        <p className="text-gray-600 mb-8">
          Discover our carefully curated menu featuring both classic favorites and innovative new dishes
        </p>
        
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search menu items..."
            className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category.toLowerCase())}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeCategory === category.toLowerCase()
                ? 'bg-orange-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredItems.map((item, index) => (
          <div key={index} className="flex gap-6 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <Image
              src={item.image}
              alt={item.name}
              width={120}
              height={120}
              className="rounded-lg object-cover"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <span className="text-orange-500 font-semibold">${item.price.toFixed(2)}</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}