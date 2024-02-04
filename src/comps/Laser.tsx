import { FaSpaceAwesome } from "../constants/iconsData";
import { centerItem, iconStyles } from "../utils/utils";
import { textColors } from "../constants/colors";
import { TLaser } from "../types/componentTypes";

const Laser: React.FC<TLaser> = ({ shouldRotate, direction, colorLaser }) => {
  const data = [
    <div
      key="laser"
      className={` laser w-[30%] h-full rounded-full blur-lg ${colorLaser}`}></div>,
    <i
      key="spaceIcon"
      className={`${iconStyles("text-5xl")} drop-shadow-[0_0_1rem_green] ${
        !shouldRotate ? "rotate-180" : ""
      } ${textColors.TERTIARY}`}>
      <FaSpaceAwesome />
    </i>,
  ];
  return (
    <div
      className={`w-[15%] h-[150vh] hidden xl:flex ${
        direction === "topBottom" ? "forwardsDrive" : "backwardsDrive"
      } border-gray-500 ${centerItem()} flex-col`}>
      {shouldRotate ? data.reverse() : data}
    </div>
  );
};

export default Laser;
