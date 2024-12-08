import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="max-w-[1929px] mx-auto flex relative h-screen bg-[#0D0D0D]">
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        {/* right side */}
        <div className='w-[55%]'> 
          <Image
          src="/hero/hero.png"
          alt="Hero dish"
          layout="fill"
          objectFit="cover"
          className="z-0"
        /></div>
        {/* left side */}
      <div className='w-[45%]'> 
      
      <div className="relative z-20 h-full flex flex-col justify-center items-start px-10">
        <h2 className="text-[#ff9F0D] font-greatvibes text-2xl font-normal mb-2 leading-10">It's Quick & Amazing !</h2>
        <h1 className="text-6xl font-bold text-[#ff9F0D] leading-[68px] mb-8">Th<span className='text-white'>e Art of speed<br />food Quality</span></h1>
        <p className="text-base text-white font-normal leading-6 mb-8 max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscingelit. Nullam at enim mauris.</p>
        <Link href="/" className="bg-[#ff9F0D] text-white font-inter text-base px-14 py-4 rounded-full hover:bg-orange-600 transition duration-300">
          See Menu
        </Link>
      </div>
      </div>
    </section>
  )
}