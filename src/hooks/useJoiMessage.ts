import { useState, useEffect, useContext } from "react";
import { genericValidation } from "../validation/genericValidation";
import createCardData from "../constants/createCardData";
import { TCreateCardData } from "../types/constantsTypes";
import { TMessage } from "../types/customHooksTypes";
import DynamicContext from "../store/DynamicContext";

const useJoiMessage = (
  theValue: string,
  key: string,
  currentData?: TCreateCardData,
  requiredInputs?: any
) => {
  let [message, setMessage] = useState<TMessage>({});

  useEffect(() => {
    let { validationInfo } = currentData || createCardData;
    let joiResponse = genericValidation(
      theValue,
      validationInfo[key] || validationInfo.otherInputs.includes(key),
      key,
      requiredInputs
    );

    let { error, value } = joiResponse;
    let joiError = error?.details[0].message;
    let joiSuccess =
      key === "password"
        ? "The password"
        : key === "isBusiness"
        ? 'Your option'
        : value?.Input;

    setMessage({
      joiSuccess,
      joiError,
    });
  }, [theValue, key]);

  return { message, setMessage };
};

export default useJoiMessage;
