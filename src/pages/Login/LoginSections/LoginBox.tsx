import { useContext, useState } from "react";
import {
  centerItem,
  gradient,
  labelStyles,
  titleStyles,
} from "../../../utils/utils";
import inputsNormalizer from "../../../constants/inputsNormalizer";
import { TInputsNormalizer } from "../../../types/PagesTypes/inputsNormalizerTypes";
import { bgColors, textColors } from "../../../constants/colors";
import { inputStyles } from "../../../utils/utils";
import { loginData } from "../../../constants/loginData";
import EyePassword from "../../../comps/EyePassword";
import useHidePassword from "../../../hooks/useHidePassword";
import useJoiMessage from "../../../hooks/useJoiMessage";
import { MessageComp } from "../../../comps";
import dynamicPostRequest from "../../../services/dynamicPost";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/ROUTES";
import toastifyHelper from "../../../helpers/toastifyHelper";
import { EToastifyStatuses } from "../../../types/helpersTypes";
import DynamicContext from "../../../store/DynamicContext";
import serverRoutes from "../../../routes/serverRoutes";

const LoginBox = () => {
  const navigate = useNavigate();
  // const { handleBlur } = useJoiMessage();
  const [loginInputs, setLoginInputs] = useState<
    TInputsNormalizer["LoginClient"]
  >(inputsNormalizer({}).LoginClient);
  // const { setShouldLogout } = useContext(DynamicContext);

  let handleInputs = (key, value) => {
    setLoginInputs((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const { hidePassword, handleEyeStatus } = useHidePassword();
  const { email, password } = loginInputs;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let { data } = await dynamicPostRequest(
        serverRoutes.post.login,
        inputsNormalizer({ email, password }).LoginClient
      );
      localStorage.setItem("token", data);
      toastifyHelper({
        status: EToastifyStatuses.success,
        message: "Welcome back",
      });
      navigate(ROUTES.HOME);
    } catch (error) {
      toastifyHelper({
        status: EToastifyStatuses.error,
        message: "Invalid email or password.",
      });
    }
  };

  return (
    <div className="rotateSpace z-20 w-[60vw] h-[80vh] transition-all bg-black/50 rounded-lg shadow-lg shadow-black">
      <h1
        className={`${titleStyles("text-7xl")} ${centerItem(
          loginInputs.email ? "justify-end" : ""
        )} mx-8 ${gradient(
          true,
          "from-orange-500/50",
          "to-blue-500/50"
        )} text-white/35 h-[15%]`}>
        Login
      </h1>
      <form onSubmit={handleSubmit} className="w-[80%] h-[80%] m-auto">
        {Object.entries(loginInputs).map(([key, value], i) => {
          const { message } = useJoiMessage(value, key);
          let Icon = loginData.inputIcons[i];
          return (
            i < 2 && (
              <div
                className={`h-[45%] ${centerItem()} relative flex-col`}
                key={`loginInputs${i}`}>
                <label
                  className={`${titleStyles()} ${centerItem(
                    "justify-evenly"
                  )} ${labelStyles} ${loginInputs[key] ? "up" : ""}`}>
                  <i className="mr-4">
                    <Icon />
                  </i>
                  {key}
                </label>
                <input
                  className={`${titleStyles()} ${inputStyles(
                    `${bgColors.PRIMARY}`,
                    "w-full",
                    "h-[35%]",
                    "border-b-8",
                    "border-yellow-500/50"
                  )} ${textColors.SECONDARY} shadow-lg shadow-gray-500`}
                  onChange={({ target }) => handleInputs(key, target.value)}
                  autoFocus={i == 0}
                  value={value}
                  onBlur={() => handleBlur(value, key)}
                  type={i === 1 && hidePassword ? "password" : "text"}
                  placeholder={`Enter ${key}...`}
                />
                {i === 1 && (
                  <EyePassword
                    hidePassword={hidePassword}
                    handleEyeStatus={handleEyeStatus}
                  />
                )}
                <div className="w-full">
                  <MessageComp
                    joiError={message?.joiError}
                    joiSuccess={message?.joiSuccess}
                  />
                </div>
              </div>
            )
          );
        })}
        <div className={`w-full h-[10%] ${centerItem()}`}>
          <input
            className={`${titleStyles()} text-white bg-green-500/15 cursor-pointer w-1/2 h-full hover:scale-95 hover:bg-green-500/10 transition-all rounded-lg`}
            type="submit"
            value="SUBMIT"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginBox;
