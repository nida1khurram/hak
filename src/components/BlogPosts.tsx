import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    title: 'Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis',
    date: '15 February 2022',
    image: '/placeholder.svg',
  },
  {
    title: 'Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A',
    date: '15 February 2022',
    image: '/placeholder.svg',
  },
  {
    title: 'Curabitur rutrum velit ac congue malesuada',
    date: '15 February 2022',
    image: '/placeholder.svg',
  },
]

export default function BlogPosts() {
  return (
    <section className="max-w-[1929px] mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        <span className="text-orange-500">Latest News & Blog</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
            <Image src={post.image} alt={post.title} width={400} height={250} className="w-full" />
            <div className="p-6">
              <p className="text-gray-400 mb-2">{post.date}</p>
              <h3 className="font-bold mb-4">{post.title}</h3>
              <Link href="/blog" className="text-orange-500 hover:underline">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

