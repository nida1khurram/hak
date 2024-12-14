
'use client';

import Image from 'next/image';
import { Play } from 'lucide-react';

export default function RestaurantActive() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute w-full h-full">
        <Image
          src="/restaurantActive/bg-pic.png"
          alt="Delicious food background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[705px] mx-auto text-center md:text-right">
            {/* Heading */}
            <span className="font-greatvibes inline-block text-amber-500 text-[32px] sm:text-xl mb-4 animate-fade-in">
              Restaurant Active Process
            </span>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              <span className="text-amber-500">We</span> Document Every Food
              <br />
              <span className="text-white">Bean Process until it is saved</span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-[16px] sm:text-base mb-8 mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
              bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna,
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <button className="w-full sm:w-auto px-8 py-3 border-2 border-amber-500 text-white rounded-full 
                hover:bg-amber-500 transition-all duration-300 text-sm sm:text-base font-semibold">
                Read More
              </button>
              
              <button className="group flex items-center gap-3 text-white w-full sm:w-auto justify-center">
                <span className="h-12 w-12 flex items-center justify-center bg-amber-500 rounded-full 
                  group-hover:bg-amber-600 transition-all duration-300">
                  <Play className="w-5 h-5 text-white" />
                </span>
                <span className="text-sm sm:text-base font-semibold group-hover:text-amber-500 transition-colors">
                  Play Video
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
