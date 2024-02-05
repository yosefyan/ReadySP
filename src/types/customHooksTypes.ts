export type TTokenData = {
  _id: string;
  isBusiness: boolean;
  isAdmin: boolean;
  iat: number;
};

export type TMessage = {
  [key: string]: string | unknown;
};
