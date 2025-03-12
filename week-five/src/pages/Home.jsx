import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/profile/${id}`);
  };
  return (
    <div>
      Home
      <div>
        <button onClick={() => handleClick(1)}>first user</button>
        <button onClick={() => handleClick(2)}>second user</button>
        <button onClick={() => handleClick(3)}>third user</button>
      </div>
    </div>
  );
}

export default Home;
