import Image from 'next/image'
import Link from 'next/link'
import { FaCheck } from 'react-icons/fa'

const categories = [
  { name: 'Salad', image: '/placeholder.svg' },
  { name: 'Burger', image: '/placeholder.svg' },
  { name: 'Pasta', image: '/placeholder.svg' },
  { name: 'Dessert', image: '/placeholder.svg' },
]

export default function CreateBest() {
  return (
    <section className="max-w-[1929px] mx-auto h-screen flex bg-[#0D0D0D] py-16 px-80">
      {/* left side */}
      <div>

      
      <h2 className="text-[#ff9F0D] font-greatvibes text-2xl leading-10 mb-2">About Us</h2>
      <h1 className="text-5xl font-bold text-[#ff9F0D] leading-[56px] mb-8">We<span className='text-white'>Create the Best<br />food product</span></h1>
      <p className="font-inter text-base text-white font-normal leading-6 mb-8 w-[526px] h-">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
      <div className="flex flex-col font-inter text-lg text-white leading-[26px] mb-6">
      <div className='flex'>
      <FaCheck className="font-inter text-lg text-white leading-[26px] mb-6"/> <span className="ml-[10px]">Lacus nisi, et ac dapibus sit eu velit in consequat.</span>
      </div>
      <div className='flex'>
      <FaCheck className="font-inter text-lg text-white leading-[26px] mb-6"/> <span className="ml-[10px]"> Quisque diam pellentesque bibendum non dui volutpat fringilla</span>
      </div>
      <div className='flex'>
      <FaCheck className="font-inter text-lg text-white leading-[26px] mb-6"/> <span className="ml-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
      </div>
      </div>
      <Link href="/" className="bg-[#ff9F0D] text-white font-inter text-base px-14 py-4 rounded-full hover:bg-orange-600 transition duration-300">
        Read More
        </Link>
        </div>
      {/* right side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <Image
              src="/aboutus/001.png"
              alt="food"
              width={300}
              height={300}
              className="rounded-lg"
            />
       <Image
              src="/aboutus/002.png"
              alt="food"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <Image
              src="/aboutus/003.png"
              alt="food"
              width={300}
              height={300}
              className="rounded-lg"
            />
      </div>
    </section>
  )
}

