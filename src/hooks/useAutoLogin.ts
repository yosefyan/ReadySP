import { useContext, useEffect, useState } from "react";
import api from "../services/axiosSettings";
import { jwtDecode } from "jwt-decode";
import { TTokenData } from "../types/customHooksTypes";
import serverRoutes from "../routes/serverRoutes";
import DynamicContext from "../store/DynamicContext";
import { TMainProvider } from "../types/contextTypes";

const useAutoLogin = () => {
  const [finishedLoading, setFinishedLoading] = useState<boolean>(false);
  const { setTokenData } = useContext<TMainProvider>(DynamicContext);

  let token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      setFinishedLoading(true);
      return;
    }
    try {
      const decodedToken: TTokenData = jwtDecode(token);

      if (!decodedToken || !decodedToken._id) {
        setFinishedLoading(true);
        return;
      }

      const checkUserById = async () => {
        try {
          const res = await api.get(
            `${serverRoutes.get.getUserById}${decodedToken._id}`
          );
          if (res.status === 200) {
            setTokenData({
              empty: false,
              user: decodedToken,
              role:
                !decodedToken.isAdmin && !decodedToken.isBusiness
                  ? "Normal"
                  : decodedToken.isAdmin
                  ? "Admin"
                  : decodedToken.isBusiness
                  ? "Business"
                  : "Ghost",
            });
            // setFinishedLoading(true);
          }
        } catch (error) {
          setFinishedLoading(true);
        } finally {
          setFinishedLoading(true);
        }
      };
      checkUserById();
      return;
    } catch (err) {
      setFinishedLoading(true);
    }
  }, [token]);

  return { finishedLoading };
};

export default useAutoLogin;
