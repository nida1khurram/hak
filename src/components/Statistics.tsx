import Image from 'next/image'
import { ChefHatIcon as Chef, Utensils, Clock, Users } from 'lucide-react'
import { Container } from './container'

const stats = [
  { img: "/icons/001.png" , value: 420, label: 'Professional Chefs' },
  { img: "/icons/002.png", value: 320, label: 'Items Of Food' },
  { img:"/icons/003.png" , value: 30, label: 'Years Of Experienced' },
  { img:"/icons/004.png" , value: 220, label: 'Happy Customers' },
]

export default function Statistics() {
  return (
    // <Container>
     <section className="max-w-[1923px] h-[468px] mx-auto px-6 relative bg-[#0D0D0D] items-center
             font-inter  text-white   ">
    <Image
       src="/icons/bgpic.png"
       alt="Hero dish"
       layout="fill"
       objectFit="cover"
       className="z-0"
     
     />
     <div className="absolute inset-0 bg-black bg-opacity-90 z-10 flex flex-col md:flex-row ">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-40 mx-auto items-center mt:my-0 mt-10  ">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center mx-auto ">
             <Image
                className="w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
                alt="icon" 
                width={120}
                height={120}
                src={stat.img}

              />
            <span className="text-sm text-white mt-5">{stat.label}</span>
            <span className="text-3xl font-bold text-white mt-5 ">{stat.value}{stat.label === 'Years Of Experienced' && '+'}</span>
           
          </div>
        ))}
      </div> 
      </div>
    </section>
    // </Container>

  )
}

