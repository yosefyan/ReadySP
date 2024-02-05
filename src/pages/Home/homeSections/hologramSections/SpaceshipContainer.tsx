import { memo } from "react";
import { textColors } from "../../../../constants/colors";
import { loginData } from "../../../../constants/loginData";
import { centerItem, triangleStyles } from "../../../../utils/utils";

const SpaceshipContainer = ({
  shouldShow,
  i,
}: {
  shouldShow: number;
  i: number;
}) => {
  const Spaceship: React.ComponentType = loginData.roadData.units[3];
  const rocketMovement =
    "opacity-100 top-[10vh] rotate-180 -z-20 transition-all";
  return (
    <div
      className={`absolute  ${
        shouldShow === i ? rocketMovement : "opacity-75 z-20 top-[65vh]"
      } ${centerItem()}  flex-col`}>
      <div
        className={`blur-md ${triangleStyles(
          false,
          "border-t-[33rem]",
          `${i % 2 === 1 ? "border-t-white/20" : "border-t-orange-500/20"}`
        )} absolute bottom-20 ${centerItem()}`}></div>
      <i
        className={`text-8xl w-full h-full drop-shadow-[0_0_1rem_black] ${textColors.TERTIARY}`}>
        <Spaceship />
      </i>
    </div>
  );
};

export default memo(SpaceshipContainer);
