import { ArrowRightToLine, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const GetInTouch: React.FC = () => {
  const items = [
    {
      id: "services",
      image: "/images/landingpage/getintouch/services.png",
      title: "Services: Our practice areas",
      href: "/services",
    },
    {
      id: "company",
      image: "/images/landingpage/getintouch/company.png",
      title: "Company: About us",
      href: "/about",
    },
    {
      id: "contact",
      image: "/images/landingpage/getintouch/contact.png",
      title: "Contact: Get in touch",
      href: "/contact",
    },
  ];

  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-20 py-6 sm:py-8">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
        {/* Left column - logo + contact */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mt-4 md:mt-6 mb-4">
            <div className="text-sm sm:text-base md:text-lg font-medium tracking-widest">
              Get in Touch
            </div>
            <ArrowRightToLine className="w-5 h-5 sm:w-6 sm:h-6 text-link" />
          </div>
          <div className="flex flex-col items-start gap-5">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo2.png"
                alt="The Legal Ace"
                width={150}
                height={90}
              />
            </div>
            <div className="flex flex-col gap-3 text-sm text-white/90">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white/80" />
                <a
                  className="font-outfit underline-offset-2 hover:underline"
                  href="tel:+123456789"
                >
                  +1 (234) 567-89
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/80" />
                <a
                  className="font-outfit underline-offset-2 hover:underline"
                  href="mailto:email@gmail.com"
                >
                  Email@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - mapped list */}
        <div className="md:col-span-2">
          <div className="flex flex-col divide-y divide-white/10">
            {items.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group flex items-center gap-4 sm:gap-6 px-6 py-4 sm:py-6 hover:bg-slate-700/30 transition-colors duration-200 w-full"
              >
                <div className="w-24 sm:w-28 md:w-32 h-16 sm:h-20 md:h-24 flex-shrink-0 overflow-hidden rounded-sm bg-black/20">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={480}
                    height={320}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="flex-1">
                  <h5 className="text-base sm:text-lg md:text-xl text-link font-medium">
                    {item.title}
                  </h5>
                </div>

                {/* Arrow */}
                <ArrowRightToLine className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-link transform group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0 ml-2" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
