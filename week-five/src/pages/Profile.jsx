import React from "react";
import { useParams, Link } from "react-router-dom";
import { users } from "../users";

function Profile() {
  const { id } = useParams();
  const user = users.find((user) => user.id === Number(id));
  return (
    <>
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.age}</p>
      </div>
      <Link to="/">back home</Link>
    </>
  );
}

export default Profile;
