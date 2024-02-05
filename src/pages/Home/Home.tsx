import { useContext } from "react";
import AreYouSure from "../../comps/AreYouSure";
import serverRoutes from "../../routes/serverRoutes";
import { centerItem } from "../../utils/utils";
import Holograms from "./homeSections/Holograms";
import Portal from "./homeSections/Portal";
import PropertiesTab from "./homeSections/Properties";
import DynamicContext from "../../store/DynamicContext";
import CardPreview from "./homeSections/CardPreview";

const Home = () => {
  const { sure } = useContext(DynamicContext);
  return (
    <div className={`${centerItem()} relative w-full flex-col lg:flex-row`}>
      <CardPreview />
      <div
        style={{ zIndex: sure.closed ? -999 : 999 }}
        className={`w-full h-full absolute ${centerItem()}`}>
        <AreYouSure />
      </div>
      <PropertiesTab />
      <Holograms url={serverRoutes.get.cards} />
      <Portal />
    </div>
  );
};

export default Home;
