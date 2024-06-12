import React, { useReducer } from "react";
import { reducer } from "../reducers/UserReducer";

export const UserContext = React.createContext();

const userData = {
  users: [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
  ],

  isModalOpend: false,
  modalMessage: "",
  isEdit: false,
  editUser: { id: "", name: "" },
};

const UserProvider = ({ children }) => {
  const [usersState, dispatch] = useReducer(reducer, userData);

  const deleteUser = (id) => {
    return dispatch({ type: "DELETE_USER", payload: id });
  };

  return (
    <UserContext.Provider value={{ usersState, dispatch, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
