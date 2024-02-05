import {
  EGetRequests,
  EPatchRequests,
  EPostRequests,
  EDeleteRequests,
  TServerRoutes,
} from "../types/routesTypes";

const { cards, getMyCards, getUserById, getCardById, getAllUsers } =
    EGetRequests,
  { login, register, createNewCard } = EPostRequests,
  { likeCard, changeStatus } = EPatchRequests,
  { deleteCard, deleteUser } = EDeleteRequests;

const serverRoutes: TServerRoutes = {
  get: {
    cards,
    getMyCards,
    getUserById,
    getCardById,
    getAllUsers,
  },
  post: {
    login,
    register,
    createNewCard,
  },
  patch: {
    likeCard,
    changeStatus,
  },
  delete: {
    deleteCard,
    deleteUser,
  },
};

export default serverRoutes;
