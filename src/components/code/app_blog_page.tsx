import Image from 'next/image'
import Link from 'next/link'

const featuredPosts = [
  { id: 1, title: 'Delicious Sandwich Recipes', image: '/placeholder.svg', excerpt: 'Explore our collection of mouthwatering sandwich recipes...' },
  { id: 2, title: 'The Art of Plating', image: '/placeholder.svg', excerpt: 'Learn how to present your dishes like a professional chef...' },
  { id: 3, title: 'Healthy Summer Salads', image: '/placeholder.svg', excerpt: 'Stay cool and nourished with these refreshing salad ideas...' },
]

const recentPosts = [
  { id: 4, title: 'Mastering the Perfect Steak', image: '/placeholder.svg', date: 'June 15, 2023' },
  { id: 5, title: 'Vegan Desserts Everyone Will Love', image: '/placeholder.svg', date: 'June 10, 2023' },
  { id: 6, title: 'Essential Kitchen Tools for Home Cooks', image: '/placeholder.svg', date: 'June 5, 2023' },
]

const categories = ['Breakfast', 'Lunch', 'Dinner', 'Desserts', 'Vegan', 'Gluten-Free']

const popularPosts = [
  { id: 7, title: '10 Quick and Easy Breakfast Ideas', image: '/placeholder.svg' },
  { id: 8, title: 'How to Make the Perfect Cup of Coffee', image: '/placeholder.svg' },
  { id: 9, title: 'Seasonal Cooking: Spring Vegetables', image: '/placeholder.svg' },
]

export default function BlogList() {
  return (
    <div className="max-w-[1920px] mx-auto px-4 py-8 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-8">Our Blog</h1>
          
          <div className="grid gap-8 mb-12">
            {featuredPosts.map((post) => (
              <div key={post.id} className="grid md:grid-cols-2 gap-6 items-center">
                <Image src={post.image} alt={post.title} width={600} height={400} className="rounded-lg object-cover w-full h-64" />
                <div>
                  <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`} className="text-orange-500 hover:underline">Read More</Link>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mb-6">Recent Posts</h2>
          <div className="grid gap-8">
            {recentPosts.map((post) => (
              <div key={post.id} className="flex gap-4 items-center">
                <Image src={post.image} alt={post.title} width={100} height={100} className="rounded-lg object-cover" />
                <div>
                  <h3 className="font-semibold mb-1">{post.title}</h3>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <Link href={`/blog/category/${category.toLowerCase()}`} className="text-gray-600 hover:text-orange-500">{category}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Popular Posts</h2>
            <div className="space-y-4">
              {popularPosts.map((post) => (
                <div key={post.id} className="flex gap-4 items-center">
                  <Image src={post.image} alt={post.title} width={60} height={60} className="rounded-lg object-cover" />
                  <h3 className="font-semibold">{post.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}