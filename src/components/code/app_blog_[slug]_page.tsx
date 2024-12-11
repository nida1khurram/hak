'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart, MessageCircle, Share2 } from 'lucide-react'

export default function BlogDetail() {
  const post = {
    title: "A Natural First Eight-Ball Lager",
    date: "March 15, 2024",
    author: {
      name: "John Smith",
      avatar: "/placeholder.svg",
      role: "Head Chef"
    },
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    `,
    image: "/placeholder.svg",
    comments: [
      {
        author: "Alice Johnson",
        avatar: "/placeholder.svg",
        date: "2 hours ago",
        content: "This recipe looks amazing! Can't wait to try it out."
      },
      {
        author: "Bob Wilson",
        avatar: "/placeholder.svg",
        date: "5 hours ago",
        content: "I made this yesterday and it was delicious! Thanks for sharing."
      }
    ],
    relatedPosts: [
      {
        title: "10 Best Summer Cocktails",
        image: "/placeholder.svg",
        date: "March 10, 2024"
      },
      {
        title: "Grilling Tips for Beginners",
        image: "/placeholder.svg",
        date: "March 8, 2024"
      },
      {
        title: "Healthy Breakfast Ideas",
        image: "/placeholder.svg",
        date: "March 5, 2024"
      }
    ]
  }

  return (
    <div className="max-w-[1920px] mx-auto px-4 py-16 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-sm">{post.author.role}</p>
              </div>
            </div>
            <span>•</span>
            <span>{post.date}</span>
          </div>
        </div>

        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={600}
          className="rounded-lg mb-8 w-full object-cover"
        />

        <div className="prose max-w-none mb-12">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-600 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex items-center gap-6 border-y py-6 mb-8">
          <button className="flex items-center gap-2 text-gray-600 hover:text-orange-500">
            <Heart className="w-5 h-5" />
            <span>Like</span>
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-orange-500">
            <MessageCircle className="w-5 h-5" />
            <span>Comment</span>
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-orange-500">
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Comments</h2>
          <div className="space-y-6">
            {post.comments.map((comment, index) => (
              <div key={index} className="flex gap-4">
                <Image
                  src={comment.avatar}
                  alt={comment.author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">{comment.author}</span>
                    <span className="text-sm text-gray-600">{comment.date}</span>
                  </div>
                  <p className="text-gray-600">{comment.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {post.relatedPosts.map((relatedPost, index) => (
              <Link key={index} href="#" className="group">
                <Image
                  src={relatedPost.image}
                  alt={relatedPost.title}
                  width={400}
                  height={300}
                  className="rounded-lg mb-3 object-cover"
                />
                <h3 className="font-medium group-hover:text-orange-500 transition-colors">
                  {relatedPost.title}
                </h3>
                <p className="text-sm text-gray-600">{relatedPost.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}