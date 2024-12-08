import Image from 'next/image'

const menuItems = [
  { name: 'Lettuce Leaf', description:'Lacus nisi, et ac dapibus velit in consequat.', price: 12.5, image: "/ourmenu/001.png", },
  { name: 'Fresh Breakfast',description:'Lacus nisi, et ac dapibus velit in consequat.', price: 14.5, image: "/ourmenu/002.png" },
  { name: 'Mild Butter',description:'Lacus nisi, et ac dapibus velit in consequat.', price: 12.5, image: "/ourmenu/003.png" },
  { name: 'Fresh Bread', description:'Lacus nisi, et ac dapibus velit in consequat.',price: 12.5, image: "/ourmenu/004.png" },
  { name: 'Chow Cheese', description:'Lacus nisi, et ac dapibus velit in consequat.',price: 12.5, image: "/ourmenu/005.png" },
  { name: 'Italian Pizza',description:'Lacus nisi, et ac dapibus velit in consequat.', price: 14.5, image: "/ourmenu/006.png" },
  { name: 'Sliced Beef', description:'Lacus nisi, et ac dapibus velit in consequat.',price: 12.5, image: "/ourmenu/007.png"},
  { name: 'Mushrom Pizza', description:'Lacus nisi, et ac dapibus velit in consequat.',price: 12.5, image: "/ourmenu/008.png" },
]

export default function Menu() {
  return (
    <section className="max-w-[1929px] mx-auto py-16 px-6">
      <h2 className="font-greatvibes text-orange-500 text-3xl font-bold text-center mb-8">Choose  &  Pick</h2>
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        <span className="text-orange-500">Fr</span>om Our Menu
      </h2>
      <div className="flex justify-center md:space-x-16 mb-8">
        <button className="text-white hover:text-orange-500 font-bold text-[20px]">Breakfast</button>
        <button className="text-white hover:text-orange-500 font-bold text-[20px]">Lunch</button>
        <button className="text-white hover:text-orange-500 font-bold text-[20px]">Dinner</button>
        <button className="text-white hover:text-orange-500 font-bold text-[20px]">Dessert</button>
        <button className="text-white hover:text-orange-500 font-bold text-[20px]">Drink</button>
        <button className="text-white hover:text-orange-500 font-bold text-[20px]">Snack</button>
        <button className="text-white hover:text-orange-500 font-bold text-[20px]">Soups</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
        <Image
       src="/ourmenu/1.png"
       alt="leave"
       layout="fill"
       objectFit="cover"
       className="z-0"
     />
          <Image src="/ourmenu/2.png" alt="Featured dish" width={400} height={400} className="rounded-lg" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 text-white">
          {menuItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-lg" />
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-[14px]">${item.description}</p>
                <p className="text-orange-500">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

