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
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Dark starry background */}
      <div className="absolute inset-0 -z-20">
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {/* Starry effect */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-75"></div>
            <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-150"></div>
            <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
            <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>
            <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-700"></div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Gavel/Scales Image positioned above text */}
        <div className="flex justify-center mb-8">
          <div className="relative mt-3 w-64 h-48 sm:w-80 sm:h-60 md:w-96 md:h-72 rounded-2xl overflow-hidden">
            <Image
              src={attorneyImage}
              alt="Legal scales and gavel"
              fill
              className="object-contain rounded-2xl"
              priority
            />
          </div>
        </div>

        {/* Main Title positioned below image */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-white leading-none mb-8 tracking-[0.1em] drop-shadow-2xl">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed mb-12 font-light drop-shadow-lg">
          {subtitle}
        </p>

        {/* Discover Button */}
        <button
          onClick={onButtonClick}
          className="group inline-flex flex-col items-center gap-4 text-secondary hover:text-secondary/80 transition-all duration-300 transform hover:scale-105"
        >
          <span className="text-xl sm:text-2xl font-medium tracking-wider drop-shadow-lg">
            {buttonText}
          </span>
          <div className="w-px h-8 bg-secondary/80" />
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 group-hover:translate-y-2 transition-transform duration-300 drop-shadow-lg" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </section>
  );
};

export default Banner;
