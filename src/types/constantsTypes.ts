import { ReactNode } from "react";
import { IconType } from "react-icons";

export type TData = {
  likes: string[];
};

export type TUsersData = {
  role: string;
};

export type TAboutData = {
  ReviewsData: {
    Icons: IconType[];
    Reviews: string[];
  };
  SalesData: {
    Sales: string[];
  };
};

export type TAreuYouSureData = {
  buttons: string[];
  icons: IconType[];
};

export type TCreateCardData = {
  createRequiredInputs: string[];
  Icons: IconType[];
  validationInfo: {
    [key: string]: {};
  };
};

export type TCrmData = {
  titles: string[];
  icons: IconType[];
};

export type THomeData = {
  portalData: {
    [key: string]: string[];
  };
  [key: string]: {
    [key: string]: string[] | IconType[];
  };
};

export type TMyCardData = {
  [key: string]: {
    [key: string]: number | IconType[];
  };
};

export type TProfileData = {
  Icons?: IconType[];
};

export type TRegisterData = {
  Icons: IconType[];
  Buttons: {
    [key: string]: {
      [key: string]: string[] | IconType[] | ReactNode;
    };
  };
  Rotator: {
    [key: string]: string[];
  };
  regRequiredInputs: string[];
  validationInfo: {
    [key: string]:
      | {
          [key: string]: number | string | boolean | undefined;
        }
      | TOtherInputs;
  };
};

export type TOtherInputs = string[];
