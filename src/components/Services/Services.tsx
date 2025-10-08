import Banner from "./Components/Banner";
import GetConsultancy from "./Components/CommonComponents/GetConsultancy";
import ServiceCard from "./Components/ServiceCard";

const Services: React.FC = () => {
  return (
    <div>
      <Banner />
      <ServiceCard />
      <GetConsultancy />
    </div>
  );
};

export default Services;
