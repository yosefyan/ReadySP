import { memo, useContext, useEffect, useState } from "react";
import dynamicGet from "../../../services/getRequests/dynamicGet";
import { centerItem, titleStyles } from "../../../utils/utils";
import { textColors } from "../../../constants/colors";
import DynamicContext from "../../../store/DynamicContext";
import Loading from "../../Loading/Loading";
import Data from "./hologramSections/Data";
import SpaceshipContainer from "./hologramSections/SpaceshipContainer";
import dynamicPatch from "../../../services/patchRequests/dynamicPatch";
import { SiPrevention } from "react-icons/si";
import dynamicDelete from "../../../services/deleteRequests/dynamicDelete";
import serverRoutes from "../../../routes/serverRoutes";
import toastifyHelper from "../../../helpers/toastifyHelper";
import { EToastifyStatuses } from "../../../types/helpersTypes";

const Holograms = ({
  url,
  full,
  shouldFilter,
}: {
  url: string;
  full: string;
}) => {
  const {
    setSure,
    setCards,
    dispatch,
    searchInput,
    searchResult,
    inputsState,
    tokenData,
  } = useContext(DynamicContext);
  const [shouldShow, setShouldShow] = useState<number | null>(null);
  const [shouldLike, setShouldLike] = useState([{}]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const { data } = await dynamicGet(url);

        dispatch({ type: "SET_CARDS", payload: { data, liked: true } });
        shouldFilter &&
          dispatch({
            type: "FAV_CARD_INITIAL",
            payload: { data, userId: tokenData.user._id },
          });

        dispatch({ type: "SEARCH", payload: { searchInput: "", data } });
        setCards(data);
      } catch (error) {}
    };
    fetchCards();
  }, []);

  const handleLikeCard = async (cardId, card, i) => {
    try {
      const res = await dynamicPatch(`${serverRoutes.patch.likeCard}${cardId}`);
      setShouldLike((prevState) => {
        const updatedState = {
          isLiked: res.likes.includes(tokenData.user._id),
          index: searchResult.findIndex((card) => card._id === cardId),
        };

        return updatedState;
      });

      dispatch({
        type: "LIKE_CARD",
        payload: { cardId, shouldLike: shouldLike },
      });
      toastifyHelper({
        status: EToastifyStatuses.success,
        message: `${
          shouldLike.isLiked ? "Disliked" : "Liked"
        } card successfully.`,
      });
      shouldFilter &&
        dispatch({ type: "FAV_CARD", payload: { data: card, cardId } });
      return { ...res, liked: !card.liked || shouldLike };
    } catch (error) {
      toastifyHelper({
        status: EToastifyStatuses.error,
        message: "Could not like card.",
      });
    }
  };

  const handleDeleteCard = async (cardId, card) => {
    try {
      setSure({
        closed: false,
        data: {
          req: 'delete',
          id: cardId,
          route: serverRoutes.delete.deleteCard
        }
      })
      //  await dynamicDelete(
      //   `${serverRoutes.delete.deleteCard}${cardId}`
      // );
      // toastifyHelper({
      //   status: EToastifyStatuses.success,
      //   message: "Deleted card successfully.",
      // });
      
    } catch (error) {
      toastifyHelper({
        status: EToastifyStatuses.error,
        message: "Could not delete the card.",
      });
    }
  };

  return (
    <div
      style={{ zIndex: 2 }}
      className={`${full || "w-full lg:w-[70%]"} h-[90vh] grid ${
        searchResult?.length === 0
          ? ""
          : `grid-cols-1 lg:grid-cols-2 xl:grid-cols-3`
      } justify-items-center overflow-x-hidden`}>
      {searchResult?.length === 0 ? (
        <Loading searchInput={searchInput} />
      ) : (
        searchResult?.map((card, i: number) => {
          const { _id, phone, address } = card;
          const { country, city, street } = address;
          const data = [phone, `${country} ${city} ${street}`, _id];
          return (
            <div
              onClick={() => setShouldShow((prev) => (prev === i ? null : i))}
              onMouseLeave={() => setShouldShow(null)}
              onMouseEnter={() => setShouldShow(i)}
              key={`homeMainCards${i}`}
              className={`w-[85%] h-[80vh] opacity-70 hover:opacity-100 hover:shadow-inner-2xl ${centerItem()} ${
                i % 2 === 0 ? "upDown" : "downUp"
              } relative`}>
              <Data
                onLike={handleLikeCard}
                onDelete={handleDeleteCard}
                shouldShow={shouldShow}
                i={i}
                data={data}
                card={card}
                shouldLike={shouldLike}
              />
              <SpaceshipContainer shouldShow={shouldShow} i={i} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default memo(Holograms);
