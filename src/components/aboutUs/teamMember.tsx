// "use client"
// import React from 'react'
// import { teamMember } from './aboutData'
// import Image from 'next/image'
// import { FaFacebookF } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import Link from 'next/link';

// export default function TeamMember() {
//   return (
//     <>
//       {/* team member */}
//           <section className='mb-96'>
//          <div className='w-full h-[460px] bg-yellow relative'>
//          <div className=' ml-[550px] '>
//          <h2 className="w-[418px] h-[176px] text-5xl font-bold mt-20 absolute text-white ml-10">Team Member</h2>
//           <p className='absolute mt-40  w-[418px] h-[176px] text-center text-[16px] text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue</p> 
//          </div>
//           </div>
        
//          <div className="grid md:grid-cols-4 gap-2 absolute mt-[-200px] ml-20 ">
        
//               {teamMember.map((teamMem, index) => (
//                 <div key={index} className=" shadow-lg ">
//                                 <Image src={teamMem.image} alt="Dish Presentation" width={312} height={300} className="object-cover" />
            

//   {/* icon */}
//   <div className="flex flex-col ml-[250px] mt-[-380px] justify-center gap-3 text-[#4f4f4f] absolute">
//               <Link href={'/'} className='mt-5 ml-2'> 
//               <div className='w-[36px] h-[35px] bg-[#d1d1d1] '>
//               <FaFacebookF />
//               </div>
//               </Link>
//               <div className='w-[36px] h-[35px] bg-[#d1d1d1] '>
//               <FaTwitter className='mt-2 ml-2'/>
//                 </div>
//                 <div className='w-[36px] h-[35px] bg-[#d1d1d1] '>
//                 <FaYoutube className='mt-2 ml-2'/>
//                 </div>
//                 <div className='w-[36px] h-[35px] bg-[#d1d1d1] '>
//                 <svg  className="w-5 h-5 mt-2 ml-2"    fill="currentColor"    viewBox="0 0 24 24"    aria-hidden="true">
//     <path  fillRule="evenodd"
//       d="M12 2C6.486 2 2 6.486 2 12c0 4.072 2.988 7.451 7.074 8.29-.098-.705-.186-1.788.039-2.561.2-.689 1.28-4.64 1.28-4.64s-.327-.653-.327-1.62c0-1.515.877-2.647 1.967-2.647.927 0 1.376.695 1.376 1.53 0 .93-.593 2.317-.899 3.607-.256 1.084.542 1.968 1.607 1.968 1.93 0 3.415-2.034 3.415-4.965 0-2.593-1.863-4.41-4.522-4.41-3.081 0-4.885 2.313-4.885 4.707 0 .93.357 1.928.803 2.47a.324.324 0 0 1 .075.308c-.082.34-.264 1.084-.3 1.236-.048.2-.159.244-.368.147-1.369-.635-2.227-2.63-2.227-4.24 0-3.45 2.514-6.613 7.24-6.613 3.804 0 6.764 2.718 6.764 6.35 0 3.777-2.38 6.812-5.684 6.812-1.108 0-2.15-.576-2.504-1.26 0 0-.596 2.27-.745 2.833-.271 1.047-1.004 2.357-1.505 3.156A10.003 10.003 0 0 0 22 12c0-5.514-4.486-10-10-10Z"  clipRule="evenodd"/>
//   </svg>
//                 </div>
//           </div>
//           {/* icon */}






//                   <h3 className="text-xl font-semibold mb-4 mt-4 text-center">{teamMem.title}</h3>
//                   <p className=' text-center'>{teamMem.destination}</p> 
//                 </div>
//               ))}
            
               
//             </div>


            

//           </section>
    
    
    
    
    
    
    
//     </>
//   )
// }





'use client';
import React from 'react';
import { teamMember } from './aboutData';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from 'next/link';

export default function TeamMember() {
  return (
    <>
      {/* team member */}
      <section className='mb-96'>
        <div className='w-full h-[460px] bg-yellow relative'>
          <div className=' ml-[550px] '>
            <h2 className="w-[418px] h-[176px] text-5xl font-bold mt-20 absolute text-white ml-10">Team Member</h2>
            <p className='absolute mt-40  w-[418px] h-[176px] text-center text-[16px] text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue</p> 
          </div>
        </div>
        
        <div className="grid md:grid-cols-4 gap-2 absolute mt-[-200px] ml-20 ">
          {teamMember.map((teamMem, index) => (
            <div key={index} className="shadow-lg relative group">
              <Image
                src={teamMem.image}
                alt="Dish Presentation"
                width={312}
                height={300}
                className="object-cover"
              />
              {/* icon */}
              <div className="flex flex-col items-center justify-center gap-3 text-[#4f4f4f] absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link href={'/'} className=''>
                  <div className='w-[36px] h-[36px] bg-[#d1d1d1] flex items-center justify-center rounded-full'>
                    <FaFacebookF />
                  </div>
                </Link>
                <Link href={'/'} className=''>
                  <div className='w-[36px] h-[36px] bg-[#d1d1d1] flex items-center justify-center rounded-full'>
                    <FaTwitter />
                  </div>
                </Link>
                <Link href={'/'} className=''>
                  <div className='w-[36px] h-[36px] bg-[#d1d1d1] flex items-center justify-center rounded-full '>
                    <FaYoutube />
                  </div>
                </Link>
              </div>
              {/* icon */}
              <h3 className="text-xl font-semibold mb-4 mt-4 text-center">{teamMem.title}</h3>
              <p className='text-center mb-4'>{teamMem.destination}</p> 
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
