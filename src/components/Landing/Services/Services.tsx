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
    <div className="min-h-screen px-10 lg:px-20 py-16 text-white relative overflow-hidden">
      <div>
        <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-12">
          EXCEPTIONAL
          <br />
          <span className="text-teal-400">ELITE ADVOCACY</span>
        </h1>
      </div>
      <div className="flex flex-cols-1 md:flex-cols-2 gap-56 mb-16">
        <div className="flex items-start mb-12">
          <span className="text-lg lg:text-2xl font-medium tracking-widest">
            Services
          </span>
          <ArrowRightToLine className="ml-3 w-10 h-10 text-link" />
        </div>
        <div>
          <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
            <div className="flex-1">
              <Image
                src="/images/services/ServicesImg1.png"
                alt="Elegant courtroom interior with wooden furniture and warm lighting"
                className="rounded-lg object-cover w-full h-48 md:h-64 lg:h-80"
                width={300}
                height={320}
              />
            </div>
            <div className="flex-1">
              <Image
                src="/images/services/ServicesImg2.png"
                alt="Elegant courtroom interior with wooden furniture and warm lighting"
                className="rounded-lg object-cover w-full h-48 md:h-64 lg:h-80"
                width={300}
                height={320}
              />
            </div>
          </div>
          <p className="text-gray-300 font-outfit leading-relaxed text-base w-full">
            With decades of combined experience, our team of skilled attorneys
            is committed to delivering personalized, results-driven legal
            solutions. We pride ourselves on our unwavering commitment to
            integrity, excellence, and client satisfaction.
          </p>
          <div className="space-y-6 mt-16">
            {services.map((service) => (
              <div
                key={service.id}
                className="group flex items-center justify-between p-6 bg-slate-800/30 border border-secondary/50 rounded-lg hover:bg-slate-700/40 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center space-x-6">
                  {/* Service Image */}
                  <div className="w-24 h-16 rounded-sm overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={100}
                      height={70}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl lg:text-2xl font-semibold text-link tracking-wide">
                    {service.title}
                  </h3>
                </div>

                {/* Arrow */}
                <ArrowRightToLine className="w-6 h-6 text-gray-400 group-hover:text-link group-hover:translate-x-1 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-cols-1 md:flex-cols-2 gap-4">
        <div className="flex-1">
          <Image
            src="/images/services/ServicesImg1.png"
            alt="Elegant courtroom interior with wooden furniture and warm lighting"
            className="rounded-lg object-cover w-full h-48 md:h-64"
            width={400}
            height={200}
          />
        </div>
        <div className="flex-3">
          <Image
            src="/images/services/Courtroom.png"
            alt="Elegant courtroom interior with wooden furniture and warm lighting"
            className="rounded-lg object-cover w-full h-48 md:h-[600px]"
            width={900}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
