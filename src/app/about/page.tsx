"use client"
import Image from 'next/image'
import { Container } from '../../components/container'
import Link from 'next/link'
import { CiPlay1 } from "react-icons/ci";
import { offers, teamMember, testimonials } from '../../components/aboutUs/aboutData';
import TeamMember from '@/components/aboutUs/teamMember';
import { TopHeader } from '@/components/header/topHeader';
import { PHeader } from '@/components/header/t2';
import Testimonials from '@/components/landingPage/Testimonials';
import Breakfast from '@/components/ourMenu/breakfast';
export default function AboutUsPage() {
  return (
    <Container>
 {/* import header */}
      <TopHeader />
      <PHeader title='About Us' />
       {/* import header end*/}

    <div className=" mx-auto px-4 py-8 md:px-6 lg:px-8">
      <section className="mb-20">
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* img */}
        <div className="grid grid-cols-2 gap-4">
            <Image src="/aboutUs/p1.png" alt="Restaurant Interior" width={336} height={536} className="w-[336px]rounded-lg object-cover " />
           <div>
           <Image src="/aboutUs/p2.png" alt="Chef Cooking" width={309} height={271} className="rounded-lg object-cover mt-10" />
           <Image src="/aboutUs/p3.png" alt="Dish Presentation" width={309} height={382} className="rounded-lg object-cover mt-4" />
           </div>
            
          </div>
          {/* text */}
          <div className='w-[526px]'>

  <h2 className="text-orange-500 font-miniver text-2xl  mb-2 "> About us</h2>
          <h1 className="text-5xl font-bold mb-8">Food is an important part Of a balanced Diet</h1>
            <p className="text-[16px] mb-4 leading-6 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className='mt-10 flex '>
              {/* button */}
            <Link href="/" className="bg-[#ff9F0D] w-[195px] h-[58px] rounded-lg text-white text-[18px] font-inter text-base px-10 lg:px-14 py-2 lg:py-4 hover:bg-orange-600 transition duration-300 mt-6 lg:mt-0">
                Show more
              </Link>
              {/* play btn */}
              <div className='w-[60px] h-[60px] bg-[#ff9F0D] ml-4 rounded-full flex'>
              <CiPlay1 className='text-white w-6 h-6 mt-5 ml-5'/>
              </div>
              <p className='text-[16px] font-bold mt-4 ml-4'>  Watch video</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 items-center">
        <h2 className="text-5xl font-bold mb-8 text-center">Why Choose us</h2>
        <div className='ml-[400px] w-[579px]'>
        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. </p>
        </div>
       
        <Image src="/aboutUs/p4.png" alt="Dish Presentation" width={1320} height={386} className=" object-cover mt-4" />

        <div className="grid md:grid-cols-3 gap-8 mt-20 items-center">
          {offers.map((offer, index) => (
            <div key={index} className=" p-6 ">
              <Image src={offer.image} alt="Dish Presentation" width={80} height={80} className=" object-cover ml-[170px] mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-center">{offer.title}</h3>
              <p className='w-[359px]  text-center'>{offer.description}</p> 
            </div>
          ))}
        </div>
      </section>

      {/* team member */}
      <TeamMember />
     
     {/* testimonials */}
        <Testimonials />  

{/* our menu */}
<Breakfast />
    
    {/* <section className="">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">{testimonial.content}</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-600">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </section> */}


    </div>
    </Container>
  )
}