import React from 'react'
import { Container } from '../container'
import Image from 'next/image'
export default function OurMenu3() {
  return (
    <>
    <Container>
    <div className='max-w-[1322px] max-h-[275px] mx-auto md:mt-[700px] mb-[700px] md:mb-10'>
<h2 className='text-[18px] text-center text-[#333] mb-3'>Partners & Clients</h2>
<h1 className='text-5xl font-bold text-center text-[#333] mb-10'>We work with the best people</h1>
<div className='max-w-[1322px] max-h-[129.37px] mx-auto'>

 <div className="flex flex-col md:flex-row md:gap-16 items-center" >
              <Image
                src={'/menuPage/p1.png'}
                alt="Starter Menu"
                width={240}
                height={129}
                className="md:max-w-[240.96px] md:max-h-[129.23px] rounded-lg object-cover"
              />
              <Image 
                src={'/menuPage/p2.png'}
                alt="Starter Menu"
                width={166}
                height={128}
                className="md:max-w-[166.04px] md:max-h-[128.66px] rounded-lg object-cover"
              />
              <Image
                src={'/menuPage/p3.png'}
                alt="Starter Menu"
                width={143}
                height={127}
                className="md:max-w-[143.98px] md:max-h-[127.01px] rounded-lg object-cover"
              />
              <Image
                src={'/menuPage/p4.png'}
                alt="Starter Menu"
                width={130}
                height={129}
                className="md:max-w-[130.98px] md:max-h-[129.37px] rounded-lg object-cover"
              />
              <Image
                src={'/menuPage/p5.png'}
                alt="Starter Menu"
                width={169}
                height={129}
                className="md:max-w-[169.97px] md:max-h-[129.17px] rounded-lg object-cover"
              />
              <Image
                src={'/menuPage/p6.png'}
                alt="Starter Menu"
                width={113}
                height={129}
                className="md:max-w-[113.98px] md:max-h-[129.08px] rounded-lg object-cover"
              />
              </div>
    </div>
    </div>
    </Container>
    </>
  )
}
 