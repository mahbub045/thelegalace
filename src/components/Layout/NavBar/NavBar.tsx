"use client";
import { Handbag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full transition-colors duration-300">
      <div
        className={
          scrolled
            ? "border-b border-[#06303a]/30 bg-[#0b232b]/70 shadow-md backdrop-blur-sm"
            : "bg-transparent"
        }
      >
        <div className="mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={125}
              height={50}
              priority
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-outfit text-secondary text-hover text-sm font-bold tracking-widest uppercase ${
                  isActive(item.href) ? "active" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div>
            {/* Cart button */}
            <button
              type="button"
              className="me-2 text-center text-white/90 hover:cursor-pointer hover:text-white"
            >
              <Handbag />
            </button>

            <button
              type="button"
              className="font-outfit rounded bg-white/6 p-2 text-white/90 hover:bg-white/10 lg:hidden"
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-6 w-6"
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
                <nav className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-[#0b232b]/95 md:hidden">
                  <button
                    className="absolute top-4 right-7 text-6xl text-white"
                    aria-label="Close menu"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    &times;
                  </button>
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`font-outfit text-hover text-base font-bold tracking-widest text-white uppercase ${
                        isActive(item.href) ? "active" : ""
                      }`}
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
