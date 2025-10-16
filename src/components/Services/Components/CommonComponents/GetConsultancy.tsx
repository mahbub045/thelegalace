"use client";
import { ArrowRight, Award, Shield, Sparkles, Users } from "lucide-react";
import React, { useState } from "react";

const GetConsultancy: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    email: "",
    message: "",
    privacyPolicy: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const features = [
    {
      icon: Sparkles,
      title: "Experienced professionals",
      description:
        "Our team comprises seasoned attorneys with extensive legal expertise and knowledge.",
    },
    {
      icon: Users,
      title: "Client focused",
      description:
        "We prioritize our clients' needs, providing personalized and effective legal solutions.",
    },
    {
      icon: Shield,
      title: "Proven success",
      description:
        "Our firm has a track record of achieving favorable outcomes in diverse legal cases.",
    },
    {
      icon: Award,
      title: "Comprehensive services",
      description:
        "We offer a wide range of legal services to meet all your legal requirements.",
    },
  ];

  return (
    <section className="from-primary/80 via-primary/60 to-primary/80 flex min-h-screen items-center bg-gradient-to-br py-16 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Side - Contact Form */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-wide text-white sm:text-4xl lg:text-5xl">
                GET A CONSULTANCY
              </h2>
              <p className="font-outfit text-lg text-white/70">
                Fill out the form below to get in touch with us
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="NAME *"
                  className="focus:border-secondary w-full border-b border-white/30 bg-transparent px-0 py-3 text-white placeholder-white/60 transition-colors duration-300 focus:outline-none"
                />
              </div>

              {/* Role Field */}
              <div>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                  placeholder="ROLE *"
                  className="focus:border-secondary w-full border-b border-white/30 bg-transparent px-0 py-3 text-white placeholder-white/60 transition-colors duration-300 focus:outline-none"
                />
              </div>

              {/* Company Field */}
              <div>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  placeholder="COMPANY *"
                  className="focus:border-secondary w-full border-b border-white/30 bg-transparent px-0 py-3 text-white placeholder-white/60 transition-colors duration-300 focus:outline-none"
                />
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="EMAIL *"
                  className="focus:border-secondary w-full border-b border-white/30 bg-transparent px-0 py-3 text-white placeholder-white/60 transition-colors duration-300 focus:outline-none"
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="MESSAGE"
                  className="focus:border-secondary w-full resize-none border-b border-white/30 bg-transparent px-0 py-3 text-white placeholder-white/60 transition-colors duration-300 focus:outline-none"
                />
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="mt-8 flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacyPolicy"
                  name="privacyPolicy"
                  checked={formData.privacyPolicy}
                  onChange={handleInputChange}
                  className="text-secondary focus:ring-secondary mt-1 h-4 w-4 cursor-pointer rounded border border-white/30 bg-transparent focus:ring-2"
                />
                <label
                  htmlFor="privacyPolicy"
                  className="cursor-pointer text-sm leading-relaxed text-white/70"
                >
                  I agree to the privacy policy
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group bg-secondary hover:bg-secondary/90 mt-4 inline-flex cursor-pointer items-center gap-3 rounded-md px-8 py-4 font-semibold text-slate-900"
              >
                <span className="tracking-wide">SEND FORM</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </form>
          </div>

          {/* Decorative Divider - Between form and features */}
          <div className="z-10 hidden flex-col items-center justify-center lg:absolute lg:top-0 lg:bottom-0 lg:left-1/2 lg:flex lg:-translate-x-1/2">
            <span className="mb-4 block w-[1px] flex-1 rounded-full bg-gradient-to-b from-transparent via-white/40 to-white/60"></span>
            <span className="mb-4 block h-2 w-2 flex-shrink-0 rounded-full bg-white shadow-lg"></span>
            <span className="block w-[1px] flex-1 rounded-full bg-gradient-to-b from-white/60 via-white/40 to-transparent"></span>
          </div>

          {/* Right Side - Features */}
          <div className="space-y-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-secondary/20 flex h-12 w-12 items-center justify-center rounded-lg">
                      <IconComponent className="text-secondary h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold tracking-wide text-white">
                      {feature.title}
                    </h3>
                    <p className="font-outfit leading-relaxed text-white/70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetConsultancy;
