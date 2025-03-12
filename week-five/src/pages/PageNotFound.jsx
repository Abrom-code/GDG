import React from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <div>
      <p>Opps... Page not found ..</p>
      <button onClick={handleBackHome}>back to home</button>
    </div>
  );
}

export default PageNotFound;
