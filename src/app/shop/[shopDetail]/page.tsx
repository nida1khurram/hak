// 'use client'
// import {  FaRegHeart } from 'react-icons/fa';
// import { HiMiniArrowPath } from "react-icons/hi2";
// import { FaYoutube } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
// import { FaVk } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa6";
// import { useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link';
// import { Star, Minus, Plus, Share2 } from 'lucide-react'
// import { MdOutlineShoppingBag } from "react-icons/md";
// import ShopDescription from '@/components/shopDetail/shopDescription';
// import SimilarProducts from '@/components/shopDetail/similarProducts';
// const product = {
//   name: 'Yummy Chicken Chup',
//   price: 54.00,
//   rating: 5.0 ,
//   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc non quam faucibus, vel tincidunt nisl malesuada. Sed in eros eget libero ultricies faucibus. Sed euismod nunc non quam faucibus, vel tincidunt nisl malesuada.',
//   images: ['/shopdetails/p1.png', '/shopdetails/p2.png', '/shopdetails/p3.png', '/shopdetails/p4.png'],
// }



// export default function ShopDetail() {
//   const [quantity, setQuantity] = useState(1)
//   const [selectedImage, setSelectedImage] = useState(0)

//   return (
//     <div className="max-w-[1920px] mx-auto px-4 py-8 md:px-6 lg:px-8">

//       <div className="grid md:grid-cols-2 gap-8 mb-12">
//         <div className="space-y-4">
//           <Image
//             src={product.images[selectedImage]}
//             alt={product.name}
//             width={600}
//             height={400}
//             className="rounded-lg object-cover w-full h-[400px]"
//           />
//           <div className="flex gap-4">
//             {product.images.map((image, index) => (
//               <button
//                 key={index}
//                 onClick={() => setSelectedImage(index)}
//                 className={`relative w-20 h-20 rounded-lg overflow-hidden ${selectedImage === index ? 'ring-2 ring-orange-500' : ''}`}
//               >
//                 <Image src={image} alt={`${product.name} ${index + 1}`} layout="fill" objectFit="cover" />
//               </button>
//             ))}
//           </div>
//         </div>
//         {/* right side */}
//         <div>
//             {/* h1 */}
//           <h1 className="text-3xl font-bold mb-4 text-[#333]">{product.name}</h1>
//           {/* text */}
//           <p className="text-gray-600 mb-6 ">{product.description}</p>
//           <hr />
//           {/* --------------------------------------------------------------- */}
//           {/* price */}
//           <p className="text-2xl font-bold text-orange-500 my-6">${product.price.toFixed(2)}</p>
          
//           <div className="flex items-center gap-2 mb-4">
//            {/* star */}
//             <div className="flex text-orange-500">
//               {[...Array(5)].map((_, i) => (
//                 <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current fill-transparent'}`} />
//               ))}
//               {/* rating */}
//                <span className="text-gray-600 ml-2"> | {product.rating} Rating</span>
//             </div>
//           </div>
         
//             {/* 1 +  */}
//           <div className="flex items-center gap-4 mb-6">
//             <div className="flex items-center border rounded-lg">
//               <button
//                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                 className="p-2 hover:bg-gray-100 border"
//               >
//                 <Minus className="w-4 h-4" />
//               </button>
//               <span className="px-4">{quantity}</span>
//               <button
//                 onClick={() => setQuantity(quantity + 1)}
//                 className="p-2 hover:bg-gray-100 border"
//               >
//                 <Plus className="w-4 h-4" />
//               </button>
//             </div>
           
//             <button className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">
//               Add to Cart
//             </button> <MdOutlineShoppingBag className='ml-[-140px] text-white'/>
//           </div>
//           <hr />
//           {/* ------------------------------------------------------------ */}
//          <div className='my-6 '>
//           <div className=' flex gap-4'>
//             <Link href="#">
//                <button className="flex items-center gap-2 text-gray-600 hover:text-orange-500">
//             <FaRegHeart className="w-5 h-5" />
//             Add to Wishlist
//           </button>
//           </Link>
//           <Link href="#">
//                <button className="flex items-center gap-2 text-gray-600 hover:text-orange-500">
//             <HiMiniArrowPath className="w-5 h-5" />
//             Compare
//           </button>
//           </Link>
//           </div>
//           <p className='text-[18px] text-gray-600 mt-2'>Category: Pizza</p>
//           <p className='text-[18px] text-gray-600 my-2'>Tag: Our Shop</p>
      
//           <div className='flex '>
//             <p className='mr-2 text-[18px] text-gray-600'>Share:</p>
           
//             <div className='flex w-[184px] h-[24px] justify-between'>
//                {/* youtube */}
//             <div className='w-6 h-6 rounded-full bg-gray-600'>
//             <FaYoutube className='w-4 h-4 text-white ml-1 mt-1'/> </div>
//            {/* facebook */}
//             <div className='w-6 h-6 rounded-full bg-gray-600 '>
//             <FaFacebookF className='w-4 h-4 text-white ml-1 mt-1'/> </div>
//            {/* twi */}
//             <div className='w-6 h-6 rounded-full bg-gray-600 '>
//             <FaTwitter className='w-4 h-4 text-white ml-1 mt-1'/></div>
//             {/* favk */}
//             <div className='w-6 h-6 rounded-full bg-gray-600 '>
//             <FaVk className='w-4 h-4 text-white ml-1 mt-1'/></div>
//             <div className='w-6 h-6 rounded-full bg-gray-600 '>
//               {/* insta */}
//             <FaInstagram className='w-4 h-4 text-white ml-1 mt-1'/>
//             </div>
//             </div>
           
            


//             </div> 


//           </div>
        


//         </div>

//       </div>

// {/* description */}
// <ShopDescription />
// {/* description end*/}

//    {/* similar product */}
// <SimilarProducts />
//     </div>
//   )
// }

'use client'
import { MdArrowForward } from "react-icons/md";
import { MdOutlineArrowBack } from "react-icons/md";
import {  FaRegHeart } from 'react-icons/fa';
import { HiMiniArrowPath } from "react-icons/hi2";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaVk } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Star, Minus, Plus, Share2 } from 'lucide-react'
import { MdOutlineShoppingBag } from "react-icons/md";
import ShopDescription from '@/components/shopDetail/shopDescription';
import SimilarProducts from '@/components/shopDetail/similarProducts';
import { Container } from '../../../components/container'
const product = {
  name: 'Yummy Chicken Chup',
  price: 54.00,
  rating: 5.0 ,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc non quam faucibus, vel tincidunt nisl malesuada. Sed in eros eget libero ultricies faucibus. Sed euismod nunc non quam faucibus, vel tincidunt nisl malesuada.',
  images: ['/shopdetails/p1.png', '/shopdetails/p2.png', '/shopdetails/p3.png', '/shopdetails/p4.png'],
}
export default function ShopDetail() {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  return (
     <Container>
    <div className="max-w-[1920px] mx-auto px-4 py-8 md:px-6 lg:px-8">
      {/* top */}
      <div className="grid md:grid-cols-3 ">
          {/* left cols pic */}
          <div className="md:max-w-[132px] md:max-h-[596px] flex flex-col ">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-[132px] h-[129px] mb-2 rounded-lg overflow-hidden ${selectedImage === index ? 'ring-2 ring-orange-500' : ''}`}
              >
                <Image src={image} alt={`${product.name} ${index + 1}`} layout="fill" objectFit="cover" />
              </button>
            ))}
          </div>
        {/* left side */}
        <div className="w-[300px] md:max-w-[491px] h-[300px] md:max-h-[596px] relative">
          <Image
            src={product.images[selectedImage]}
            alt={product.name}
            width={491}
            height={596}
            className="rounded-lg object-cover md:max-w-[491px] md:max-h-[550px] absolute md:ml-[-250px]"
          />
        

        </div>

        {/* right side text*/}
        <div className='ml-0 md:ml-[-100px] mt-32 md:mt-0'>
          <div className="flex justify-between">
          <button className="w-[86px] h-[28px] bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">
            In Stock
            </button>
            {/* arrow */}
              <div className="flex gap-3 mr-8">
              <Link href={'/'}>
                <div className="flex">
              <div className="w-[40px] h-[40px] rounded-full shadow hover:bg-orange-500">
              <MdOutlineArrowBack className="text-[#333] mt-2 ml-2 w-6 h-6 hover:text-white"/></div>
              <span className="mt-2 text-[18px]  hover:text-orange-500 ml-2">Prev</span> 
                </div></Link>
                <Link href={'/'}>
                <div className="flex">
                <span className="mt-2 text-[18px] hover:text-orange-500 mr-2">Next</span> 
                <div className="w-[40px] h-[40px] rounded-full shadow hover:bg-orange-500 ">
                <MdArrowForward className="text-[#333] mt-2 ml-2 w-7 h-7 hover:text-white"/></div>
                </div>  </Link>      
                         
                    </div>
                     {/* arrow */}
          </div>
       
            {/* h1 */}
          <h1 className="text-2xl md:text-5xl font-bold mt-4 mb-6 text-[#333] ">{product.name}</h1>
          {/* text */}
          <p className="md:w-[500px] w-[300px] text-gray-600 mb-6 leading-7 text-justify">{product.description}</p>
          <hr />
          {/* --------------------------------------------------------------- */}
          {/* price */}
          <p className="text-2xl font-bold text-orange-500 my-6">${product.price.toFixed(2)}</p>
          
          <div className="flex items-center gap-2 mb-4">
           {/* star */}
            <div className="flex text-orange-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current fill-transparent'}`} />
              ))}
              {/* rating */}
               <span className="text-gray-600 ml-2"> | {product.rating} Rating</span>
            </div>
          </div>
         
            {/* 1 +  */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 hover:bg-gray-100 border"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 hover:bg-gray-100 border"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
           
            <button className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">
              Add to Cart
            </button> <MdOutlineShoppingBag className='ml-[-140px] text-white'/>
          </div>
          <hr />
          {/* ------------------------------------------------------------ */}
         <div className='my-6 '>
          <div className=' flex gap-4'>
            <Link href="#">
               <button className="flex items-center gap-2 text-gray-600 hover:text-orange-500">
            <FaRegHeart className="w-5 h-5" />
            Add to Wishlist
          </button>
          </Link>
          <Link href="#">
               <button className="flex items-center gap-2 text-gray-600 hover:text-orange-500">
            <HiMiniArrowPath className="w-5 h-5" />
            Compare
          </button>
          </Link>
          </div>
          <p className='text-[18px] text-gray-600 mt-2'>Category: Pizza</p>
          <p className='text-[18px] text-gray-600 my-2'>Tag: Our Shop</p>
      
          <div className='flex '>
            <p className='mr-2 text-[18px] text-gray-600'>Share:</p>
           
            <div className='flex w-[184px] h-[24px] justify-between'>
               {/* youtube */}
            <div className='w-6 h-6 rounded-full bg-gray-600'>
            <FaYoutube className='w-4 h-4 text-white ml-1 mt-1'/> </div>
           {/* facebook */}
            <div className='w-6 h-6 rounded-full bg-gray-600 '>
            <FaFacebookF className='w-4 h-4 text-white ml-1 mt-1'/> </div>
           {/* twi */}
            <div className='w-6 h-6 rounded-full bg-gray-600 '>
            <FaTwitter className='w-4 h-4 text-white ml-1 mt-1'/></div>
            {/* favk */}
            <div className='w-6 h-6 rounded-full bg-gray-600 '>
            <FaVk className='w-4 h-4 text-white ml-1 mt-1'/></div>
            <div className='w-6 h-6 rounded-full bg-gray-600 '>
              {/* insta */}
            <FaInstagram className='w-4 h-4 text-white ml-1 mt-1'/>
            </div>
            </div>
           
            


            </div> 


          </div>
        


        </div>

      </div>

{/* description */}
<ShopDescription />
{/* description end*/}

   {/* similar product */}
<SimilarProducts />

    </div>
    </Container>
  )
}