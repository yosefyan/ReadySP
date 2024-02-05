import { useState } from "react";
import FormComp from "../../comps/formComp/FormComp";
import inputsNormalizer from "../../constants/inputsNormalizer";
import createCardData from "../../constants/createCardData";
import ROUTES from "../../routes/ROUTES";
import serverRoutes from "../../routes/serverRoutes";

const CreateCard = () => {
  const [cardCreate, setCardCreate] = useState<{ [key: string]: string }>({
    title: "",
    subtitle: "",
    description: "",
    phone: "",
    email: "",
    web: "",
    url: "",
    alt: "",
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
  });

  const {
    title,
    subtitle,
    description,
    phone,
    email,
    web,
    url,
    alt,
    state,
    country,
    city,
    street,
    houseNumber,
    zip,
  } = cardCreate;

  return (
    <FormComp
      Icons={createCardData.Icons}
      subTitleInfo={{
        title: "Create card",
        text: "Own a card?",
        navigate: ROUTES.MYCARDS,
      }}
      submitData={{
        message: "Successfully created the card.",
        navigate: ROUTES.MYCARDS,
      }}
      requiredInputs={createCardData.createRequiredInputs}
      serverStructure={
        inputsNormalizer({
          title,
          subtitle,
          description,
          phone,
          email,
          web,
          imageData: { url, alt },
          addressData: { state, country, city, street, houseNumber, zip },
        }).CardServer
      }
      inputsNormalizer={inputsNormalizer}
      inputsState={cardCreate}
      setInputsState={setCardCreate}
      currentData={createCardData}
      reqUrl={serverRoutes.post.createNewCard}
      reqType={"POST"}
    />
  );
};

export default CreateCard;
