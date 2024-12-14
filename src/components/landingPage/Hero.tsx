// import Image from 'next/image'
// import Link from 'next/link'
// import { FaTwitter } from "react-icons/fa";
// import { SlSocialPintarest } from "react-icons/sl";
// import { Container } from '../components/container'

// import { FaFacebookF } from "react-icons/fa";

// export default function Hero() {
//   return (
//       <Container>
//     <section className=" mx-auto flex relative h-screen bg-[#0D0D0D]">
//        <Image
//           src="/hero/bgimage.png"
//           alt="Hero dish"
//           layout="fill"
//           objectFit="cover"
//           className="z-0"
//         />
//       <div className="absolute inset-0 bg-black bg-opacity-90 z-10 flex flex-col md:flex-row  mx-auto ">
//           {/* left side */}
//       <div className='w-[45%] mx-auto'> 
     
//       <div className="relative z-20 h-full flex flex-col justify-center items-start px-10 mt-4 md:mt-0">
//         <div className='md:w-[27px] md:h-[492px] absolute mt-[-100px] md:mt-96 ml-[-20px]'>
//         <FaFacebookF className='text-[#ff9F0D] mb-5'/>
//         <FaTwitter className='text-[#ff9F0D] mb-5'/>
//         <SlSocialPintarest className='text-[#ff9F0D] mb-5'/>
//         </div>
//         <div className='ml-5'>
//         <h2 className="text-[#ff9F0D] font-greatvibes text-2xl font-normal mb-2 leading-10">It`&apos;s Quick & Amazing !</h2>
//         <h1 className="text-3xl md:text-6xl font-bold text-[#ff9F0D]  md:leading-[68px] mb-2 md:mb-8 ">Th<span className='text-white'>e Art of speed food Quality</span></h1>
//         <p className="text-base text-white font-normal leading-6 mb-8 max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         Varius sed pharetra dictum neque massa congue</p>
      
//       </div>
//       <Link href="/" className="bg-[#ff9F0D] text-white font-inter text-base px-10 md:px-14 py-1 md:py-4 rounded-full hover:bg-orange-600 transition duration-300 md:ml-0 ml-[-130px] mt-[820px] md:mt-80 absolute">
//           See Menu
//         </Link>
//       </div>
//       </div>
//         {/* right side */}
//         <div className='w-[55%] '> 
//           <Image
//           src="/hero/hero.png"
//           alt="Hero dish"
//           width={877.7}
//           height={670}
//           className="z-0 md:mt-0 mt-[2px] md:ml-0 ml-28"
//         /></div>
     
//       </div>
//     </section>
//     </Container>
//   )
// }




// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { FaTwitter, FaFacebookF } from "react-icons/fa";
// import { SlSocialPintarest } from "react-icons/sl";
// import { Container } from '../components/container';

// export default function Hero() {
//   return (
//     <Container>
//       <section className="mx-auto flex flex-col lg:flex-row relative h-screen bg-[#0D0D0D]">
//         <Image
//           src="/hero/bgimage.png"
//           alt="Hero dish"
//           layout="fill"
//           objectFit="cover"
//           className="z-0"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-90 z-10 flex flex-col lg:flex-row mx-auto">
//           {/* left side */}
//           <div className='lg:w-[45%] w-full mx-auto'>
//             <div className="relative z-20 h-full flex flex-col justify-center items-start px-6 lg:px-10 mt-4 lg:mt-0">
//               <div className='lg:w-[27px] lg:h-[492px] absolute mt-[-100px] lg:mt-96 lg:ml-[-20px] left-4 lg:left-auto'>
//                 <FaFacebookF className='text-[#ff9F0D] mb-5' />
//                 <FaTwitter className='text-[#ff9F0D] mb-5' />
//                 <SlSocialPintarest className='text-[#ff9F0D] mb-5' />
//               </div>
//               <div className='ml-4 lg:ml-5'>
//                 <h2 className="text-[#ff9F0D] font-greatvibes text-2xl font-normal mb-2 leading-10">It's Quick & Amazing!</h2>
//                 <h1 className="text-3xl lg:text-6xl font-bold text-[#ff9F0D] lg:leading-[68px] mb-2 lg:mb-8">Th<span className='text-white'>e Art of speed food Quality</span></h1>
//                 <p className="text-base text-white font-normal leading-6 mb-8 max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue</p>
//               </div>
//               <Link href="/" className="bg-[#ff9F0D] text-white font-inter text-base px-10 lg:px-14 py-2 lg:py-4 rounded-full hover:bg-orange-600 transition duration-300 mt-6 lg:mt-0">
//                 See Menu
//               </Link>
//             </div>
//           </div>
//           {/* right side */}
//           <div className='lg:w-[55%] w-full flex justify-center lg:justify-end'>
//             <Image
//               src="/hero/hero.png"
//               alt="Hero dish"
//               width={877.7}
//               height={670}
//               className="z-0 mt-[2px] lg:mt-0 lg:ml-0 ml-0"
//             />
//           </div>
//         </div>
//       </section>
//     </Container>
//   );
// }


'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { SlSocialPintarest } from "react-icons/sl";
import { Container } from '../container';

export default function Hero() {
  return (
    <Container>
      <section className="mx-auto flex flex-col lg:flex-row relative h-screen bg-[#0D0D0D]">
        <Image
          src="/hero/bgimage.png"
          alt="Hero dish"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-90 z-10 flex flex-col lg:flex-row mx-auto">
          {/* left side */}
          <div className='lg:w-[45%] w-full mx-auto'>
            <div className="relative z-20 h-full flex flex-col justify-center items-start px-6 lg:px-10 mt-4 lg:mt-0">
              <div className='lg:w-[27px] lg:h-[492px] absolute mt-[-100px] lg:mt-96 lg:ml-[-20px] left-4 lg:left-auto'>
                <FaFacebookF className='text-[#ff9F0D] mb-5' />
                <FaTwitter className='text-[#ff9F0D] mb-5' />
                <SlSocialPintarest className='text-[#ff9F0D] mb-5' />
              </div>
              <div className='ml-4 lg:ml-5'>
                <h2 className="text-[#ff9F0D] font-greatvibes text-2xl font-normal mb-2 leading-10">It's Quick & Amazing!</h2>
                <h1 className="text-3xl lg:text-6xl font-bold text-[#ff9F0D] lg:leading-[68px] mb-2 lg:mb-8">Th<span className='text-white'>e Art of speed food Quality</span></h1>
                <p className="text-base text-white font-normal leading-6 mb-8 max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue</p>
              </div>
              <Link href="/" className="bg-[#ff9F0D] text-white font-inter text-base px-10 lg:px-14 py-2 lg:py-4 rounded-full hover:bg-orange-600 transition duration-300 mt-6 lg:mt-0">
                See Menu
              </Link>
            </div>
          </div>
          {/* right side */}
          <div className='lg:w-[55%] w-full flex justify-center lg:justify-end'>
            <Image
              src="/hero/hero.png"
              alt="Hero dish"
              width={877.7}
              height={670}
              className="z-0 mt-[2px] lg:mt-0 lg:ml-0 ml-0"
            />
          </div>
        </div>
      </section>
    </Container>
  );
}
