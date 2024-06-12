import React from "react";
import Users from "./Users";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import { useUserContext } from "../hooks/useUserContext";

export default function Main() {
  const { usersState } = useUserContext();
  return (
    <div style={{ textAlign: "center" }}>
      <h1>User Management App With useContext And useReducer</h1>
      {usersState.isEdit ? <EditUser /> : <AddUser />}

      <Users />
    </div>
  );
}
