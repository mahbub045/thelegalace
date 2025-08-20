import { ArrowRightToLine } from "lucide-react";
import Image from "next/image";
import React from "react";

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "CORPORATE LAW",
      image: "/images/services/CLaw.png",
    },
    {
      id: 2,
      title: "REAL ESTATE LAW",
      image: "/images/services/RELaw.png",
    },
    {
      id: 3,
      title: "EMPLOYMENT LAW",
      image: "/images/services/ELaw.png",
    },
    {
      id: 4,
      title: "ENVIRONMENTAL LAW",
      image: "/images/services/EVLaw.png",
    },
  ];

  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-12 md:py-16 text-white relative overflow-hidden">
      {/* Hero Section */}
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          EXCEPTIONAL
          <br />
          <span className="text-teal-400">ELITE ADVOCACY</span>
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row lg:gap-16 xl:gap-56 mb-8 sm:mb-12 md:mb-16">
        {/* Services Header */}
        <div className="flex items-start mb-6 sm:mb-8 lg:mb-12">
          <span className="text-base sm:text-lg lg:text-2xl font-medium tracking-widest">
            Services
          </span>
          <ArrowRightToLine className="ml-2 sm:ml-3 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-link" />
        </div>

        {/* Content Area */}
        <div className="flex-1">
          {/* Image Gallery */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="flex-1">
              <Image
                src="/images/services/ServicesImg1.png"
                alt="Elegant courtroom interior with wooden furniture and warm lighting"
                className="rounded-xl sm:rounded-2xl object-cover w-full h-40 sm:h-48 md:h-64 lg:h-80"
                width={300}
                height={320}
              />
            </div>
            <div className="flex-1">
              <Image
                src="/images/services/ServicesImg2.png"
                alt="Elegant courtroom interior with wooden furniture and warm lighting"
                className="rounded-xl object-cover w-full h-40 sm:h-48 md:h-64 lg:h-80"
                width={300}
                height={320}
              />
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 font-outfit leading-relaxed text-sm sm:text-base mb-8 sm:mb-12 md:mb-16">
            With decades of combined experience, our team of skilled attorneys
            is committed to delivering personalized, results-driven legal
            solutions. We pride ourselves on our unwavering commitment to
            integrity, excellence, and client satisfaction.
          </p>

          {/* Services List */}
          <div className="space-y-4 sm:space-y-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="group flex items-center justify-between p-4 sm:p-6 bg-slate-800/30 border border-secondary/50 rounded-lg hover:bg-slate-700/40 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6 flex-1 min-w-0">
                  {/* Service Image */}
                  <div className="w-16 h-12 sm:w-20 sm:h-14 md:w-24 md:h-16 rounded-sm overflow-hidden flex-shrink-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={100}
                      height={70}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold text-link tracking-wide truncate">
                    {service.title}
                  </h3>
                </div>

                {/* Arrow */}
                <ArrowRightToLine className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-link group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-2" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Image Section */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 sm:max-w-[40%]">
          <Image
            src="/images/services/ServicesImg1.png"
            alt="Elegant courtroom interior with wooden furniture and warm lighting"
            className="rounded-lg object-cover w-full h-40 sm:h-48 md:h-64"
            width={400}
            height={200}
          />
        </div>
        <div className="flex-1 sm:flex-[3]">
          <Image
            src="/images/services/Courtroom.png"
            alt="Elegant courtroom interior with wooden furniture and warm lighting"
            className="rounded-lg object-cover w-full h-40 sm:h-48 md:h-64 lg:h-[600px]"
            width={900}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
