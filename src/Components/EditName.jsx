import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProfile, setProfileFailure } from "../Redux/userSlice";
import "./EditName.css";
import Button from "./Button";

function EditName() {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.profile);
  //console.log("userProfile dans editName", userProfile);
  const userAuth = useSelector((state) => state.auth);
  const [editFirstName, setEditFirstName] =
    useState(userProfile.firstName) || "";
  const [editLastName, setEditLastName] = useState(userProfile.lastName) || "";

  const [isEditMode, setEditMode] = useState(false);

  const token = userAuth.token;

  useEffect(() => {
    if (token) {
      fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("erreur lors de la récupération du profil");
          }
          return response.json();
        })
        .then((userData) => {
          // console.log("userProfileData du fetchUserProfile:", userData);
          dispatch(setProfile(userData.body));
        })
        .catch((error) => {
          //console.error("Erreur dans fetch user profile:", error);
          dispatch(setProfileFailure());
        });
    }
  }, [token, dispatch]);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelClick = () => {
    setEditMode(false);
  };

  const handleSaveClick = () => {
    fetch(`http://localhost:3001/api/v1/user/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        firstName: editFirstName,
        lastName: editLastName,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("erreur lors de la modification du nom ");
        }
        return response.json();
      })
      .then((userData) => {
        //console.log("userProfileData du fetchUserProfile:", userData);
        dispatch(setProfile(userData.body));
      })
      .catch((error) => {
        //console.error("Erreur dans fetch user profile:", error);
        dispatch(setProfileFailure());
      });

    setEditMode(false);
  };

  return (
    <div className="editName">
      <div className="user_welcome">
        <h1>
          Welcome back <br />
          {isEditMode ? (
            <div className="input_editName">
              <input
                type="text"
                value={editFirstName}
                onChange={(e) => setEditFirstName(e.target.value)}
              />
              <input
                type="text"
                value={editLastName}
                onChange={(e) => setEditLastName(e.target.value)}
              />
            </div>
          ) : (
            userProfile && `${userProfile.firstName} ${userProfile.lastName} !`
          )}
        </h1>
        {isEditMode ? (
          <div className="button_editName">
            <Button text="Save" onClick={handleSaveClick} />
            <Button text="Cancel" onClick={handleCancelClick} />
          </div>
        ) : (
          <div className="button_editName">
            <Button text="Edit Name" onClick={handleEditClick} />
          </div>
        )}
      </div>
    </div>
  );
}

export default EditName;
