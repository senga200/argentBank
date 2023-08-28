import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfileAsync } from "../Actions/UserAction";
import { updateUserProfileAsync } from "../Actions/updateAction";
import "./EditName.css";

function EditName() {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.profile);

  const userAuth = useSelector((state) => state.auth);

  //gerer l'affichage
  const [editMode, setEditMode] = useState(false);
  const [editFirstName, setEditFirstName] = useState("");
  //gerer les états de l'input pour le nom et le prénom
  const [editLastName, setEditLastName] = useState("");

  //////////////

  // const handleEditClick = () => {
  //   setEditFirstName("");
  //   setEditLastName("");
  //   setEditMode(true);
  //   console.log("Edit mode activated"); //ok
  //   console.log("Edit first name:", editFirstName);
  //   console.log("Edit last name:", editLastName);
  // };
  //////////////////

  const handleEditClick = () => {
    //vérifier si le profil est chargé et si oui, mettre à jour les états des inputs
    if (userProfile && userProfile.body) {
      setEditFirstName(userProfile.body.firstName);
      setEditLastName(userProfile.body.lastName);
    }
    setEditMode(true);
    console.log("Edit mode activated"); //ok
    console.log("Edit first name:", editFirstName); //ok
    console.log("Edit last name:", editLastName); //ok
  };

  const handleSaveClick = () => {
    // Dispatch l'action pour mettre à jour le profil
    dispatch(
      updateUserProfileAsync(userAuth.token, editFirstName, editLastName)
    );

    // Mettre à jour les valeurs d'état avec les nouvelles valeurs
    setEditFirstName(editFirstName);
    setEditLastName(editLastName);

    // Désactiver le mode édition
    setEditMode(false);
  };

  useEffect(() => {
    console.log(userAuth); //ok
    if (userAuth?.token) {
      dispatch(fetchUserProfileAsync(userAuth.token)); // Appeler l'action asynchrone pour charger le profil utilisateur
    }
  }, [dispatch, userAuth]);
  //console.log("userProfile:", userProfile); //ko
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
