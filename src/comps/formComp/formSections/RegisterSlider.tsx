import { useEffect, useContext } from "react";
import {
  buttonStyles,
  centerItem,
  iconStyles,
  inputStyles,
  labelStyles,
  titleStyles,
} from "../../../utils/utils";
import { bgColors, textColors } from "../../../constants/colors";
import registerData from "../../../constants/registerData";
import { TriangleComp, MessageComp, EyePassword } from "../..";
import DynamicContext from "../../../store/DynamicContext";
import useHidePassword from "../../../hooks/useHidePassword";
import useJoiMessage from "../../../hooks/useJoiMessage";
import { fstLetterUpper, handleScroll } from "../../../helpers/genericHelpers";
import dynamicPostRequest from "../../../services/dynamicPost";
import { useNavigate } from "react-router-dom";
import toastifyHelper from "../../../helpers/toastifyHelper";
import { EToastifyStatuses } from "../../../types/helpersTypes";
import PlanetsComp from "../../PlanetsComp";
import dynamicPut from "../../../services/putRequests/dynamicPut";

const RegisterSlider = ({
  inputsState,
  setInputsState,
  serverStructure,
  Icons,
  currentData,
  reqUrl,
  requiredInputs,
  submitData,
  reqType,
  isMap,
}) => {
  const navigate = useNavigate();
  const { hidePassword, handleEyeStatus } = useHidePassword();
  const { handleBlur, message } = useJoiMessage();
  const { Buttons } = registerData;
  const {
    scrollAmount,
    setScrollAmount,
    percentage,
    setPercentage,
    setCheckBox,
    heightContainer,
    inputRefs,
  } = useContext(DynamicContext);

  let handleInput = (key: string, value: string) => {
    setInputsState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  useEffect(() => {
    inputRefs[0].current?.focus();
  }, []);
  useEffect(() => {
    let maxHeight =
      (Icons.length - 1) * (heightContainer.current?.clientHeight || 0);
    setPercentage((scrollAmount / maxHeight) * 100);
    heightContainer.current?.scroll({
      behavior: "smooth",
      top: scrollAmount,
    });
  }, [scrollAmount]);
  //! SEPERATE THIS BLOCK TO ANOTHER FILE
  let handleSubmit = async (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      toastifyHelper({
        status: EToastifyStatuses.error,
        message: "Please fill all required inputs.",
      });
    } else {
      try {
        reqType.request === "PUT"
          ? await dynamicPut(reqType.id, serverStructure)
          : await dynamicPostRequest(reqUrl, serverStructure);
        toastifyHelper({
          status: EToastifyStatuses.success,
          message: submitData.message,
        });
        navigate(submitData.navigate);
      } catch (error) {
        toastifyHelper({
          status: EToastifyStatuses.error,
          message: error.response.data.replace('Joi Error:', '') || message.joiError,
        });
      }
    }
  };
  //! SEPERATE THIS BLOCK TO ANOTHER FILE
  return (
    <form
      noValidate
      ref={heightContainer}
      onSubmit={handleSubmit}
      className={`lg:w-[80%] lg:h-full w-[100vw] h-[100vh] overflow-hidden`}>
      {Object.entries(inputsState).map(([key, value], i) => {
        let Icon = Icons[i];
        let specialCases = ["first", "middle", "last"];
        const { message } = useJoiMessage(
          value,
          key,
          currentData,
          requiredInputs
        );
        const checkEvenOdd = (style) => {
          const isEven = i % 2 === 0;
          return {
            backgroundColor: isEven ? style.PRIMARY : style.SECONDARY,
            iconColor: isEven ? style.SECONDARY : style.PRIMARY,
          };
        };
        const addName = specialCases.includes(key) ? key + " Name" : key;
        return (
          <div
            className={`rotateSpace transition-all min-w-full h-full relative ${centerItem()} flex-col`}
            key={`registerData${i}`}>
            <TriangleComp shouldDown={true}>
              <a
                onClick={() =>
                  handleScroll(
                    setScrollAmount,
                    heightContainer,
                    "clientHeight",
                    "back",
                    i,
                    true,
                    percentage,
                    true,
                    inputRefs
                  )
                }
                className={`${buttonStyles()} translate-y-[7vh]`}>
                {Buttons.normalButtons.names[0]}
              </a>
            </TriangleComp>
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
              <div
                className={`${centerItem()} flex-col w-[90%] h-[40%] relative`}>
                <label
                  className={`${titleStyles("text-6xl")} ${labelStyles} ${
                    key == "isBusiness" ? "up" : ""
                  } ${inputsState[key] ? "up" : ""}`}>
                  {addName.charAt(0).toUpperCase() + addName.slice(1)}
                  <span className="text-red-500/50">
                    {requiredInputs.includes(key) ? "*" : ""}
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
                    key === "isBusiness"
                      ? "appearance-none bg-red-800/50 w-1/2"
                      : bgColors.PRIMARY
                  } checked:bg-green-500/25`}
                  value={value.toString()}
                  ref={inputRefs[i]}
                  required={requiredInputs.includes(key)}
                  onBlur={() => handleBlur(value, key)}
                  onChange={(e) => handleInput(key, e.target.value)}
                  type={`${
                    key.includes("Business")
                      ? "checkbox"
                      : key === "password" && hidePassword
                      ? "password"
                      : "text"
                  }`}
                  onClick={() =>
                    key === "isBusiness" && setCheckBox((prev) => !prev)
                  }
                  placeholder={`Enter ${fstLetterUpper(addName)}...${
                    requiredInputs.includes(key) ? "*" : ""
                  }
                  `}
                />
                {key === "password" && (
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
            <TriangleComp shouldDown={false}>
              {percentage >= 100 ? (
                <input
                  className="text-4xl w-[25vw] p-8 text-white/25 font-black tracking-widest translate-y-[-7vh] cursor-pointer"
                  type="submit"
                  value="SUBMIT"
                  disabled={false}
                />
              ) : (
                <a
                  onClick={() =>
                    handleScroll(
                      setScrollAmount,
                      heightContainer,
                      "clientHeight",
                      "next",
                      i,
                      true,
                      percentage,
                      true,
                      inputRefs
                    )
                  }
                  className={`${buttonStyles()} translate-y-[-7vh]`}>
                  {Buttons.normalButtons.names[1]}
                </a>
              )}
            </TriangleComp>
            <PlanetsComp />
          </div>
        );
      })}
    </form>
  );
};
export default RegisterSlider;
