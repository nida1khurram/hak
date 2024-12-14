import React from 'react'
import Image from 'next/image'
import { MdArrowForward } from "react-icons/md";
import { MdOutlineArrowBack } from "react-icons/md";
import { Container } from '../../components/container'
export interface similarProducts {
    id: number;
    name: string;
    price: number;
    price2?: number; // Optional property
    rating?: number; // Optional property if not all products have a rating
    image: string;
  }
const similarProducts = [
  { id: 1, name: 'Fresh Lime', image: '/shoplist/p1.png', price: 38.00 , price2: 45.00 },
  { id: 2, name: 'Chocolate Muffin', image: '/shoplist/p2.png', price: 28.00 },
  { id: 3, name: 'Burger', image: '/shoplist/p3.png', price: 21.00 },
  { id: 4, name: 'Fresh Lime', image: '/shoplist/p1.png', price: 38.00 , price2: 45.00 },
]
export default function SimilarProducts() {
  return (
    <>
       <Container>
       <div className='mx-auto max-h-[401px] mt-10'>
        <div className='flex justify-between '>
         <h2 className="text-xl md:text-[32px] font-bold mb-6 ">Similar Products</h2>
        <div className="flex gap-3 md:mr-0 mr-10">
          {/* arrow */}
              <div className="w-[40px] h-[40px] rounded-full shadow hover:bg-orange-500 ">
                <MdArrowForward className="text-[#333] mt-2 ml-2 w-7 h-7 hover:text-white"/></div>
              <div className="w-[40px] h-[40px] rounded-full shadow hover:bg-orange-500 ">
                <MdOutlineArrowBack className="text-[#333] mt-2 ml-2 w-7 h-7 hover:text-white"/></div> 
        </div>
        </div>
       
        <div className="grid  md:grid-cols-4 md:gap-6">
          {similarProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-48 mb-4"
              />
              <h3 className="font-semibold mb-2">{product.name}</h3>
              {/* price */}
              <div className="flex items-center justify-between">
              <span className="text-orange-500 font-bold">${product.price.toFixed(2)}</span>
               {/* price old */}
               <div className="flex mr-36">
                {product.price2 && (
                  <p className={`text-gray-600 relative inline-block`}>
                    <span className="absolute inset-0 border-b-2 border-gray-600 transform -translate-y-1/2"></span>
                    ${product.price2.toFixed(2)}
                  </p>
                )}
              </div>
               {/* price old */}
            </div>
            </div>
              

          ))}
        </div>
      </div>




       </Container>
    </>
  )
}
