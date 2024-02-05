import {
  MdAlternateEmail,
  MdOutlinePassword,
  MdLink,
  MdDescription,
  MdLocationOn,
  MdLocationCity,
  MdDirections,
  MdHome,
  MdNavigateBefore,
  MdNavigateNext,
  MdBusinessCenter,
  PiNumberOneBold,
  PiNumberTwoBold,
  PiNumberThreeBold,
  TbNumbers,
  BsSkipBackwardFill,
  BsSkipForwardFill,
  FaPhone,
  FaEarthAmericas,
} from "../constants/iconsData";
import { TRegisterData } from "../types/constantsTypes";

const registerData: TRegisterData = {
  Icons: [
    PiNumberOneBold,
    PiNumberTwoBold,
    PiNumberThreeBold,
    FaPhone,
    MdAlternateEmail,
    MdOutlinePassword,
    MdLink,
    MdDescription,
    MdLocationOn,
    FaEarthAmericas,
    MdLocationCity,
    MdDirections,
    MdHome,
    TbNumbers,
    MdBusinessCenter,
  ],
  Buttons: {
    normalButtons: {
      names: ["BACK", "NEXT"],
      icons: [MdNavigateBefore, MdNavigateNext],
    },
    specialButtons: {
      names: ["Down 3", "Up 3"],
      icons: [BsSkipBackwardFill, BsSkipForwardFill],
    },
  },
  Rotator: {
    lines: Array(8).fill(""),
    planetColor: [
      "bg-gray-700",
      "bg-yellow-500",
      "bg-blue-500",
      "bg-red-500",
      "bg-orange-500",
      "bg-yellow-300",
      "bg-teal-400",
      "bg-blue-800",
    ],
  },
  regRequiredInputs: [
    "first",
    "last",
    "email",
    "password",
    "phone",
    "zip",
    "country",
    "city",
    "street",
    "houseNumber",
  ],
  validationInfo: {
    email: {
      min: 6,
      regexType: "email",
    },
    password: {
      min: 8,
      regexType: "password",
    },
    phone: {
      min: 7,
      max: 15,
    },
    url: {
      max: 2048,
      isRequired: false,
    },
    zip: {
      whatOpening: "number",
    },
    houseNumber: {
      whatOpening: "number",
    },
    isBusiness: {
      whatOpening: undefined,
    },
    middle: {
      isRequired: false,
    },
    alt: {
      isRequired: false,
    },
    state: {
      isRequired: false,
    },
    otherInputs: ["first", "last", "country", "city", "street"],
  },
};

export default registerData;
