import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfileAsync } from "../Redux/userSlice";

import "./User.css";

function User() {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.profile);

  const login = useSelector((state) => state.auth);

  useEffect(() => {
    console.log(login);
    if (login?.token) {
      dispatch(fetchUserProfileAsync(login.token)); // Appeler l'action asynchrone pour charger le profil utilisateur
    }
  }, [dispatch, login]);
  console.log("userProfile:", userProfile);

  return (
    <div className="user_container">
      <div className="user_welcome">
        <h1>
          Welcome back {userProfile && userProfile.body.firstName}{" "}
          {userProfile && userProfile.body.lastName} !
        </h1>
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
