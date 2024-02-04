import myCardData from "../../../constants/myCardsData";
import {
  centerItem,
  iconStyles,
  inputStyles,
  titleStyles,
} from "../../../utils/utils";
import { FaPowerOff, FaSearch } from "../../../constants/iconsData";
import { homeData } from "../../../constants/homeData";
import { bgColors, textColors } from "../../../constants/colors";
import { useContext } from "react";
import DynamicContext from "../../../store/DynamicContext";
import CustomSearch from "../../../comps/CustomSearch";

const Controller = ({ on, setOn }) => {
  const { data, dispatch, searchInput } = useContext(DynamicContext);

  // const handleInputChange = ({ target }) => {
  //   const searchInput = target.value;
  //   dispatch({
  //     type: "SEARCH",
  //     payload: { searchInput, data },
  //   });
  // };
  // const handleSortClick = (i: number) => {
  //   dispatch({
  //     type: i === 0 ? "SORT_DATE" : i === 1 ? "SORT_RANDOM" : "SORT_TITLE",
  //     payload: { data },
  //   });
  // };

  return (
    <div className={`${centerItem()} w-full lg:w-1/3 h-full`}>
      <div className=" w-[80%] h-[95%] rounded-[4rem] bg-gradient-to-r from-teal-900/25 to-purple-900/25 rotateSpace transition-all shadow-2xl shadow-black">
        <div className={` ${centerItem()} h-[20vh]`}>
          <div
            className={`${centerItem(
              "justify-evenly"
            )}  flex-col lines w-[20%] gap-4 m-auto`}>
            {Array.from({ length: myCardData.controller.lines }).map((_, i) => {
              return (
                <div
                  style={{ width: `${Math.floor(80 / (i + 1) / 10) * 10}%` }}
                  key={`antenaLines${i}`}
                  className={`${
                    on ? "border-t-green-500/25" : "border-t-red-500/25"
                  } border-t-4 rounded-[50%] border-t-green-500/25 h-[1.5vh]`}></div>
              );
            })}
            <i
              onClick={() => setOn((prev) => !prev)}
              className={`text-5xl p-4 cursor-pointer hover:scale-95 ${
                on ? textColors.TERTIARY : "text-red-500/25"
              }`}>
              <FaPowerOff />
            </i>
          </div>
          <div className={`${centerItem()} h-[10vh] border"`}></div>
        </div>
        <div
          className={`${centerItem()} tvBox flex-col arrowsContainer h-[30vh] bg-black/15`}>
          <div
            style={{ transform: "translateZ(50rem)" }}
            className={`${centerItem()} grid grid-cols-3 w-[45%] h-[80%] m-auto border-4 border-orange-500/15 rounded-full`}>
            {Object.entries(myCardData.arrowIcon).map(([key, value]) => {
              return Object.values(value).map((Icon, i) => {
                return (
                  <div
                    key={`arrowIconsCardData${i}`}
                    className={`${
                      key === "topLevel" || key === "bottomLevel"
                        ? "col-span-3"
                        : ""
                    }`}>
                    <i
                      className={`${
                        Icon.name === "FaCheck"
                          ? `border-4 border-sky-500/15 rounded-full ${textColors.PRIMARY}`
                          : textColors.SECONDARY
                      } w-fit p-4 m-auto hover:bg-black/25 rounded-full ${iconStyles(
                        "text-3xl"
                      )} ${centerItem()} `}>
                      <Icon></Icon>
                    </i>
                  </div>
                );
              });
            })}
          </div>
        </div>
        <CustomSearch/>
      </div>
    </div>
  );
};

export default Controller;
