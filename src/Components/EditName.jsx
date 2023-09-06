import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { fetchUserProfileAsync } from "../Actions/UserAction";
import { updateUserProfileAsync } from "../Actions/updateAction";
//import { useStore } from "react-redux";
import "./EditName.css";
import Button from "./Button";
import { updateFirstName, updateLastName } from "../Redux/updateSlice";

function EditName() {
  const store = useStore(); // accès au store

  //gerer l'affichage
  const [isEditMode, setEditMode] = useState(false);
  const [editFirstName, setEditFirstName] = useState("");
  //gerer les états de l'input pour le nom et le prénom
  const [editLastName, setEditLastName] = useState("");
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.profile);
  //const store = useStore(); // accès au store

  //pour utiliser le token dans le useEffect
  const userAuth = useSelector((state) => state.auth);
  const token = userAuth.token;
  console.log("ça c'est le token dans EditName", token); //ok
  useEffect(() => {
    console.log("ça c'est le token dans useEffect EditName", userAuth.token); //ok
    if (userAuth?.token) {
      dispatch(fetchUserProfileAsync(userAuth.token)); // Appeler l'action asynchrone pour charger le profil utilisateur
    }
  }, [dispatch, userAuth]);

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
  /////////////////////
  const handleCancelClick = () => {
    setEditMode(false);
  };
  /////////////////////
  const handleSaveClick = () => {
    // Dispatch l'action pour mettre à jour le profil
    updateUserProfileAsync(store, {
      firstName: editFirstName,
      lastName: editLastName,
    });
    console.log("handleSave :", editFirstName, editLastName);

    // Mettre à jour les valeurs d'état avec les nouvelles valeurs de l'input :
    // setEditFirstName(editFirstName);
    // setEditLastName(editLastName);
    dispatch(updateFirstName(editFirstName));
    dispatch(updateLastName(editLastName));
    console.log("handleSave après setEdit :", editFirstName, editLastName);
    // Désactiver le mode édition
    setEditMode(false);
  };
  //////////////////////

  /////////////////////////

  // const handleSaveClick = async () => {
  //   // Dispatch l'action Redux pour mettre à jour le profil utilisateur
  //   await dispatch(
  //     updateUserProfileAsync(userAuth.token, editFirstName, editLastName)
  //   );

  //   // Désactiver le mode édition
  //   setEditMode(false);
  // };

  return (
    <div className="editName">
      <div className="user_welcome">
        <h1>
          Welcome back <br />{" "}
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
            userProfile &&
            `${userProfile.body.firstName} ${userProfile.body.lastName} !`
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
