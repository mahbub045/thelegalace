"use client";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/images/hero/heroimg1.png",
    "/images/hero/heroimg2.png",
    "/images/hero/heroimg3.png",
    "/images/hero/heroimg4.png",
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
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 mb-8">
        <div className="mx-auto w-full">
          {/* Hero Title */}
          <div className="text-center mb-16">
            <h1 className="font-wix-madefor text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none tracking-tight mt-36 mb-12">
              EXCELLENCE IN
              <br />
              LEGAL COUNSEL
            </h1>

            <button className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-secondary text-white px-8 py-3 rounded-2xl hover:bg-white/30 hover:cursor-pointer transition-all duration-300 group">
              <span className="font-medium text-sm tracking-wider mr-3">
                Discover
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats Section */}
          <div className="flex justify-between items-center gap-4 mt-24">
            {/* Description */}
            <div className="lg:col-span-1">
              <p className="text-white/90 text-base leading-relaxed max-w-xs">
                We are dedicated to providing exceptional legal representation
                across a broad spectrum of practice areas.
              </p>
            </div>

            <div className="text-center lg:text-left">
              <div className="text-6xl lg:text-7xl font-bold text-white mb-2 leading-none">
                30
              </div>
              <div className="text-white/80 text-sm font-medium tracking-wider">
                Years of experience
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <span className="block w-[1px] h-16 bg-white rounded-full mb-1"></span>
              <span className="block w-2 h-2 bg-white rounded-full mb-1"></span>
              <span className="block w-[1px] h-16 bg-white rounded-full"></span>
            </div>

            <div className="text-center lg:text-left">
              <div className="text-6xl lg:text-7xl font-bold text-white mb-2 leading-none">
                600
              </div>
              <div className="text-white/80 text-sm font-medium tracking-wider">
                Corporate clients
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <span className="block w-[1px] h-16 bg-white rounded-full mb-1"></span>
              <span className="block w-2 h-2 bg-white rounded-full mb-1"></span>
              <span className="block w-[1px] h-16 bg-white rounded-full"></span>
            </div>

            <div className="text-center lg:text-left">
              <div className="text-6xl lg:text-7xl font-bold text-white mb-2 leading-none">
                1300
              </div>
              <div className="text-white/80 text-sm font-medium tracking-wider">
                Cases won
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      {/* <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20"> */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
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
