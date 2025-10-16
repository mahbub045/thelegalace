import React from "react";
import ExpertLegalSolutions from "../../CommonComponents/ExpertLegalSolutions";

const CFLAbout: React.FC = () => {
  const keyServiceAreas = [
    {
      title: "Open Sectors for Investment:",
      description:
        "Bangladesh allows 100% foreign ownership in most industries, including manufacturing, IT, energy, power, telecommunications, and export-oriented industries. Certain restricted sectors, such as defense and nuclear energy, remain off-limits.",
    },
    {
      title: "Incentives for Investors:",
      description:
        "Generous tax holidays, reduced import duties on raw materials and machinery, VAT exemptions in specific sectors, and full repatriation of dividends and profits make Bangladesh attractive for foreign investors.",
    },
    {
      title: "Investment Protection:",
      description:
        "Legal safeguards ensure protection from expropriation and guarantee free transfer of capital, earnings, and dividends.",
    },
    {
      title: "One-Stop Service (OSS):",
      description:
        "To reduce bureaucratic delays, Bangladesh introduced the One-Stop Service Act, which simplifies licensing, registration, and other approval processes for foreign investors.",
    },
    {
      title: "Dispute Resolution:",
      description:
        "International arbitration mechanisms are recognized, ensuring fair settlement of disputes between investors and the state.",
    },
  ];

  const challenges = [
    "Infrastructure gaps – ongoing improvements, but challenges remain.",
    "Bureaucratic procedures – despite OSS reforms, navigating regulations may still require local expertise.",
    "Political and regulatory risks – common in emerging markets, requiring updated compliance strategies.",
    "Market competition – rising foreign interest has increased competition in key sectors.",
  ];

  const services = [
    "Structuring cross-border investments",
    "Advising on tax, VAT, and customs implications",
    "Ensuring compliance with FDI laws and sector-specific regulations",
    "Drafting and reviewing commercial contracts and joint venture agreements",
    "Representing clients in dispute resolution and arbitration",
  ];

  return (
    <div>
      {/* Clean Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          {/* About the Service Header */}
          <div className="mb-12 flex items-center justify-center">
            <div className="bg-secondary/60 h-px max-w-24 flex-1"></div>
            <span className="text-secondary/80 mx-6 text-2xl font-medium tracking-[0.3em] uppercase">
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
          <div className="text-centers space-y-12">
            {/* Introduction */}
            <div className="mx-auto max-w-4xl">
              <p className="mb-8 text-lg leading-relaxed text-white/90">
                Foreign Direct Investment (FDI) plays a critical role in
                Bangladesh&apos;s economic growth, shaping its industrial and
                commercial landscape. <b>The Legal Ace - Law Firm</b>, one of
                the top corporate law firms in Bangladesh, provides
                comprehensive legal solutions to local and international
                investors navigating FDI regulations and policies.
                <br />
                Bangladesh&apos;s strategic geographic location, rapidly
                expanding consumer base, and governmentled economic reforms have
                made it a prime destination for global investors. To facilitate
                this, the government has introduced a robust{" "}
                <b>Foreign Direct Investment Law</b> , designed to attract and
                protect investors while fostering sustainable economic growth.
              </p>
            </div>
            {/* Key Service Areas */}
            <div className="mx-auto max-w-4xl">
              <h3 className="mb-8 text-2xl font-bold tracking-wide text-white uppercase lg:text-3xl">
                Understanding Foreign Direct Investment (FDI) Policy in
                Bangladesh
              </h3>
              <p className="font-outfit mb-8 text-base leading-relaxed text-white/80">
                The Government of Bangladesh recognizes FDI as a driving force
                behind industrialization, technology transfer, and job creation.
                As part of its investment-friendly approach, Bangladesh offers
                incentives and protections to ensure that foreign investors can
                operate in a transparent, secure, and profitable environment.
              </p>

              <h5 className="mb-3 text-xl">
                Key highlights of the FDI framework include:
              </h5>

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
                Benefits of FDI in Bangladesh
              </h3>
              <p className="font-outfit mb-8 text-base leading-relaxed text-white/80">
                FDI in Bangladesh not only provides investors with access to a
                fast-growing economy but also supports technology transfer,
                knowledge sharing, and collaboration between local and foreign
                enterprises. With improvements in infrastructure, a rising
                middle class, and a pro-investment government policy, the
                country continues to be a hub for global business expansion.
              </p>

              <h3 className="mb-2 text-2xl font-bold tracking-wide text-white uppercase lg:text-3xl">
                Challenges and Considerations
              </h3>
              <p className="mb-6 text-lg">
                While Bangladesh offers numerous opportunities, potential
                investors should carefully consider:
              </p>

              <div className="space-y-4 text-left">
                {challenges.map((challenge, index) => {
                  const [beforeHyphen, afterHyphen] = challenge.split(" – ");
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="mt-3 h-2 w-2 flex-shrink-0 rounded-full bg-white"></div>
                      <p className="font-outfit leading-relaxed text-white/80">
                        <span className="text-xl font-semibold text-white">
                          {beforeHyphen}
                        </span>
                        {afterHyphen && (
                          <>
                            <span className="text-white/60"> – </span>
                            <span>{afterHyphen}</span>
                          </>
                        )}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Why Choose Section */}
            <div className="mx-auto max-w-4xl">
              <h3 className="mb-8 text-2xl font-bold tracking-wide text-white uppercase lg:text-3xl">
                Why Choose The Legal Ace Law Firm?
              </h3>
              <p className="font-outfit mb-8 text-base leading-relaxed text-white/80">
                At <b>The Legal Ace Law Firm</b>, we specialize in guiding
                multinational corporations, joint ventures, and individual
                investors through Bangladesh&apos;s corporate and FDI legal
                landscape. Our services include:
              </p>
              <div className="space-y-4 text-left">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-3 h-2 w-2 flex-shrink-0 rounded-full bg-white"></div>
                    <p className="font-outfit text-lg leading-relaxed text-white/80">
                      {service}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* Call to Action */}
            <div className="mt-12 rounded-lg border border-white/10 bg-slate-800/50 p-8 transition-transform duration-500 hover:scale-105">
              <p className="mb-2 text-lg leading-relaxed font-medium text-white/90">
                Bangladesh&apos;s Foreign Direct Investment Law reflects the
                nation&apos;s commitment to fostering an investment-friendly
                climate and unlocking opportunities across diverse sectors. With
                the right legal guidance, foreign investors can maximize
                benefits while mitigating risks.
              </p>
              <p className="mt-2 text-lg leading-relaxed font-medium text-white/90">
                <b>The Legal Ace Law Firm</b> is committed to supporting
                investors at every stage — from market entry and regulatory
                compliance to dispute resolution — ensuring that your business
                thrives in Bangladesh&apos;s dynamic economy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CFLAbout;
