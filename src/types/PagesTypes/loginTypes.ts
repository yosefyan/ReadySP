import { IconType } from "../../constants/iconsData";

export type TGeneralLogin = {
  email: string;
  password: string;
};

export type TRoad = {
  deg: string;
  position: string;
  colors: string;
  Unit: React.ComponentType;
  fixRotate: string;
  index: number;
};

export type TLoginData = {
  roadData: {
    positions: {
      [key: string]: string;
    };
    fixUnit: string[];
    roadColor: string;
    roadAlign: {
      [key: string]: string;
    };
    units: React.ComponentType[];
  };
  inputIcons: IconType[]
};
