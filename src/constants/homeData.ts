import { THomeData } from "../types/constantsTypes";
import {
  LuCalendarClock,
  MdNavigateBefore,
  MdNavigateNext,
  MdBusinessCenter,
  GoNumber,
  FaAddressBook,
  FaIdCard,
  FaRandom,
  FaSortAlphaDown,
  FaGhost,
  BsPersonFill,
  BsPersonLock,
  FaPhone,
  FaHeart,
  MdDelete,
  BsPencil,
} from "./iconsData";

export const homeData: THomeData = {
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
    userPlans: ["Ghost", "Normal", "Business", "Admin"],
    icons: [FaGhost, BsPersonFill, MdBusinessCenter, BsPersonLock],
    sortButtons: ["Sort by date", "Sort by random", "Sort by title"],
    buttonsIcons: [LuCalendarClock, FaRandom, FaSortAlphaDown],
  },
  ulData: {
    titles: ["phone", "address", "Card Number"],
    icons: [GoNumber, FaAddressBook, FaIdCard],
    arrowIcons: [MdNavigateBefore, MdNavigateNext],
  },
  roleIcons: {
    Ghost: [FaPhone],
    Normal: [FaPhone, FaHeart],
    Business: [FaPhone, FaHeart, BsPencil, MdDelete],
    Admin: [FaPhone, FaHeart, BsPencil, MdDelete],
  },
};
