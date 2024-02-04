import {
  FaRocket,
  FaSpaceAwesome,
  FaSpaceShuttle,
  GiSpaceship,
  MdAlternateEmail,
  MdOutlinePassword,
} from "../constants/iconsData";
import { TLoginData } from "../types/PagesTypes/loginTypes";

export const loginData: TLoginData = {
  roadData: {
    positions: {
      firstRoad: "bottom-[-40vh]",
      secondRoad: "bottom-[-90vh]",
      thirdRoad: "bottom-[-65vh] left-[45vw]",
      fourthRoad: "bottom-[-65vh] left-[45vw]",
    },
    fixUnit: [
      "rotate-[140deg]",
      "rotate-[180deg]",
      "rotate-[100deg]",
      "rotate-[0deg]",
    ],
    roadColor: "bg-black/50",
    roadAlign: {
      straight: "rotate-[90deg]",
      straightBackwards: "rotate-[-90deg]",
      horizontalLeft: "rotate-[115deg]",
      horizontalRight: "rotate-[-115deg]",
    },
    units: [FaRocket, FaSpaceAwesome, FaSpaceShuttle, GiSpaceship],
  },
  inputIcons: [MdAlternateEmail, MdOutlinePassword],
};
