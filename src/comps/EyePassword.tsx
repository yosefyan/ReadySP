import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { centerItem, titleStyles } from "../utils/utils";

const EyePassword: React.FC = ({ hidePassword ,handleEyeStatus }) => {
  return (
    <div className={`h-[40%] absolute top-0 right-0 ${centerItem('justify-end')}`}>
      <i
        className={`${titleStyles()} p-4 text-white/50`}
        onClick={handleEyeStatus}>
        {hidePassword === false ? <FaRegEyeSlash /> : <FaRegEye />}
      </i>
    </div>
  );
};

export default EyePassword;
