import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const GetConsultation: React.FC = () => {
  return (
    <section className="relative overflow-hidden mb-10">
      {/* thin decorative borders top/bottom */}
      <div className="absolute left-0 right-0 top-0 h-[1px] bg-white/20" />
      <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-white/20" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-20 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 items-start">
          <div className="col-span-12 mb-8 md:mb-0">
            <h2 className="text-4xl sm:text-5xl md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] text-white leading-12 md:leading-20 lg:leading-30 uppercase tracking-tight">
              The principles
              <br />
              that define our
              <br />
              excellence
            </h2>

            <div className="mt-8 sm:mt-10">
              <Link
                href="#"
                className="inline-flex items-center gap-3 rounded-md border-2 border-secondary px-5 py-3 bg-transparent text-white hover:bg-secondary/20 transition-all duration-300"
                aria-label="Get a consultation"
              >
                <span className="font-medium text-sm sm:text-base">
                  Get a consultation
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetConsultation;
