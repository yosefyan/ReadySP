import { createContext } from "react";
import { TMainProvider } from "../types/contextTypes";
import { TAuthProvider } from "../types/componentTypes";

const DynamicContext = createContext<TMainProvider | TAuthProvider>(null || '');

export default DynamicContext;
