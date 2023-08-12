import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src="argentBankLogo.png" alt="Logo" />
      </div>
      <div className="sign-in">
        <Link to="/sign-in" className="link_SignIn">
          <FontAwesomeIcon icon={faUserCircle} /> Sign In
        </Link>
      </div>
    </div>
  );
}

export default Header;
