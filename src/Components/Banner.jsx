import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner_photo"></div>
      <div className="banner_text">
        <h2 className="subtitle">
          No fees. <br />
          No minimum deposit. <br />
          High interest rates.
        </h2>
        <p>Open a savings account width Argent Bank Today !</p>
      </div>
    </div>
  );
}

export default Banner;
