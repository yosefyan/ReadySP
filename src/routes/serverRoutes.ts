import {
  EGetRequests,
  EPatchRequests,
  EPostRequests,
} from "../types/routesTypes";

const { cards, getMyCards, getUserById } = EGetRequests,
  { login, register, createNewCard } = EPostRequests,
  { likeCard } = EPatchRequests;

const serverRoutes = {
  get: {
    cards,
    getMyCards,
    getUserById,
  },
  post: {
    login,
    register,
    createNewCard,
  },
  patch: {
    likeCard,
  },
};

export default serverRoutes;
