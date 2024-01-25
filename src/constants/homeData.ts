import { FaSortAlphaDown } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";
import { MdCancel, MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { GoNumber } from "react-icons/go";
import { FaAddressBook, FaIdCard } from "react-icons/fa";

export const homeData = {
  portalData: {
    circles: Array(6).fill(""),
    colors: [
      "border-y-green-500/5",
      "border-y-gray-500/5",
      "border-y-orange-500/5",
      "border-y-purple-500/5",
      "border-y-sky-500/5",
      "border-y-black-500/5",
    ],
  },
  properties: {
    userPlans: ["Ghost", "Normal", "Business"],
    sortButtons: ["Sort by date", "Cancel", "Sort by title"],
    buttonsIcons: [LuCalendarClock, MdCancel, FaSortAlphaDown],
  },
  ulData: {
    titles: ["phone", "address", "Card Number"],
    icons: [GoNumber, FaAddressBook, FaIdCard],
    arrowIcons: [MdNavigateBefore, MdNavigateNext],
  },
};