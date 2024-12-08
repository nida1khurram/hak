
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import { PiClockClockwiseThin } from "react-icons/pi";

import Image from "next/image";

export default function F2() {
  return (
    <footer className="max-w-[1929px] mx-auto bg-[#0D0D0D] text-white pt-12">
      <div className="w-[1170px] mx-auto mt-28 h-[56px] flex justify-between">
        <h2 className="text-2xl font-bold text-[#ff9F0D] leading-10 mb-4">
          St<span className="text-white">ill You Need Our Support?</span>
        </h2>

        <div className="relative w-[459px] ">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="w-full h-[56px] px-5 rounded-sm bg-[#ff9F0D] placeholder-white"
          />
          <button className="absolute top-0 right-0 rounded-sm w-[163px] h-[56px] text-[#ff9F0D] bg-white">
            Subscribe Now
          </button>
        </div>
      </div>
      <p className="text-base font-normal leading-6 w-[1170px] mx-auto mb-16 h-[56px] border-b-[1px] border-[#ff9F0D]">
        Don&apos;t wait make a smart & logical quote here. Its pretty easy.
      </p>

      <div className="max-w-[1327px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-6">About Us</h3>
          <p className="w-[312px] font-inter text-base font-normal leading-6 mb-8">
            orporate clients and leisure travelers has been relying on
            Groundlink for dependab safe, and professional chauffeured
            carservice in major cities across World.
          </p>
          <div className="flex font-inter mb-64 items-center">
            <PiClockClockwiseThin className="w-[78px] h-[72px] rounded-sm bg-[#ff9F0D] text-2xl mr-4" />
            <div className="font-inter text-sm font-normal leading-[22px]">
              <p>Opening Houres</p>
              <p>Mon - Sat (8:00 - 6:00)</p>
              <p>Sunday - Closed</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-6">Useful Links</h3>
          <ul className="font-inter text-sm leading-[22px] space-y-2 flex flex-col justify-around h-[311px]">
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/News">News</Link>
            </li>
            <li>
              <Link href="/">Partners</Link>
            </li>
            <li>
              <Link href="/">Team</Link>
            </li>
            <li>
              <Link href="/">Menu</Link>
            </li>
            <li>
              <Link href="/">Contacts</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-6">Help?</h3>
          <ul className="font-inter text-sm leading-[22px] space-y-2 flex flex-col justify-around h-[311px]">
            <li>
              <Link href="/">FAQ</Link>
            </li>
            <li>
              <Link href="/">Terms & Condition</Link>
            </li>
            <li>
              <Link href="/">Reporting</Link>
            </li>
            <li>
              <Link href="/">Documentation</Link>
            </li>
            <li>
              <Link href="/">Support Policy</Link>
            </li>
            <li>
              <Link href="/">Privacy</Link>
            </li>
          </ul>
        </div>


        <div>
        <h3 className="text-2xl font-bold mb-6">Recent Post</h3>
          <ul className="space-y-4">
            <li>
              <Link href="/" className="flex items-center">
                <Image
                  src="/footer/001.png"
                  alt="footer-logo"
                  width={50}
                  height={50}
                  className="w-[56px] h-12 mr-4 mb-4"
                />
                <div>
                  <p className="font-inter text-base text-gray-400 font-normal">20 Feb 2022</p>
                  <p className="font-inter text-[22px] leading-[26px] text-whit">Keep Your Business</p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/" className="flex items-center">
                <Image
                  src="/footer/002.png"
                  alt="footer-logo"
                  width={50}
                  height={50}
                  className="w-[56px] h-12 mr-4 mb-4"
                />
                <div>
                  <p className="font-inter text-base text-gray-400 font-normal">20 Feb 2022</p>
                  <p className="font-inter text-[22px] leading-[26px] text-whit">Keep Your Business</p>

                </div>
              </Link>
            </li>
            <li>
              <Link href="/" className="flex items-center">
                <Image
                  src="/footer/003.png"
                  alt="footer-logo"
                  width={50}
                  height={50}
                  className="w-[56px] h-12 mr-4 mb-4"
                />
                <div>
                  <p className="font-inter text-base text-gray-400 font-normal">20 Feb 2022</p>
                  <p className="font-inter text-[22px] leading-[26px] text-whit">Keep Your Business</p>
                </div>
              </Link>
            </li>
          </ul>

          {/* pic */}
<div className="relative">
<Image
                  src="/footer/footer.png"
                  alt="footer-logo"
                  width={422.5}
                  height={294.56}
                  className="sm:w-[250px] md:w-[422.5px] h-[294.56px] absolute z-10 md:mt-[35px] md:ml-2"
                />
</div>
{/* pic */}
        </div>
      </div>
      {/* <div className="max-w-[1929px] mt-12 pt-8 border-t bg-[#4F4F4F] border-gray-800 flex flex-col md:flex-row justify-between items-center"> */}

      <div className="sm:max-w-[280px] md:max-w-[1929px] h-[100px] px-72 bg-[#4f4f4f] text-white flex flex-col md:flex-row justify-between items-center ">
        <p> Copyright &copy; 2022 by Ayeman. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="#">
            <div className="w-9 h-9  bg-white text-[#4F4F4F] rounded-sm hover:text-[#ff9F0D] flex justify-center items-center">
              <FaFacebookF />
            </div>
          </Link>
          <Link href="#">
            <div className="w-9 h-9  bg-white text-[#4F4F4F] rounded-sm hover:text-[#ff9F0D] flex justify-center items-center">
              <FaTwitter />
            </div>
          </Link>
          <Link href="#">
            <div className="w-9 h-9  bg-white text-[#4F4F4F] rounded-sm hover:text-[#ff9F0D] flex justify-center items-center">
              <FaInstagram />
            </div>
          </Link>
          <Link href="#">
            <div className="w-9 h-9  bg-white text-[#4F4F4F] rounded-sm hover:text-[#ff9F0D] flex justify-center items-center">
              <FaYoutube />
            </div>
          </Link>
          <Link href="#">
            <div className="w-9 h-9  bg-white text-[#4F4F4F] rounded-sm hover:text-[#ff9F0D] flex justify-center items-center">
              <FaPinterest />
            </div>
          </Link>


        </div>
      </div>

    </footer>
  );
}