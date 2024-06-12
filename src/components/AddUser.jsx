import React, { useState } from "react";

import style from "../users.module.css";
import { useUserContext } from "../hooks/useUserContext";

function AddUser() {
  const { dispatch } = useUserContext();
  const [newUser, setNewUser] = useState({ id: "", name: "" });
  const handleChange = (e) => {
    setNewUser({ id: new Date().getTime().toString(), name: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_USER", payload: newUser });
    setNewUser({ id: "", name: "" });
  };
  return (
    <div style={{ margin: "5px" }}>
      <form onSubmit={handleSubmit}>
        <input
          className={`${style.input}`}
          type="text"
          name="name"
          onChange={handleChange}
          value={newUser.name}
        />
        <button className={`${style.btn}`} type="submit">
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;
