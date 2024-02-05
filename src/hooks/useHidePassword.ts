import {useState} from "react";

const useHidePassword = () => {
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  const handleEyeStatus = () => {
    setHidePassword((prev) => !prev);
  };
  return { hidePassword, handleEyeStatus };
};

export default useHidePassword;
