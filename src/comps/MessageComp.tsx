import { memo } from "react";
import { centerItem, iconStyles, titleStyles } from "../utils/utils";
import { IoCheckmark, FaXmark } from "../constants/iconsData";
import { TMessageComp } from "../types/componentTypes";

const MessageComp = ({ joiError, joiSuccess }: TMessageComp) => {
  return (
    <div
      tabIndex="-1"
      className={`${centerItem()} text-white/50 p-2 transition-all w-full h-full overflow-y-auto rounded-b-lg ${titleStyles(
        "text-2xl"
      )} ${joiError ? `bg-red-500/25` : "bg-green-500/25"}`}>
      <i className={iconStyles()}>{joiError ? <FaXmark /> : <IoCheckmark />}</i>
      {joiError || `${joiSuccess} is valid!`}
    </div>
  );
};

export default memo(MessageComp);
