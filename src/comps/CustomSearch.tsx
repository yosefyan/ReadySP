import { memo, useContext } from "react";
import { bgColors, textColors } from "../constants/colors";
import { homeData } from "../constants/homeData";
import {
  centerItem,
  gradient,
  iconStyles,
  inputStyles,
  titleStyles,
} from "../utils/utils";
import DynamicContext from "../store/DynamicContext";
import { FaSearch } from "../constants/iconsData";
import { TCustomSearch } from "../types/componentTypes";
import { TData } from "../types/constantsTypes";

const CustomSearch: React.FC<TCustomSearch> = ({
  textSize,
  height,
  isFiltered = false,
  userSearch = false,
  searchBy,
}) => {
  const { data, dispatch, usersData, searchInput, tokenData } =
    useContext(DynamicContext);

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const searchInput = target.value;
    if (!isFiltered && !userSearch) {
      dispatch({
        type: "SEARCH",
        payload: {
          searchInput,
          data,
        },
      });
    } else if (userSearch) {
      dispatch({
        type: "SEARCH_USER",
        payload: {
          searchInput,
          usersData,
        },
      });
    } else {
      const favSearchResultInitial = data.filter((card: TData) =>
        card.likes.includes(tokenData.user._id)
      );
      dispatch({
        type: "SEARCH",
        payload: {
          searchInput,
          data: favSearchResultInitial,
        },
      });
    }
  };

  const handleSortClick = (i: number) => {
    dispatch({
      type:
        i === 0
          ? "SORT_DATE"
          : i === 1
          ? "SORT_RANDOM"
          : userSearch
          ? "SORT_FNAME"
          : "SORT_TITLE",
      payload: { data, usersData, userSearch },
    });
  };

  return (
    <div
      className={`settings ${centerItem()} flex-col ${height || "h-[30vh]"}`}>
      <div
        className={`input relative hover:scale-110 transition-all w-full h-1/2 ${centerItem()}`}>
        <i
          className={`absolute left-[4.5rem] hover:left-[4rem] hover:scale-105 ${iconStyles(
            "text-3xl"
          )} text-white/25`}>
          <FaSearch />
        </i>
        <input
          value={searchInput}
          onChange={handleInputChange}
          placeholder={`Search by ${searchBy || "title"}...`}
          className={`${inputStyles(
            bgColors.PRIMARY,
            "h-[50%]"
          )} rounded-2xl w-[80%] h-[50%] shadow-black shadow-2xl  transition-all text-center ${
            textColors.SECONDARY
          } ${titleStyles("text-3xl")}`}
          type="text"
        />
      </div>
      <div className={`sortArea w-[80%] h-1/2 ${centerItem()} gap-4`}>
        <h1
          className={`${titleStyles()} ${textColors.PRIMARY} ${gradient(
            true,
            "from-orange-500/50",
            "to-blue-500/50"
          )}`}>
          Sort by
        </h1>
        {homeData.properties.buttonsIcons.map((Icon, i) => {
          return (
            <div
              onClick={() => handleSortClick(i)}
              key={`homeDataIconsController${i}`}
              className={`${centerItem(
                "justify-evenly"
              )} flex-col w-full h-[80%] bg-black/25 rounded-2xl p-4 cursor-pointer hover:scale-95 ${
                textColors.SECONDARY
              }`}>
              <i className={iconStyles("text-4xl")}>
                <Icon />
              </i>
              <button
                className={`${gradient(
                  true,
                  "from-orange-500/50",
                  "to-blue-500/50"
                )} ${titleStyles(textSize?.toString() || "text-1xl")} ${
                  textColors.PRIMARY
                }`}>
                {homeData.properties.sortButtons[i].toString().split("Sort by")}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(CustomSearch);
