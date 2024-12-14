'use client';

import { PiHamburger, PiCookie } from 'react-icons/pi';
import { LuGlassWater } from 'react-icons/lu';
import { Container } from '../container';
import Image from 'next/image';

export default function ExtraordinaryTaste() {
  return (
    <Container>
      <section className="mx-auto grid gap-12 bg-[#0D0D0D] py-10 px-5 sm:px-10 md:grid-cols-2">
        {/* left side */}
        <div className="mt-10 ">
        <ul className='flex justify-end gap-5 mb-6  flex-wrap md:flex-nowrap'>
           <li className="mx-auto  md:w-auto"><Image src="/whychooseus/001.png" alt='/' width={362} height={356}/></li>
           <li className="mx-auto  md:w-auto  md:mt-28"><Image src="/whychooseus/002.png" alt='/' width={281} height={231}/></li>
         </ul>
         <ul className='flex gap-5 flex-wrap md:flex-nowrap'>
           <li className='mx-auto  md:w-auto'><Image src="/whychooseus/003.png" alt='/' width={244} height={306}/></li>
           <li className='mx-auto  md:w-auto'><Image src="/whychooseus/004.png" alt='/' width={221} height={226}/></li>
           <div className="flex flex-col mx-auto md:w-auto"> 
             <li className='mx-auto mt-4 md:mt-0 '><Image src="/whychooseus/005.png" alt='/' width={161} height={168}/></li>
             <li className='mx-auto mt-4 '><Image src="/whychooseus/006.png" alt='/' width={161} height={168}/></li>
           </div>
         </ul> 
        </div>
        {/* right side */}
        <div className="ml-0 md:ml-6 mt-0 md:mt-10">
          <h2 className="text-[#ff9F0D] font-greatvibes text-[32px] font-normal leading-10 mb-2">Why Choose Us</h2>
          <h1 className="text-3xl md:text-5xl font-bold text-[#ff9F0D] leading-[56px] mb-8">
            Ex<span className="text-white">tra Ordinary Taste<br />And Experienced</span>
          </h1>
          <div className="md:w-1/2 md:mt-10">
            <p className="font-inter text-white mb-6 w-full md:w-[526px] text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>
            <div className="flex flex-col md:flex-row md:space-x-4 mb-6 space-y-4 md:space-y-0">
              <div className="text-white flex flex-col items-center">
                <button className="bg-orange-500 px-4 py-2 rounded">
                  <PiHamburger className="w-[56px] h-[56px]" />
                </button>
                <p className="text-center"> Fast Food</p>
              </div>
              <div className="text-white flex flex-col items-center">
                <button className="bg-orange-500 text-white px-4 py-2 rounded">
                  <PiCookie className="w-[56px] h-[56px]" />
                </button>
                <p className="text-center">Lunch</p>
              </div>
              <div className="text-white flex flex-col items-center">
                <button className="bg-orange-500 text-white px-4 py-2 rounded">
                  <LuGlassWater className="w-[56px] h-[56px]" />
                </button>
                <p className="text-center">Dinner</p>
              </div>
            </div>
            <div className="w-full md:w-[300px] md:h-[93px] bg-white py-2 rounded">
              <div className="flex justify-around">
                <p className="text-3xl md:text-5xl font-bold text-orange-500">30+</p>
                <div>
                  <p className="text-xl">Years of</p>
                  <p className="text-xl md:text-2xl text-black font-bold">Experienced</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
