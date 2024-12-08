"use client";

import { Sheet, SheetContent, SheetTrigger,  SheetDescription, } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PiUserBold } from "react-icons/pi";
import { LiaShoppingBagSolid } from "react-icons/lia";
// import { LuUser2 } from "react-icons/lu";
import { TfiSearch } from "react-icons/tfi";
  
export default function Header() {
    let navItems = [
        {
          name:"Home",
          link:"/",
        },
        {
          name:"Menu",
          link:"#",
        },
        {
          name:"Blog",
          link:"#",
        },
        {
          name:"Pages",
          link:"#",
        },
        {
          name:"About",
          link:"#",
        },
        {
          name:"Shop",
          link:"#",
        },
        {
          name:"Content",
          link:"#",
        },
      ]
  return (
    <header className="w-full md:w-[1920px] h-auto md:h-[90px]text-gray-600 body-font border-2 bg-b4 ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    {/* <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"> */}
      
      <span className="ml-3 text-xl">
      <Link href={'/'} className="">
            <h2 className="text-2xl font-bold text-[#fff] ">Food<span className="text-2xl font-bold text-yellow">tuck</span> </h2>
            </Link>
      </span>
    {/* </a> */}
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
  
       <ul className=" flex   items-center text-base justify-between space-x-6  ">
            { 
              navItems.map((item, i)=>(
                <li key={i} className={` text-[16px] text-white hover:text-yellow `}>
                  <Link href={'/'}>{item.name}</Link></li>
              ))
             }
            </ul>
    </nav>
    <div className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0 space-x-3">
    <Link href={'/'}>  <TfiSearch className=" text-white w-6 h-6"/></Link> 
          <Link href={'/'} ><PiUserBold className={` text-white w-6 h-6`}/> </Link> 
          <Link href={'/'} > <LiaShoppingBagSolid className={` text-white w-6 h-6 `}/></Link> 
    </div>
    {/* sheet */}
    <Sheet>
            <SheetTrigger className="text-[20px] font-bold mr-80 mt-[-35px] md:hidden ">
              <Menu />
            </SheetTrigger>
            <SheetContent >
            
            <ul className="block  items-center text-base justify-between space-x-6  ">
            {
              navItems.map((item, i)=>(
                <li key={i} className={` text-[22px] hover:border-b-4 hover:border-myYellow`}>
                  <Link href={'/'}>{item.name}</Link></li>
              ))
             }
            </ul>
          
            </SheetContent>
          </Sheet>
  </div>
</header>

  )
}
