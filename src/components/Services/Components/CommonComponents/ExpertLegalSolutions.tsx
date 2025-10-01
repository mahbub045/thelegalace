import Image from "next/image";

const ExpertLegalSolutions: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/services/law-office.jpg"
          alt="Professional law office"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for better text contrast */}
        <div className="from-primary/80 via-primary/50 to-primary/80 absolute inset-0 bg-gradient-to-b" />
      </div>

      {/* Large Typography Overlay */}
      <div className="group relative z-10 cursor-pointer text-center uppercase">
        <h2 className="mb-20 text-5xl leading-none font-bold tracking-wider text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
          <span className="block transition-all duration-700 ease-in-out group-hover:-translate-x-8">
            Expert
          </span>
          <span className="text-secondary block transition-all duration-700 ease-in-out group-hover:translate-x-8">
            Legal
          </span>
          <span className="block transition-all duration-700 ease-in-out group-hover:-translate-x-8">
            Solutions
          </span>
        </h2>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center">
          <div className="h-12 w-px bg-white/40"></div>
          <div className="mt-2 text-xs tracking-widest text-white/60 uppercase">
            Scroll
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertLegalSolutions;
