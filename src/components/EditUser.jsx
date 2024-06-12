import React, { useState } from "react";

import style from "../users.module.css";
import { useUserContext } from "../hooks/useUserContext";

function EditUser() {
  const { dispatch, usersState } = useUserContext();
  const [editedUser, setEditedUser] = useState({
    id: usersState.editUser.id,
    name: usersState.editUser.name,
  });

  const handleChange = (e) => {
    setEditedUser({ id: usersState.editUser.id, name: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "EDITED_USER", payload: editedUser });
    setEditedUser({ id: "", name: "" });
  };
  return (
    <div style={{ margin: "5px" }}>
      <form onSubmit={handleSubmit}>
        <input
          className={`${style.input}`}
          type="text"
          name="name"
          onChange={handleChange}
          value={editedUser.name}
        />
        <button className={`${style.btn}`} type="submit">
          Edit User
        </button>
      </form>
    </div>
  );
}

export default EditUser;
