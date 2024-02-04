import { centerItem } from "../../../utils/utils";
import TVBG from "../../../assets/tvBG.gif";
import serverRoutes from "../../../routes/serverRoutes";
import Holograms from "../../Home/homeSections/Holograms";
import PlanetsComp from "../../../comps/PlanetsComp";
import { TTvComp } from "../../../types/componentTypes";

const TV = ({ on }: TTvComp) => {
  return (
    <div className={`w-full lg:w-[66.6%] h-full ${centerItem()} flex-col`}>
      <div className={`w-[90%] h-[85%] relative ${centerItem()}`}>
        <div
          className={`${centerItem()} relative z-20 shadow-2xl z-20 border-[2rem] border-black/35 shadow-black ${
            !on ? "bg-black/50" : ""
          } w-[95%] h-[90vh] overflow-hidden`}>
          {!on && <PlanetsComp />}
          <div
            className={`transition-all w-full h-[95%] ${
              on ? "scale-100 blur-none" : "scale-0 blur-lg"
            }`}>
            <img
              className={`w-full h-full -z-20 absolute opacity-40`}
              src={TVBG}
              alt="stars BG"
            />
            <Holograms url={serverRoutes.get.getMyCards} full={"w-[100%]"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TV;
