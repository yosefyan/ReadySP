import { centerItem } from "../../utils/utils";
import { AboutSales, AboutReviews, AboutCarousel } from "../";
const About = () => {
  return (
    <div className={`w-[90vw] h-fit lg:h-[90vh] m-auto ${centerItem()} flex-col gap-[5rem] lg:gap-0 lg:flex-row justify-around`}>
      <AboutSales />
      <AboutCarousel />
      <AboutReviews />
    </div>
  );
};

export default About;
