import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { fetchUserProfileAsync } from "../Actions/UserAction";
import { updateUserProfileAsync } from "../Actions/updateAction";
import "./EditName.css";
import Button from "./Button";
import { updateFirstName, updateLastName } from "../Redux/updateSlice";

function EditName() {
  const store = useStore();
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.profile);
  const userAuth = useSelector((state) => state.auth);
  const editFirstName = useSelector((state) => state.update.firstName);
  const editLastName = useSelector((state) => state.update.lastName);

  const [isEditMode, setEditMode] = useState(false);

  const token = userAuth.token;
  console.log(token);

  useEffect(() => {
    if (userAuth?.token) {
      dispatch(fetchUserProfileAsync(userAuth.token));
    }
  }, [dispatch, userAuth]);

  useEffect(() => {
    if (userProfile && userProfile.body) {
      dispatch(updateFirstName(userProfile.body.firstName));
      dispatch(updateLastName(userProfile.body.lastName));
    }
  }, [dispatch, userProfile]);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelClick = () => {
    setEditMode(false);
  };

  const handleSaveClick = () => {
    dispatch(updateFirstName(editFirstName));
    dispatch(updateLastName(editLastName));
    dispatch(
      updateUserProfileAsync(store, {
        firstName: editFirstName,
        lastName: editLastName,
      })
    );
    console.log(store.getState());

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
                onChange={(e) => dispatch(updateFirstName(e.target.value))}
              />
              <input
                type="text"
                value={editLastName}
                onChange={(e) => dispatch(updateLastName(e.target.value))}
              />
            </div>
          ) : (
            userProfile && `${editFirstName} ${editLastName} !`
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
