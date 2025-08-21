import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className=" text-white">
      <div className="relative mx-auto px-6 sm:px-8 lg:px-20 py-8 md:py-10">
        {/* background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/footer/footerbg.png"
            alt="Footer background"
            fill
            className="object-cover opacity-95"
          />
        </div>
        {/* Nav row (centered) */}
        <div className="mb-6">
          <nav>
            <ul className="flex flex-wrap justify-center gap-8 text-sm tracking-widest pt-6">
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
                    className="font-outfit text-white/90 hover:underline"
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
      {/* Bottom row: socials left, copyright centered */}
      <div className="flex items-center justify-between mx-auto px-6 sm:px-8 lg:px-20 pt-2 md:pt-4 pb-8 md:py-10">
        <div className="flex items-center gap-3">
          <a
            aria-label="facebook"
            href="#"
            className="w-8 h-8 flex items-center justify-center rounded bg-blue-800/60"
          >
            <Facebook className="w-4 h-4 text-blue-200" />
          </a>
          <a
            aria-label="youtube"
            href="#"
            className="w-8 h-8 flex items-center justify-center rounded bg-blue-800/60"
          >
            <Youtube className="w-4 h-4 text-blue-200" />
          </a>
          <a
            aria-label="linkedin"
            href="#"
            className="w-8 h-8 flex items-center justify-center rounded bg-blue-800/60"
          >
            <Linkedin className="w-4 h-4 text-blue-200" />
          </a>
          <a
            aria-label="instagram"
            href="#"
            className="w-8 h-8 flex items-center justify-center rounded bg-blue-800/60"
          >
            <Instagram className="w-4 h-4 text-blue-200" />
          </a>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="font-outfit text-sm text-blue-200/80">
            © {new Date().getFullYear()} The Legal Ace. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
