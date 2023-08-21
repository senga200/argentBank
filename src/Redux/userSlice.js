import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserProfile } from "../Actions/UserAction";

// Action asynchrone pour charger le profil utilisateur
export const fetchUserProfileAsync = createAsyncThunk(
  // fonction de l'action ??
  "user/fetchUserProfile",
  async (token) => {
    // ici rien ne se passe
    return fetchUserProfile(token);
  }
);

const userSlice = createSlice({
  name: "profile",
  initialState: null,
  reducers: {
    userProfileUpdate: (state, action) => {
      // ici rien ne se passe
      console.log("userProfileUpdate", action.payload);
      state.firstName = action.firstName;
    },
  },
  // builder pour declarer les reducers et actions
  extraReducers: (builder) => {
    //builder pour declarer les reducers
    console.log("builder", builder);
    // addCase : gestionnaire d'action et deux parametres : le type d'action et fonction de rappel pour MAJ le state. fulfilled : action réussie
    builder.addCase(fetchUserProfileAsync.fulfilled, (state, action) => {
      //ici rien ne se passe
      return action.payload;
    });
  },
});

export default userSlice.reducer;
