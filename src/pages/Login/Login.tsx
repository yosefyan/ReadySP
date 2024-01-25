import { loginData } from "../../constants/loginData";
import { centerItem } from "../../utils/utils";
import LoginBox from "./LoginSections/LoginBox";
import Road from "./LoginSections/Road";

const Login = () => {
  const { positions, roadAlign, roadColor, units, fixUnit } =
    loginData.roadData;

  return (
    <div className={`relative w-full h-[90%] overflow-hidden ${centerItem()}`}>
      <LoginBox />
      {Object.values(positions).map((value, i) => {
        let Unit = units[i];
        return (
          <Road
            index={i}
            fixRotate={fixUnit[i]}
            colors={roadColor}
            deg={
              i === 0
                ? roadAlign.straight
                : i === 1
                ? roadAlign.straightBackwards
                : i === 2
                ? roadAlign.horizontalLeft
                : roadAlign.horizontalRight
            }
            Unit={Unit}
            position={value}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default Login;
