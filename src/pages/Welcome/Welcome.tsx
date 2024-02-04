import { centerItem, gradient } from "../../utils/utils";
import { mainIdea } from "../../constants/welcomeData";
import { bgColors, textColors } from "../../constants/colors";

const Welcome = () => {
  const { titles, messages, tColors, Icons } = mainIdea;
  return (
    <div
      className={`w-full h-[90%] max-lg:flex-col max-lg:h-fit ${centerItem()}`}>
      {titles.map((title, i) => {
        let Icon = Icons[i];
        return (
          <div key={`mainWord${i}`} className="w-full h-full">
            <p
              className={`${centerItem()} ${
                Object.values(textColors)[i]
              } text-7xl tShadow bg-black/50 w-full h-[20%] font-black tracking-widest p-4`}>
              {title}
            </p>
            <div
              className={`content w-full h-[80%] font-black text-center shadow-lg shadow-black/50 tShadow p-7 ${centerItem()} flex-col ${
                Object.values(bgColors)[i]
              }`}>
              <h1
                className={`${gradient(
                  true,
                  "from-blue-500/50",
                  "to-orange-500/50"
                )} text-4xl my-8 tracking-widest text-white/50`}>
                {messages.h1[i]}
              </h1>
              <h3
                className={` text-3xl ${centerItem()} leading-[5rem] max-xl:leading-[3rem] h-[30%] ${
                  tColors[i]
                }`}>
                {messages.h3[i]}
              </h3>
              <i
                className={`inline-block w-full my-4 h-[30%]  ${centerItem()} ${
                  Object.values(textColors)[i]
                }`}>
                <Icon className="w-[50%] h-[10vh] drop-shadow-[0_0_1rem_#ffffff8c]" />
              </i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Welcome;
