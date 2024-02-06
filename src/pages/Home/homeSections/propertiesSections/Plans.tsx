import { buttonStyles, centerItem, gradient, titleStyles } from "../../../../utils/utils";
import { textColors } from "../../../../constants/colors";
import { homeData } from "../../../../constants/homeData";
import { BsMoonStarsFill } from "../../../../constants/iconsData";
import { grid } from "../../../../utils/utils";
import { memo, useContext } from "react";
import DynamicContext from "../../../../store/DynamicContext";

const Plans = () => {
  const { tokenData } = useContext<any>(DynamicContext);
  return (
    <div
      className={`w-full h-[40%] ${centerItem(
        "justify-evenly"
      )} bg-black/50 flex-col`}>
      <div className={`${centerItem()} gap-4`}>
        <i className={`${titleStyles()} ${textColors.SECONDARY}`}>
          <BsMoonStarsFill />
        </i>
        <h1
          className={`${titleStyles("text-6xl")} ${gradient(
            true,
            "from-orange-500/50",
            "to-blue-500/50"
          )} text-center ${textColors.PRIMARY}`}>
          User Status
        </h1>
      </div>
      <div
        className={`${grid(
          "grid-cols-2"
        )} content-center grid-cols-2 w-full h-[60%] p-4 gap-4`}>
        {homeData.properties.userPlans.map((plan, i) => {
          let Icon = homeData.properties.icons[i];
          return (
            <button
              key={`statusesPlan${i}`}
              className={`${
                tokenData?.role?.includes(plan)
                  ? "bg-green-500/30 border-b-8 border-b-green-500/25"
                  : "bg-gray-500/25 blur-[.1rem]"
              } ${centerItem(
                "justify-evenly"
              )} w-full h-full text-center cursor-default shadow-lg shadow-black rounded-2xl ${buttonStyles(
                "text-2xl"
              )} hover:scale-95 transition-all`}>
              <i className="text-4xl">
                <Icon />
              </i>
              {plan}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default memo(Plans);
