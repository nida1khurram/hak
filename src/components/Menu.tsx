import Image from 'next/image'

const menuItems = [
  { name: 'Lettuce Leaf', price: 12.5, image: '/placeholder.svg' },
  { name: 'Fresh Breakfast', price: 14.5, image: '/placeholder.svg' },
  { name: 'Mild Butter', price: 12.5, image: '/placeholder.svg' },
  { name: 'Fresh Bread', price: 12.5, image: '/placeholder.svg' },
  { name: 'Chow Cheese', price: 12.5, image: '/placeholder.svg' },
  { name: 'Italian Pizza', price: 14.5, image: '/placeholder.svg' },
  { name: 'Sliced Beef', price: 12.5, image: '/placeholder.svg' },
  { name: 'Mushrom Pizza', price: 12.5, image: '/placeholder.svg' },
]

export default function Menu() {
  return (
    <section className="max-w-[1929px] mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        <span className="text-orange-500">From Our Menu</span>
      </h2>
      <div className="flex justify-center space-x-4 mb-8">
        <button className="text-orange-500 font-bold">Breakfast</button>
        <button>Lunch</button>
        <button>Dinner</button>
        <button>Dessert</button>
        <button>Drink</button>
        <button>Snack</button>
        <button>Soups</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <Image src="/placeholder.svg" alt="Featured dish" width={400} height={400} className="rounded-lg" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {menuItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-lg" />
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-orange-500">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

