import { ChevronDown } from "lucide-react";
import Image from "next/image";

interface CLBannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  backgroundImage?: string;
}

const CLBanner: React.FC<CLBannerProps> = ({
  title = "CORPORATE LAW",
  subtitle = "Providing comprehensive services in business formation, mergers, acquisitions, and corporate governance.",
  buttonText = "Discover",
  onButtonClick,
  backgroundImage = "/images/services/CLaw.avif",
}) => {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      {/* Background Image with Scales of Justice */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt="Corporate Law - Scales of Justice"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        {/* Main Title */}
        <h1 className="mb-8 text-5xl leading-none font-bold tracking-wider text-white drop-shadow-2xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
          {title}
        </h1>

        {/* Decorative Line */}
        <div className="mb-8 flex items-center justify-center">
          <div className="h-px max-w-16 flex-1 bg-white/40"></div>
          <div className="bg-secondary mx-4 h-2 w-2 rounded-full"></div>
          <div className="h-px max-w-16 flex-1 bg-white/40"></div>
        </div>

        {/* Subtitle */}
        <p className="mx-auto mb-12 max-w-4xl text-lg leading-relaxed font-light text-white/95 drop-shadow-lg sm:text-xl md:text-2xl">
          {subtitle}
        </p>

        {/* Discover Button */}
        <button
          onClick={onButtonClick}
          className="group text-secondary hover:text-secondary/80 inline-flex transform flex-col items-center gap-4 transition-all duration-300 hover:scale-105"
        >
          <span className="bg-secondary/10 hover:bg-secondary/20 border-secondary/30 hover:border-secondary rounded-full border px-8 py-3 text-xl font-medium tracking-wider drop-shadow-lg transition-all duration-300 sm:text-2xl">
            {buttonText}
          </span>
          <ChevronDown className="h-6 w-6 drop-shadow-lg transition-transform duration-300 group-hover:translate-y-2 sm:h-8 sm:w-8" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />
    </section>
  );
};

export default CLBanner;
