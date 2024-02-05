import registerData from "./registerData";
import { TProfileData } from "../types/constantsTypes";

const filteredIcons: string[] = [
  "MdAlternateEmail",
  "MdOutlinePassword",
  "MdBusinessCenter",
];

const profileData: TProfileData = {
  Icons: registerData.Icons.filter(
    (icon) => !filteredIcons.includes(icon.name)
  ),
};

export default profileData;
