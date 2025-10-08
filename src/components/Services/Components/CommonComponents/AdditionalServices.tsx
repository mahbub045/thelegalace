import { ArrowRight } from "lucide-react";
import Link from "next/link";

const AdditionalServices: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Corporate & Foreign Direct Investment",
      description:
        "Business formation, governance, M&A, and regulatory advice for corporate clients.",
      image: "/images/services/CFD.avif",
      buttonText: "Service",
      href: "/services/corporate-and-foreign-direct-investment",
    },
    {
      id: 2,
      title: "Taxation & VAT",
      description:
        "Tax planning, compliance, and dispute resolution for businesses.",
      image: "/images/services/TV.avif",
      buttonText: "Service",
      href: "/services/taxation-and-vat",
    },
    {
      id: 3,
      title: "Banking and Financial Matters",
      description:
        "Advising on banking regulations, compliance, and financial transactions.",
      image: "/images/services/BFM.avif",
      buttonText: "Service",
      href: "/services/banking-and-financial-matters",
    },
    {
      id: 4,
      title: "Business Setup in Bangladesh",
      description:
        "Expert legal guidance for setting up and operating a business in Bangladesh.",
      image: "/images/services/BSB.avif",
      buttonText: "Service",
      href: "/services/business-setup-in-bangladesh",
    },
  ];

  return (
    <section className="px-6 py-16">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center">
            <div className="bg-secondary h-px w-16"></div>
            <span className="text-secondary mx-4 text-sm font-medium tracking-wider uppercase">
              NEXT
            </span>
            <div className="bg-secondary h-px w-16"></div>
          </div>
          <h2 className="text-3xl font-light tracking-wide text-white md:text-4xl">
            ADDITIONAL SERVICES
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative h-80 overflow-hidden bg-cover bg-center bg-no-repeat lg:h-[500px]"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/20"></div>

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col justify-end p-8">
                <h3 className="mb-3 text-xl font-semibold tracking-wide text-white">
                  {service.title}
                </h3>
                <p className="font-outfit mb-6 line-clamp-2 text-sm leading-relaxed text-white/90">
                  {service.description}
                </p>
                {/* Service Button */}
                <Link href={service.href}>
                  <button className="group bg-secondary/10 hover:bg-secondary/20 border-secondary/30 hover:border-secondary text-secondary inline-flex cursor-pointer items-center gap-2 rounded-md border px-4 py-2 backdrop-blur-sm duration-300 hover:text-white sm:gap-3 sm:px-6 sm:py-3">
                    <span className="text-sm font-medium tracking-wide sm:text-base">
                      Service
                    </span>
                    <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-2 sm:h-4 sm:w-4" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
