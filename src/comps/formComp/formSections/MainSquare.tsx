import { useContext } from "react";
import { EyePassword, MessageComp } from "../..";
import { bgColors, textColors } from "../../../constants/colors";
import { fstLetterUpper } from "../../../helpers";
import useHidePassword from "../../../hooks/useHidePassword";
import useJoiMessage from "../../../hooks/useJoiMessage";
import { TMainSquare } from "../../../types/componentTypes";
import {
  centerItem,
  iconStyles,
  inputStyles,
  labelStyles,
  titleStyles,
} from "../../../utils/utils";
import DynamicContext from "../../../store/DynamicContext";

const MainSquare = ({
  inputsState,
  theKey,
  value,
  addName,
  currentData,
  requiredInputs,
  i,
  Icon,
  setInputsState,
  setCheckBox,
}: TMainSquare) => {
  const { message } = useJoiMessage(value, theKey, currentData, requiredInputs);

  const { hidePassword, handleEyeStatus } = useHidePassword();
  const { inputRefs } = useContext(DynamicContext);

  const checkEvenOdd = (style: { [key: string]: string }) => {
    const isEven = i % 2 === 0;
    return {
      backgroundColor: isEven ? style.PRIMARY : style.SECONDARY,
      iconColor: isEven ? style.SECONDARY : style.PRIMARY,
    };
  };

  let handleInput = (key: string, value: string) => {
    setInputsState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  return (
    <div
      className={`lg:w-[70%] w-full transition-all z-50 shadow-lg shadow-black h-[70%] rounded-2xl border-[1.5rem] border-black/75  ${
        checkEvenOdd(bgColors).backgroundColor
      } ${centerItem()} justify-around flex-col`}>
      <i
        className={`${iconStyles("text-9xl")} ${
          checkEvenOdd(textColors).iconColor
        } drop-shadow-[0_0_1rem_white]`}>
        <Icon />
      </i>
      <div className={`${centerItem()} flex-col w-[90%] h-[40%] relative`}>
        <label
          className={`${titleStyles("text-6xl")} ${labelStyles} ${
            theKey == "isBusiness" ? "up" : ""
          } ${inputsState[theKey] ? "up" : ""}`}>
          {addName.charAt(0).toUpperCase() + addName.slice(1)}
          <span className="text-red-500/50">
            {requiredInputs.includes(theKey) ? "*" : ""}
          </span>
        </label>
        <input
          className={`${inputStyles(
            `${bgColors.PRIMARY}`,
            "w-full",
            "h-[80%]",
            "border-b-8",
            "border-yellow-500/50"
          )} rounded-lg text-white/50 ${titleStyles(
            "text-3xl"
          )} transition-all text-center ${
            theKey === "isBusiness"
              ? "appearance-none bg-red-800/50 w-1/2"
              : bgColors.PRIMARY
          } checked:bg-green-500/25`}
          value={value.toString()}
          ref={inputRefs[i]}
          required={requiredInputs.includes(theKey)}
          onChange={(e) => handleInput(theKey, e.target.value)}
          type={`${
            theKey.includes("Business")
              ? "checkbox"
              : theKey === "password" && hidePassword
              ? "password"
              : "text"
          }`}
          onClick={() =>
            theKey === "isBusiness" && setCheckBox((prev: boolean) => !prev)
          }
          placeholder={`Enter ${fstLetterUpper(addName)}...${
            requiredInputs.includes(theKey) ? "*" : ""
          }
                  `}
        />
        {theKey === "password" && (
          <EyePassword
            hidePassword={hidePassword}
            handleEyeStatus={handleEyeStatus}
          />
        )}
        <MessageComp
          joiError={message?.joiError}
          joiSuccess={message?.joiSuccess}
        />
      </div>
    </div>
  );
};

export default MainSquare;
