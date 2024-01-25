import { memo } from "react";
import { homeData } from "../../../constants/homeData";
import { centerItem } from "../../../utils/utils";

const Portal = () => {
  const { colors } = homeData.portalData;

  return (
    <div
      className={`-z-1 overflow-hidden absolute w-[100vw] h-[90%] flex ${centerItem()}`}>
      {colors.map((color, i) => {
        return (
          <div
            style={{ transform: `rotate(${i * 5 * colors.length}deg)` }}
            key={`portals${i}`}
            className={`w-[80%] ${color} blur-[1rem] bg-orange-900/5 animate-pulse animate-ping border-y-black/25 h-[70%] absolute border-y-[14rem] rounded-full`}></div>
        );
      })}
    </div>
  );
};

export default memo(Portal);
