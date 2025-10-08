import React from "react";
import ExpertLegalSolutions from "../../CommonComponents/ExpertLegalSolutions";

const CLAbout: React.FC = () => {
  const keyServiceAreas = [
    {
      title: "Corporate Law:",
      description: "Business formation, mergers, acquisitions, and governance.",
    },
    {
      title: "Real Estate Law:",
      description: "Transactions, leasing agreements, and property disputes.",
    },
    {
      title: "Employment Law:",
      description:
        "Workplace rights, employment contracts, and wrongful termination.",
    },
  ];

  const benefits = [
    "Our attorneys have extensive knowledge and experience in their respective fields.",
    "We provide customized legal solutions tailored to your specific needs.",
    "Our track record of success speaks for itself, ensuring you get the best possible outcome.",
  ];

  return (
    <div>
      {/* Clean Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          {/* About the Service Header */}
          <div className="mb-12 flex items-center justify-center">
            <div className="bg-secondary/60 h-px max-w-24 flex-1"></div>
            <span className="text-secondary/80 mx-6 text-sm font-medium tracking-[0.3em] uppercase">
              About the Service
            </span>
            <div className="bg-secondary/60 h-px max-w-24 flex-1"></div>
          </div>

          {/* Main Title */}
          <h1 className="font-wix-madefor mb-10 text-2xl leading-tight font-bold tracking-wide text-white sm:text-3xl md:text-4xl lg:text-6xl">
            Business formation, governance, <br /> M&A, and regulatory advice
            for <br /> corporate clients.
          </h1>
        </div>
      </section>

      {/* Expert Legal Solutions Section */}
      <ExpertLegalSolutions />

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 text-center">
            {/* Introduction */}
            <div className="mx-auto max-w-4xl">
              <p className="mb-8 text-lg leading-relaxed text-white/90">
                Our legal services are designed to meet a wide range of needs ,
                providing expert guidance and support. With years of experience,
                we offer tailored solutions that ensure the best outcomes for
                our clients.
              </p>
            </div>

            {/* Key Service Areas */}
            <div className="mx-auto max-w-4xl">
              <h3 className="mb-8 text-2xl font-bold tracking-wide text-white uppercase lg:text-3xl">
                Key Service Areas
              </h3>
              <p className="font-outfit mb-8 text-base leading-relaxed text-white/80">
                We offer a broad range of legal expertise to meet the diverse
                needs of our clients. From corporate law and real estate
                transactions to employment disputes and personal injury claims,
                our experienced attorneys provide tailored solutions designed to
                achieve the best possible outcomes. We specialize in various
                areas of law to serve you better. Here are the main areas we
                focus on:
              </p>

              <div className="space-y-6 text-left">
                {keyServiceAreas.map((area, index) => (
                  <div
                    key={index}
                    className="border-secondary/30 border-l-2 pl-6"
                  >
                    <h4 className="mb-2 text-lg font-semibold text-white">
                      {area.title}
                    </h4>
                    <p className="font-outfit leading-relaxed text-white/70">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mx-auto max-w-4xl">
              <h3 className="mb-8 text-2xl font-bold tracking-wide text-white uppercase lg:text-3xl">
                Benefits Of Our Services
              </h3>
              <p className="font-outfit mb-8 text-base leading-relaxed text-white/80">
                Understanding that each client&apos;s situation is unique, we
                take a personalized approach to every case. Our team works
                closely with you to understand your specific needs and develop
                strategies that align with your goals. Choosing our legal
                services comes with numerous advantages. Here are a few key
                benefits:
              </p>

              <div className="space-y-4 text-left">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-secondary mt-3 h-2 w-2 flex-shrink-0 rounded-full"></div>
                    <p className="font-outfit leading-relaxed text-white/80">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="mt-12 rounded-lg border border-white/10 bg-slate-800/50 p-8">
                <p className="text-center text-lg leading-relaxed font-medium text-white/90">
                  By choosing us, you are assured of professional, reliable, and
                  effective legal services that address your unique
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CLAbout;
