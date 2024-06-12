import React from "react";
import style from "../users.module.css";
import { useUserContext } from "../hooks/useUserContext";
function User(props) {
  const { dispatch, deleteUser } = useUserContext();

  const handleDelete = (id) => {
    deleteUser(id);
  };

  const handleEdit = (id) => {
    dispatch({ type: "EDIT_USER", payload: id });
  };
  return (
    <article className={`${style.article}`}>
      <h3>ID: {props.id}</h3>
      <h3>Name: {props.name}</h3>
      <button
        onClick={() => {
          handleDelete(props.id);
        }}
        className={`${style.btn} ${style.btnDelete}`}
      >
        Delete
      </button>
      <button
        onClick={() => {
          handleEdit(props.id);
        }}
        className={`${style.btn} ${style.btnEdit}`}
      >
        Edit
      </button>
    </article>
  );
}

export default User;
