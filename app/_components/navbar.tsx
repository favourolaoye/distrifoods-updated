'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from "./logo.jpg";
import me from "./seyi.jpg"
export default function Navbar() {
    const fmt = {
      isAuthenticated: true,
      user: {
        picture: me, 
        given_name: "favour"
      },
      login: () => {},
      logout: () => {}
    }
  const { isAuthenticated, user, login, logout } = fmt
  const [cartItemCount] = useState(0) // Replace with actual cart state
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Products', href: '/products' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                className="h-8 w-8 rounded-full mr-2"
                src={logo}
                alt="Distrifoods logo"
                width={32}
                height={32}
              />
              <span className="text-lg font-semibold text-gray-900">Distrifoods</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/cart" className="text-gray-700 hover:text-green-600">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </div>
            </Link>

            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center focus:outline-none"
                >
                  <Image
                    src={user?.picture || '/placeholder.svg'}
                    alt={user?.given_name || 'User'}
                    width={44}
                    height={32}
                    className="h-8 w-8 rounded-full"
                  />
                </button>
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <button
                      onClick={() => {
                        logout()
                        setIsMenuOpen(false)
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => login()}
                className="bg-white text-gray-700 hover:text-green-600 border border-gray-300 rounded-md px-3 py-2 text-sm font-medium"
              >
                Login
              </button>
            )}

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-green-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {navItems.map((item, index) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
              {index < navItems.length - 1 && (
                <div className="border-b border-gray-200 mx-3"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}