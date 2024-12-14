import React from 'react'
import { Container } from '../../components/container'
export default function ShopDescription() {
  return (
    <>
       <Container>
        <div className='max-h-[458px] text-[#333] mb-[500px] md:mb-0'>
        <div className='max-w-[150px] max-h-[50px] text-[#333] hover:bg-orange-500 hover:text-white  py-2 mb-5'><h2 className='text-center'>Description</h2></div>
        <div className='w-[300px] md:w-full md:text-left text-justify'>
        <p className='mb-5'>Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.</p>
        <p className='mb-5'>Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.</p>
        </div>
      
      <div className='w-[300px] md:max-w-[476px] '>
      <h3 className='text-[18px] mb-5 font-semibold'>Key Benefits</h3>
        <ul className='ml-6 list-disc mb-6 text-[14px]'>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Maecenas ullamcorper est et massa mattis condimentum.            </li>
            <li>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li>
            <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
            <li>Mauris eget diam magna, in blandit turpis.</li> 
        </ul>
      </div>
        </div>
       </Container>
    </>
  )
}
