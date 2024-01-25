import { createContext } from "react";
import { TRegisterProvider } from "../types/PagesTypes/registerTypes";
import { THomeProvider } from "../types/PagesTypes/homeTypes";
import { TAuthProvider } from "../types/componentTypes";

const DynamicContext = createContext<TRegisterProvider | THomeProvider | TAuthProvider>(null);

export default DynamicContext;
