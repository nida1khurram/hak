import Link from 'next/link'
import { PiUser } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import { TiLockClosedOutline } from "react-icons/ti";
import Image from 'next/image';


export default function SignUp() {
  return (
    <main className='w-[1920px'>
    <div className="h-[624px] flex py-[120px] items-center justify-center bg-gray-50">
      <div className="w-[424px] py-8 px-9 bg-white shadow-sm">
        <h2 className="text-xl px-37 font-bold mb-8">Sign Up</h2>
        
        <form className="space-y-4">
          <div className="relative">
            <PiUser className="absolute left-3 text-base top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Name"
              className="w-full pl-10 pr-4 py-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
            />
          </div>

          <div className="relative">
            <AiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
            />
          </div>

          <div className="relative">
            <TiLockClosedOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"id="remember"
              className="h-5 w-5 text-[#FF9F0D] focus:ring-[#FF9F0D] border-gray-300"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
              Remember me?
            </label>
          </div>

          <button
            type="submit"
            className="w-full  h-11 bg-[#FF9F0D] text-white py-2  hover:bg-orange-600 transition-colors"
          >
            Sign Up
          </button>
          <div className="mt-6 text-right">
          <Link href="/forgot-password" className="text-sm text-gray-600 hover:text-orange-500">
            Forgot password?
          </Link>
        </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">OR</span>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <button className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-200 text-base hover:bg-gray-50 transition-colors">
              <Image src="/signup/google.png" alt="google-logo" width={5} height={5}  className="h-5 w-5"/>
              Sign up with Google
            </button>

            <button className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-200 text-base hover:bg-gray-50 transition-colors">
            <Image src="/signup/apple.png" alt="google-logo" width={5} height={5}  className="h-5 w-5"/>
            Sign up with Apple
            </button>
          </div>
        </div>
      </div>
    </div>
    </main>
  )
}