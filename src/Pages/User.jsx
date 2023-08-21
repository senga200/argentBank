import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfileAsync } from "../Redux/userSlice";
import "./User.css";

function User() {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user); // slice de user

  const authState = useSelector((state) => state.auth); // slice de auth
  const token = authState.token; // token de auth

  useEffect(() => {
    if (token) {
      // tenter de charger le profil utilisateur
      dispatch(fetchUserProfileAsync(token));
    }
  }, [dispatch, token]);

  return (
    <div className="user_container">
      <div className="user_welcome">
        <h1>Welcome back, {userProfile && userProfile.firstName}</h1>
        <button>Edit Name</button>
      </div>
      <div className="user_panorama">
        <div className="user_panorama_item">
          <p>test</p>
        </div>
      </div>
    </div>
  );
}

export default User;
