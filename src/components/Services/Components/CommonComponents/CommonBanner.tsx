import { ChevronDown } from "lucide-react";
import Image from "next/image";

interface CLBannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  backgroundImage?: string;
}

const CommonBanner: React.FC<CLBannerProps> = ({
  title,
  subtitle,
  buttonText,
  onButtonClick,
  backgroundImage,
}) => {
  return (
    <section className="relative flex min-h-[80svh] items-center justify-center overflow-hidden md:min-h-[90svh] lg:min-h-screen">
      {/* Background Image with Scales of Justice */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage || "/default-banner.jpg"}
          alt={title ? `${title} - Banner` : "Service banner background image"}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/45 to-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 text-center md:pt-28">
        {/* Main Title */}
        <h1 className="mx-auto mb-6 inline-block max-w-5xl origin-center transform-gpu text-4xl leading-tight font-extrabold tracking-tight text-white drop-shadow-2xl transition-transform duration-300 ease-out motion-safe:hover:scale-[1.03] sm:text-5xl md:text-6xl md:leading-[1.1] motion-safe:md:hover:scale-[1.06] lg:text-7xl">
          {title}
        </h1>

        {/* Decorative Line */}
        <div className="mb-8 flex items-center justify-center">
          <div className="h-px w-16 bg-white/40 sm:w-24"></div>
          <div className="mx-4 h-2 w-2 rounded-full bg-white"></div>
          <div className="h-px w-16 bg-white/40 sm:w-24"></div>
        </div>

        {/* Subtitle */}
        <p className="font-outfit mx-auto mb-8 max-w-3xl text-base leading-relaxed font-light text-white/95 drop-shadow-lg sm:text-lg md:text-xl">
          {subtitle}
        </p>

        {/* Discover Button */}
        <button
          onClick={onButtonClick}
          className="group text-secondary hover:text-secondary/80 mb-8 inline-flex flex-col items-center gap-1"
        >
          <span className="text-xl font-medium tracking-wider drop-shadow-lg sm:text-2xl">
            {buttonText}
          </span>
          <div className="bg-secondary/80 h-8 w-px transition-all duration-300 hover:scale-105" />
          <ChevronDown className="h-6 w-6 drop-shadow-lg transition-transform duration-300 group-hover:translate-y-2 sm:h-8 sm:w-8" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-black/30 to-transparent" />
    </section>
  );
};

export default CommonBanner;
