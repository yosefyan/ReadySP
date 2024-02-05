import { useContext } from "react";
import {
  centerItem,
  gradient,
  inputStyles,
  labelStyles,
  titleStyles,
} from "../../../../utils/utils";
import { textColors } from "../../../../constants/colors";
import { FaSearch } from "../../../../constants/iconsData";
import DynamicContext from "../../../../store/DynamicContext";

const Search = () => {
  const { data, dispatch, searchInput } = useContext(DynamicContext);

  const handleInputChange = ({ target }) => {
    const searchInput = target.value;
    dispatch({
      type: "SEARCH",
      payload: { searchInput, data },
    });
  };
  return (
    <div
      className={` h-[30%] bg-blue-500/5 ${centerItem(
        "",
        `${searchInput ? "items-end" : ""}`
      )} p-4`}>
      <label
        className={`${gradient(true, "from-orange-500/50", "to-blue-500/50")} ${
          searchInput ? " up" : ""
        } ${labelStyles} ${titleStyles("text-3xl")}`}>
        Card Search
      </label>
      <div className={`${centerItem()} relative`}>
        <i className={`${textColors.SECONDARY} text-3xl absolute right-10`}>
          <FaSearch />
        </i>
        <input
          value={searchInput || ""}
          onChange={handleInputChange}
          className={`${inputStyles(
            "bg-sky-500/15",
            "w-[90%]",
            "h-[8vh]"
          )} text-white/25 ${titleStyles("text-3xl")} shadow-lg shadow-black`}
          type="text"
          placeholder="Search card..."
        />
      </div>
    </div>
  );
};

export default Search;