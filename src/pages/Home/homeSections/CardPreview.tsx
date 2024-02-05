import { useContext, useEffect, useState } from "react";
import FormComp from "../../../comps/formComp/FormComp";
import createCardData from "../../../constants/createCardData";
import ROUTES from "../../../routes/ROUTES";
import DynamicContext from "../../../store/DynamicContext";
import inputsNormalizer from "../../../constants/inputsNormalizer";

const CardPreview = () => {
  const { currentPreview, close } = useContext<any>(DynamicContext);
  const [cardCreate, setCardCreate] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (currentPreview) {
      const {
        title,
        subtitle,
        description,
        phone,
        email,
        web,
        image,
        address,
      } = currentPreview;

      const { url, alt } = image;
      const { state, country, city, street, houseNumber, zip } = address;
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
    }
  }, [currentPreview]);

  return (
    <div
      className={`z-50 CARDPREVIEW ${
        close ? "w-0 scale-0" : "w-[95%] h-[95%] scale-1"
      } h-full absolute`}>
      <FormComp
        shouldFloat
        isMap
        Icons={createCardData.Icons}
        subTitleInfo={{
          title: "View card",
          text: "Close",
          navigate: ROUTES.HOME,
        }}
        //    submitData={{
        //      message: "Successfully created the card.",
        //      navigate: ROUTES.MYCARDS,
        //    }}
        requiredInputs={[""]}
        serverStructure={{ empty: "" }}
        inputsNormalizer={inputsNormalizer}
        inputsState={cardCreate}
        setInputsState={setCardCreate}
        currentData={createCardData}
        reqUrl={""}
        reqType={{ request: "null", id: "null" }}
      />
    </div>
  );
};

export default CardPreview;
