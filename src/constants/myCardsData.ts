import { TMyCardData } from "../types/constantsTypes";
import {
  FaAngleUp,
  FaAngleLeft,
  FaAngleDown,
  FaAngleRight,
  FaCheck,
} from "./iconsData";

const myCardData: TMyCardData = {
  controller: {
    lines: 3,
  },
  arrowIcon: {
    topLevel: [FaAngleUp],
    centerLevel: [FaAngleLeft, FaCheck, FaAngleRight],
    bottomLevel: [FaAngleDown],
  },
};

export default myCardData;
