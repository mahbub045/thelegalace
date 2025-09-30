import { ArrowRightToLine, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const GetInTouch: React.FC = () => {
  const items = [
    {
      id: "services",
      image: "/images/home/getintouch/services.png",
      title: "Services: Our practice areas",
      href: "/services",
    },
    {
      id: "company",
      image: "/images/home/getintouch/company.png",
      title: "Company: About us",
      href: "/about",
    },
    {
      id: "contact",
      image: "/images/home/getintouch/contact.png",
      title: "Contact: Get in touch",
      href: "/contact",
    },
  ];

  return (
    <section className="relative overflow-hidden px-4 py-6 sm:px-6 sm:py-8 lg:px-20">
      <div className="mx-auto grid grid-cols-1 items-start gap-6 md:grid-cols-3 md:gap-8">
        {/* Left column - logo + contact */}
        <div className="md:col-span-1">
          <div className="mt-4 mb-4 flex items-center gap-3 md:mt-6">
            <div className="text-sm font-medium tracking-widest sm:text-base md:text-lg">
              Get in Touch
            </div>
            <ArrowRightToLine className="text-link h-5 w-5 sm:h-6 sm:w-6" />
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
                <Phone className="h-4 w-4 text-white/80" />
                <a
                  className="font-outfit underline-offset-2 hover:underline"
                  href="tel:+123456789"
                >
                  +1 (234) 567-89
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-white/80" />
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
                className="group flex w-full items-center gap-4 px-6 py-4 transition-colors duration-200 hover:bg-slate-700/30 sm:gap-6 sm:py-6"
              >
                <div className="h-16 w-24 flex-shrink-0 overflow-hidden rounded-sm bg-black/20 sm:h-20 sm:w-28 md:h-24 md:w-32">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={480}
                    height={320}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h5 className="text-link text-base font-medium sm:text-lg md:text-xl">
                    {item.title}
                  </h5>
                </div>

                {/* Arrow */}
                <ArrowRightToLine className="group-hover:text-link ml-2 h-5 w-5 flex-shrink-0 transform text-gray-400 transition-transform duration-200 group-hover:translate-x-1 sm:h-6 sm:w-6" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
