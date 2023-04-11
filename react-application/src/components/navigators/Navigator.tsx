import React from "react";
import { useNavigate } from "react-router-dom";

const Navigate = () => {
  let navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  return (
<div/>
  );
};
export default Navigate;