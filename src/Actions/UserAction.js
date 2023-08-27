// import { createAsyncThunk } from "@reduxjs/toolkit";

// export async function fetchUserProfile(token) {
//   try {
//     const response = await fetch("http://localhost:3001/api/v1/user/profile", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     if (response.ok) {
//       const userProfileData = await response.json();
//       console.log("userProfileData du fetchUserProfile:", userProfileData);
//       return userProfileData;
//     } else {
//       throw new Error("Erreur lors du chargement du profil utilisateur");
//     }
//   } catch (error) {
//     console.error("Erreur dans fetch user profile:", error);
//     throw error;
//   }
// }

// /////////////////////////////

// export const fetchUserProfileAsync = createAsyncThunk(
//   "user/fetchUserProfile", // type d'action : /pending, /rejected, /fulfilled
//   async (token) => {
//     // si l'action réussie, on retourne les données du profil utilisateur (voir userSlice.js)
//     return fetchUserProfile(token);
//   }
// );

import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserProfileAsync = createAsyncThunk(
  "user/fetchUserProfile",
  async (token) => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const userProfileData = await response.json();
        console.log("userProfileData du fetchUserProfile:", userProfileData);
        return userProfileData;
      } else {
        throw new Error("Erreur lors du chargement du profil utilisateur");
      }
    } catch (error) {
      console.error("Erreur dans fetch user profile:", error);
      throw error;
    }
  }
);
