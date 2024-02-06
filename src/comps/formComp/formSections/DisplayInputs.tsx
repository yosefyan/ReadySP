import DisplayInfo from "../../DisplayInfo";
import { centerItem, gradient, titleStyles } from "../../../utils/utils";
import { memo, useContext, useEffect, useState } from "react";
import DynamicContext from "../../../store/DynamicContext";
import { bgColors, textColors } from "../../../constants/colors";
import { grid } from "../../../utils/utils";
import { useNavigate } from "react-router-dom";
import { FaLocationDot } from "../../../constants/iconsData";
import MapComp from "../../MapComp";
import { TDisplayInputs } from "../../../types/componentTypes";

const DisplayInputs = ({
  inputsState,
  requiredInputs,
  subTitleInfo,
  isMap,
}: TDisplayInputs) => {
  const { checkbox, setScrollAmount, heightContainer, inputRefs, setClose } =
    useContext<any>(DynamicContext);
  const [typingEffect, setTypingEffect] = useState<boolean>(false);
  const [showMap, setShowMap] = useState<boolean>(false);
  const navigate = useNavigate();

  let handleTabClick = (i: number) => {
    setScrollAmount(heightContainer.current?.clientHeight * i);
    let timeout = setTimeout(() => inputRefs[i].current?.focus(), 400);
    return () => {
      clearTimeout(timeout);
    };
  };

  useEffect(() => {
    setTypingEffect((prev) => !prev);
  }, [inputsState]);

  return (
    <DisplayInfo>
      <div className={`w-full h-[10%] ${centerItem("justify-evenly")}`}>
        <h1
          className={`${textColors.SECONDARY} w-full ${centerItem()} ${gradient(
            true,
            "from-orange-500/50",
            "to-blue-500/50"
          )} ${titleStyles("text-4xl")}`}>
          {subTitleInfo.title}
        </h1>
        <button
          onClick={() =>
            subTitleInfo.text.includes("Close")
              ? setClose(true)
              : navigate(subTitleInfo.navigate)
          }
          className={`text-white/25 w-full ${
            bgColors.PRIMARY
          } p-4 ${titleStyles(
            "text-2xl"
          )} rounded-full hover:scale-95 hover:text-green-500/25 transition-all`}>
          {subTitleInfo.text}
        </button>
        {isMap && (
          <button
            onClick={() => setShowMap((prev) => !prev)}
            className={`text-white/25 ${centerItem()} ${
              bgColors.PRIMARY
            } p-4 ${titleStyles(
              "text-2xl"
            )} rounded-full gap-2 hover:scale-95 w-full hover:text-green-500/25 transition-all ${
              showMap ? "text-green-500" : "text-white/25"
            }`}>
            <FaLocationDot /> Location
          </button>
        )}
      </div>
      <div
        className={`${
          showMap ? "grid-cols-1" : grid("grid-cols-3")
        } w-[90%] h-[85%] m-auto gap-8`}>
        {showMap ? (
          <MapComp city={inputsState.city} />
        ) : (
          Object.entries(inputsState).map(([key, value], i) => {
            return (
              <div
                onClick={() => handleTabClick(i)}
                className={`${centerItem()} justify-evenly overflow-x-auto cursor-pointer ${
                  inputsState[key] && typingEffect ? "decrease" : ""
                } flex-col w-full text-center rotateSpace rounded-lg transition-all ${
                  i % 2 == 0 ? bgColors.PRIMARY : bgColors.SECONDARY
                }`}
                key={`displayRegisterInputs${i}`}>
                <h2
                  className={`${gradient(
                    true,
                    "from-orange-500/50",
                    "to-blue-500/50"
                  )} ${titleStyles(
                    key === "houseNumber" ? "text-1xl" : "text-2xl"
                  )} ${
                    i % 2 == 0 ? textColors.SECONDARY : textColors.PRIMARY
                  }`}>
                  {key.toUpperCase()}
                  <span className="text-red-500">
                    {Array.isArray(requiredInputs) &&
                    requiredInputs.includes(key)
                      ? "*"
                      : ""}
                  </span>
                </h2>
                <h4 className="text-white/50 font-black">
                  {key === "password"
                    ? "TOP SECRET"
                    : key === "isBusiness"
                    ? checkbox.toString()
                    : value}
                </h4>
              </div>
            );
          })
        )}
      </div>
    </DisplayInfo>
  );
};

export default memo(DisplayInputs);
