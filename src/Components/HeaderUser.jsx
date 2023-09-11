import React from "react";
import "./HeaderUser.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { logOut } from "../Redux/authSlice";
import { useDispatch, useSelector } from "react-redux";

function HeaderUser() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const firstName = state.profile.firstName;

  const handleLogOut = () => {
    dispatch(logOut()); // action de deconnexion
  };

  return (
    <div className="headerUser">
      <div className="header__logo">
        <NavLink to="/">
          <img src="argentBankLogo.png" alt="Logo" />
        </NavLink>
      </div>
      <div className="profile_header">
        <div className="profile_headerLogo">
          <FontAwesomeIcon icon={faUserCircle} />
          {firstName}
        </div>
        <div className="sign-out">
          <Link to="/sign-in" className="link_SignOut" onClick={handleLogOut}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            Sign Out
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderUser;
