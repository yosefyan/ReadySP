import { TOpeningMessage } from "../types/PagesTypes/homeTypes";
import { FaCheckCircle, FaCog, FaPaperPlane } from "react-icons/fa";

export const mainIdea: TOpeningMessage = {
  titles: ["Ready?", "Set...", "POST!"],
  messages: {
    h1: [
      "Decided on publishing your business?",
      "While exploring on our breath-taking website...",
      "After finishing setting up, we have a surprise!",
    ],
    h3: [
      "Make sure you have everything ready to supply the information in our website.",
      "Start settings your information, while seeing your card built in real time!",
      "You simply need to press POST.",
    ],
  },
  tColors: ["text-blue-500", "text-yellow-500/60", "text-green-500/50"],
  Icons: [FaCheckCircle, FaCog, FaPaperPlane],
};
