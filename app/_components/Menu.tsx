"use client"
import {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/types';
import logo from "./logo.jpg";
export default function Menu({ isAuthenticated, user,}: {
    isAuthenticated: boolean;
    user: KindeUser | null;
  }) {
    const [IsMenuOpen, setIsMenuOpen]  = useState(false);
    const navItems = [
        { label: "Products", href: "/products" },
        { label: "Blog", href: "/blog" },
        { label: "About", href: "/about" },
      ];
  return (
         <div
        className={`md:hidden fixed inset-0 z-50 bg-white ${
          IsMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Image
                className="h-8 w-8 rounded-full mr-2"
                src={logo}
                alt="Distrifoods logo"
                width={32}
                height={32}
              />
              <h3 className="text-lg font-semibold text-gray-900 relative">
                Distrifoods{" "}
                <span className="absolute -top-2 -right-4 text-xs font-bold h-6 w-5 flex items-center justify-center ">
                  NG
                </span>{" "}
              </h3>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-grow overflow-y-auto">
            <div className="px-2 pt-2 pb-3 space-y-1">
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
          <div className="px-4 py-3 border-t border-gray-200">
            {isAuthenticated ? (
              <button className="w-full text-left text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-base font-medium">
                Logout
              </button>
            ) : (
              <button className="w-full text-left text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-base font-medium">
                Login
              </button>
            )}
          </div>
        </div>
    </div>
  )
}
