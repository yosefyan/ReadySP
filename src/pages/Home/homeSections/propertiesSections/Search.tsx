import { useContext } from "react";
import {
  centerItem,
  inputStyles,
  labelStyles,
  titleStyles,
} from "../../../../utils/utils";
import { textColors } from "../../../../constants/colors";
import { FaSearch } from "react-icons/fa";
import DynamicContext from "../../../../store/DynamicContext";

const Search = () => {
  const { searchInput, setSearchInput, dispatch, cards } = useContext(DynamicContext);

  const handleInputChange = ({ target }) => {
    const newSearchInput = target.value;
    setSearchInput(target.value)
    dispatch({
      type: "SEARCH",
    });
  };

  return (
    <div
      className={` h-[30%] bg-blue-500/5 ${centerItem(
        "",
        `${searchInput ? "items-end" : ""}`
      )} p-4`}>
      <label
        className={`${searchInput ? " up" : ""} ${labelStyles} ${titleStyles(
          "text-3xl"
        )}`}>
        Card Search
      </label>
      <div className={`${centerItem()} relative`}>
        <i className={`${textColors.SECONDARY} text-3xl absolute right-10`}>
          <FaSearch />
        </i>
        <input
          value={searchInput}
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
