import DisplayInfo from "../../../comps/DisplayInfo";
import { centerItem, titleStyles } from "../../../utils/utils";
import { memo, useContext, useEffect, useState } from "react";
import DynamicContext from "../../../store/DynamicContext";
import { bgColors, textColors } from "../../../constants/colors";
import { grid } from "../../../utils/utils";
import registerData from "../../../constants/registerData";

const DisplayInputs = () => {
  const {
    registerInputs,
    checkbox,
    setScrollAmount,
    heightContainer,
    inputRefs,
  } = useContext(DynamicContext);
  const [typingEffect, setTypingEffect] = useState<boolean>(false);

  let handleTabClick = (i) => {
    setScrollAmount(heightContainer.current?.clientHeight * i);
    let timeout = setTimeout(() => inputRefs[i].current?.focus(), 400);
    return () => {
      clearTimeout(timeout);
    };
  };

  useEffect(() => {
    setTypingEffect((prev) => !prev);
  }, [registerInputs]);
  return (
    <DisplayInfo>
      <div className={`w-full h-[10%] ${centerItem("justify-evenly")}`}>
        <h1
          className={` ${textColors.SECONDARY} ${centerItem()} ${titleStyles(
            "text-5xl"
          )}`}>
          Summary
        </h1>
        <a href="" className="text-4xl">Have an account?</a>
      </div>
      <div className={`${grid("grid-cols-3")} w-[90%] h-[85%] m-auto gap-8`}>
        {Object.entries(registerInputs).map(([key, value], i) => {
          return (
            <div
              onClick={() => handleTabClick(i)}
              className={`${centerItem()} justify-evenly overflow-x-auto cursor-pointer ${
                registerInputs[key] && typingEffect ? "decrease" : ""
              } flex-col w-full rotateSpace rounded-lg transition-all ${
                i % 2 == 0 ? bgColors.PRIMARY : bgColors.SECONDARY
              }`}
              key={`displayRegisterInputs${i}`}>
              <h2
                className={`${titleStyles(
                  key === "houseNumber" ? "text-1xl" : "text-2xl"
                )} ${i % 2 == 0 ? textColors.SECONDARY : textColors.PRIMARY}`}>
                {key.toUpperCase()}
                <span className="text-red-500">
                  {registerData.requiredInputs.includes(key) ? "*" : ""}
                </span>
              </h2>
              <h4 className="text-white/50 font-black">
                {key === "password"
                  ? "TOP SECRET"
                  : key === "business"
                  ? checkbox.toString()
                  : value}
              </h4>
            </div>
          );
        })}
      </div>
    </DisplayInfo>
  );
};

export default memo(DisplayInputs);
