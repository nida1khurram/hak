import Image from 'next/image'

export default function ExtraordinaryTaste() {
  return (
    <section className="max-w-[1929px] mx-auto py-16 px-6 bg-gray-900">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 grid grid-cols-3 gap-4">
          <Image src="/placeholder.svg" alt="Food 1" width={200} height={200} className="col-span-2" />
          <Image src="/placeholder.svg" alt="Food 2" width={200} height={200} />
          <Image src="/placeholder.svg" alt="Food 3" width={200} height={200} />
          <Image src="/placeholder.svg" alt="Food 4" width={200} height={200} className="col-span-2" />
          <Image src="/placeholder.svg" alt="Food 5" width={200} height={200} />
        </div>
        <div className="md:w-1/2 md:pl-10 mt-10 md:mt-0">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-orange-500">Extra ordinary taste</span><br />
            And Experienced
          </h2>
          <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at enim mauris. Donec et nunc lorem.</p>
          <div className="flex space-x-4 mb-6">
            <button className="bg-orange-500 text-white px-4 py-2 rounded">Fast Food</button>
            <button className="bg-orange-500 text-white px-4 py-2 rounded">Lunch</button>
            <button className="bg-orange-500 text-white px-4 py-2 rounded">Dinner</button>
          </div>
          <div className="bg-orange-500 inline-block px-4 py-2 rounded">
            <span className="text-2xl font-bold">30+</span>
            <span className="block text-sm">Years of Experienced</span>
          </div>
        </div>
      </div>
    </section>
  )
}

