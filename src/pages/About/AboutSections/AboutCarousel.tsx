import { centerItem } from "../../../utils/utils";

const HomeCarousel: React.FC = () => {
  return (
    <div className="hidden lg:inline-block h-[80vh] absolute">
      <div className={`absolute w-full h-[70%] ${centerItem()}`}>
        <p className="text-8xl text-blue-500/50 font-black tracking-widest z-10 rotateText animate-pulse">
          ReadySP
        </p>
        <div
          className={`animate-spin slower carousel absolute border-dashed border-8 border-orange-500/20 w-[80%] h-[75%] rounded-full ${centerItem()}`}>
          <div className={`w-[100%] h-[80%] ${centerItem()}`}>
            <div
              className={`ticks w-[50%] translate-x-1/2 h-[50%] ${centerItem(
                "justify-start blur-sm"
              )}`}>
              <div className="longTick animate-spin slower origin-left w-[90%] bg-orange-500/50 absolute rounded-full">
                long
              </div>
              <div className="shortTick animate-spin slow origin-left w-[50%] bg-blue-500/50 absolute rounded-full">
                short
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border w-0 h-0 border-t-[70vh] border-t-black opacity-65 border-l-[13vw] border-l-transparent border-r-[13vw] border-r-transparent blur-lg"></div>
    </div>
  );
};

export default HomeCarousel;
