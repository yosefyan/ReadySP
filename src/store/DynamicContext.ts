import { createContext } from "react";
import { TMainProvider } from "../types/PagesTypes/registerTypes";
import { TAuthProvider } from "../types/componentTypes";

const DynamicContext = createContext<TMainProvider | TAuthProvider>(null);

export default DynamicContext;
