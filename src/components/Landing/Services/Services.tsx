import { ArrowRightToLine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Corporate & Foreign Direct Investment",
      image: "/images/services/CFD.avif",
      href: "/services/corporate-and-foreign-direct-investment",
    },
    {
      id: 2,
      title: "Taxation & VAT",
      image: "/images/services/TV.avif",
      href: "/services/taxation-and-vat",
    },
    {
      id: 3,
      title: "Banking and Financial Matters",
      image: "/images/services/BFM.avif",
      href: "/services/banking-and-financial-matters",
    },
    {
      id: 4,
      title: "Business Setup in Bangladesh",
      image: "/images/services/BSB.avif",
      href: "/services/business-setup-in-bangladesh",
    },
  ];

  return (
    <div className="relative overflow-hidden px-4 py-8 text-white sm:px-6 sm:py-12 md:px-10 md:py-16 lg:px-20">
      {/* Hero Section */}
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl leading-tight font-bold sm:text-4xl md:text-5xl lg:text-6xl">
          EXCEPTIONAL
          <br />
          ELITE ADVOCACY
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="mb-8 flex flex-col sm:mb-12 md:mb-16 lg:flex-row lg:gap-16 xl:gap-56">
        {/* Services Header */}
        <div className="mt-6 mb-6 flex items-start sm:mt-8 lg:mt-12">
          <span className="text-base font-medium tracking-widest sm:text-lg lg:text-2xl">
            Services
          </span>
          <ArrowRightToLine className="text-link ml-2 h-6 w-6 sm:ml-3 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
        </div>

        {/* Content Area */}
        <div className="flex-1">
          {/* Image Gallery */}
          <div className="mb-6 flex flex-col justify-between gap-4 sm:mb-8 sm:flex-row sm:gap-6">
            <div className="flex-1">
              <Image
                src="/images/home/services/ServicesImg1.png"
                alt="Elegant courtroom interior with wooden furniture and warm lighting"
                className="h-40 w-full rounded-md object-cover transition-transform duration-500 hover:scale-105 sm:h-48 md:h-64 lg:h-80"
                width={300}
                height={320}
              />
            </div>
            <div className="flex-1">
              <Image
                src="/images/home/services/ServicesImg2.png"
                alt="Elegant courtroom interior with wooden furniture and warm lighting"
                className="h-40 w-full rounded-md object-cover transition-transform duration-500 hover:scale-105 sm:h-48 md:h-64 lg:h-80"
                width={300}
                height={320}
              />
            </div>
          </div>

          {/* Description */}
          <p className="font-outfit mb-8 text-sm leading-relaxed text-gray-300 sm:mb-12 sm:text-base md:mb-16">
            With decades of combined experience, our team of skilled attorneys
            is committed to delivering personalized, results-driven legal
            solutions. We pride ourselves on our unwavering commitment to
            integrity, excellence, and client satisfaction.
          </p>

          {/* Services List */}
          <div className="space-y-4 sm:space-y-6">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group border-secondary/50 flex cursor-pointer items-center justify-between rounded-md border bg-slate-800/30 p-4 transition-all duration-500 hover:scale-102 hover:bg-slate-700/40 sm:p-6"
              >
                <div className="flex min-w-0 flex-1 items-center space-x-3 sm:space-x-4 md:space-x-6">
                  {/* Service Image */}
                  <div className="h-12 w-16 flex-shrink-0 overflow-hidden rounded-md sm:h-14 sm:w-20 md:h-16 md:w-24">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={100}
                      height={70}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-link truncate text-sm font-semibold tracking-wide sm:text-lg md:text-xl lg:text-2xl">
                    {service.title}
                  </h3>
                </div>

                {/* Arrow */}
                <ArrowRightToLine className="group-hover:text-link ml-2 h-5 w-5 flex-shrink-0 text-gray-400 transition-all duration-300 group-hover:translate-x-1 sm:h-6 sm:w-6" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Image Section */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1 sm:max-w-[30%]">
          <Image
            src="/images/home/services/supremecourt.png"
            alt="Elegant courtroom interior with wooden furniture and warm lighting"
            className="h-40 w-full rounded-md object-cover transition-transform duration-500 hover:scale-101 sm:h-48 md:h-64"
            width={400}
            height={200}
          />
          {/* Overlay only over image */}
          <div className="bg-secondary/40 pointer-events-none absolute top-0 left-0 h-40 w-full rounded-md sm:h-48 md:h-64" />
        </div>
        <div className="flex-1 sm:flex-[3]">
          <Image
            src="/images/home/services/Courtroom.png"
            alt="Elegant courtroom interior with wooden furniture and warm lighting"
            className="h-40 w-full rounded-md object-cover transition-transform duration-500 hover:scale-101 sm:h-48 md:h-64 lg:h-[600px]"
            width={900}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
