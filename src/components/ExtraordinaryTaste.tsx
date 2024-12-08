import { PiHamburger } from "react-icons/pi";
import { PiCookie } from "react-icons/pi";
import { LuGlassWater } from "react-icons/lu";
<LuGlassWater />
import Image from "next/image";

export default function ExtraordinaryTaste() {
  return (
    <section className="max-w-[1929px] mx-auto grid md:grid-cols-2 gap-12 bg-[#0D0D0D] py-28 ml-3">
    {/* left side */}
    <div className="mt-10">
        <ul className='flex justify-end gap-5'>
          <li className=""><Image src="/whychooseus/001.png" alt='/' width={362} height={356}/></li>
          <li className=""><Image src="/whychooseus/002.png" alt='/' width={281} height={231}/></li>
        </ul>
        <ul className='flex gap-5'>
          <li className=''><Image src="/whychooseus/003.png" alt='/' width={244} height={306}/></li>
          <li className=''><Image src="/whychooseus/004.png" alt='/' width={221} height={226}/></li>
          <div className="flex flex-col">
            <li className='mt-2'><Image src="/whychooseus/005.png" alt='/' width={161} height={168}/></li>
            <li className='mt-2'><Image src="/whychooseus/006.png" alt='/' width={161} height={168}/></li>
          </div>
        </ul> 
      </div>
      {/* right side */}
      <div className="ml-6">
        <h2 className="text-[#ff9F0D] font-greatvibes text-[32px] font-normal leading-10 mb-2">Why Choose Us</h2>
        <h1 className="md:text-5xl font-bold text-[#ff9F0D] leading-[56px] mb-8">
          Ex<span className="text-white">tra Ordinary Taste<br />And Experienced</span>
        </h1>
        <div className="md:w-1/2 md:mt-10"> 
          <p className="font-inter text-white font-normal text-base mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.          </p>
          <div className="flex md:flex-row flex-col md:space-x-4 mb-6">
            <div className="text-white">
            <button className="bg-orange-500  px-4 py-2 rounded">
            <PiHamburger  className="w-[56px] h-[56px]"/>
            </button>
            <p className="text-left md:text-center"> Fast Food</p>
            </div>
            <div className="text-white">
            <button className="bg-orange-500 text-white px-4 py-2 rounded">
            <PiCookie  className="w-[56px] h-[56px]"/>
            </button><p className="text-left md:text-center">Lunch</p>
            </div>
            <div className="text-white">
            <button className="bg-orange-500 text-white px-4 py-2 rounded">
            <LuGlassWater className="w-[56px] h-[56px]" /> 
            </button><p className="text-left md:text-center">Dinner</p>
            </div>
          </div>
          <div className="bg-orange-500 inline-block px-4 py-2 rounded">
            <span className="text-2xl font-bold">30+</span>
            <span className="block text-sm">Years of Experienced</span>
          </div>
        </div>
      </div>
    </section>
  );
}