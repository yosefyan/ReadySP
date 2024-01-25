import { useEffect, useContext } from "react";
import {
  buttonStyles,
  centerItem,
  inputStyles,
  labelStyles,
  titleStyles,
} from "../../../utils/utils";
import { bgColors, textColors } from "../../../constants/colors";
import registerData from "../../../constants/registerData";
import { TriangleComp, MessageComp, EyePassword } from "../../../comps";
import DynamicContext from "../../../store/DynamicContext";
import useHidePassword from "../../../hooks/useHidePassword";
import useJoiMessage from "../../../hooks/useJoiMessage";
import { fstLetterUpper, handleScroll } from "../../../helpers/genericHelpers";
import dynamicPostRequest from "../../../services/dynamicPost";
import registerNormalizer from "../registerNormalizer";
import ROUTES from "../../../routes/ROUTES";
import { useNavigate } from "react-router-dom";
import toastifyHelper from "../../../helpers/toastifyHelper";
import { EToastifyStatuses } from "../../../types/helpersTypes";

const RegisterSlider = () => {
  const navigate = useNavigate();
  const { hidePassword, handleEyeStatus } = useHidePassword();
  const { handleBlur, message } = useJoiMessage();
  const { Icons, Rotator, Buttons, requiredInputs } = registerData;
  const {
    scrollAmount,
    setScrollAmount,
    percentage,
    setPercentage,
    registerInputs,
    setRegisterInputs,
    checkbox,
    setCheckBox,
    heightContainer,
    inputRefs,
  } = useContext(DynamicContext);

  const {
    first,
    middle,
    last,
    email,
    password,
    phone,
    url,
    alt,
    state,
    country,
    city,
    street,
    houseNumber,
    zip,
  } = registerInputs;

  let handleInput = (key: string, value: string) => {
    setRegisterInputs((prev) => ({
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
        await dynamicPostRequest(
          "/users",
          registerNormalizer(
            { first, middle, last },
            phone,
            email,
            password,
            { url, alt },
            { state, country, city, street, houseNumber, zip },
            checkbox 
          ).DataForRegister
        );
        toastifyHelper({
          status: EToastifyStatuses.success,
          message: "Successfully registered.",
        });
        navigate(ROUTES.LOGIN);
      } catch (error) {
        toastifyHelper({
          status: EToastifyStatuses.error,
          message: message.joiError,
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
      {Object.entries(registerInputs).map(([key, value], i) => {
        let Icon = Icons[i];
        let specialCases = ["first", "middle", "last"];
        const { message } = useJoiMessage(value, key);
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
                className={`text-9xl ${
                  checkEvenOdd(textColors).iconColor
                } drop-shadow-[0_0_1rem_white]`}>
                <Icon />
              </i>
              <div
                className={`${centerItem()} flex-col w-[90%] h-[40%] relative`}>
                <label
                  className={`${titleStyles("text-6xl")} ${labelStyles} ${
                    key == "business" ? "up" : ""
                  } ${registerInputs[key] ? "up" : ""}`}>
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
                    key === "business"
                      ? "appearance-none bg-red-800/50 w-1/2"
                      : bgColors.PRIMARY
                  } checked:bg-green-500/25`}
                  value={value.toString()}
                  ref={inputRefs[i]}
                  required={requiredInputs.includes(key)}
                  onBlur={() => handleBlur(value, key)}
                  onChange={(e) => handleInput(key, e.target.value)}
                  type={`${
                    key === "business"
                      ? "checkbox"
                      : key === "password" && hidePassword
                      ? "password"
                      : "text"
                  }`}
                  onClick={() =>
                    key === "business" && setCheckBox((prev) => !prev)
                  }
                  placeholder={`Enter ${
                    fstLetterUpper(addName)
                  }...${requiredInputs.includes(key) ? "*" : ""}
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
            <ul
              className={`stars absolute w-[90%] h-[90%] ${centerItem()} justify-evenly `}>
              {Rotator.lines.map((_, planetIndex) => {
                return (
                  <li
                    key={`planetsRotate${planetIndex}`}
                    style={{
                      width: `${planetIndex * 14}%`,
                      height: `${planetIndex * 14}%`,
                      transform: `translateY(${planetIndex * 2}%)`,
                      animationDuration: `${planetIndex * 15}s`,
                    }}
                    className={`border border-white/30 rotate rounded-full absolute text-white/40`}>
                    <div className="w-full blur-sm h-full border border-white/25 rounded-lg"></div>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </form>
  );
};
export default RegisterSlider;
