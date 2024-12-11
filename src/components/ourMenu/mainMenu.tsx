import React from 'react'
import OurMenu from './ourMenu1'
import Statistics from '../Statistics'
import OurMenu1 from './ourMenu1'
import OurMenu3 from './ourMenu3'
import OurMenu2 from './ourMenu2'

export default function MainMenu() {
  return (
    <>
    
    <OurMenu1 />
      <div className='md:mt-[700px]'>
    <Statistics />
    </div>
    <OurMenu2 />

   <OurMenu3 />
    
    
   
    
    
    
    
    </>
  )
}
