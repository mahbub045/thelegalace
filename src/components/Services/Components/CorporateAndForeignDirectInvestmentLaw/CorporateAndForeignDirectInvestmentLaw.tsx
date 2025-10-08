import AdditionalServices from "../CommonComponents/AdditionalServices";
import GetConsultancy from "../CommonComponents/GetConsultancy";
import CLAbout from "./Components/CLAbout";
import CFLBanner from "./Components/CFLBanner";
import Testimonial from "./Components/Testimonial";

const CorporateAndForeignDirectInvestmentLaw: React.FC = () => {
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

export default CorporateAndForeignDirectInvestmentLaw;
