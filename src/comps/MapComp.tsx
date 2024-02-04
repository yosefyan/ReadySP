import { TMapComp } from "../types/componentTypes";

const MapComp = ({ city }: TMapComp) => {
  const embedUrl = `https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${encodeURIComponent(
    city
  )}&t=&z=14&ie=UTF8&iwloc=B&output=embed`;

  return (
    <div className="h-full">
      <iframe
        className="w-full h-full rounded-2xl opacity-50"
        title="map google"
        src={embedUrl}></iframe>
    </div>
  );
};

export default MapComp;
