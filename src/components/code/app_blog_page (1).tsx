'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search } from 'lucide-react'

export default function BlogList() {
  const [searchTerm, setSearchTerm] = useState('')

  const blogPosts = [
    {
      id: 1,
      title: "A Natural First Eight-Ball Lager",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/placeholder.svg",
      date: "March 15, 2024",
      author: "John Smith",
      category: "Recipes"
    },
    {
      id: 2,
      title: "10 Best Summer Cocktails",
      excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/placeholder.svg",
      date: "March 10, 2024",
      author: "Jane Doe",
      category: "Drinks"
    },
    {
      id: 3,
      title: "Grilling Tips for Beginners",
      excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/placeholder.svg",
      date: "March 8, 2024",
      author: "Mike Johnson",
      category: "Cooking Tips"
    },
    {
      id: 4,
      title: "Healthy Breakfast Ideas",
      excerpt: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/placeholder.svg",
      date: "March 5, 2024",
      author: "Sarah Brown",
      category: "Healthy Eating"
    },
    {
      id: 5,
      title: "The Art of Food Plating",
      excerpt: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      image: "/placeholder.svg",
      date: "March 1, 2024",
      author: "Chef Alex",
      category: "Food Presentation"
    },
    {
      id: 6,
      title: "Farm-to-Table: A Sustainable Approach",
      excerpt: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
      image: "/placeholder.svg",
      date: "February 25, 2024",
      author: "Emma Green",
      category: "Sustainability"
    }
  ]

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="max-w-[1920px] mx-auto px-4 py-16 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Blog</h1>
        
        <div className="mb-12">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {filteredPosts.map(post => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-orange-500 font-medium">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold mb-2">
                  <Link href={`/blog/${post.id}`} className="hover:text-orange-500 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {post.author}</span>
                  <Link href={`/blog/${post.id}`} className="text-orange-500 hover:text-orange-600 font-medium">
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
            Load More
          </button>
        </div>
      </div>
    </div>
  )
}