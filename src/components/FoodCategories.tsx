import Image from 'next/image'

const categories = [
  { name: 'Salad', image: '/placeholder.svg' },
  { name: 'Burger', image: '/placeholder.svg' },
  { name: 'Pasta', image: '/placeholder.svg' },
  { name: 'Dessert', image: '/placeholder.svg' },
]

export default function FoodCategories() {
  return (
    <section className="max-w-[1929px] mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        <span className="text-orange-500">Choose</span> Food Item
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="relative group cursor-pointer">
            <Image
              src={category.image}
              alt={category.name}
              width={300}
              height={300}
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-white text-xl font-bold">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

