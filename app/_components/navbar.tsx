"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "./logo.jpg";
// import UserAuth from "./userAuth";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import Menu from "./Menu";

export default function Navbar({
  isAuthenticated,
  user,
}: {
  isAuthenticated: boolean;
  user: KindeUser | null;
}) {
  //   useKindeAuth();
  const [cartItemCount, setCartItemCount] = useState(1);
  const [authMenu, setAuthMenu] = useState(false);

  const navItems = [
    { label: "Products", href: "/products" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                className="h-8 w-8 rounded-full mr-2"
                src={logo}
                alt="Distrifoods logo"
                width={32}
                height={32}
              />
              <h3 className="text-xl tracking-normal font-semibold text-gray-900 relative">
                Distrifoods{" "}
                <span className="absolute -top-2 -right-4 text-xs font-bold h-6 w-5 flex items-center justify-center">
                  NG
                </span>
              </h3>
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
            <Link
              href="/cart"
              className="text-gray-700 hover:text-green-600 relative"
              aria-label={`Shopping cart with ${cartItemCount} items`}
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setAuthMenu(!authMenu)}
                  className="flex items-center focus:outline-none"
                >
                  {user?.picture ? (
                    <Image
                      src={user?.picture}
                      alt={user?.given_name || "User"}
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-full"
                    />
                  ) : (
                    <div className="h-8 w-8 bg-gray-300 rounded-full"></div> // Fallback in case no picture
                  )}
                </button>
                {authMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <LogoutLink>
                      <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                        Logout
                      </button>
                    </LogoutLink>
                  </div>
                )}
              </div>
            ) : (
              <LoginLink>
                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                  Log
                </button>
              </LoginLink>
            )}

            <button
              onClick={() => setAuthMenu(!authMenu)}
              className="md:hidden text-gray-700 hover:text-green-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              hi
              {/* <svg
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg> */}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <Menu isAuthenticated={false} user={undefined} />
    </nav>
  );
}
