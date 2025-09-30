"use client";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/images/home/hero/heroimg1.png",
    "/images/home/hero/heroimg2.png",
    "/images/home/hero/heroimg3.png",
    "/images/home/hero/heroimg4.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
        {/* Dark overlay for text readability */}
        <div className="bg-primary/80 absolute inset-0"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mb-8 flex min-h-screen flex-col justify-center px-6">
        <div className="mx-auto w-full">
          {/* Hero Title */}
          <div className="mb-16 text-center">
            <h1 className="font-wix-madefor mt-36 mb-12 text-5xl leading-none font-bold tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              EXCELLENCE IN
              <br />
              LEGAL COUNSEL
            </h1>

            <button className="border-secondary group inline-flex items-center rounded-md border bg-white/20 px-8 py-3 text-white backdrop-blur-sm transition-all duration-300 hover:cursor-pointer hover:bg-white/30">
              <span className="mr-3 text-sm font-medium tracking-wider">
                Discover
              </span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Stats Section */}
          <div className="mt-16 flex flex-col items-center justify-between gap-8 md:mt-24 md:flex-row md:gap-4">
            {/* Description */}
            <div className="mb-8 w-full md:mb-0 md:w-auto">
              <p className="mx-auto max-w-xs text-center text-base leading-relaxed text-white/90 md:mx-0 md:text-left">
                We are dedicated to providing exceptional legal representation
                across a broad spectrum of practice areas.
              </p>
            </div>

            <div className="mb-8 text-center md:mb-0 md:text-left">
              <div className="mb-2 text-5xl leading-none font-bold text-white md:text-6xl lg:text-7xl">
                30
              </div>
              <div className="text-sm font-medium tracking-wider text-white/80">
                Years of experience
              </div>
            </div>

            <div className="hidden flex-col items-center gap-4 md:flex">
              <span className="mb-1 block h-16 w-[1px] rounded-full bg-white"></span>
              <span className="mb-1 block h-2 w-2 rounded-full bg-white"></span>
              <span className="block h-16 w-[1px] rounded-full bg-white"></span>
            </div>

            <div className="mb-8 text-center md:mb-0 md:text-left">
              <div className="mb-2 text-5xl leading-none font-bold text-white md:text-6xl lg:text-7xl">
                600
              </div>
              <div className="text-sm font-medium tracking-wider text-white/80">
                Corporate clients
              </div>
            </div>

            <div className="hidden flex-col items-center gap-4 md:flex">
              <span className="mb-1 block h-16 w-[1px] rounded-full bg-white"></span>
              <span className="mb-1 block h-2 w-2 rounded-full bg-white"></span>
              <span className="block h-16 w-[1px] rounded-full bg-white"></span>
            </div>

            <div className="text-center md:text-left">
              <div className="mb-2 text-5xl leading-none font-bold text-white md:text-6xl lg:text-7xl">
                1300
              </div>
              <div className="text-sm font-medium tracking-wider text-white/80">
                Cases won
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 transform space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === currentImage
                ? "bg-white"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
