import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ServiceCard: React.FC = () => {
  const cardsData = [
    {
      id: 1,
      title: "CORPORATE LAW",
      image: "/images/services/CLaw.avif",
      description:
        "Business formation, governance, M&A, and regulatory advice for corporate clients.",
      href: "/services/corporate-law",
    },
    {
      id: 2,
      title: "REAL ESTATE LAW",
      image: "/images/services/RELaw.avif",
      description:
        "Commercial and residential transactions, leasing, and property disputes.",
      href: "/services/real-estate-law",
    },
    {
      id: 3,
      title: "EMPLOYMENT LAW",
      image: "/images/services/ELaw.avif",
      description:
        "Contracts, workplace issues, wrongful termination, and employee benefits.",
      href: "/services/employment-law",
    },
    {
      id: 4,
      title: "ENVIRONMENTAL LAW",
      image: "/images/services/EVLaw.avif",
      description:
        "Protecting your business and environment with expert legal guidance in law.",
      href: "/services/environmental-law",
    },
  ];

  return (
    <div className="grid gap-8 p-20 md:gap-12">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="hover:shadow-secondary/20 relative overflow-hidden transition-all duration-500 hover:shadow-2xl"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="group relative h-80 cursor-pointer overflow-hidden lg:h-96 lg:w-1/2">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-900/20 to-slate-900/60 transition-opacity duration-300 group-hover:opacity-75 lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900/80" />
            </div>

            {/* Decorative Divider - Centered between image and content */}
            <div className="ml-16 hidden flex-col items-center justify-center px-6 lg:flex">
              <span className="mb-2 block h-28 w-[2px] rounded-full bg-gradient-to-b from-transparent via-white/40 to-white/60"></span>
              <span className="bg-secondary/70 shadow-secondary/30 mb-2 block h-3 w-3 rounded-full shadow-lg"></span>
              <span className="block h-28 w-[2px] rounded-full bg-gradient-to-b from-white/60 via-white/40 to-transparent"></span>
            </div>

            {/* Content Section */}
            <div className="flex flex-1 flex-col justify-center p-8 lg:p-12">
              <h3 className="text-secondary mb-4 text-2xl font-bold tracking-wide lg:mb-6 lg:text-3xl xl:text-4xl">
                {card.title}
              </h3>

              <p className="font-outfit mb-6 text-base leading-relaxed font-light text-white/90 lg:mb-8 lg:text-lg">
                {card.description}
              </p>

              {/* Service Button */}
              <Link href={card.href}>
                <button className="bg-secondary/10 hover:bg-secondary/20 border-secondary/30 hover:border-secondary text-secondary inline-flex cursor-pointer items-center gap-3 rounded-md border px-6 py-3 backdrop-blur-sm transition-all duration-300 hover:translate-x-2 hover:text-white">
                  <span className="font-medium tracking-wide">Service</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
