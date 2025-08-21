import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="text-white">
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 py-6 md:py-8 lg:py-10">
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
            <ul className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 text-xs sm:text-sm tracking-widest pt-4 md:pt-6">
              {[
                ["TEMPLATE", "/template"],
                ["PRACTICE AREAS", "/services"],
                ["COMPANY", "/about"],
                ["BLOG", "/blog"],
                ["STORE", "/store"],
                ["CONTACT", "/contact"],
              ].map(([label, href]) => (
                <li key={String(label)}>
                  <Link
                    href={String(href)}
                    className="font-outfit text-white/90 hover:underline transition-colors duration-200 text-center block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="w-full border-b border-white/20" />

      {/* Bottom row: socials and copyright */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 py-4 md:py-6">
        {/* Social icons */}
        <div className="flex items-center gap-2 md:gap-3 order-2 sm:order-1">
          <a
            aria-label="facebook"
            href="#"
            className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded bg-blue-800/60 hover:bg-blue-800/80 transition-colors duration-200"
          >
            <Facebook className="w-3 h-3 md:w-4 md:h-4 text-blue-200" />
          </a>
          <a
            aria-label="youtube"
            href="#"
            className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded bg-blue-800/60 hover:bg-blue-800/80 transition-colors duration-200"
          >
            <Youtube className="w-3 h-3 md:w-4 md:h-4 text-blue-200" />
          </a>
          <a
            aria-label="linkedin"
            href="#"
            className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded bg-blue-800/60 hover:bg-blue-800/80 transition-colors duration-200"
          >
            <Linkedin className="w-3 h-3 md:w-4 md:h-4 text-blue-200" />
          </a>
          <a
            aria-label="instagram"
            href="#"
            className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded bg-blue-800/60 hover:bg-blue-800/80 transition-colors duration-200"
          >
            <Instagram className="w-3 h-3 md:w-4 md:h-4 text-blue-200" />
          </a>
        </div>

        {/* Copyright */}
        <div className="font-outfit text-xs sm:text-sm text-blue-200/80 text-center order-1 sm:order-2">
          © {new Date().getFullYear()} The Legal Ace. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
