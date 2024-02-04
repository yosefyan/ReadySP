import React from "react";
import { FaRegEye, FaRegEyeSlash } from "../constants/iconsData";
import { centerItem, titleStyles } from "../utils/utils";
import { TEyePassword } from "../types/componentTypes";

const EyePassword: React.FC<TEyePassword> = ({
  hidePassword,
  handleEyeStatus,
}) => {
  return (
    <div
      className={`h-[40%] absolute top-0 right-0 ${centerItem("justify-end")}`}>
      <i
        className={`${titleStyles()} p-4 text-white/50`}
        onClick={handleEyeStatus}>
        {hidePassword === false ? <FaRegEyeSlash /> : <FaRegEye />}
      </i>
    </div>
  );
};

export default EyePassword;
