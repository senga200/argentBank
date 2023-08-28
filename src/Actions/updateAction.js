import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateUserProfileAsync = createAsyncThunk(
  "user/updateUserProfile",
  async ({ token, firstName, lastName }) => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            firstName,
            lastName,
          }),
        }
      );

      if (response.ok) {
        const updatedUserProfile = await response.json();
        return updatedUserProfile;
      } else {
        throw new Error("Erreur lors de la mise à jour du profil");
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour du profil:", error);
      throw error;
    }
  }
);

// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const updateUserProfileAsync = createAsyncThunk(
//   "user/updateUserProfile",
//   async ({ token, firstName, lastName }) => {
//     try {
//       await updateUserProfile(token, firstName, lastName);
//     } catch (error) {
//       console.error("Erreur lors de la mise à jour du profil:", error);
//       throw error;
//     }
//   }
// );

// async function updateUserProfile(token, firstName, lastName) {
//   try {
//     await fetch(`http://localhost:3001/api/v1/user/profile`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ firstName, lastName }),
//     });
//   } catch (error) {
//     console.error(
//       "Erreur lors de la mise à jour du profil utilisateur :",
//       error.message
//     );
//     throw error;
//   }
// }
