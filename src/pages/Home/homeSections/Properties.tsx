import { Statuses, Search, Sorting } from "./propertiesSections";

const PropertiesTab = () => {
  return (
    <div className="z-20 w-[30%] h-[90vh] sticky top-0">
      <Statuses />
      <Search />
      <Sorting/>
    </div>
  );
};

export default PropertiesTab;
