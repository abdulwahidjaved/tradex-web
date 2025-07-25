"use client";

import Link from "next/link";
import { useState } from "react";
import SignupModal from "./SignupModel";
import LoginModal from "./LoginFormModel"; // 👈 Import

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleNavbar = () => setOpenNavbar((prev) => !prev);

  const navItems = [
    { text: "Home", href: "/" },
    { text: "Features", href: "/features" },
    { text: "Contact Us", href: "/contactUs" }, // ✅ Match your folder name exactly
    { text: "About Us", href: "/aboutUs" },
  ];

  return (
    <>
      <header className="absolute left-0 top-0 w-full flex items-center h-24 z-40">
        <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
          <Link href="#" className="font-semibold flex items-center gap-x-2">
            <div className="flex items-center -space-x-3">
              <span className="h-6 aspect-square bg-blue-600 dark:bg-blue-500 rounded-full flex" />
              <span className="h-6 aspect-square bg-pink-600 dark:bg-pink-400 blur rounded-full flex" />
            </div>
            <span className="text-lg text-gray-700 dark:text-gray-300">TradeX</span>
          </Link>

          {/* Menu Items */}
          <div
            className={`fixed inset-x-0 h-[100dvh] lg:h-max top-0 lg:translate-y-0 lg:opacity-100 left-0 bg-white dark:bg-gray-950 lg:!bg-transparent py-32 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 w-full lg:top-0 lg:relative  lg:flex lg:justify-between duration-300 ease-linear ${
              openNavbar ? "" : " -translate-y-10 opacity-0 invisible lg:visible"
            }`}
          >
            <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-gray-700 dark:text-gray-300 lg:w-full lg:justify-center">
              {navItems.map(({ text, href }, i) => (
                <li key={i} className="transition-transform duration-300 ease-in-out hover:-translate-y-1">
                  <Link href={href} className="relative py-2.5 hover:text-blue-600">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Auth Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:min-w-max mt-10 lg:mt-0">
              <button
                onClick={() => setShowLogin(true)}
                className="px-6 py-3 duration-300 ease-linear flex justify-center w-full sm:w-auto border border-blue-600 text-blue-600 hover:text-white hover:bg-blue-700 dark:bg-gray-900 dark:text-white dark:border-gray-800 dark:hover:bg-gray-950 rounded-xl"
              >
                Sign In
              </button>
              <button
                onClick={() => setShowSignup(true)}
                className="px-6 py-3 duration-300 ease-linear flex justify-center w-full sm:w-auto border border-pink-600 text-pink-600 hover:text-white hover:bg-pink-700 dark:bg-gray-900 dark:text-white dark:border-gray-800 dark:hover:bg-gray-950 rounded-xl"
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleNavbar}
              className="outline-none border-l border-l-purple-100 dark:border-l-gray-800 pl-3 relative py-3"
            >
              <span className="sr-only">Toggle navbar</span>
              <span
                aria-hidden="true"
                className={`flex h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300 ${
                  openNavbar ? "rotate-45 translate-y-[0.33rem]" : ""
                }`}
              />
              <span
                aria-hidden="true"
                className={`flex mt-2 h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300 ${
                  openNavbar ? "-rotate-45 -translate-y-[0.33rem]" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Modals */}
      <SignupModal open={showSignup} onClose={() => setShowSignup(false)} />
      <LoginModal open={showLogin} onClose={() => setShowLogin(false)} />
    </>
  );
};

export default Navbar;
