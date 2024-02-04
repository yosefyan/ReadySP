import { ReactNode } from "react";
import { IconType } from "react-icons";

export type TNavigateLink = {
  to: string;
  children: string | ReactNode;
  filterTab?: boolean;
};

export type TDetermineLinks = {
  customHeight?: string;
  filterTab?: boolean;
};

export type LinkItem = {
  to: string;
  children: string;
  comp: string[];
  icon: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};

export type TLinksMapping<T extends string> = {
  [K in T]: LinkItem[];
};