'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, Minus, Plus, Share2 } from 'lucide-react'
import { MdOutlineShoppingBag } from "react-icons/md";
import ShopDescription from '@/components/shopDetail/shopDescription';
const product = {
  name: 'Yummy Chicken Chup',
  price: 54.00,
  rating: 5.0 ,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc non quam faucibus, vel tincidunt nisl malesuada. Sed in eros eget libero ultricies faucibus. Sed euismod nunc non quam faucibus, vel tincidunt nisl malesuada.',
  images: ['/shopdetails/p1.png', '/shopdetails/p2.png', '/shopdetails/p3.png', '/shopdetails/p4.png'],
}

const similarProducts = [
  { id: 1, name: 'Fresh Lime', image: '/shoplist/p1.png', price: 29.99 },
  { id: 2, name: 'Chocolate Muffin', image: '/shoplist/p2.png', price: 19.99 },
  { id: 3, name: 'Burger', image: '/shoplist/p3.png', price: 39.99 },
  { id: 4, name: 'Fresh Salad', image: '/shoplist/p4.png', price: 24.99 },
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
        {/* right side */}
        <div>
            {/* h1 */}
          <h1 className="text-3xl font-bold mb-4 text-[#333]">{product.name}</h1>
          {/* text */}
          <p className="text-gray-600 mb-6 ">{product.description}</p>
          <hr />
          {/* --------------------------------------------------------------- */}
          {/* price */}
          <p className="text-2xl font-bold text-orange-500 my-6">${product.price.toFixed(2)}</p>
          
          <div className="flex items-center gap-2 mb-4">
           {/* star */}
            <div className="flex text-orange-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current fill-transparent'}`} />
              ))}
              {/* rating */}
               <span className="text-gray-600 ml-2"> | {product.rating} Rating</span>
            </div>
          </div>
         
            {/* 1 +  */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 hover:bg-gray-100 border"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 hover:bg-gray-100 border"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
           
            <button className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">
              Add to Cart
            </button> <MdOutlineShoppingBag className='ml-[-140px] text-white'/>
          </div>
          <hr />
          {/* ------------------------------------------------------------ */}
          <button className="flex items-center gap-2 text-gray-600 hover:text-orange-500">
            <Share2 className="w-5 h-5" />
            Share this product
          </button>
        </div>
      </div>

{/* description */}
<ShopDescription />
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