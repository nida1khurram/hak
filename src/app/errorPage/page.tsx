
import { Container } from '../../components/container'
export default function Error() {
    return (
      <Container>
      <main className=" ">
      <div className="w-1/3 md:w-[630px] md:h-[342px] h-1/6 mt-[120px] p[120px] mx-auto flex flex-col items-center justify-center bg-gray-50 ">
          <h1 className="text-8xl leading-[104px] text-[#FF9F0D] px-37 font-bold mb-8">404</h1>
          <h2 className="text-[32px] text-center leading-10 font-bold text-[#333333] mb-6">Oops! Look likes something going wrong</h2>
          <p className="text-lg text-center text-[#4f4f4f]">Page Cannot be found! well have it figured out in no time.</p>
  <p className="text-lg text-center text-[#4f4f4f] mb-6"> Menwhile, cheek out these fresh ideas:</p>
            <button
              type="submit"
              className="text-center h-11 bg-[#FF9F0D] font-blod text-lg rounded-md text-white py-4 px-12  hover:bg-orange-600 transition-colors mb-8"
            >
              <p className="mt-[-10px]">Go to Home</p>
            </button>
      </div>
  </main>
  </Container>
    )
  }