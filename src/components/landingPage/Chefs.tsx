import Image from 'next/image'
import { Container } from '../container';
const chefs = [
  { name: 'D.Estwood', role: 'Chief Chef', image: '/ourchef/001.png' },
  { name: 'D.Scoriesh', role: 'Assistant Chef', image: '/ourchef/002.png' },
  { name: 'M. William', role: 'Advertising Chef', image: '/ourchef/003.png' },
  { name: 'W.Readfroad', role: 'Chef', image: '/ourchef/004.png' },
]
export default function Chefs() {
  return (
    <Container>
    <section className="bg-[#0D0D0D] mx-auto py-16 px-6">
    <h2 className="font-greatvibes text-orange-500 text-3xl font-bold text-center mb-8">Chefs</h2>
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          <span className="text-orange-500">Me</span>et Our Chef
        </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {chefs.map((chef, index) => (
          <div key={index} className="text-center relative">
            <Image src={chef.image} alt={chef.name} width={312} height={391} className="rounded-lg mx-auto mb-4" />
            
            <div className='w-[181px] h-[67px] bg-white mt-[-80px] rounded-bl-lg absolute ml-2 md:ml-0 '>
            <h3 className="font-bold text-[#333] text-[18px]">{chef.name}</h3>
            <p className="text-[#333]">{chef.role}</p>
            </div>
            
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="border-2 border-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300">
          See More
        </button>
      </div>
    </section>
    </Container>
  )
}

