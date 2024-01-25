import { useEffect, useState, useRef, memo } from "react";
import { TRoad } from "../../../types/PagesTypes/loginTypes";
import { centerItem } from "../../../utils/utils";
import { textColors } from "../../../constants/colors";

const Road: React.FC<TRoad> = ({
  deg,
  position,
  colors,
  Unit,
  fixRotate,
  index,
}: TRoad) => {
  let [move, setMove] = useState(0);

  const fullPath = useRef(null);

  useEffect(() => {
    let full = fullPath.current?.offsetHeight;
    let interval = setInterval(() => {
      setMove((prev) => (prev <= -full ? -400 : prev - 1));
    }, 50);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      ref={fullPath}
      className={`${centerItem()} w-[7vw] ${colors} h-[225vh] absolute ${deg} ${position} shadow-lg shadow-black`}>
      <div className="w-[5%] h-full border-4 border-dashed border-white/10"></div>
      <div
        className={`${centerItem(
          "",
          "items-start"
        )} transition-all w-full h-full absolute`}>
        <i
          style={{ bottom: `${index * 300 + move}px` }}
          className={`shadow-md shadow-gray ${fixRotate} ${
            index === 0
              ? textColors.PRIMARY
              : index === 1
              ? textColors.SECONDARY
              : index === 2
              ? textColors.TERTIARY
              : "text-gray-500/50"
          } relative transition-all text-5xl`}>
          <Unit />
        </i>
      </div>
    </div>
  );
};

export default memo(Road);
