import AdditionalServices from "../CommonComponents/AdditionalServices";
import GetConsultancy from "../CommonComponents/GetConsultancy";
import CLAbout from "./Components/CFLAbout";
import CFLBanner from "./Components/CFLBanner";
import Testimonial from "./Components/Testimonial";

const CorporateAndForeignDirectInvestment: React.FC = () => {
  return (
    <>
      <CFLBanner />
      <CLAbout />
      <GetConsultancy />
      <Testimonial />
      <AdditionalServices />
    </>
  );
};

export default CorporateAndForeignDirectInvestment;
