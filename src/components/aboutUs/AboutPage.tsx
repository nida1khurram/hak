import Image from 'next/image'

const offers = [
  { title: 'Free Home Delivery', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { title: 'Variety Food', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { title: 'Original Recipes', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
]

const testimonials = [
  { name: 'John Doe', role: 'Food Critic', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.' },
  { name: 'Jane Smith', role: 'Chef', content: 'Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor.' },
  { name: 'Mike Johnson', role: 'Regular Customer', content: 'Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.' },
]

export default function AboutUsPage() {
  return (
    <div className="max-w-[1920px] mx-auto px-4 py-8 md:px-6 lg:px-8">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-8 text-center">About Our Restaurant</h1>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-lg">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image src="/placeholder.svg" alt="Restaurant Interior" width={300} height={200} className="rounded-lg object-cover w-full h-full" />
            <Image src="/placeholder.svg" alt="Chef Cooking" width={300} height={200} className="rounded-lg object-cover w-full h-full" />
            <Image src="/placeholder.svg" alt="Dish Presentation" width={300} height={200} className="rounded-lg object-cover w-full h-full" />
            <Image src="/placeholder.svg" alt="Happy Customers" width={300} height={200} className="rounded-lg object-cover w-full h-full" />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{offer.title}</h3>
              <p>{offer.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">{testimonial.content}</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-600">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="text-center">
              <Image src="/placeholder.svg" alt={`Team Member ${index + 1}`} width={200} height={200} className="rounded-full mx-auto mb-4" />
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-sm text-gray-600">Chef</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}