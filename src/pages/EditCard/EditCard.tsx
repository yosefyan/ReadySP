import { useEffect, useState } from "react";
import FormComp from "../../comps/formComp/FormComp";
import inputsNormalizer from "../../constants/inputsNormalizer";
import createCardData from "../../constants/createCardData";
import ROUTES from "../../routes/ROUTES";
import serverRoutes from "../../routes/serverRoutes";
import { useParams } from "react-router-dom";
import dynamicGet from "../../services/getRequests/dynamicGet";

const EditCard = () => {
  const [cardCreate, setCardCreate] = useState({
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
  const { cardId } = useParams();
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

  useEffect(() => {
    const getCardById = async () => {
      try {
        const { data } = await dynamicGet(
          `${serverRoutes.get.getCardById}/${cardId}`
        );
        const {
          title,
          subtitle,
          description,
          phone,
          email,
          web,
          address,
          image,
        } = data;
        const { url, alt } = image;
        const { country, city, street, houseNumber, state, zip } = address;

        setCardCreate(
          inputsNormalizer({
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
          }).EditCardClient
        );
      } catch (error) {}
    };
    getCardById();
  }, []);

  return (
    <FormComp
      Icons={createCardData.Icons}
      subTitleInfo={{
        title: "Edit card",
        text: "Back to my cards",
        navigate: ROUTES.MYCARDS,
      }}
      submitData={{
        message: "Successfully edited the card.",
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
      isMap={true}
      inputsNormalizer={inputsNormalizer}
      inputsState={cardCreate}
      setInputsState={setCardCreate}
      currentData={createCardData}
      reqUrl={serverRoutes.post.createNewCard}
      reqType={{ request: "PUT", id: `/cards/${cardId}` }}
    />
  );
};

export default EditCard;
