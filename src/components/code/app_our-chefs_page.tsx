import Image from 'next/image'
import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function OurChefs() {
  const chefs = [
    { name: 'Tahmina Nuru', role: 'Chef', image: '/placeholder.svg' },
    { name: 'Johna Begum', role: 'Chef', image: '/placeholder.svg' },
    { name: 'M Mohammed', role: 'Chef', image: '/placeholder.svg' },
    { name: 'Munna Kathy', role: 'Chef', image: '/placeholder.svg' },
    { name: 'Tahmina Nuru', role: 'Chef', image: '/placeholder.svg' },
    { name: 'Bisou dragon', role: 'Chef', image: '/placeholder.svg' },
    { name: 'Karin Mustafa', role: 'Chef', image: '/placeholder.svg' },
    { name: 'William Rumi', role: 'Chef', image: '/placeholder.svg' },
    { name: 'Kate william ray', role: 'Chef', image: '/placeholder.svg' },
    { name: 'Mahmud Mahi', role: 'Chef', image: '/placeholder.svg' },
    { name: 'Asgar Rahman', role: 'Chef', image: '/placeholder.svg' },
    { name: 'Mustafiz Holy', role: 'Chef', image: '/placeholder.svg' },
  ]

  return (
    <div className="max-w-[1920px] mx-auto px-4 py-16 md:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Talented Chefs</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {chefs.map((chef, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={chef.image}
              alt={chef.name}
              width={400}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{chef.name}</h2>
              <p className="text-gray-600 mb-4">{chef.role}</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-pink-500">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}