import { ArrowRightToLine } from "lucide-react";
import Image from "next/image";

const Contact: React.FC = () => {
  return (
    <>
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-12 md:py-16 text-white relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:gap-16 xl:gap-56 mb-8 sm:mb-12 md:mb-16">
          {/* Contact Header */}
          <div className="flex items-start mt-6 mb-6 sm:mb-8 lg:mb-12">
            <span className="text-base sm:text-lg lg:text-2xl font-medium tracking-widest">
              Contact
            </span>
            <ArrowRightToLine className="ml-2 sm:ml-3 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-link" />
          </div>
          {/* Content Area */}
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight uppercase">
              Our company has built a reputation as a trusted legal partner
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16 md:mt-20">
              <div className="relative">
                <Image
                  src="/images/contact/law-office.png"
                  alt="Elegant law office interior with wooden furniture and warm lighting"
                  width={500}
                  height={300}
                  className="rounded-md object-cover w-full h-40 sm:h-48 md:h-64"
                />
                {/* Overlay over image */}
                <div className="absolute inset-0 bg-secondary/30 rounded-md pointer-events-none" />
              </div>
              <div className="font-outfit flex flex-col justify-center">
                <p>
                  Our core values of integrity, dedication, and results guide
                  everything we do. We believe in building strong, lasting
                  relationships with our clients based on trust and mutual
                  respect.
                </p>
                <br />
                <p>
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
      <div className="relative h-[700px] overflow-hidden mb-8 sm:mb-12 md:mb-16">
        <Image
          src="/images/contact/law-library.png"
          alt="Elegant law library with wooden shelves and warm lighting"
          className="object-cover w-full h-full"
          width={1200}
          height={900}
          priority
        />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />{" "}
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
        <div className="absolute inset-0 flex items-center justify-center h-96 sm:h-[500px] md:h-[700px]">
          <div className="relative bg-[#1a3a42]/90 backdrop-blur-sm p-8 sm:p-12 max-w-2xl mx-4 rounded-lg">
            {/* Decorative quote marks */}
            <div className="absolute -top-4 -left-4">
              <svg
                width="32"
                height="24"
                viewBox="0 0 32 24"
                fill="none"
                className="text-amber-300"
              >
                <path
                  d="M8 0L0 12H4L8 8V24H16V0H8ZM24 0L16 12H20L24 8V24H32V0H24Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="absolute -bottom-4 -right-4 rotate-180">
              <svg
                width="32"
                height="24"
                viewBox="0 0 32 24"
                fill="none"
                className="text-amber-300"
              >
                <path
                  d="M8 0L0 12H4L8 8V24H16V0H8ZM24 0L16 12H20L24 8V24H32V0H24Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <blockquote className="text-center text-white">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-6">
                &quot;EXCEPTIONAL LEGAL REPRESENTATION, DISTINCTLY YOURS.&quot;
              </p>
              <footer className="text-xs text-white/80">
                Sarah J. Williams / senior partner
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
