export type TRoutes = {
  HOME: string;
  REGISTER: string;
  LOGIN: string;
  ABOUT: string;
  NOTFOUND: string;
};

export type TRoutesObject = {
  [key: string]: string;
};

export type TRoutesData = {
  paths: string[];
  elements: React.ComponentType[];
  icons: React.ReactNode[];
};

export enum EGetRequests {
  cards = "/cards",
  getMyCards = "/cards/my-cards",
  getUserById = "/users/",
}

export enum EPostRequests {
  login = "/users/login",
  register = "/users",
  createNewCard = "/cards",
}

export enum EPatchRequests {
  likeCard = '/cards/'
}
