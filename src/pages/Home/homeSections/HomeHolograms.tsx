import { memo, useContext, useEffect, useState } from "react";
import getCards from "../../../services/getRequests/getCards";
import { loginData } from "../../../constants/loginData";
import { centerItem, titleStyles, triangleStyles } from "../../../utils/utils";
import { bgColors, textColors } from "../../../constants/colors";
import {
  checkSentenceLength,
  fstLetterUpper,
} from "../../../helpers/genericHelpers";
import { homeData } from "../../../constants/homeData";
import DynamicContext from "../../../store/DynamicContext";
import bgWebsite from "../../../assets/bgWebsite.png";

const HomeHolograms = () => {
  const [shouldShow, setShouldShow] = useState<number>(0.1);
  let Spaceship: React.ComponentType = loginData.roadData.units[3];
  const { icons, titles } = homeData.ulData;
  const {
    cards,
    dispatch,
    setCards,
    searchInput,
    filteredData,
    setFilteredData,
  } = useContext(DynamicContext);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const { data } = await getCards();
        setCards(data);
      } catch (error) {
        // setCards("Error while getting cards, Please try again later.");
      }
    };
    fetchCards();
  }, []);

  useEffect(() => {
    console.log("clicked a button");

    const filteredCards = cards.filter((copy) =>
      copy.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredData(filteredCards);
  }, [searchInput, cards, dispatch]);

  const handleImageError = (e) => {
    e.target.src = bgWebsite;
  };

  return (
    <div className="z-20 w-[80%] h-[90vh] grid grid-cols-3 justify-items-center overflow-y-auto overflow-x-hidden">
      {cards === null
        ? "LOADING..."
        : filteredData?.length === 0
        ? "No results..."
        : filteredData?.map((card, i: number) => {
            const { _id, phone, address } = card;
            const { country, city, street } = address;
            const data = [phone, `${country} ${city} ${street}`, _id];
            return (
              <div
                key={`homeMainCards${i}`}
                onMouseOut={() => setShouldShow(0.1)}
                onMouseOver={() => setShouldShow(i)}
                className={`${
                  shouldShow === i ? "scale-125" : "scale-100"
                } w-[90%] h-full opacity-70 hover:opacity-100 ${centerItem()} upDown transition-all relative`}>
                {/* DATA + SPINNER */}
                <div
                  className={`cursor-pointer w-[90%] h-[55vh] mb-[5rem] overflow-hidden relative ${centerItem()} hover:shadow-inner-2xl transition-all`}>
                  <div className="bg-black shadow-2xl text-white rounded-3xl w-[95%] h-[95%] z-20">
                    <img
                      className="h-[50%]"
                      src={card.image.url || bgWebsite}
                      alt={card.image.alt}
                      onError={handleImageError}
                    />
                    <div className="p-2 h-1/2 overflow-hidden">
                      <h1
                        className={`${titleStyles(
                          checkSentenceLength(card.title) > 2
                            ? "text-2xl"
                            : "text-4xl"
                        )} p-4 ${bgColors.SECONDARY} ${textColors.PRIMARY}`}>
                        {card.title}
                      </h1>
                      <h3
                        className={`${bgColors.PRIMARY} ${titleStyles(
                          checkSentenceLength(card.subtitle) > 2
                            ? "text-1xl"
                            : "text-2xl"
                        )} ${textColors.SECONDARY}`}>
                        {card.subtitle}
                      </h3>
                      <div className={`w-full h-[50%] ${centerItem()}`}>
                        <ul className={`overflow-y-auto w-full h-full`}>
                          {icons.map((Icon, i) => {
                            return (
                              <div
                                key={`smallIconsHomeHologram${i}`}
                                className={`w-[90%] m-auto min-h-full ${centerItem()} gap-4`}>
                                <i
                                  className={`${textColors.TERTIARY} text-6xl`}>
                                  <Icon />
                                </i>
                                <div
                                  className={`w-[80%] h-full ${centerItem(
                                    "justify-evenly"
                                  )} flex-col font-black`}>
                                  <h1 className="text-3xl">
                                    {fstLetterUpper(titles[i])}
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
                  <div
                    style={{ scale: "1.5" }}
                    className={`w-[10%] h-full slowerAnimation bg-gradient-to-r from-orange-200/50 to-blue-200/25 shadow-lg shadow-black absolute top-0 blur-md animate-spin -z-20`}></div>
                </div>
                {/* DATA + SPINNER */}

                {/* TRIANGLE + SPACESHIP */}
                <div
                  className={`absolute top-[53vh]  ${
                    shouldShow === i ? "rotate-[90deg]" : "opacity-75 z-20"
                  } ${centerItem()} transition-all flex-col`}>
                  <div
                    className={`blur-md ${triangleStyles(
                      false,
                      "border-t-[33rem]",
                      `${
                        i % 2 === 1
                          ? "border-t-white/20"
                          : "border-t-orange-500/20"
                      }`
                    )} absolute bottom-20 ${centerItem()}`}></div>
                  <i
                    className={`text-8xl w-full h-full drop-shadow-[0_0_1rem_black] ${textColors.TERTIARY}`}>
                    <Spaceship />
                  </i>
                </div>
                {/* TRIANGLE + SPACESHIP */}
              </div>
            );
          })}
    </div>
  );
};

export default memo(HomeHolograms);
