import registerData from '../constants/registerData';
import { centerItem } from '../utils/utils';

const PlanetsComp = () => {
   const { Rotator } = registerData;
  return (
    <ul
      className={`stars absolute w-[90%] h-[90%] ${centerItem()} justify-evenly `}>
      {Rotator.lines.map((_, planetIndex) => {
        return (
          <li
            key={`planetsRotate${planetIndex}`}
            style={{
              width: `${planetIndex * 14}%`,
              height: `${planetIndex * 14}%`,
              transform: `translateY(${planetIndex * 2}%)`,
              animationDuration: `${planetIndex * 15}s`,
            }}
            className={`border border-orange-500/30 rotate rounded-full absolute text-white/40`}>
            <div className="w-full blur-sm h-full border border-white/25 rounded-lg"></div>
          </li>
        );
      })}
    </ul>
  );
}

export default PlanetsComp
