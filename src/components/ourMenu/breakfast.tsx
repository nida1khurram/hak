import React from 'react'
import { Container } from '../container';
import { breakfasts } from './menuData';
export default function Breakfast() {
  return (
   <>
   <Container>
 <section className=" mx-auto py-4 md:py-16 px-6">
   
        <h2 className="text-5xl text-[#333] font-bold text-center mb-3 ">
          Our Food Menu
        </h2>
        <div className='w-[418px] ml-[500px]'>
   <p className='text-center text-[16px] mb-8'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   Varius sed pharetra dictum neque massa congue</p>
    </div>
       
        <div className="flex flex-col md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0 mb-8 text-[#4f4f4f]">
          <button className=" hover:text-orange-500  hover:border-b border-orange-500  font-bold text-[20px]">Breakfast</button>
          <button className=" hover:text-orange-500 hover:border-b border-orange-500 font-bold text-[20px]">Lunch</button>
          <button className=" hover:text-orange-500 hover:border-b border-orange-500 font-bold text-[20px]">Dinner</button>
          <button className=" hover:text-orange-500 hover:border-b border-orange-500 font-bold text-[20px]">Dessert</button>
          <button className=" hover:text-orange-500 hover:border-b border-orange-500 font-bold text-[20px]">Drink</button>
          <button className=" hover:text-orange-500 hover:border-b border-orange-500 font-bold text-[20px]">Snack</button>
          <button className=" hover:text-orange-500 hover:border-b border-orange-500 font-bold text-[20px]">Soups</button>
        </div>
<hr />
        
      
      </section>
<div className="md:max-w-[1320px] md:max-h-[628px] mx-auto py-2 md:py-5">
      
        <section className="md:mb-16 px-10">
          <div className="flex flex-col md:flex-row gap-4">
            {/* text */}
            <div className="md:w-1/2">
            {breakfasts.map((item, index) => ( 
                  <div key={index} className="flex justify-between items-start  border-b ">
                    <div className=''>
                      <h3 className="font-medium text-2xl text-[#333] hover:text-orange-500 my-4">{item.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                      <p className="text-xs text-gray-500 mt-1 mb-2">{item.calories}</p>
                    </div>
                    <div className="text-orange-500 font-medium mr-20 mt-4">
                     {item.price} $
                    </div>
                  
                  </div>
                ))}
                
            </div>
            {/* text */}
            <div className="md:w-1/2 ">
        
            
             
            {breakfasts.map((item, index) => (
                  <div key={index} className="flex justify-between items-start  border-b ">
                    <div className=''>
                      <h3 className="font-medium text-2xl text-[#333] hover:text-orange-500 my-4">{item.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                      <p className="text-xs text-gray-500 mt-1 mb-2">{item.calories}</p>
                    </div>
                    <div className="text-orange-500 font-medium mr-20 mt-4">
                     {item.price} $
                    </div>
                  
                  </div>
                ))}
             
            </div>
           
          </div>

          <button className="text-yellow  font-medium border-2 border-yellow rounded-sm h-10 w-[150px] mt-10 
          ml-[530px]">
              View menu
            </button>
        </section>
        </div>


   </Container>
   
   </>
  )
}
