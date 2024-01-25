import { toast } from "react-toastify";
import { TToastifyHelper } from "../types/helpersTypes";

const toastifyHelper = ({
  status,
  message,
  objData = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  },
}: TToastifyHelper) => {
  return toast[status](message, objData);
};
export default toastifyHelper;
