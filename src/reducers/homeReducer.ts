export const homeReducer = (state, action) => {
  const { cards } = action.payload;
  switch (action.type) {
    case "SEARCH":
      const filteredCards = cards.filter((copy) =>
        copy.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      return { ...state, filteredData: filteredCards };
    case "SORT_DATE":
      const sortedDate = [...state.cards].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
      return { ...state, filteredData: sortedDate, buttonClicked: true };
    case "CANCEL":
      return {
        ...state,
        searchInput: "",
        filteredData: state.cards,
        buttonClicked: false,
      };
    case "SORT_TITLE":
      const sortedTitle = [...state.cards].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      return { ...state, filteredData: sortedTitle, buttonClicked: true };
    default:
      return state;
  }
};
export const homeInitialState = {
  searchInput: "",
  filteredData: [],
  cards: [],
  buttonClicked: false,
};
