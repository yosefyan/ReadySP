import api from "../axiosSettings";

const getCards = () => {
  return api.get("/cards");
};

export default getCards;
