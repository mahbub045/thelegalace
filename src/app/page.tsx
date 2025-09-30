import Contact from "@/components/Landing/Contact/Contact";
import GetConsultation from "@/components/Landing/GetConsultation/GetConsultation";
import GetInTouch from "@/components/Landing/GetInTouch/GetInTouch";
import Hero from "@/components/Landing/Hero/Hero";
import Services from "@/components/Landing/Services/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Contact />
      <GetConsultation />
      <GetInTouch />
    </>
  );
}
