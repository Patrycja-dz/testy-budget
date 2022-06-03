import React from "react";
import { useNavigate } from "react-router-dom";
function ErrorPage() {
  let returnToOtherPage = useNavigate();
  return (
    <>
      <div>ErrorPage</div>
      <button
        onClick={() => {
          returnToOtherPage("/");
        }}
      >Return</button>
    </>
  );
}

export default ErrorPage;
