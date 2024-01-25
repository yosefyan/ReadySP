import HomeProvider from "../../store/HomeProvider";
import { centerItem } from "../../utils/utils";
import HomeHolograms from "./homeSections/HomeHolograms";
import Portal from "./homeSections/Portal";
import PropertiesTab from "./homeSections/Properties";

const Home = () => {

  return (
    <div className={`${centerItem()}`}>
      <HomeProvider>
        <PropertiesTab />
        <HomeHolograms />
      </HomeProvider>
      <Portal />
    </div>
  );
};

export default Home;
