import CustomSearch from "../../../comps/CustomSearch";

const CrmSettings = () => {
  return (
    <div className="w-full h-[30rem] lg:h-[50%]">
      <CustomSearch
        userSearch
        height={"h-full"}
        searchBy={"user"}
      />
    </div>
  );
};

export default CrmSettings;
