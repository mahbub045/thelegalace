"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar: React.FC = () => {
  const navItems = [
    "Template",
    "Practice Areas",
    "Company",
    "Blog",
    "Store",
    "Contact",
  ];

  return (
    <header className="w-full fixed top-0 z-50">
      <div className="bg-transparent">
        <div className="mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={125}
              height={50}
              priority
            />
          </Link>

          <nav className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item}
                href="#"
                className="font-outfit font-bold text-sm text-secondary/70 hover:text-secondary/90 uppercase tracking-widest"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Desktop Menu button */}
            <button
              type="button"
              className="hidden md:flex items-center gap-3 font-outfit text-sm text-white/90 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <span className="uppercase tracking-wider">Menu</span>
            </button>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden p-2 rounded font-outfit bg-white/6 text-white/90 hover:bg-white/10"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
