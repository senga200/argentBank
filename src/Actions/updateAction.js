// ///////////////////////////////essai du 09/09
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import {
//   updateFirstName,
//   updateLastName,
//   updateFailure,
// } from "../Redux/updateSlice";

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
//       console.log("hello c'est ok !");
//       const userData = await response.json();
//       //store.dispatch(updateUserProfile(userData.body));
//       store.dispatch(updateFirstName(userData.body.firstName));
//       store.dispatch(updateLastName(userData.body.lastName));
//     }
//   } catch (error) {
//     console.error(
//       "Erreur lors de la mise à jour du profil utilisateur :",
//       error.message
//     );
//     store.dispatch(updateFailure());
//     console.log("hello c'est pas ok !", error);

//     throw error;
//   }
// }

// // export const updateUserProfileAsync = createAsyncThunk(
// //   "user/updateUserProfile",
// //   async ({ store, firstName, lastName }) => {
// //     try {
// //       console.log("le thunk est ok !", updateUserProfile);
// //       return updateUserProfile(store, { firstName, lastName });
// //     } catch (error) {
// //       console.error("Erreur lors de la mise à jour du profil:", error);
// //       throw error;
// //     }
// //   }
// // );

// export const updateUserProfileAsync = createAsyncThunk(
//   "user/updateUserProfile",
//   async ({ store, firstName, lastName }) => {
//     try {
//       console.log("le thunk est ok !", updateUserProfile);
//       const updatedUserData = await updateUserProfile(store, {
//         firstName,
//         lastName,
//       });

//       return updatedUserData;
//     } catch (error) {
//       console.error("Erreur lors de la mise à jour du profil:", error);
//       throw error;
//     }
//   }
// );
