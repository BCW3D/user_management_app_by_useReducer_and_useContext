import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const useUserContext = () => {
  return useContext(UserContext);
};
