"use client";

import AdditionalServices from "../CommonComponents/AdditionalServices";
import GetConsultancy from "../CommonComponents/GetConsultancy";
import CLAbout from "./Components/CLAbout";
import CLBanner from "./Components/CLBanner";
import Testimonial from "./Components/Testimonial";

const CorporateLaw: React.FC = () => {
  return (
    <>
      <CLBanner />
      <CLAbout />
      <GetConsultancy />
      <Testimonial />
      <AdditionalServices />
    </>
  );
};

export default CorporateLaw;
