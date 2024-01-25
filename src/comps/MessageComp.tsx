import { memo } from "react";
import { centerItem, titleStyles } from "../utils/utils";
import { IoCheckmark } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";

const MessageComp = ({ joiError, joiSuccess }) => {
  return (
    <div
      className={`${centerItem()} text-white/50 p-2 transition-all w-full h-full overflow-y-auto rounded-b-lg ${titleStyles(
        "text-2xl"
      )} ${joiError ? `bg-red-500/25` : "bg-green-500/25"}`}>
      <i className="text-5xl">{joiError ? <FaXmark /> : <IoCheckmark />}</i>
      {joiError || `${joiSuccess} is valid!`}
    </div>
  );
};

export default memo(MessageComp);
