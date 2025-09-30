import { ChevronDown } from "lucide-react";
import Image from "next/image";

interface ServicesBannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  backgroundImage?: string;
  attorneyImage?: string;
}

const Banner: React.FC<ServicesBannerProps> = ({
  title = "SERVICES",
  subtitle = "Our team of experienced attorneys is equipped to handle everything from corporate law to environmental disputes.",
  buttonText = "Discover",
  onButtonClick,
  attorneyImage = "/images/services/attorney-professional.jpg",
}) => {
  return (
    <section className="relative mt-14 flex items-center justify-center overflow-hidden sm:mt-16 md:mt-18 lg:mt-20">
      {/* Dark starry background */}
      <div className="absolute inset-0 -z-20">
        <div className="from-primary/80 via-primary/60 to-primary/80 h-full w-full bg-gradient-to-br">
          {/* Starry effect */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-10 h-1 w-1 animate-pulse rounded-full bg-white"></div>
            <div className="absolute top-20 right-20 h-1 w-1 animate-pulse rounded-full bg-white delay-75"></div>
            <div className="absolute top-1/3 left-1/4 h-1 w-1 animate-pulse rounded-full bg-white delay-150"></div>
            <div className="absolute right-1/3 bottom-1/3 h-1 w-1 animate-pulse rounded-full bg-white delay-300"></div>
            <div className="absolute top-1/2 left-1/6 h-1 w-1 animate-pulse rounded-full bg-white delay-500"></div>
            <div className="absolute bottom-20 left-1/3 h-1 w-1 animate-pulse rounded-full bg-white delay-700"></div>

            {/* Additional stars */}
            <div className="absolute top-16 left-1/2 h-1 w-1 animate-pulse rounded-full bg-white delay-100"></div>
            <div className="absolute top-32 left-3/4 h-1 w-1 animate-pulse rounded-full bg-white delay-200"></div>
            <div className="absolute top-2/3 right-1/4 h-1 w-1 animate-pulse rounded-full bg-white delay-400"></div>
            <div className="absolute bottom-1/4 left-1/5 h-1 w-1 animate-pulse rounded-full bg-white delay-600"></div>
            <div className="absolute top-3/4 right-1/6 h-1 w-1 animate-pulse rounded-full bg-white delay-800"></div>
            <div className="absolute right-1/2 bottom-32 h-1 w-1 animate-pulse rounded-full bg-white delay-1000"></div>
            <div className="absolute top-1/4 right-1/5 h-1 w-1 animate-pulse rounded-full bg-white delay-300"></div>
            <div className="absolute bottom-1/2 left-2/3 h-1 w-1 animate-pulse rounded-full bg-white delay-900"></div>
            <div className="absolute top-40 right-1/3 h-1 w-1 animate-pulse rounded-full bg-white delay-450"></div>
            <div className="absolute bottom-40 left-1/2 h-1 w-1 animate-pulse rounded-full bg-white delay-650"></div>

            {/* Smaller twinkling stars */}
            <div className="absolute top-24 left-1/3 h-0.5 w-0.5 animate-pulse rounded-full bg-white/60 delay-350"></div>
            <div className="absolute top-1/5 right-1/4 h-0.5 w-0.5 animate-pulse rounded-full bg-white/60 delay-750"></div>
            <div className="absolute right-1/3 bottom-1/5 h-0.5 w-0.5 animate-pulse rounded-full bg-white/60 delay-550"></div>
            <div className="absolute top-3/5 left-1/4 h-0.5 w-0.5 animate-pulse rounded-full bg-white/60 delay-850"></div>
            <div className="absolute bottom-1/6 left-3/4 h-0.5 w-0.5 animate-pulse rounded-full bg-white/60 delay-250"></div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        {/* Gavel/Scales Image positioned above text */}
        <div className="mb-8 flex justify-center">
          <div className="group relative mt-3 h-48 w-64 overflow-hidden rounded-2xl sm:h-60 sm:w-80 md:h-72 md:w-96">
            <Image
              src={attorneyImage}
              alt="Legal scales and gavel"
              fill
              className="rounded-2xl object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
              priority
            />
          </div>
        </div>

        {/* Main Title positioned below image */}
        <h1 className="mb-8 text-6xl leading-none font-bold tracking-[0.1em] text-white drop-shadow-2xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="font-outfit mx-auto mb-12 max-w-4xl text-lg leading-relaxed font-light text-white/95 drop-shadow-lg sm:text-xl md:text-2xl">
          {subtitle}
        </p>

        {/* Discover Button */}
        <button
          onClick={onButtonClick}
          className="group text-secondary hover:text-secondary/80 mb-8 inline-flex transform flex-col items-center gap-1"
        >
          <span className="text-xl font-medium tracking-wider drop-shadow-lg sm:text-2xl">
            {buttonText}
          </span>
          <div className="bg-secondary/80 h-8 w-px transition-all duration-300 hover:scale-105" />
          <ChevronDown className="h-6 w-6 drop-shadow-lg transition-transform duration-300 group-hover:translate-y-2 sm:h-8 sm:w-8" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />
    </section>
  );
};

export default Banner;
