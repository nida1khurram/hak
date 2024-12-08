import Link from 'next/link'
import { Facebook, Twitter, Youtube, Instagram, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="max-w-[1929px] mx-auto bg-gray-900 text-white py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at enim mauris.</p>
          <div className="flex items-center">
            <Clock className="mr-2" />
            <div>
              <p>Opening Hours</p>
              <p>Mon - Sat (8:00 - 6:00)</p>
              <p>Sunday - Closed</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/menu">Menu</Link></li>
            <li><Link href="/testimonials">Testimonials</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Help?</h3>
          <ul className="space-y-2">
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/terms">Term & conditions</Link></li>
            <li><Link href="/reporting">Reporting</Link></li>
            <li><Link href="/documentation">Documentation</Link></li>
            <li><Link href="/support">Support Policy</Link></li>
            <li><Link href="/privacy">Privacy</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Recent Post</h3>
          <ul className="space-y-4">
            <li>
              <Link href="/blog/post1" className="flex items-center">
                <img src="/placeholder.svg" alt="Post 1" className="w-16 h-16 mr-4 rounded" />
                <div>
                  <p className="font-bold">Lorem ipsum dolor sit amet</p>
                  <p className="text-gray-400">15 April, 2022</p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/blog/post2" className="flex items-center">
                <img src="/placeholder.svg" alt="Post 2" className="w-16 h-16 mr-4 rounded" />
                <div>
                  <p className="font-bold">Consectetur adipiscing elit</p>
                  <p className="text-gray-400">15 April, 2022</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2023 Your Company. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="#" className="text-gray-400 hover:text-white"><Facebook /></Link>
          <Link href="#" className="text-gray-400 hover:text-white"><Twitter /></Link>
          <Link href="#" className="text-gray-400 hover:text-white"><Youtube /></Link>
          <Link href="#" className="text-gray-400 hover:text-white"><Instagram /></Link>
        </div>
      </div>
    </footer>
  )
}

