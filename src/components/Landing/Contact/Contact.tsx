import { ArrowRightToLine } from "lucide-react";
import Image from "next/image";

const Contact: React.FC = () => {
  const ourGoals = [
    {
      id: "mission",
      image: "/images/contact/mission.png",
      alt: "Mission - Legal professionals in discussion",
      title: "Our Mission",
      description:
        "To provide exceptional legal services with unwavering integrity, ensuring our clients receive the highest quality representation while fostering justice and fairness in every case we handle.",
    },
    {
      id: "vision",
      image: "/images/contact/vision.png",
      alt: "Vision - Modern law office with city view",
      title: "Our Vision",
      description:
        "To be the premier legal firm recognized for excellence, innovation, and client-centered approach, setting new standards in legal practice and making justice accessible to all.",
    },
    {
      id: "values",
      image: "/images/contact/values.png",
      alt: "Values - Team collaboration and ethics",
      title: "Our Values",
      description:
        "Integrity, Excellence, and Compassion guide every decision we make. We believe in building lasting relationships based on trust, delivering results through dedication, and treating every client with respect and understanding.",
    },
  ];

  return (
    <>
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-12 md:py-16 text-white relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:gap-16 xl:gap-56 mb-8 sm:mb-12 md:mb-16">
          {/* Contact Header */}
          <div className="flex items-start mt-6 sm:mt-8 lg:mt-12 mb-6">
            <span className="text-sm sm:text-base lg:text-xl font-medium tracking-widest">
              Contact
            </span>
            <ArrowRightToLine className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-link" />
          </div>
          {/* Content Area */}
          <div className="flex-1 px-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight uppercase mb-8 sm:mb-12 md:mb-16">
              Our company has built a reputation as a trusted legal partner
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
              <div className="relative order-2 sm:order-1">
                <Image
                  src="/images/contact/law-office.png"
                  alt="Elegant law office interior with wooden furniture and warm lighting"
                  width={500}
                  height={300}
                  className="rounded-md object-cover w-full h-48 sm:h-56 md:h-64"
                />
                {/* Overlay over image */}
                <div className="absolute inset-0 bg-secondary/30 rounded-md pointer-events-none" />
              </div>
              <div className="font-outfit flex flex-col justify-center order-1 sm:order-2">
                <p className="text-sm sm:text-base leading-relaxed mb-4">
                  Our core values of integrity, dedication, and results guide
                  everything we do. We believe in building strong, lasting
                  relationships with our clients based on trust and mutual
                  respect.
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
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
      <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden mb-8 sm:mb-12 md:mb-16">
        <Image
          src="/images/contact/law-library.png"
          alt="Elegant law library with wooden shelves and warm lighting"
          className="object-cover w-full h-full shadow-2xl"
          width={1200}
          height={900}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/10 to-primary/95"/>
        {/* Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Diagonal lines */}
          <div
            className="absolute w-px h-full bg-white/50 transform rotate-45"
            style={{ left: "10%" }}
          />
          <div
            className="absolute w-px h-full bg-white/50 transform rotate-45"
            style={{ left: "20%" }}
          />
          <div
            className="absolute w-px h-full bg-white/50 transform -rotate-45"
            style={{ right: "10%" }}
          />
          <div
            className="absolute w-px h-full bg-white/50 transform -rotate-45"
            style={{ right: "20%" }}
          />
        </div>
        {/* Quote overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative bg-[#1a3a42]/90 backdrop-blur-sm p-4 sm:p-6 md:p-8 lg:p-12 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-4 rounded-lg">
            {/* Decorative quote marks */}
            <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4">
              <svg
                width="20"
                height="15"
                viewBox="0 0 32 24"
                fill="none"
                className="text-amber-300 sm:w-6 sm:h-[18px] md:w-8 md:h-6"
              >
                <path
                  d="M8 0L0 12H4L8 8V24H16V0H8ZM24 0L16 12H20L24 8V24H32V0H24Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 md:-bottom-4 md:-right-4 rotate-180">
              <svg
                width="20"
                height="15"
                viewBox="0 0 32 24"
                fill="none"
                className="text-amber-300 sm:w-6 sm:h-[18px] md:w-8 md:h-6"
              >
                <path
                  d="M8 0L0 12H4L8 8V24H16V0H8ZM24 0L16 12H20L24 8V24H32V0H24Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <blockquote className="text-center text-white">
              <p className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl leading-tight mb-3 sm:mb-4 md:mb-6">
                &quot;EXCEPTIONAL LEGAL REPRESENTATION, DISTINCTLY YOURS.&quot;
              </p>
              <footer className="font-outfit text-xs sm:text-sm text-white/80">
                Sarah J. Williams / senior partner
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
      {/* contact last part */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-12 md:py-16 text-white relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:gap-16 xl:gap-24 2xl:gap-32">
          {/* Contact Header - Left Side */}
          <div className="flex items-start mb-8 lg:mb-0 lg:w-1/4 xl:w-1/5">
            <div className="flex items-center gap-4">
              <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-medium tracking-widest">
                Contact
              </span>
              <ArrowRightToLine className="ml-2 lg:ml-0 w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-link" />
            </div>
          </div>

          {/* Mission, Vision, Values Content - Right Side */}
          <div className="w-full lg:w-[98%]">
            <div className="space-y-6 sm:space-y-8">
              {ourGoals.map((item, index) => (
                <div key={item.id}>
                  <div className="flex justify-between mb-2">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-secondary uppercase tracking-wide">
                      {index + 1}.
                    </h3>
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-secondary uppercase tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 pt-6 md:pt-8 border-t-2 border-white/20">
                    <div className="sm:w-1/3 md:w-2/5 lg:w-1/3 xl:w-2/5">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        width={400}
                        height={280}
                        className="rounded-md object-cover w-full h-40 sm:h-32 md:h-36 lg:h-40 xl:h-44"
                      />
                    </div>
                    <div className="sm:w-2/3 md:w-3/5 lg:w-2/3 xl:w-3/5">
                      <p className="font-outfit text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-white/90">
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
