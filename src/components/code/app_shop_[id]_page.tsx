'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, Minus, Plus, Share2 } from 'lucide-react'

const product = {
  name: 'Yummy Chicken Chup',
  price: 54.00,
  rating: 4.5,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc non quam faucibus, vel tincidunt nisl malesuada. Sed in eros eget libero ultricies faucibus. Sed euismod nunc non quam faucibus, vel tincidunt nisl malesuada.',
  images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
}

const similarProducts = [
  { id: 1, name: 'Fresh Lime', image: '/placeholder.svg', price: 29.99 },
  { id: 2, name: 'Chocolate Muffin', image: '/placeholder.svg', price: 19.99 },
  { id: 3, name: 'Burger', image: '/placeholder.svg', price: 39.99 },
  { id: 4, name: 'Fresh Salad', image: '/placeholder.svg', price: 24.99 },
]

export default function ShopDetail() {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="max-w-[1920px] mx-auto px-4 py-8 md:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          <Image
            src={product.images[selectedImage]}
            alt={product.name}
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-[400px]"
          />
          <div className="flex gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden ${selectedImage === index ? 'ring-2 ring-orange-500' : ''}`}
              >
                <Image src={image} alt={`${product.name} ${index + 1}`} layout="fill" objectFit="cover" />
              </button>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current fill-transparent'}`} />
              ))}
            </div>
            <span className="text-gray-600">{product.rating} Stars</span>
          </div>
          <p className="text-2xl font-bold text-orange-500 mb-6">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 hover:bg-gray-100"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 hover:bg-gray-100"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
              Add to Cart
            </button>
          </div>
          <button className="flex items-center gap-2 text-gray-600 hover:text-orange-500">
            <Share2 className="w-5 h-5" />
            Share this product
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {similarProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-48 mb-4"
              />
              <h3 className="font-semibold mb-2">{product.name}</h3>
              <p className="text-orange-500 font-bold">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}