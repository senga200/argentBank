import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src="argentBankLogo.png" alt="Logo" />
      </div>
      <div className="sign-in">
        {/* verifier si l'utilisateur est connecté à voir si le CX/CV es =t bon */}
        <a class="link_SignIn" href="./sign-in.html">
          <FontAwesomeIcon icon={faUserCircle} /> Sign In
        </a>
      </div>
    </div>
  );
}

export default Header;
