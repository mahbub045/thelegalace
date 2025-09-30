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
  backgroundImage = "/images/services/banner-bg.jpg",
  attorneyImage = "/images/services/attorney-professional.jpg",
}) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <div className="w-full h-full bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
      </div>

      {/* Attorney Image - Positioned in upper portion */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 -z-10">
        <div className="relative w-80 h-96 sm:w-96 sm:h-[450px] rounded-lg overflow-hidden">
          <Image
            src={attorneyImage}
            alt="Professional attorney in office"
            fill
            className="object-cover"
            priority
          />
          {/* Subtle overlay to blend with background */}
          <div className="absolute inset-0 bg-primary/20" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Main Title */}
        <h1 className="text-8xl sm:text-9xl md:text-[12rem] lg:text-[14rem] font-bold text-white leading-none mb-8 tracking-wider">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
          {subtitle}
        </p>

        {/* Discover Button */}
        <button
          onClick={onButtonClick}
          className="group inline-flex flex-col items-center gap-3 text-secondary hover:text-secondary/80 transition-colors duration-300"
        >
          <span className="text-xl sm:text-2xl font-medium tracking-wider">
            {buttonText}
          </span>
          <div className="w-px h-8 bg-secondary/60" />
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </section>
  );
};

export default Banner;
