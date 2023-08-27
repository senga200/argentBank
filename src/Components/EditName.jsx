import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfileAsync } from "../Actions/UserAction";
import "./EditName.css";

function EditName() {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.profile);

  const login = useSelector((state) => state.auth);

  //gerer l'affichage
  const [editMode, setEditMode] = useState(false);
  const [editFirstName, setEditFirstName] = useState("");
  //gerer les états de l'input pour le nom et le prénom
  const [editLastName, setEditLastName] = useState("");

  const handleEditClick = () => {
    if (userProfile && userProfile.body) {
      setEditFirstName(userProfile.body.firstName);
      setEditLastName(userProfile.body.lastName);
    }
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
  };

  useEffect(() => {
    console.log(login);
    if (login?.token) {
      dispatch(fetchUserProfileAsync(login.token)); // Appeler l'action asynchrone pour charger le profil utilisateur
    }
  }, [dispatch, login]);
  console.log("userProfile:", userProfile);
  //si editname est true, alors on affiche l'input pour la modif sinon on affiche le nom et le prénom tel qu'il est dans le profil userProfile.body.firstName etc...
  // si editname est true, on affiche le bouton save sinon on affiche le bouton edit
  return (
    <div className="editName">
      <div className="essai">
        <div className="user_welcome">
          <h1>
            Welcome back{" "}
            {editMode ? (
              <input
                type="text"
                value={editFirstName}
                onChange={(e) => setEditFirstName(e.target.value)}
              />
            ) : (
              userProfile && userProfile.body.firstName
            )}{" "}
            {editMode ? (
              <input
                type="text"
                value={editLastName}
                onChange={(e) => setEditLastName(e.target.value)}
              />
            ) : (
              userProfile && userProfile.body.lastName
            )}{" "}
            !
          </h1>
          {editMode ? (
            <button onClick={handleSaveClick}>Save</button>
          ) : (
            <button onClick={handleEditClick}>Edit Name</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default EditName;
