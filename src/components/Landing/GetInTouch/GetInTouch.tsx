import { ArrowRightToLine, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const GetInTouch: React.FC = () => {
  const items = [
    {
      id: "services",
      image: "/images/getintouch/services.png",
      title: "Services: Our practice areas",
      href: "/services",
    },
    {
      id: "company",
      image: "/images/getintouch/company.png",
      title: "Company: About us",
      href: "/about",
    },
    {
      id: "contact",
      image: "/images/getintouch/contact.png",
      title: "Contact: Get in touch",
      href: "/contact",
    },
  ];

  return (
    <section className="relative overflow-hidden px-6 sm:px-8 lg:px-20 py-12 sm:py-16">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left column - logo + contact */}
        <div className="md:col-span-1">
          <div className="flex items-start mt-6 sm:mt-8 lg:mt-12 mb-6">
            <span className="text-base sm:text-lg lg:text-2xl font-medium tracking-widest">
              Get in Touch
            </span>
            <ArrowRightToLine className="ml-2 sm:ml-3 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-link" />
          </div>
          <div className="flex flex-col items-start gap-6">
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
                  className="underline-offset-2 hover:underline"
                  href="tel:+123456789"
                >
                  +1 (234) 567-89
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/80" />
                <a
                  className="underline-offset-2 hover:underline"
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
          <div className="flex flex-col divide-y divide-white/20">
            {items.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group flex items-center gap-6 px-6 py-6 md:py-8 hover:bg-slate-700/40 transition-all duration-300 cursor-pointer"
              >
                <div className="w-32 h-20 flex-shrink-0 overflow-hidden rounded-sm bg-black/20">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={320}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="flex-1">
                  <h5 className="text-xl md:text-2xl text-link font-medium">
                    {item.title}
                  </h5>
                </div>

                {/* Arrow */}
                <ArrowRightToLine className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-link group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-2" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
