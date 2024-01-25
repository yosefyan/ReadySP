import { useEffect, useState } from "react";
// import useAutoLogin from "./useAutoLogin";

const useRoleMatch = ({ ghost, normal, admin, business }) => {
  const [neededRole, setNeededRole] = useState<string[]>([]);
  // const { tokenData } = useAutoLogin();
  // console.log(tokenData);

  useEffect(() => {
    // let { isAdmin, isBusiness } = tokenData;
    // setNeededRole((prev) => {
    //   if (isAdmin) return [...prev, admin];
    //   else if (isBusiness) return [...prev, business];
    //   else if (!isAdmin && !isBusiness) return [...prev, normal];
    //   return [ghost];
    // });
  }, []);

  return neededRole;
};

export default useRoleMatch;
