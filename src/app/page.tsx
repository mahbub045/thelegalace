import Contact from "@/components/Landing/Contact/Contact";
import GetConsultation from "@/components/Landing/GetConsultation/GetConsultation";
import Hero from "@/components/Landing/Hero/Hero";
import Services from "@/components/Landing/Services/Services";
import NavBar from "@/components/Layout/NavBar/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <Contact />
      <GetConsultation />
    </>
  );
}
