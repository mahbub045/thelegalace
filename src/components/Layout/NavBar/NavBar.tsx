"use client";
import { Handbag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NavBar: React.FC = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Practice Areas", href: "/services" },
    { name: "Company", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Store", href: "/store" },
    { name: "Contact", href: "/contact" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 z-50 transition-colors duration-300">
      <div
        className={
          scrolled
            ? "backdrop-blur-sm bg-[#0b232b]/70 border-b border-[#06303a]/30 shadow-md"
            : "bg-transparent"
        }
      >
        <div className="mx-auto px-6 py-4 flex items-center justify-between transition-all duration-300">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={125}
              height={50}
              priority
            />
          </Link>

          <nav className="hidden lg:flex gap-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-outfit font-bold text-sm text-secondary/70 hover:text-secondary/90 uppercase tracking-widest"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div>
            {/* Cart button */}
            <button
              type="button"
              className="me-2 text-center text-white/90 hover:text-white hover:cursor-pointer"
            >
              <Handbag />
            </button>

            <button
              type="button"
              className="lg:hidden p-2 rounded font-outfit bg-white/6 text-white/90 hover:bg-white/10"
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
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
            <div>
              {mobileMenuOpen && (
                <nav className="fixed inset-0 z-50 bg-[#0b232b]/95 flex flex-col items-center justify-center gap-8 md:hidden">
                  <button
                    className="absolute top-4 right-7 text-white text-6xl"
                    aria-label="Close menu"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    &times;
                  </button>
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="font-outfit font-bold text-base text-white uppercase tracking-widest"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
