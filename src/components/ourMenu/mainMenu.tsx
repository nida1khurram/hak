import React from 'react'
import Statistics from '../landingPage/Statistics'
import OurMenu1 from './ourMenu1'
import OurMenu3 from './ourMenu3'
import OurMenu2 from './ourMenu2'



export default function MainMenu() {
  return (
    <>
   
    <OurMenu1 />
      <div className='mt-0 md:mt-[800px] mb-[50px] md:mb-[80px]'>
    <Statistics />
    </div>
    <OurMenu2 />

   <OurMenu3 />
    
    
   
    
    
    
    
    </>
  )
}
