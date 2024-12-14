import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Alamin Hasan',
    role: 'Food Specialist',
    image: '/placeholder.svg',
    rating: 4,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
  },
  // Add more testimonials here
]

export default function Testimonials() {
  return (
    <section className="max-w-[1929px] mx-auto py-16 px-6 bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8">
        <span className="text-orange-500">What our clients are saying</span>
      </h2>
      <div className="max-w-3xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 mb-8">
            <div className="flex items-center mb-4">
              <Image src={testimonial.image} alt={testimonial.name} width={60} height={60} className="rounded-full mr-4" />
              <div>
                <h3 className="font-bold">{testimonial.name}</h3>
                <p className="text-gray-400">{testimonial.role}</p>
              </div>
            </div>
            <p className="mb-4">{testimonial.text}</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-400'}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

