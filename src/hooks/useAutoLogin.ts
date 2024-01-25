import { useEffect, useState } from "react";
import api from "../services/axiosSettings";
import { jwtDecode } from "jwt-decode";
import { TTokenData } from "../types/customHooksTypes";
import toastifyHelper from "../helpers/toastifyHelper";
import serverRoutes from "../routes/serverRoutes";
import { EToastifyStatuses } from "../types/helpersTypes";

const useAutoLogin = () => {
  const [finishedLoading, setFinishedLoading] = useState<boolean>(false);
  const [tokenData, setTokenData] = useState<TTokenData | null>(null);

  useEffect(() => {
    let token = localStorage.getItem("token");
    console.log(token);

    if (!token) {
      setFinishedLoading(true);
      return;
    }
    try {
      const decodedToken: TTokenData = jwtDecode(token);
      console.log(decodedToken);

      if (!decodedToken || !decodedToken._id) {
        setFinishedLoading(true);
        console.log(tokenData);
        return;
      }
      setTokenData(decodedToken);
      console.log(tokenData);

      const checkUserById = async () => {
        try {
          await api.get(`${serverRoutes.get.getUserById}${decodedToken._id}`);
          setFinishedLoading(true);
        } catch (error) {
          setFinishedLoading(true);
        }
      };
      checkUserById();
      // setDetermineRole(
      //   useRoleMatch({
      //     ghost: "ghost",
      //     normal: "normal",
      //     business: "business",
      //     admin: "admin",
      //   })
      // );
    } catch (err) {
      setFinishedLoading(true);
      toastifyHelper({
        status: EToastifyStatuses.error,
        message: "Error decoding the token",
      });
    }
  }, []);

  return { finishedLoading, tokenData };
};

export default useAutoLogin;
