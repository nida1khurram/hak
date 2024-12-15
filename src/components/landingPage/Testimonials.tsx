import Image from 'next/image'
import { Star } from 'lucide-react'
import { Container } from '../container';
import { BiSolidQuoteRight } from "react-icons/bi";

const testimonials = [
  {
    name: 'Alamin Hasan',
    role: 'Food Specialist',
    image: '/testimonials/p1.png',
    rating: 4,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
  },
  // Add more testimonials here
]

export default function Testimonials() {
  return (
    <Container>
    <section className="bg-[#0D0D0D] mx-auto py-4 md:py-16 px-6 ">
      <div className='mb-20 md:mb-32'>
      <h2 className="font-greatvibes text-orange-500 text-3xl font-bold  mb-4">Testimonials</h2>
      <h2 className="text-2xl md:text-5xl font-bold  text-white">
        What our clients are saying
      </h2>
      </div>
      <div className="md:max-w-[868px] md:max-h-[451px] mx-auto ">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-lg p-6 mb-8  ">
            <div className='mt-10  relative'>

            <Image src={testimonial.image} alt={testimonial.name} width={133} height={134} className="rounded-full mr-4 absolute ml-20 md:ml-[350px] mt-[-100px] md:mt-[-130px] w-[100px] h-[100px] md:w-[133px] md:h-[134px]" />
            <BiSolidQuoteRight className='w-6 h-6 md:w-[47.97px] md:h-[47.99px] ml-[120px] md:ml-[400px] mt-2 md:mt-5 text-orange-500 absolute'/>
            </div>
            
            <div className="flex items-center mb-4 mt-32">
            <p className="mb-4 text-[18px] text-center px-4 text-pretty">{testimonial.text}</p>
            </div>
            
            <div className="flex items-center justify-center mb-4" >
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5  ${i < testimonial.rating ? 'text-yellow' : 'text-gray-400'}`} />
              ))}
            </div>
            <div className='text-center'>
                <h3 className="font-bold mb-2">{testimonial.name}</h3>
                <p className="text-gray-400">{testimonial.role}</p>
              </div> 
          </div>
        ))}
        {/* indicators */}
 <div className='flex justify-center'>
 <span className="flex w-3 h-3 me-3 bg-orange-600 rounded-full"></span>
<span className="flex w-3 h-3 me-3 bg-orange-300 rounded-full "></span>
<span className="flex w-3 h-3 me-3 bg-orange-300 rounded-full "></span>
<span className="flex w-3 h-3 me-3 bg-orange-300 rounded-full "></span>
 </div>
  {/* indicators */}

      </div>
    </section>
    </Container>
  )
}

