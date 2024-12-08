// import Link from 'next/link'
// import { Search } from 'lucide-react'
// import Image from 'next/image'
// import { MdOutlineShoppingBag } from "react-icons/md";
// export default function Header() {
//   return (
//     <header className="max-w-[1929px] mx-auto bg-black font-inter text-base leading-6 text-white py-4 px-6">
//       <Link href="#" className='flex justify-center'><Image src="/logo.png" alt="logo" width={109} height={32}/></Link>
//       <div className="px-80 flex justify-between items-center">
//         {/* <Link href="/" className="text-2xl font-bold text-[#ba9b54]">Food<span>luck</span></Link> */}
//         <nav>
//           <ul className="flex space-x-8">
//             <li><Link href="/">Home</Link></li>
//             <li><Link href="/">Menu</Link></li>
//             <li><Link href="/">Blog</Link></li>
//             <li><Link href="/">Pages</Link></li>
//             <li><Link href="/">About</Link></li>
//             <li><Link href="/">Shop</Link></li>
//             <li><Link href="/">Contact</Link></li>
//           </ul>
//         </nav>
//         <div className="relative ml-40">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="bg-transparent border-2 border-[#ff9F0D] text-white rounded-full py-2 px-4 pr-10 w-[310px] h-[54px] focus:outline-none "
//           />
//           <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 " />
//           <MdOutlineShoppingBag className='absolute right-[-30px] top-1/2 transform -translate-y-1/2 text-gray-400'/>

//         </div>
//       </div>
//     </header>
//   )
// }

import Link from 'next/link'
import { Search } from 'lucide-react'
import Image from 'next/image'
import { MdOutlineShoppingBag } from "react-icons/md";
export default function Header() {
  return (
    <header className="w-full md:max-w-[1929px] mx-auto bg-black font-inter text-base leading-6 text-white py-4 px-6">
      <Link href="#" className='flex justify-center'><Image src="/logo.png" alt="logo" width={109} height={32}/></Link>
      <div className="px-80 flex justify-between items-center">
        {/* <Link href="/" className="text-2xl font-bold text-[#ba9b54]">Food<span>luck</span></Link> */}
        <nav>
          <ul className="flex space-x-8">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Menu</Link></li>
            <li><Link href="/">Blog</Link></li>
            <li><Link href="/">Pages</Link></li>
            <li><Link href="/">About</Link></li>
            <li><Link href="/">Shop</Link></li>
            <li><Link href="/">Contact</Link></li>
          </ul>
        </nav>
        <div className="relative ml-40">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-2 border-[#ff9F0D] text-white rounded-full py-2 px-4 pr-10 w-[310px] h-[54px] focus:outline-none "
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 " />
          <MdOutlineShoppingBag className='w-6 h-6 absolute right-[-30px] top-1/2 transform -translate-y-1/2 text-gray-400'/>

        </div>
      </div>
    </header>
  )
}
