import { ArrowRightToLine } from "lucide-react";
import Image from "next/image";

const Contact: React.FC = () => {
  const ourGoals = [
    {
      id: "mission",
      image: "/images/home/contact/mission.png",
      alt: "Mission - Legal professionals in discussion",
      title: "Our Mission",
      description:
        "To provide exceptional legal services with unwavering integrity, ensuring our clients receive the highest quality representation while fostering justice and fairness in every case we handle.",
    },
    {
      id: "vision",
      image: "/images/home/contact/vision.png",
      alt: "Vision - Modern law office with city view",
      title: "Our Vision",
      description:
        "To be the premier legal firm recognized for excellence, innovation, and client-centered approach, setting new standards in legal practice and making justice accessible to all.",
    },
    {
      id: "values",
      image: "/images/home/contact/values.png",
      alt: "Values - Team collaboration and ethics",
      title: "Our Values",
      description:
        "Integrity, Excellence, and Compassion guide every decision we make. We believe in building lasting relationships based on trust, delivering results through dedication, and treating every client with respect and understanding.",
    },
  ];

  return (
    <>
      <div className="relative overflow-hidden px-4 py-8 text-white sm:px-6 sm:py-12 md:px-10 md:py-16 lg:px-20">
        <div className="mb-8 flex flex-col sm:mb-12 md:mb-16 lg:flex-row lg:gap-16 xl:gap-56">
          {/* Contact Header */}
          <div className="mt-6 mb-6 flex items-start sm:mt-8 lg:mt-12">
            <span className="text-sm font-medium tracking-widest sm:text-base lg:text-xl">
              Contact
            </span>
            <ArrowRightToLine className="text-link ml-2 h-5 w-5 sm:ml-3 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
          </div>
          {/* Content Area */}
          <div className="flex-1 px-10">
            <h1 className="mb-8 text-2xl leading-tight font-bold uppercase sm:mb-12 sm:text-3xl md:mb-16 md:text-4xl lg:text-5xl xl:text-6xl">
              Our company has built a reputation as a trusted legal partner
            </h1>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 md:mt-16 lg:mt-20">
              <div className="relative order-2 sm:order-1">
                <Image
                  src="/images/home/contact/law-office.png"
                  alt="Elegant law office interior with wooden furniture and warm lighting"
                  width={500}
                  height={300}
                  className="h-48 w-full rounded-md object-cover sm:h-56 md:h-64"
                />
                {/* Overlay over image */}
                <div className="bg-secondary/30 pointer-events-none absolute inset-0 rounded-md" />
              </div>
              <div className="font-outfit order-1 flex flex-col justify-center sm:order-2">
                <p className="mb-4 text-sm leading-relaxed sm:text-base">
                  Our core values of integrity, dedication, and results guide
                  everything we do. We believe in building strong, lasting
                  relationships with our clients based on trust and mutual
                  respect.
                </p>
                <p className="text-sm leading-relaxed sm:text-base">
                  Our attorneys are not only legal experts but also passionate
                  advocates who are committed to making a positive impact
                  through their work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* law library */}
      <div className="relative mb-8 h-[400px] overflow-hidden sm:mb-12 sm:h-[500px] md:mb-16 md:h-[600px] lg:h-[700px]">
        <Image
          src="/images/home/contact/law-library.png"
          alt="Elegant law library with wooden shelves and warm lighting"
          className="h-full w-full object-cover shadow-2xl"
          width={1200}
          height={900}
          priority
        />
        <div className="from-primary/95 via-primary/10 to-primary/95 absolute inset-0 bg-gradient-to-t" />
        {/* Overlay */}
        <div className="pointer-events-none absolute inset-0">
          {/* Diagonal lines */}
          <div
            className="absolute h-full w-px rotate-45 transform bg-white/50"
            style={{ left: "10%" }}
          />
          <div
            className="absolute h-full w-px rotate-45 transform bg-white/50"
            style={{ left: "20%" }}
          />
          <div
            className="absolute h-full w-px -rotate-45 transform bg-white/50"
            style={{ right: "10%" }}
          />
          <div
            className="absolute h-full w-px -rotate-45 transform bg-white/50"
            style={{ right: "20%" }}
          />
        </div>
        {/* Quote overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative mx-4 max-w-xs rounded-lg bg-[#1a3a42]/90 p-4 backdrop-blur-sm sm:max-w-md sm:p-6 md:max-w-lg md:p-8 lg:max-w-2xl lg:p-12">
            {/* Decorative quote marks */}
            <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4">
              <svg
                width="20"
                height="15"
                viewBox="0 0 32 24"
                fill="none"
                className="text-amber-300 sm:h-[18px] sm:w-6 md:h-6 md:w-8"
              >
                <path
                  d="M8 0L0 12H4L8 8V24H16V0H8ZM24 0L16 12H20L24 8V24H32V0H24Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="absolute -right-2 -bottom-2 rotate-180 sm:-right-3 sm:-bottom-3 md:-right-4 md:-bottom-4">
              <svg
                width="20"
                height="15"
                viewBox="0 0 32 24"
                fill="none"
                className="text-amber-300 sm:h-[18px] sm:w-6 md:h-6 md:w-8"
              >
                <path
                  d="M8 0L0 12H4L8 8V24H16V0H8ZM24 0L16 12H20L24 8V24H32V0H24Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <blockquote className="text-center text-white">
              <p className="mb-3 text-sm leading-tight sm:mb-4 sm:text-base md:mb-6 md:text-xl lg:text-2xl xl:text-3xl">
                &quot;EXCEPTIONAL LEGAL REPRESENTATION, DISTINCTLY YOURS.&quot;
              </p>
              <footer className="font-outfit text-xs text-white/80 sm:text-sm">
                Sarah J. Williams / senior partner
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
      {/* contact last part */}
      <div className="relative overflow-hidden px-4 py-8 text-white sm:px-6 sm:py-12 md:px-10 md:py-16 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:gap-16 xl:gap-24 2xl:gap-32">
          {/* Contact Header - Left Side */}
          <div className="mb-8 flex items-start lg:mb-0 lg:w-1/4 xl:w-1/5">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium tracking-widest sm:text-base lg:text-lg xl:text-xl">
                Contact
              </span>
              <ArrowRightToLine className="text-link ml-2 h-5 w-5 sm:h-6 sm:w-6 lg:ml-0 lg:h-8 lg:w-8" />
            </div>
          </div>

          {/* Mission, Vision, Values Content - Right Side */}
          <div className="w-full lg:w-[98%]">
            <div className="space-y-6 sm:space-y-8">
              {ourGoals.map((item, index) => (
                <div key={item.id}>
                  <div className="mb-2 flex justify-between">
                    <h3 className="text-secondary text-base font-bold tracking-wide uppercase sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                      {index + 1}.
                    </h3>
                    <h3 className="text-secondary text-base font-bold tracking-wide uppercase sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-4 border-t-2 border-white/20 pt-6 sm:flex-row sm:items-start sm:gap-6 md:gap-8 md:pt-8 lg:gap-10 xl:gap-12">
                    <div className="sm:w-1/3 md:w-2/5 lg:w-1/3 xl:w-2/5">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        width={400}
                        height={280}
                        className="h-40 w-full rounded-md object-cover sm:h-32 md:h-36 lg:h-40 xl:h-44"
                      />
                    </div>
                    <div className="sm:w-2/3 md:w-3/5 lg:w-2/3 xl:w-3/5">
                      <p className="font-outfit text-xs leading-relaxed text-white/90 sm:text-sm md:text-base lg:text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
