"use client";

import { ArrowLeft, Construction, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/95 to-primary/90 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center text-white">
        {/* 404 Large Text */}
        <div className="mb-8">
          <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-bold text-white/20 leading-none">
            404
          </h1>
        </div>

        {/* Construction Icon */}
        <div className="mb-6">
          <Construction className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-secondary" />
        </div>

        {/* Main Message */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
          Page Not Found
        </h2>

        {/* Under Development Message */}
        <div className="mb-8">
          <p className="text-lg sm:text-xl text-white/90 mb-4">
            This page is currently
          </p>
          <div className="inline-block bg-secondary/20 border border-secondary/30 rounded-lg px-6 py-3">
            <span className="text-2xl sm:text-3xl font-bold text-secondary uppercase tracking-wide">
              Under Development
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-white/80 mb-12 max-w-lg mx-auto leading-relaxed">
          We&apos;re working hard to bring you this page. Please check back soon
          or return to our homepage.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-secondary hover:bg-secondary/90 text-primary font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            <Home className="w-5 h-5" />
            Go to Homepage
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-3 border border-white/30 hover:border-white/50 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* Footer Text */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} The Legal Ace. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
