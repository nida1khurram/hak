import Image from 'next/image'

export default function Menu() {
  const starterMenu = [
    {
      name: 'Alder Grilled Chinook Salmon',
      description: 'Toasted Pine Nut and Parsley Salad',
      price: 39,
      calories: '650 Cal'
    },
    {
      name: 'Roasted root veggie bowl',
      description: 'Butternut, kale, avocado, edgier',
      price: 45,
      calories: '550 Cal'
    },
    {
      name: 'Tormentoso Bush Pizza Pinotage',
      description: 'Ground beef, avocado, sweet and sour',
      price: 19,
      calories: '450 Cal'
    },
    {
      name: 'Spicy Vegan Potato Curry',
      description: 'Spreadable roast cheese, crumbled blue cheese',
      price: 35,
      calories: '600 Cal'
    }
  ]

  const mainCourse = [
    {
      name: 'Grille Big Breakfast Combo Menu',
      description: 'Mixed berry breakfast with cream',
      price: 35,
      calories: '850 Cal'
    },
    {
      name: 'Cashew Chicken With Stir-Fry',
      description: 'Vegetables, herbs, mushrooms, edgier',
      price: 45,
      calories: '750 Cal'
    },
    {
      name: 'Vegetables & Green Salad',
      description: 'Fresh mix vegetables, served with sauce',
      price: 14,
      calories: '350 Cal'
    },
    {
      name: 'Spicy Vegan Potato Curry',
      description: 'Spreadable roast cheese, crumbled blue cheese',
      price: 35,
      calories: '650 Cal'
    }
  ]

  return (
    <div className="max-w-[1920px] mx-auto px-4 py-16 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-6">Starter Menu</h2>
              <div className="space-y-6">
                {starterMenu.map((item, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      <p className="text-xs text-gray-500 mt-1">{item.calories}</p>
                    </div>
                    <div className="text-orange-500 font-medium ml-4">
                      ${item.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg"
                alt="Starter Menu"
                width={400}
                height={300}
                className="w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-6">Main Course</h2>
              <div className="space-y-6">
                {mainCourse.map((item, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      <p className="text-xs text-gray-500 mt-1">{item.calories}</p>
                    </div>
                    <div className="text-orange-500 font-medium ml-4">
                      ${item.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg"
                alt="Main Course"
                width={400}
                height={300}
                className="w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}