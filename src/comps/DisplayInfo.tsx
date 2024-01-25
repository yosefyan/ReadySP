import React, { memo } from "react";
import { TTypicalChildren } from "../types/componentTypes";

const DisplayInfo: React.FC<TTypicalChildren> = ({ children }) => {
  return <div className="bg-black/75 h-full relative">{children}</div>;
};

export default memo(DisplayInfo);
