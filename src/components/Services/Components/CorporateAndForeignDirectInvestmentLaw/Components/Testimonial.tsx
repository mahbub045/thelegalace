import CommonTestimonial from "../../CommonComponents/CommonTestimonial";

const Testimonial: React.FC = () => {
  return (
    <>
      <CommonTestimonial
        image="/images/services/testimonial1.jpg"
        name="John Doe"
        position="CEO, Example Corp"
        feedback="Exceptional Legal Representation, Distinctly Yours."
      />
    </>
  );
};

export default Testimonial;
