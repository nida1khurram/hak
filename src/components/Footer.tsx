
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import { Container } from './container'
import { PiClockClockwiseThin } from "react-icons/pi";
import Image from "next/image";

export default function Footer() {
  return (
       <Container>
    <footer className=" mx-auto bg-[#0D0D0D] text-white pt-12">
      <div className="max-w-[1170px] mx-auto mt-16 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 px-4 md:px-8">
        <h2 className="md:text-2xl font-bold text-[#ff9F0D] leading-10">
          Still You Need Our Support?
        </h2>
        <div className="relative max-w-[1170px] md:w-auto flex flex-col md:flex-row items-center">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="max-w-72 h-12 absolute md:mt-0 mt-16 ml-[-100px] md:ml-[-310px] px-4 rounded-sm bg-[#ff9F0D] placeholder-white md:mb-0 mb-20 "
          />

          <button className=" absolute md:mt-0 mt-28 ml-[-95px] md:ml-[-100px] w-40 h-12  rounded-sm text-[#ff9F0D] bg-white  ">
            Subscribe Now
          </button>
        </div>
      </div>
      <p className="text-base  font-normal leading-6  max-w-[1170px] mx-9 md:mx-auto mb-16 h-[56px] border-b-[1px] border-[#ff9F0D] ">
        Don&apos;t wait make a smart & logical quote here. Its pretty easy.
       </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-24 py-8">
        <div>
          <h3 className="text-2xl font-bold mb-6 mt-7 md:mt-0">About Us</h3>
          <p className="w-full md:w-72 text-base font-normal leading-6 mb-8">
            Corporate clients and leisure travelers have been relying on
            Groundlink for dependable, safe, and professional chauffeured
            car service in major cities across the World.
          </p>
          <div className="flex items-center mb-16">
            <PiClockClockwiseThin className="w-16 h-16 rounded-sm bg-[#ff9F0D] text-2xl mr-4" />
            <div className="text-sm font-normal leading-6">
              <p>Opening Hours</p>
              <p>Mon - Sat (8:00 - 6:00)</p>
              <p>Sunday - Closed</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-6">Useful Links</h3>
          <ul className="text-sm space-y-2">
            <li>
              <Link href="/about">About</Link>
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
              <Link href="/menu">Menu</Link>
            </li>
            <li>
              <Link href="/">Contacts</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-6">Help?</h3>
          <ul className="text-sm space-y-2">
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/">Terms & Conditions</Link>
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
                  className="w-14 h-14 mr-4"
                />
                <div>
                  <p className="text-base text-gray-400 font-normal">20 Feb 2022</p>
                  <p className="text-[22px] leading-[26px] text-white">Keep Your Business</p>
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
                  className="w-14 h-14 mr-4"
                />
                <div>
                  <p className="text-base text-gray-400 font-normal">20 Feb 2022</p>
                  <p className="text-[22px] leading-[26px] text-white">Keep Your Business</p>
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
                  className="w-14 h-14 mr-4"
                />
                <div>
                  <p className="text-base text-gray-400 font-normal">20 Feb 2022</p>
                  <p className="text-[22px] leading-[26px] text-white">Keep Your Business</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1920] bg-[#4F4F4F] text-white flex flex-col md:flex-row  md:items-center py-4 px-4 md:px-8 ">
        <p className="text-[12px] md:text-[16px] md:ml-24">Copyright &copy; 2022 by Ayeman. All Rights Reserved.</p>
        <div className="flex space-x-2 md:space-x-4 mt-4 md:mt-0 ml-0 md:ml-96 ">
          <Link href="#">
            <div className="w-9 h-9 bg-white text-[#4F4F4F] rounded-sm hover:text-[#ff9F0D] flex justify-center items-center">
              <FaFacebookF className=""/>
            </div>
          </Link>
          <Link href="#">
            <div className="w-9 h-9 bg-white text-[#4F4F4F] rounded-sm hover:text-[#ff9F0D] flex justify-center items-center">
              <FaTwitter />
            </div>
          </Link>
          <Link href="#">
            <div className="w-9 h-9 bg-white text-[#4F4F4F] rounded-sm hover:text-[#ff9F0D] flex justify-center items-center">
              <FaInstagram />
            </div>
          </Link>
          <Link href="#">
            <div className="w-9 h-9 bg-white text-[#4F4F4F] rounded-sm hover:text-[#ff9F0D] flex justify-center items-center">
              <FaYoutube />
            </div>
          </Link>
          <Link href="#">
            <div className="w-9 h-9 bg-white text-[#4F4F4F] rounded-sm hover:text-[#ff9F0D] flex justify-center items-center">
              <FaPinterest />
            </div>
          </Link>
        </div>
      </div>
    </footer>
    </Container>
  );
}
