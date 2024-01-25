export type TOpeningMessage = {
  titles: string[];
  messages: {
    h1: string[];
    h3: string[];
  };
  tColors: string[];
  Icons: string[];
};

export type THomeProvider = {
  state: unknown;
  dispatch: React.DispatchWithoutAction;
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  cards: [];
};