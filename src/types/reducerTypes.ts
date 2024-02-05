export type TInitialReducerData = {
  data: string[];
  searchResult: any[];
  userSearchResult: any[];
  usersData: any[];
};

export type TSortedTitle = {
  title: string;
  name: {
    first: string;
  };
  _id: string;
  isAdmin: boolean;
  isBusiness: boolean;
};

export type TUpdatedCard = {
  _id: string;
  createdAt: string;
};

export type TDataReducer = {
  likes: string[];
  title: string;
};

export type TUsersSearchResult = {
  createdAt: string;
};

export type TPayload = {
  payload: {
    searchInput: string;
    data: TDataReducer
    cardId: string;
    userId: string;
    usersData: TSortedTitle[];
    shouldLike: {
      index: number;
      isLiked: boolean;
    }
    userSearch: boolean;
  };
  type: string;
};
