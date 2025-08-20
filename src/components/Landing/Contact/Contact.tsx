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
        {/* law library */}
      </div>
      <div className="relative pb-20">
        <Image
          src="/images/contact/law-library.png"
          alt="Elegant law library with wooden shelves and warm lighting"
          className="object-cover w-full h-96 sm:h-[500px] md:h-[700px]"
          width={1200}
          height={900}
        />
        {/* Overlay over image */}
        <div className="absolute inset-0 bg-secondary/20 h-96 sm:h-[500px] md:h-[700px] pointer-events-none" />
      </div>
    </>
  );
};

export default Contact;
