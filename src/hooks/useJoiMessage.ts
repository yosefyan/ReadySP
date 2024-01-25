import  { useState, useEffect } from "react";
import { genericValidation } from "../validation/genericValidation";
import registerData from "../constants/registerData";

const useJoiMessage = (theValue?: string, key?: string) => {
  let [message, setMessage] = useState({});
  useEffect(() => {
    let { validationInfo } = registerData;
    let joiResponse = genericValidation(
      theValue,
      validationInfo[key] || validationInfo.otherInputs.includes(key)
    );

    let { error, value } = joiResponse;
    let joiError = error?.details[0].message;
    let joiSuccess = key === "password" ? "The password" : value?.genericFormat;

    setMessage({
      joiSuccess,
      joiError,
    });
  }, [theValue, key]);

  const handleBlur = (value, key) => {
    setMessage(value, key);
  };
  return { message, setMessage, handleBlur };
};

export default useJoiMessage;
