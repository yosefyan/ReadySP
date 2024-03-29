import { TDataReducer, TInitialReducerData, TPayload, TSortedTitle, TUpdatedCard, TUsersSearchResult } from "../types/reducerTypes";

export const homeReducer = (state: TInitialReducerData, action: TPayload) => {
  const {
    searchInput,
    data,
    cardId,
    usersData,
    shouldLike,
    userId,
    userSearch,
  } = action.payload;
  switch (action.type) {
    case "SET_CARDS":
      return {
        ...state,
        data,
      };
    case "SET_USERS":
      return {
        ...state,
        usersData: usersData.map((user: TSortedTitle) => ({
          ...user,
          role: user.isAdmin
            ? "Admin"
            : user.isBusiness
            ? "Business"
            : "Normal",
        })),
      };
    case "SEARCH":
      let searchResult = state.data?.filter((copy: TDataReducer) =>
        copy.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      return { ...state, searchResult, searchInput };
    case "SEARCH_USER":
      let userSearchResult = state.usersData?.filter((copy: TSortedTitle) =>
        copy.name.first.toLowerCase().includes(searchInput.toLowerCase())
      );
      return { ...state, userSearchResult, searchInput };
    case "SORT_DATE":
      let sortedData;
      if (userSearch) {
        sortedData = state.userSearchResult?.sort(
          (a: TUsersSearchResult, b: TUsersSearchResult) =>
            +new Date(a.createdAt) - +new Date(b.createdAt)
        );
        return {
          ...state,
          userSearchResult: sortedData,
        };
      } else {
        sortedData = state.searchResult?.sort(
          (a: TUpdatedCard, b: TUpdatedCard) => +new Date(a.createdAt) - +new Date(b.createdAt)
        );
        return {
          ...state,
          searchResult: sortedData,
        };
      }
    case "SORT_RANDOM":
      let randomData;
      if (userSearch) {
        randomData = state.userSearchResult?.sort(() => Math.random() - 0.5);
        return {
          ...state,
          userSearchResult: randomData,
        };
      } else {
        randomData = state.searchResult?.sort(() => Math.random() - 0.5);
        return {
          ...state,
          searchResult: randomData,
        };
      }
    case "SORT_TITLE":
      const sortedTitle = state.searchResult?.sort(
        (a: TSortedTitle, b: TSortedTitle) => a.title.localeCompare(b.title)
      );
      return { ...state, searchResult: sortedTitle };
    case "SORT_FNAME":
      const sortedFNameUsers = state.usersData?.sort(
        (a: TSortedTitle, b: TSortedTitle) =>
          a.name.first.localeCompare(b.name.first)
      );
      return { ...state, userSearchResult: sortedFNameUsers };
    case "LIKE_CARD":
      const updatedSearchResult = state.searchResult?.map((card: TUpdatedCard) =>
        card._id === cardId ? { ...card, liked: shouldLike } : card
      );
      return {
        ...state,
        searchResult: updatedSearchResult,
      };
    case "FAV_CARD_INITIAL":
      const favSearchResultInitial = state.data?.filter((card: TDataReducer) =>
        card.likes.includes(userId)
      );
      return {
        ...state,
        data: favSearchResultInitial,
      };
    case "FAV_CARD":
      const favSearchResult = state.searchResult?.filter(
        (card: TUpdatedCard) => card._id !== cardId
      );
      return {
        ...state,
        searchResult: favSearchResult,
      };
    case "FIL_USER":
      const filUsers = state.usersData?.filter((user: TSortedTitle) => user._id !== userId);
      return {
        ...state,
        userSearchResult: filUsers,
      };

    default:
      return state;
  }
};
export const homeInitialState: TInitialReducerData = {
  data: [],
  searchResult: [],
  userSearchResult: [],
  usersData: [],
};
