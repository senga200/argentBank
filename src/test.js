//************************EDITNAME************************//
///////////////////////////////////////////////////////////
/////////////////////essai du 08/09
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector, useStore } from "react-redux";
// import { fetchUserProfileAsync } from "../Actions/UserAction";
// import { updateProfilThunk } from "../Actions/updateAction";
// import "./EditName.css";
// import Button from "./Button";
// import { updateProfil } from "../Redux/updateSlice";

// function EditName() {
//   const store = useStore();
//   const dispatch = useDispatch();
//   const userProfile = useSelector((state) => state.profile);
//   const userAuth = useSelector((state) => state.auth);
//   const editFirstName = useSelector((state) => state.update.firstName);
//   const editLastName = useSelector((state) => state.update.lastName);

//   const [isEditMode, setEditMode] = useState(false);

//   const token = userAuth.token;
//   console.log(token);

//   useEffect(() => {
//     if (userAuth?.token) {
//       dispatch(updateProfilThunk(userAuth.token));
//     }
//   }, [dispatch, userAuth]);

//   useEffect(() => {
//     if (userProfile && userProfile.body) {
//       dispatch(updateProfil(userProfile.body.firstName));
//       dispatch(updateProfil(userProfile.body.lastName));
//     }
//   }, [dispatch, userProfile]);

//   const handleEditClick = () => {
//     setEditMode(true);
//   };

//   const handleCancelClick = () => {
//     setEditMode(false);
//   };

//   const handleSaveClick = () => {
//     updateProfilThunk(store, {
//       firstName: editFirstName,
//       lastName: editLastName,
//     });

//     setEditMode(false);
//   };

//   return (
//     <div className="editName">
//       <div className="user_welcome">
//         <h1>
//           Welcome back <br />
//           {isEditMode ? (
//             <div className="input_editName">
//               <input
//                 type="text"
//                 value={editFirstName}
//                 onChange={(e) => dispatch(updateProfil(e.target.value))}
//               />
//               <input
//                 type="text"
//                 value={editLastName}
//                 onChange={(e) => dispatch(updateProfil(e.target.value))}
//               />
//             </div>
//           ) : (
//             userProfile && `${editFirstName} ${editLastName} !`
//           )}
//         </h1>
//         {isEditMode ? (
//           <div className="button_editName">
//             <Button text="Save" onClick={handleSaveClick} />
//             <Button text="Cancel" onClick={handleCancelClick} />
//           </div>
//         ) : (
//           <div className="button_editName">
//             <Button text="Edit Name" onClick={handleEditClick} />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default EditName;

//************************UPDATEACTION************************//
///////////////////////////////////////////////////////////
// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const updateUserProfileAsync = createAsyncThunk(
//   "user/updateUserProfile",
//   async ({ token, firstName, lastName }) => {
//     try {
//       const response = await fetch(
//         "http://localhost:3001/api/v1/user/profile",
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({
//             firstName,
//             lastName,
//           }),
//         }
//       );

//       if (response.ok) {
//         const updatedUserProfile = await response.json();
//         return updatedUserProfile;
//       } else {
//         throw new Error("Erreur lors de la mise à jour du profil");
//       }
//     } catch (error) {
//       console.error("Erreur lors de la mise à jour du profil:", error);
//       throw error;
//     }
//   }
// );

//////////////////////////

// import { createAsyncThunk } from "@reduxjs/toolkit";

// async function updateUserProfile(token, firstName, lastName) {
//   try {
//     const response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ firstName, lastName }),
//     });

//     if (response.ok) {
//       console.log("la reponse de updateUser profil est ok !");
//     } else {
//       throw new Error("Erreur lors du chargement du profil utilisateur");
//     }
//   } catch (error) {
//     console.error("Erreur dans fetch user profile:", error);
//     throw error;
//   }
// }

////////////////////////////////////////////// maj du 07/09

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { updateFirstName, updateLastName } from "../Redux/updateSlice";

// export async function updateUserProfile(store, { firstName, lastName }) {
//   try {
//     const response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${store.getState().auth.token}`,
//       },
//       body: JSON.stringify({ firstName, lastName }),
//     });

//     if (response.ok) {
//       console.log("hello");
//       const userData = await response.json();
//       store.dispatch(updateUserProfile(userData.body));
//       store.dispatch(updateFirstName(userData.body.firstName));
//       store.dispatch(updateLastName(userData.body.lastName));
//     }
//   } catch (error) {
//     console.error(
//       "Erreur lors de la mise à jour du profil utilisateur :",
//       error.message
//     );
//     throw error;
//   }
// }

// export const updateUserProfileAsync = createAsyncThunk(
//   "user/updateUserProfile",
//   async ({ store, firstName, lastName }) => {
//     try {
//       return updateUserProfile(store, { firstName, lastName });
//     } catch (error) {
//       console.error("Erreur lors de la mise à jour du profil:", error);
//       throw error;
//     }
//   }
// );

//////////////////////////////////// fin de maj du 07/09

//////////////////////////////////////essai du 08/09

// import { updateProfil, updateFailure } from "../Redux/updateSlice";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// export async function updateProfilAction(store, { firstName, lastName }) {
//   try {
//     const response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${store.getState().auth.token}`,
//       },
//       body: JSON.stringify({ firstName, lastName }),
//     });

//     if (response.ok) {
//       console.log("reponse fetch updateAction:", response);
//       const userData = await response.json();
//       store.dispatch(updateProfil(userData.body));
//     }
//   } catch (error) {
//     console.error(
//       "Erreur lors de la mise à jour du profil utilisateur :",
//       error.message
//     );
//     store.dispatch(updateFailure());
//     throw error;
//   }
// }

// export const updateProfilThunk = createAsyncThunk(
//   "user/updateProfil",
//   async ({ store, firstName, lastName }) => {
//     try {
//       return updateProfilAction(store, { firstName, lastName });
//     } catch (error) {
//       console.error("Erreur lors de la mise à jour du profil:", error);
//       throw error;
//     }
//   }
// );

//////////////////////////////////////fin de essai du 08/09

//////////////////essai du 09/09
// import { updateProfil, updateFailure } from "../Redux/updateSlice";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// export async function updateProfilAction(store, { firstName, lastName }) {
//   try {
//     const response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${store.getState().auth.token}`,
//       },
//       body: JSON.stringify({ firstName, lastName }),
//     });

//     if (response.ok) {
//       console.log("hello");
//       const userData = await response.json();
//       store.dispatch(updateProfil(userData.body));
//       store.dispatch(updateProfil(userData.body.firstName));
//       store.dispatch(updateProfil(userData.body.lastName));
//     }
//   } catch (error) {
//     console.error(
//       "Erreur lors de la mise à jour du profil utilisateur :",
//       error.message
//     );
//     store.dispatch(updateFailure());
//     throw error;
//   }
// }

// export const updateProfilThunk = createAsyncThunk(
//   "user/updateUserProfile",
//   async ({ store, firstName, lastName }) => {
//     try {
//       return updateProfil(store, { firstName, lastName });
//     } catch (error) {
//       console.error("Erreur lors de la mise à jour du profil:", error);
//       throw error;
//     }
//   }
// );

//*****************************UPDATESLICE ********************//
//////////////////////////////////////////////////////////
// import { createSlice } from "@reduxjs/toolkit";
// import { updateUserProfileAsync } from "../Actions/updateAction";

// const initialState = {
//   firstName: "",
//   lastName: "",
// };
//////////////////////////
// const updateSlice = createSlice({
//   name: "update",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(updateUserProfileAsync.fulfilled, (state, action) => {
//       return action.payload;
//     });
//   },
// });

// const updateSlice = createSlice({
//   name: "update",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(updateUserProfileAsync.fulfilled, (state, action) => {
//       // Mettre à jour les propriétés du state en fonction de action.payload
//       state.firstName = action.payload.firstName;
//       state.lastName = action.payload.lastName;
//       console.log("firstName:", state.firstName);
//     });
//   },
// });

// export default updateSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import { updateUserProfileAsync } from "../Actions/updateAction";

// const initialState = {
//   // Initialisez les propriétés que vous souhaitez suivre ici, par exemple :
//   firstName: "",
//   lastName: "",
// };

// const updateSlice = createSlice({
//   name: "update",
//   initialState,
//   reducers: {
//     updateFirstName: (state, action) => {
//       state.firstName = action.payload;
//     },
//     updateLastName: (state, action) => {
//       state.lastName = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(updateUserProfileAsync.fulfilled, (state, action) => {
//       // Mettre à jour les propriétés du state en fonction de action.payload
//       state.firstName = action.payload.firstName;
//       state.lastName = action.payload.lastName;
//       console.log("firstName:", state.firstName);
//     });
//   },
// });

// export const { updateFirstName, updateLastName } = updateSlice.actions;

// export default updateSlice.reducer;
//////////////////////////////maj du 07/09
// const updateSlice = createSlice({
//   name: "update",
//   initialState,
//   reducers: {
//     updateFirstName: (state, action) => {
//       console.log("action.payload dans le slice");
//       state.firstName = action.payload;
//     },
//     updateLastName: (state, action) => {
//       state.lastName = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(updateUserProfileAsync.fulfilled, (state, action) => {
//       // Mettre à jour les propriétés du state en fonction de action.payload
//       state.firstName = action.payload.firstName;
//       state.lastName = action.payload.lastName;
//       console.log("firstName dans le slice extrareducer :", state.firstName);
//     });
//   },
// });

// export const { updateFirstName, updateLastName } = updateSlice.actions;

// export default updateSlice.reducer;
////////////////////////////////////fin de maj du 07/09

//////////////////////////////////////essai du 08/09

// import { createSlice } from "@reduxjs/toolkit";
// import { updateProfilThunk } from "../Actions/updateAction";

// const initialState = {
//   firstName: "",
//   lastName: "",
//   error: null,
// };

// const updateSlice = createSlice({
//   name: "update",
//   initialState,
//   reducers: {
//     updateProfil: (state, action) => {
//       state.firstName = action.payload.firstName;
//       state.lastName = action.payload.lastName;
//       state.error = null;
//     },
//     updateFailure: (state, action) => {
//       state.error = action.payload;

//       console.log("Erreur lors de la mise à jour du profil utilisateur");
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(updateProfilThunk.fulfilled, (state, action) => {
//       // Maj des propriétés du state en fonction de action.payload
//       state.firstName = action.payload.firstName;
//       state.lastName = action.payload.lastName;
//       state.error = null;
//       console.log("firstName:", state.firstName);
//     });
//     builder.addCase(updateProfilThunk.rejected, (state, action) => {
//       state.error = action.payload;
//       console.log("Erreur lors de la mise à jour du profil utilisateur");
//     });
//   },
// });

// export const { updateProfil, updateFailure } = updateSlice.actions;

// export default updateSlice.reducer;

///*************************ACTIONSTYPE **************/////////////////
///////////////////////////////////////////////////////////
//cf reducer

// export const LOGIN_REQUEST = "LOGIN_REQUEST";
// export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
// export const LOGIN_FAILURE = "LOGIN_FAILURE";

// ///////////test
// export const FETCH_USER_PROFILE_REQUEST = "FETCH_USER_PROFILE_REQUEST";
// export const FETCH_USER_PROFILE_SUCCESS = "FETCH_USER_PROFILE_SUCCESS";
// export const FETCH_USER_PROFILE_FAILURE = "FETCH_USER_PROFILE_FAILURE";

// export const UPDATE_FIRSTNAME = "UPDATE_FIRSTNAME";
// export const UPDATE_LASTNAME = "UPDATE_LASTNAME";
// export const UPDATE_USER_PROFILE_FULFILLED = "UPDATE_USER_PROFILE_FULFILLED";

//********************AUTHREDUCER **********************///
///////////////////////////////////////////////////////////
// // const initialState = { id: "test" };
// // export default function reducer(state = initialState, action) {
// //   switch (action.type) {
// //     case "test":
// //       return { ...state };
// //     default:
// //       return state;
// //   }
// // }

// const initialState = {
//   user: null, // pas d'utilisateur connecté
//   loading: false, // pas de chargement
//   error: null,
// };

// export default function authReducer(state = initialState, action) {
//   switch (action.type) {
//     case "LOGIN_REQUEST": // cf actionsTypes
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       };
//     case "LOGIN_SUCCESS": // cf actionsTypes
//       return {
//         ...state,
//         loading: false,
//         user: action.payload,
//       };
//     case "LOGIN_FAILURE":
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// }

//***************************UPDATEREDUCER ***//////////////
///////////////////////////////////////////////////////////
// const initialState = {
//   firstName: "",
//   lastName: "",
// };

// export default function updateReducer(state = initialState, action) {
//   switch (action.type) {
//     case "UPDATE_FIRSTNAME":
//       return {
//         ...state,
//         firstName: action.payload,
//       };
//     case "UPDATE_LASTNAME":
//       return {
//         ...state,
//         lastName: action.payload,
//       };
//     case "UPDATE_USER_PROFILE_FULFILLED":
//       return {
//         ...state,
//         firstName: action.payload.firstName,
//         lastName: action.payload.lastName,
//       };
//     default:

//       return state;
//   }
// }

//***********************LOGINACTIONS ***//////////////
///////////////////////////////////////////////////////////

//////////////////////////////////////////
//fetch test classique :
// import { loginSuccess, loginFailure } from "../Redux/authSlice";

// //remmeberMe en paramètre au meme titre que email et password

// export function loginAction(store, { email, password }) {
//   fetch("http://localhost:3001/api/v1/user/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   })
//     .then((response) => {
//       if (response.ok) {
//         console.log("reponse fetch loginAction:", response);
//         return response.json();
//       } else {
//         throw new Error("Connexion échouée");
//       }
//     })
//     .then((userData) => {
//       store.dispatch(loginSuccess(userData.body));
//       // on appele le dispatch pour envoyer l'action loginSuccess à Redux avec les données utilisateur userdata, à voir pour mettre le if rememberMe ici pour le stocker dans localstorage.setItem("token", userData.token);
//       console.log("userData du fetch loginAction:", userData);
//     })
//     .catch((error) => {
//       console.error("Erreur de connexion fetch loginAction:", error);
//       // Connexion échouée on envoie l'action loginFailure à Redux
//       store.dispatch(loginFailure());
//     });
// }

///************************USERACTION **/////////////
///////////////////////////////////////////////////////////

// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUserProfileAsync = createAsyncThunk(
//   "user/fetchUserProfile",

//   async (token) => {
//     console.log("Token dans userAction :", token);
//     try {
//       const response = await fetch(
//         "http://localhost:3001/api/v1/user/profile",
//         {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log("Token dans userAction après le fetch :", token);

//       if (response.ok) {
//         const userProfileData = await response.json();
//         console.log("userProfileData du fetchUserProfile:", userProfileData);
//         return userProfileData;
//       } else {
//         throw new Error("Erreur lors du chargement du profil utilisateur");
//       }
//     } catch (error) {
//       console.error("Erreur dans fetch user profile:", error);
//       throw error;
//     }
//   }
// );

///************************SIGNIN **************//
///////////////////////////////////////////////////

////////////////////////////
// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { loginAction } from "../Actions/loginActions";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
// import { useSelector } from "react-redux";

// const SignIn = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isError, setIsError] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const loginToken = useSelector((state) => state.auth.token);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//     document.querySelector(".sign-in_form").classList.remove("error-shake");
//     setIsError(false);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//     document.querySelector(".sign-in_form").classList.remove("error-shake");
//     setIsError(false);
//   };

//   const handleRememberMeChange = (e) => {
//     setRememberMe(e.target.checked);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await loginAction(dispatch, { email: username, password });
//       navigate("/user");
//     } catch (err) {
//       setIsError(true);
//       setErrorMessage("Mauvais e-mail ou mot de passe");
//       document.querySelector(".sign-in_form").classList.add("error-shake");
//     }
//   };

//   useEffect(() => {
//     if (loginToken) {
//       navigate("/user");
//     }
//   }, [loginToken, navigate]);

//   return (
//     <div className="sign-in_container">
//       <div className="form_container">
//         <div className={`sign-in_form ${isError ? "error-shake" : ""}`}>
//           <div className="sign-in_icon">
//             <FontAwesomeIcon icon={faUserCircle} />
//           </div>
//           <h1>Sign In</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="input_form">
//               <label htmlFor="username">Username</label>
//               <input
//                 type="text"
//                 id="username"
//                 value={username}
//                 onChange={handleUsernameChange}
//                 required
//               />
//               <span className="error-message"></span>
//             </div>

//             <div className="input_form">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={handlePasswordChange}
//                 required
//               />
//             </div>

//             <div className="input_form_checkbox">
//               <label htmlFor="rememberMe">
//                 <input
//                   type="checkbox"
//                   id="rememberMe"
//                   checked={rememberMe}
//                   onChange={handleRememberMeChange}
//                 />
//                 Remember me
//               </label>
//             </div>

//             <button type="submit">Sign In</button>
//           </form>
//           {isError && <p className="error-message">{errorMessage}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;
