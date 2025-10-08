import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const GetConsultation: React.FC = () => {
  return (
    <section className="relative mb-10 overflow-hidden">
      {/* thin decorative borders top/bottom */}
      <div className="absolute top-0 right-0 left-0 h-[1px] bg-white/20" />
      <div className="absolute right-0 bottom-0 left-0 h-[1px] bg-white/20" />

      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-8 sm:py-24 lg:px-20 lg:py-32">
        <div className="grid grid-cols-1 items-start md:grid-cols-12">
          <div className="group col-span-12 mb-8 text-center md:mb-0">
            <h2 className="text-4xl leading-12 tracking-tight text-white uppercase sm:text-5xl md:text-[4.5rem] md:leading-20 lg:text-[5.5rem] lg:leading-30 xl:text-[6.5rem]">
              <span className="block transition-all duration-700 ease-in-out group-hover:-translate-x-8">
                The principles
              </span>
              <span className="text-secondary block transition-all duration-700 ease-in-out group-hover:translate-x-8">
                that define our
              </span>
              <span className="block transition-all duration-700 ease-in-out group-hover:-translate-x-8">
                excellence
              </span>
            </h2>

            <div className="mt-8 sm:mt-10">
              <Link
                href="#"
                className="border-secondary hover:bg-secondary/20 inline-flex items-center gap-3 rounded-md border-2 bg-transparent px-5 py-3 text-white transition-all duration-300"
                aria-label="Get a consultation"
              >
                <span className="text-sm font-medium sm:text-base">
                  Get a consultation
                </span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetConsultation;
