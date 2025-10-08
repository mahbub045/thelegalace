"use client";

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
    </>
  );
};

export default CorporateLaw;
