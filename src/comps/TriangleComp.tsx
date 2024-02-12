import React, { ReactNode } from "react";
import { centerItem } from "../utils/utils";
import { triangleStyles } from "../utils/utils";

const TriangleComp: React.FC<{ children: ReactNode, shouldDown: boolean }> = ({ children, shouldDown }) => {
  return (
    <div
      className={`buttons ${centerItem()} ${triangleStyles(
        shouldDown
      )} flex-col z-50`}>
      {children}
    </div>
  );
};

export default TriangleComp;
