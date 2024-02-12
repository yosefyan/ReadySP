import { useContext, useState } from "react";
import FormComp from "../../comps/formComp/FormComp";
import inputsNormalizer from "../../constants/inputsNormalizer";
import DynamicContext from "../../store/DynamicContext";
import registerData from "../../constants/registerData";
import ROUTES from "../../routes/ROUTES";
import serverRoutes from "../../routes/serverRoutes";
import { TInputsNormalizer } from "../../types/PagesTypes/inputsNormalizerTypes";
const Register = () => {
  const [registerInputs, setRegisterInputs] = useState<
    TInputsNormalizer["RegisterClient"]
  >(inputsNormalizer({}).RegisterClient);
  const { checkbox } = useContext<any>(DynamicContext);
  const {
    first,
    middle,
    last,
    email,
    password,
    phone,
    url,
    alt,
    state,
    country,
    city,
    street,
    houseNumber,
    zip,
  } = registerInputs;

  return (
    <FormComp
      Icons={registerData.Icons}
      subTitleInfo={{
        title: "Register",
        text: "Own an account?",
        navigate: ROUTES.LOGIN,
      }}
      requiredInputs={registerData.regRequiredInputs}
      submitData={{
        message: "Successfully registered.",
        navigate: ROUTES.LOGIN,
      }}
      serverStructure={
        inputsNormalizer({
          nameData: { first, middle, last },
          phone,
          email,
          password,
          imageData: { url, alt },
          addressData: { state, country, city, street, houseNumber, zip },
          isBusiness: checkbox,
        }).RegisterServer
      }
      reqType={"POST"}
      inputsNormalizer={inputsNormalizer}
      inputsState={registerInputs}
      setInputsState={setRegisterInputs}
      currentData={registerData}
      reqUrl={serverRoutes.post.register}
    />
  );
};

export default Register;
