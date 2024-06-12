import React from "react";
import User from "./User";
import { useUserContext } from "../hooks/useUserContext";
import style from "../../src/users.module.css";
function Users() {
  const { usersState } = useUserContext();

  return (
    <section className={`${style.section}`}>
      {usersState.users.map((user) => (
        <User key={user.id} id={user.id} name={user.name} />
      ))}
    </section>
  );
}

export default Users;
