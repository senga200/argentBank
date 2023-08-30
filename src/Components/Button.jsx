import React from "react";
import "./Button.css";

const CustomButton = ({ text, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
