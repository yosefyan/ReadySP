import { buttonStyles, centerItem, titleStyles } from "../../../../utils/utils";
import { textColors } from "../../../../constants/colors";
import { homeData } from "../../../../constants/homeData";
import { BsMoonStarsFill } from "react-icons/bs";
import { memo } from "react";
import useAutoLogin from "../../../../hooks/useAutoLogin";

const Plans = () => {
  const { determineRole } = useAutoLogin();

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
          className={`${titleStyles("text-6xl")} text-center ${
            textColors.PRIMARY
          }`}>
          User Status
        </h1>
      </div>
      <div className={`${centerItem()} w-full h-[40%] p-4 gap-4`}>
        {homeData.properties.userPlans.map((plan) => {
          let bgColors =
            plan === "Business"
              ? "bg-yellow-800/25"
              : plan === "Normal"
              ? "bg-brown-800/25"
              : "bg-gray-500/25";
          return (
            <button
              style={{
                width: `${100 / homeData.properties.userPlans.length}%`,
              }}
              className={`${
                determineRole.includes(plan)
                  ? "border-b-8 border-b-sky-500/50 scale-110"
                  : "blur-md"
              } h-full shadow-lg shadow-black rounded-2xl ${buttonStyles(
                "text-2xl"
              )} ${bgColors} hover:scale-95 transition-all`}>
              {plan}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default memo(Plans);
