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
} from "react-icons/md";
import {
  PiNumberOneBold,
  PiNumberTwoBold,
  PiNumberThreeBold,
} from "react-icons/pi";
import { TbNumbers } from "react-icons/tb";
import { BsSkipBackwardFill, BsSkipForwardFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";

const registerData = {
  Icons: [
    PiNumberOneBold,
    PiNumberTwoBold,
    PiNumberThreeBold,
    MdAlternateEmail,
    MdOutlinePassword,
    FaPhone,
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
  requiredInputs: [
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
      isRequired: true,
    },
    password: {
      min: 8,
      regexType: "password",
      isRequired: true,
    },
    phone: {
      min: 7,
      max: 15,
    },
    url: {
      max: 2048,
    },
    zip: {
      isRequired: true,
      whatOpening: "number",
    },
    houseNumber: {
      whatOpening: "number",
    },
    isBusiness: {
      whatOpening: undefined,
    },
    otherInputs: ["first", "last", "country", "city", "street", "houseNumber"],
  },
};

export default registerData;
