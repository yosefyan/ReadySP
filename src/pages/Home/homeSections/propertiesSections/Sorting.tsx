import { textColors } from "../../../../constants/colors";
import {
  buttonStyles,
  centerItem,
  gradient,
  titleStyles,
} from "../../../../utils/utils";
import { homeData } from "../../../../constants/homeData";
import useReplaceWords from "../../../../hooks/useReplaceWords";
import { memo, useContext } from "react";
import DynamicContext from "../../../../store/DynamicContext";

const Sorting = () => {
  const { word, setWord } = useReplaceWords();
  const { dispatch, data } = useContext<any>(DynamicContext);

  const handleSortClick = (i: number) => {
    dispatch({
      type: i === 0 ? "SORT_DATE" : i === 1 ? "SORT_RANDOM" : "SORT_TITLE",
      payload: { data },
    });
  };
  return (
    <div className={`h-[30%] bg-orange-500/5 ${centerItem()} flex-col`}>
      <h1
        className={`${titleStyles("text-5xl")} ${gradient(
          true,
          "from-blue-500/50",
          "to-orange-500/50"
        )} h-[40%] ${centerItem()} ${textColors.SECONDARY}`}>
        {word || "Sorting"}
      </h1>
      <div className={`w-[80%] h-[60%] gap-4 ${centerItem()}`}>
        {homeData.properties.buttonsIcons.map((Icon, index) => {
          return (
            <button
              key={`homeButtonsIcons${index}`}
              onMouseOver={() =>
                setWord(homeData.properties.sortButtons[index])
              }
              onClick={() => handleSortClick(index)}
              onMouseOut={() => setWord("Sorting")}
              className={`${buttonStyles()} rounded-2xl hover:scale-95 bg-black/50 ${centerItem()}`}>
              <Icon />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default memo(Sorting);
