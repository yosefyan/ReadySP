import { centerItem } from "../../../utils/utils";
import { GiSpaceship } from "react-icons/gi";
import DynamicContext from "../../../store/DynamicContext";
import { useContext } from "react";
import { textColors } from "../../../constants/colors";

const RocketProgress = () => {
  const { percentage } = useContext(DynamicContext);

  return (
    <div className="w-[20%] bg-black/50 hidden lg:block h-full text-center shadow-lg shadow-black font-black text-white/50 text-4xl">
      <div className="div h-[30%] text-center">
        <h2 className={`text-4xl mt-4 ${centerItem()}`}>Progress</h2>
        <h4
          className={`text-3xl mt-4 ${
            percentage < 50
              ? textColors.PRIMARY
              : percentage < 75
              ? textColors.SECONDARY
              : textColors.TERTIARY
          }`}>
          {Math.ceil(percentage)}%
        </h4>
      </div>
      <div className={`h-[70%] relative ${centerItem("", "items-end")}`}>
        <i
          style={{ bottom: `${percentage}%` }}
          className="text-7xl absolute transition-all after:content-['|'] after:text-white-500 after:blur-lg animate-pulse">
          <GiSpaceship />
        </i>
      </div>
    </div>
  );
};

export default RocketProgress;
