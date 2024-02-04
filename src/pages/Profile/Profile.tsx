import { useContext, useEffect, useState } from "react";
import FormComp from "../../comps/formComp/FormComp";
import inputsNormalizer from "../../constants/inputsNormalizer";
import registerData from "../../constants/registerData";
import ROUTES from "../../routes/ROUTES";
import serverRoutes from "../../routes/serverRoutes";
import DynamicContext from "../../store/DynamicContext";
import dynamicGet from "../../services/getRequests/dynamicGet";
import profileData from "../../constants/profileData";

const Profile = () => {
  const { tokenData } = useContext(DynamicContext);
  const [profileInputs, setProfileInputs] = useState({
    first: "",
    middle: "",
    last: "",
    phone: "",
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
    first,
    middle,
    last,
    phone,
    url,
    alt,
    state,
    country,
    city,
    street,
    houseNumber,
    zip,
  } = profileInputs;
  useEffect(() => {
    const getUserById = async () => {
      try {
        const { data } = await dynamicGet(
          `${serverRoutes.get.getUserById}/${tokenData.user._id}`
        );
        const { name, phone, image, address } = data;
        const { first, middle, last } = name;
        const { url, alt } = image;
        const { country, city, street, houseNumber, state, zip } = address;

        setProfileInputs(
          inputsNormalizer({
            first,
            middle,
            last,
            phone,
            url,
            alt,
            state,
            country,
            city,
            street,
            houseNumber,
            zip,
          }).EditProfileClient
        );
      } catch (error) {}
    };
    getUserById();
  }, []);
  return (
    <FormComp
      isMap={false}
      Icons={profileData.Icons}
      subTitleInfo={{
        title: "Edit profile",
        text: "Back home",
        navigate: ROUTES.HOME,
      }}
      submitData={{
        message: "Successfully edited profile.",
        navigate: ROUTES.HOME,
      }}
      requiredInputs={registerData.regRequiredInputs}
      serverStructure={
        inputsNormalizer({
          nameData: { first, middle, last },
          phone,
          imageData: { url, alt },
          addressData: { state, country, city, street, houseNumber, zip },
        }).EditProfileServer
      }
      inputsNormalizer={inputsNormalizer}
      inputsState={profileInputs}
      setInputsState={setProfileInputs}
      currentData={registerData}
      reqUrl={serverRoutes.get.getUserById}
      reqType={{ request: "PUT", id: `/users/${tokenData.user._id}` }}
    />
  );
};

export default Profile;
