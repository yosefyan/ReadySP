import { memo, useState } from "react";
import { TListComp } from "../types/componentTypes";
import { centerItem, gradient, iconStyles, titleStyles } from "../utils/utils";
import { GiHamburgerMenu } from "../constants/iconsData";
import PlanetsComp from "./PlanetsComp";
const ListComp = ({ children, listName, currentRole, index }: TListComp) => {
  const [close, setClose] = useState<boolean>(true);
  return (
    <div className="relative w-full h-[75%]">
      {!close && <PlanetsComp />}
      <div
        className={`bg-sky-500/10  rounded-full w-[80%] m-auto h-full relative`}>
        <div
          className={`inline-block gap-4 ${centerItem()} h-full cursor-pointer`}
          onClick={() => setClose((prev) => !prev)}>
          <i className={`${iconStyles("text-2xl")} text-white/50`}>
            <GiHamburgerMenu />
          </i>
          <p
            className={`${titleStyles("text-4xl")} ${gradient(
              true,
              "from-orange-500/55",
              "to-blue-500/55"
            )}`}>
            {(currentRole?.index === index && currentRole?.role) || listName}
          </p>
        </div>
        <div
          onClick={() => setClose(true)}
          className={`${
            close ? "scale-0 absolute" : "scale-1"
          } transition-all z-50 relative w-full bg-black/75 rounded-2xl h-fit gap-4 p-4 ${centerItem()} flex-col`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default memo(ListComp);
