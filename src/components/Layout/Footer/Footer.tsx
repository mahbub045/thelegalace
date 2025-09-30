import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Practice Areas", href: "/services" },
    { label: "Company", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Store", href: "/store" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="text-white">
      <div className="relative mx-auto px-4 py-6 sm:px-6 md:py-8 lg:px-8 lg:py-10 xl:px-20">
        {/* background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/footer/footerbg.png"
            alt="Footer background"
            fill
            className="object-cover opacity-95"
            priority={false}
          />
        </div>

        {/* Nav row (centered) */}
        <div className="mb-4 md:mb-6 lg:mb-8">
          <nav>
            <ul className="flex flex-wrap justify-center gap-4 pt-4 text-xs tracking-widest sm:text-sm md:gap-6 md:pt-6 lg:gap-8">
              {menuItems?.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item?.href}
                    className="font-outfit block text-center text-white/90 transition-colors duration-200 hover:underline"
                  >
                    {item?.label.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="w-full border-b border-white/20" />

      {/* Bottom row: socials and copyright */}
      <div className="mx-auto flex flex-col items-center justify-between gap-4 px-4 py-4 sm:flex-row sm:px-6 md:py-6 lg:px-8 xl:px-20">
        {/* Social icons */}
        <div className="order-2 flex items-center gap-2 sm:order-1 md:gap-3">
          <a
            aria-label="facebook"
            href="#"
            className="flex h-7 w-7 items-center justify-center rounded bg-blue-800/60 transition-colors duration-200 hover:bg-blue-800/80 md:h-8 md:w-8"
          >
            <Facebook className="h-3 w-3 text-blue-200 md:h-4 md:w-4" />
          </a>
          <a
            aria-label="youtube"
            href="#"
            className="flex h-7 w-7 items-center justify-center rounded bg-blue-800/60 transition-colors duration-200 hover:bg-blue-800/80 md:h-8 md:w-8"
          >
            <Youtube className="h-3 w-3 text-blue-200 md:h-4 md:w-4" />
          </a>
          <a
            aria-label="linkedin"
            href="#"
            className="flex h-7 w-7 items-center justify-center rounded bg-blue-800/60 transition-colors duration-200 hover:bg-blue-800/80 md:h-8 md:w-8"
          >
            <Linkedin className="h-3 w-3 text-blue-200 md:h-4 md:w-4" />
          </a>
          <a
            aria-label="instagram"
            href="#"
            className="flex h-7 w-7 items-center justify-center rounded bg-blue-800/60 transition-colors duration-200 hover:bg-blue-800/80 md:h-8 md:w-8"
          >
            <Instagram className="h-3 w-3 text-blue-200 md:h-4 md:w-4" />
          </a>
        </div>

        {/* Copyright */}
        <div className="font-outfit order-1 text-center text-xs text-blue-200/80 sm:order-2 sm:text-sm">
          © {new Date().getFullYear()} The Legal Ace. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
