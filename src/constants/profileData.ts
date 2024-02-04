import registerData from "./registerData";

const filteredIcons = [
  "MdAlternateEmail",
  "MdOutlinePassword",
  "MdBusinessCenter",
];

const profileData = {
  Icons: registerData.Icons.filter(
    (icon) => !filteredIcons.includes(icon.name)
  ),
};

export default profileData;
