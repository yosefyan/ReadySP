import { FaRocket, FaSpaceAwesome } from "react-icons/fa6";
import { FaSpaceShuttle } from "react-icons/fa";
import { GiSpaceship } from "react-icons/gi";
import { TLoginData } from "../types/PagesTypes/loginTypes";
import { MdAlternateEmail, MdOutlinePassword } from "react-icons/md";

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
