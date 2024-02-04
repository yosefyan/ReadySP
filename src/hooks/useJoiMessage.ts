import { useState, useEffect } from "react";
import { genericValidation } from "../validation/genericValidation";
import createCardData from "../constants/createCardData";

const useJoiMessage = (
  theValue?: string,
  key?: string,
  currentData?: any,
  requiredInputs?: any
) => {
  let [message, setMessage] = useState({});
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
    let joiSuccess = key === "password" ? "The password" : value?.Input;

    setMessage({
      joiSuccess,
      joiError,
    });
  }, [theValue, key]);

  const handleBlur = (value, key) => {
    // setMessage(value, key);
  };
  return { message, setMessage, handleBlur };
};

export default useJoiMessage;
