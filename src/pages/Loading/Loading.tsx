import { centerItem, titleStyles } from "../../utils/utils";
import { textColors } from "../../constants/colors";

const Loading = ({ searchInput }: { searchInput?: string }) => {
  return (
    <h1
      className={`${titleStyles(
        "text-7xl"
      )} ${centerItem()} flex-col overflow-hidden h-full leading-[10rem] max-w-[60vw] drop-shadow-[0_35px_35px_cyan] ${
        textColors.PRIMARY
      }`}>
      <span className={`text-9xl ${textColors.SECONDARY}`}>
        {searchInput || "Your card"}
      </span>
      is the next
      <span
        className={`${textColors.TERTIARY} text-8xl underline underline-offset-8 decoration-yellow-500/25`}>
        idea!
      </span>
    </h1>
  );
};

export default Loading;
