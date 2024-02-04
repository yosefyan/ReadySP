import { useContext, useState } from "react";
import CustomSearch from "../../comps/CustomSearch";
import Laser from "../../comps/Laser";
import { bgColors, textColors } from "../../constants/colors";
import serverRoutes from "../../routes/serverRoutes";
import { centerItem, iconStyles, titleStyles } from "../../utils/utils";
import Holograms from "../Home/homeSections/Holograms";
import { FaAngleDown } from "../../constants/iconsData";
import DynamicContext from "../../store/DynamicContext";

const FavCards = () => {
  const [close, setClose] = useState<boolean>(false);
   const { searchResult } = useContext(DynamicContext);
  return (
    <div
      className={`w-full overflow-y-scroll lg:overflow-hidden h-[90%] ${centerItem()} bg-black/50`}>
      <Laser
        direction={"topBottom"}
        colorLaser={bgColors.SECONDARY}
        shouldRotate={true}
      />
      <div className={`w-full lg:w-[70%] h-full ${bgColors.TERTIARY}`}>
        <div
          className={`w-full ${
            close ? "h-[10%]" : "h-[40%]"
          } transition-all overflow-hidden`}>
          <CustomSearch
            filteredData={searchResult}
            isFiltered
            height={close ? "scale-0 h-0" : "scale-1 h-[75%]"}
            textSize={"text-3xl"}
          />
          <div
            className={`w-full shadow shadow-black ${
              close ? "h-full" : "h-[25%]"
            } ${bgColors.PRIMARY} ${centerItem()}`}>
            <i
              onClick={() => setClose((prev) => !prev)}
              className={`${iconStyles(
                "text-5xl"
              )} w-full ${centerItem()} p-4 hover:bg-black/25 rounded-full ${
                textColors.SECONDARY
              }`}>
              <FaAngleDown />
            </i>
          </div>
        </div>
        <div className={`dataPart overflow-y-auto w-full ${close ? 'h-full' : 'h-[60%]'}`}>
          <Holograms
            shouldFilter
            url={serverRoutes.get.cards}
            full={"w-[100%]"}
          />
        </div>
      </div>
      <Laser
        direction={"bottomTop"}
        colorLaser={bgColors.PRIMARY}
        shouldRotate={false}
      />
    </div>
  );
};

export default FavCards;
