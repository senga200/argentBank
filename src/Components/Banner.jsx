import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner_photo">
        <img src="bank-tree.jpeg" alt="plant" />
      </div>
      <div className="banner_text">
        <h3>No fees.</h3>
        <h3>No minimum deposit.</h3>
        <h3>High interest rates.</h3>
        <p>Open a savings account width Argent Bank Today !</p>
      </div>
    </div>
  );
}

export default Banner;
