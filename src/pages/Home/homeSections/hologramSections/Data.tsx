import { homeData } from "../../../../constants/homeData";
import { centerItem, gradient, titleStyles } from "../../../../utils/utils";
import {
  checkSentenceLength,
  fstLetterUpper,
} from "../../../../helpers/genericHelpers";
import { bgColors, textColors } from "../../../../constants/colors";
import bgWebsite from "../../../../assets/bgWebsite.png";
import { memo, useContext } from "react";
import DynamicContext from "../../../../store/DynamicContext";
import ROUTES from "../../../../routes/ROUTES";
import { Link, useNavigate } from "react-router-dom";
import { TDataComp } from "../../../../types/componentTypes";
import { TCardConst } from "../../../../types/constantsTypes";

const Data = ({
  card,
  data,
  shouldShow,
  i,
  onLike,
  onDelete,
  shouldLike,
}: TDataComp) => {
  const handleImageError = (e: any) => {
    e.target.src = bgWebsite;
  };
  const navigate = useNavigate();
  const { tokenData, setCurrentPreview, setClose } = useContext<any>(DynamicContext);
  const { roleIcons, ulData } = homeData;
  const { icons, titles } = ulData;

  const handleImageClick = () => {
    setCurrentPreview(card);
    setClose(false);
  };

  const handleLikeCard = async (
    cardId: string,
    card: any,
    i: number
  ) => {
    try {
      await onLike(cardId, card, i);
    } catch (error) {}
  };

  const handleDeleteCard = async (cardId: string) => {
    try {
      await onDelete(cardId);
    } catch (error) {}
  };

  return (
    <div
      className={`${centerItem()} cursor-pointer w-full h-[90%] overflow-hidden relative flex-col transition-all`}>
      <div className={`${centerItem()} h-[50vh]`}>
        <div className="bg-black shadow-2xl overflow-hidden text-white rounded-3xl w-[95%] h-[95%] z-20">
          <img
            onClick={handleImageClick}
            className="w-full h-[50%]"
            src={card?.image.url || bgWebsite}
            alt={card?.image.alt}
            onError={handleImageError}
          />
          <div className="p-2 h-1/2 overflow-hidden">
            <h1
              className={`${gradient(
                false,
                "from-orange-500/5",
                "to-blue-500/5"
              )} ${titleStyles(
                checkSentenceLength(card?.title) > 2 ? "text-2xl" : "text-4xl"
              )} p-4 ${bgColors.SECONDARY} ${textColors.PRIMARY}`}>
              {card?.title}
            </h1>
            <h3
              className={`${gradient(
                true,
                "from-orange-500/50",
                "to-blue-500/50"
              )} ${titleStyles(
                checkSentenceLength(card?.subtitle) > 2
                  ? "text-1xl"
                  : "text-2xl"
              )} ${textColors.SECONDARY}`}>
              {card?.subtitle}
            </h3>
            <div className={`h-[50%] ${centerItem()}`}>
              <ul className={`overflow-y-auto w-full h-[10vh]`}>
                {icons.map((Icon, i) => {
                  return (
                    <div
                      key={`smallIconsHologram${i}`}
                      className={`w-[90%] m-auto min-h-full ${centerItem()} gap-4`}>
                      <i className={`${textColors.TERTIARY} text-6xl`}>
                        <Icon />
                      </i>
                      <div
                        style={{ width: "initial" }}
                        className={`h-full ${centerItem(
                          "justify-evenly"
                        )} flex-col font-black`}>
                        <h1
                          className={`${gradient(
                            true,
                            "from-orange-500/50",
                            "to-blue-500/50"
                          )} text-3xl`}>
                          {fstLetterUpper(titles[i].toString())}
                        </h1>
                        <h3
                          className={`${textColors.PRIMARY}
                                        ${data[i].length > 12}
                                          ? "text-[.8rem]"
                                          : "text-1xl"
                                    `}>
                          {data[i]}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ scale: "1.5" }}
        className={`w-[10%] h-full slowerAnimation bg-gradient-to-r from-orange-200/50 to-blue-200/25 shadow-lg shadow-black absolute top-0 blur-2xl animate-spin -z-20`}></div>
      <div
        className={`${centerItem("justify-evenly")}
         ${shouldShow === i ? "scale-100" : "scale-0"} 
        text-4xl gap-4 text-white w-full h-[20vh]`}>
        {tokenData &&
          roleIcons[tokenData?.role].map((Icon, index) => {
            return tokenData.role !== "Admin" &&
              (index === 2 || index === 3) &&
              tokenData.user._id !== card?.user_id ? (
              ""
            ) : (
              <Link
                to={
                  index === 2
                    ? `${ROUTES.EDITCARD}/${card?._id}`
                    : index === 0
                    ? `tel:${card?.phone}`
                    : ""
                }
                key={`roleIconsData${index}`}
                onClick={() => {
                  if (index === 2 && card?._id) {
                    navigate(`${ROUTES.EDITCARD}/${card?._id}`);
                  } else if (index === 1) {
                    handleLikeCard(card?._id, card, i);
                  } else if (index === 3) {
                    handleDeleteCard(card?._id);
                  }
                }}
                className={`${
                  index % 2 === 0 ? "upDown" : "downUp"
                }  ${centerItem()}  hover:bg-black/25 w-[60%] h-[100%] rounded-full p-4`}>
                <i
                  className={`${
                    index === 1 &&
                    (shouldLike && shouldLike.index === i
                      ? shouldLike.isLiked
                      : card.likes.includes(tokenData.user._id))
                      ? "text-red-500"
                      : "text-white"
                  } w-full ${centerItem()}`}
                  key={`roleIconHologram${i}`}>
                  <Icon />
                </i>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default memo(Data);
