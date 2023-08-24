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
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Checking (x8349)</h3>
              <p className="account-amount">$2,082.79</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>

          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Savings (x6712)</h3>
              <p className="account-amount">$10,928.42</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>

          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
              <p className="account-amount">$184.30</p>
              <p className="account-amount-description">Current Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>

          <p>test</p>
        </div>
      </div>
    </div>
  );
}

export default User;
