import {
  buttonStyles,
  centerItem,
  gradient,
  iconStyles,
  titleStyles,
} from "../../../utils/utils";
import { MdDelete } from "../../../constants/iconsData";
import crmData from "../../../constants/crmData";
import { memo, useContext, useEffect, useState } from "react";
import DynamicContext from "../../../store/DynamicContext";
import { EToastifyStatuses } from "../../../types/helpersTypes";
import toastifyHelper from "../../../helpers/toastifyHelper";
import dynamicGet from "../../../services/getRequests/dynamicGet";
import serverRoutes from "../../../routes/serverRoutes";
import Loading from "../../Loading/Loading";
import ListComp from "../../../comps/ListComp";
import { linksMapping } from "../../../comps/DetermineLinks";
import { TCurrentRole, TUserSearchResult } from "../../../types/PagesTypes/crmTypes";
import { TSure } from "../../../types/contextTypes";

const UsersData = () => {
  const { searchInput, userSearchResult, dispatch, setSure } =
    useContext(DynamicContext);
  const [currentRole, setCurrentRole] = useState<TCurrentRole>({
    role: "",
    index: null,
  });

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const { data } = await dynamicGet(serverRoutes.get.getAllUsers);
        dispatch({
          type: "SET_USERS",
          payload: { usersData: data },
        });
        dispatch({
          type: "SEARCH_USER",
          payload: {
            searchInput: "",
            usersData: data,
          },
        });
      } catch (error) {
        toastifyHelper({
          status: EToastifyStatuses.error,
          message: "Could not get users",
        });
        throw error;
      }
    };
    getAllUsers();
  }, []);

  return (
    <div className={`w-full lg:w-[65%] h-full ${centerItem()}`}>
      <div
        className={`w-[90%] h-[90%] shadow-2xl shadow-black rounded-2xl overflow-hidden tShadow ${gradient(
          false,
          "from-orange-500/25",
          "to-blue-500/25"
        )}`}>
        <div className={`grid flex-col grid-cols-3 ${titleStyles()} p-4`}>
          {crmData.titles.map((title, i) => {
            let Icon = crmData.icons[i];
            return (
              <div key={`titleCrmData${i}`} className={`${centerItem()} gap-4`}>
                <i className="">
                  <Icon />
                </i>
                <h1
                  className={`text-2xl lg:text-5xl text-center text-white/50`}
                  key={`crmTitle${i}`}>
                  {title}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="flex -z-20 flex-col min-w-full h-full overflow-y-scroll overflow-x-hidden">
          {userSearchResult?.length === 0 ? (
            <Loading searchInput={searchInput || "Your Username"} />
          ) : (
            userSearchResult?.map((user:TUserSearchResult, index: number) => {
              return (
                <div
                  key={`usersDataFull${index}`}
                  className={`w-full ${centerItem(
                    "justify-evenly"
                  )} gap-4 m-4 even:bg-orange-500/5 flex-col lg:flex-row odd:bg-sky-500/5 p-4`}>
                  <div
                    className={`${centerItem(
                      "justify-evenly"
                    )} w-[50%] m-auto`}>
                    {Object.values(user?.name).map((value, i) => {
                      return (
                        i !== 3 && (
                          <h1
                            key={`usersNameCrm${i}`}
                            className={`${gradient(
                              true,
                              "from-orange-500/55",
                              "to-blue-500/55"
                            )} ${titleStyles()} text-3xl lg:text-3xl`}>
                            {value}
                          </h1>
                        )
                      );
                    })}
                  </div>
                  <div
                    className={`w-full lg:w-[50%] p-4 lg:p-0 bg-black/50 rounded-full text-center h-full ${centerItem(
                      ""
                    )}`}>
                    {user?.role === "Admin" ? (
                      <h1
                        className={`${titleStyles()} ${gradient(
                          true,
                          "from-orange-500/55",
                          "to-blue-500/55"
                        )}`}>
                        Admin
                      </h1>
                    ) : (
                      <>
                        <ListComp
                          index={index}
                          currentRole={currentRole}
                          listName={user?.role}>
                          <ul className="w-full">
                            {Object.keys(linksMapping).map((role, i) => {
                              return (
                                i !== 0 &&
                                i !== 3 && (
                                  <li
                                    key={`linksMappingCrm${i}`}
                                    onClick={() => {
                                      setSure({
                                        closed: true,
                                        data: {
                                          req: "patch",
                                          id: user?._id,
                                          route:
                                            serverRoutes.patch.changeStatus,
                                        },
                                      });
                                      setCurrentRole({ role, index });
                                    }}
                                    className={`lg:text-3xl border-b cursor-pointer hover:scale-95 border-b-orange-500/25 p-4 w-full ${gradient(
                                      true,
                                      "from-orange-500/55",
                                      "to-blue-500/55"
                                    )} `}>
                                    {role}
                                  </li>
                                )
                              );
                            })}
                          </ul>
                        </ListComp>
                        <i
                          onClick={() =>
                            setSure({
                              closed: false,
                              data: {
                                req: "delete",
                                id: user?._id,
                                route: serverRoutes.delete.deleteUser,
                              },
                            })
                          }
                          className={`${iconStyles(
                            "text-4xl"
                          )} p-4 rounded-full transition-all hover:bg-black/75 text-white/50`}>
                          <MdDelete />
                        </i>
                      </>
                    )}
                  </div>
                  <button
                    onClick={() =>
                      setSure((prev: TSure) => ({
                        ...prev,
                        closed: false,
                      }))
                    }
                    className={`${
                      currentRole.index === index
                        ? "bg-green-500/25"
                        : "bg-gray-500/25 pointer-events-none"
                    } w-[30%] ${buttonStyles(
                      "text-3xl"
                    )} rounded-2xl transition-all bg-gray-500/25`}>
                    {user?.role !== "Admin" ? "Update" : "LOCKED"}
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(UsersData);
