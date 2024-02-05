import DetermineLinks from "../DetermineLinks";

const Footer = () => {
  return (
    <div className="z-50 bg-black/75 fixed bottom-0 right-0 hidden lg:flex w-full lg:w-[100%] h-[1%]">
      <DetermineLinks filterTab={true} customHeight={"h-[1%]"} />;
    </div>
  );
};

export default Footer;
