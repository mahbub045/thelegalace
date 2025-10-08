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
    <section className="relative flex min-h-screen items-center justify-start overflow-hidden group">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-in-out group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Dark Quote Panel - Left Side */}
      <div className="bg-primary/95 relative z-10 ml-10 max-w-lg p-12 lg:p-14 xl:p-16">
        {/* Testimonial Text */}
        <blockquote className="mb-8 text-2xl leading-tight font-light tracking-wide text-white lg:text-3xl xl:text-4xl">
          <span className="text-secondary font-serif text-4xl leading-none opacity-90">
            &ldquo;
          </span>
          {feedback}
          <span className="text-secondary font-serif text-4xl leading-none opacity-90">
            &rdquo;
          </span>
        </blockquote>

        {/* Attribution */}
        <div className="space-y-1">
          <p className="font-outfit text-lg font-semibold tracking-wider text-white uppercase">
            {name}
          </p>
          <p className="font-outfit text-xs tracking-wide text-white/70 uppercase">
            {position}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommonTestimonial;
