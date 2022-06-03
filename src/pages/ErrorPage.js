import React from "react";
import { useNavigate } from "react-router-dom";
function ErrorPage() {
  let navigate = useNavigate();
  return (
    <div>
      ErrorPage
      <button
        onClick={() => {
          navigate("/");
        }}
      ></button>
    </div>
  );
}

export default ErrorPage;
