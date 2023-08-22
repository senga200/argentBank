import React from "react";
import "./HeaderUser.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { logOut } from "../Redux/authSlice";
import { useDispatch } from "react-redux";

function HeaderUser() {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut()); // action de deconnexion
  };

  return (
    <div className="header">
      <div className="header__logo">
        <img src="argentBankLogo.png" alt="Logo" />
      </div>
      <div className="sign-out">
        <Link to="/sign-in" className="link_SignOut" onClick={handleLogOut}>
          <FontAwesomeIcon icon={faUserCircle} /> Sign Out
        </Link>
      </div>
    </div>
  );
}

export default HeaderUser;
