import {
  MdAlternateEmail,
  FaPhone,
  MdLink,
  MdDescription,
  MdOutlineTitle,
  RiSubscript2,
  FaEarthAmericas,
  MdLocationCity,
  MdDirections,
  MdHome,
  SiWebflow,
  MdLocationOn,
  TbNumbers,
} from "../constants/iconsData";
import { TCreateCardData } from "../types/constantsTypes";

const createCardData: TCreateCardData = {
  createRequiredInputs: [
    "title",
    "subtitle",
    "description",
    "phone",
    "email",
    "url",
    "alt",
    "country",
    "city",
    "street",
    "houseNumber",
    "zip"
  ],
  Icons: [
    MdOutlineTitle,
    RiSubscript2,
    MdDescription,
    FaPhone,
    MdAlternateEmail,
    SiWebflow,
    MdLink,
    MdDescription,
    MdLocationOn,
    FaEarthAmericas,
    MdLocationCity,
    MdDirections,
    MdHome,
    TbNumbers,
  ],
  validationInfo: {
    description: {
      max: 1024,
    },
    phone: {
      min: 9,
      max: 11,
    },
    email: {
      min: 5,
      regexType: "email",
    },
    web: {
      min: 14,
      isRequired: false,
    },
    state: {
      isRequired: false,
    },
    houseNumber: {
      whatOpening: "number",
      min: 1,
    },
    zip: {
      whatOpening: "number",
      max: 1000000,
    },
    otherInputs: [
      "title",
      "subtitle",
      "url",
      "alt",
      "state",
      "country",
      "city",
      "street",
    ],
  },
};

export default createCardData;
