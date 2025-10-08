interface CommonTestimonialProps {
  image: string;
  name: string;
  position: string;
  feedback: string;
}

const CommonTestimonial: React.FC<CommonTestimonialProps> = ({
  image,
  name,
  position,
  feedback,
}) => {
  return (
    <section className="group relative flex min-h-screen items-center justify-start overflow-hidden px-4 md:justify-start md:px-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-in-out group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 md:bg-black/20"></div>
      </div>

      {/* Dark Quote Panel - Responsive */}
      <div className="bg-primary/95 relative z-10 mx-4 max-w-full p-6 backdrop-blur-sm sm:mx-6 sm:max-w-md sm:p-8 md:mr-0 md:ml-10 md:max-w-lg md:p-12 lg:p-14 xl:p-16">
        {/* Testimonial Text */}
        <blockquote className="mb-6 text-2xl leading-relaxed font-light tracking-wide text-white uppercase md:mb-8 md:text-3xl md:leading-tight">
          <span className="text-secondary text-2xl leading-none opacity-90 sm:text-3xl md:mb-0 md:inline md:text-4xl">
            &ldquo;
          </span>
          {feedback}
          <span className="text-secondary text-2xl leading-none opacity-90 sm:text-3xl md:mt-0 md:inline md:text-4xl">
            &rdquo;
          </span>
        </blockquote>

        {/* Attribution */}
        <div className="space-y-1">
          <p className="text-base font-semibold tracking-wider text-white uppercase md:text-lg">
            {name}
          </p>
          <p className="text-xs tracking-wide text-white/70 uppercase">
            {position}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommonTestimonial;
