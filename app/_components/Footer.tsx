import Link from 'next/link'
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react'
import { useState, useEffect } from 'react';

export default function Footer() {
  //  const [mail, setMail] = useState("");

  //  const handleSubsribe = (e: any) => {
  //   console.log(mail);
  //  }

  return (
    <footer className="bg-white border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 relative">Distrifoods <span className='absolute text-xs tracking-normal'>NG</span></h2>
            <p className="text-sm text-gray-600">
              Bringing quality food products to your doorstep across Nigeria.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['About', 'Products', 'Blog'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-sm text-gray-600 hover:text-gray-900">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2">
              {['Contact Us', 'FAQs', 'Shipping', 'Returns'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-gray-600 hover:text-gray-900">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Newsletter
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Stay updated with our latest offers and products.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                          focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                required
              />
              <button
                type="submit"
                className="p-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">&copy; 2023 Distrifoods Nigeria. All rights reserved.</p>
          <div className="mt-4 sm:mt-0">
            <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-gray-900 mr-4">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-gray-500 hover:text-gray-900">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}