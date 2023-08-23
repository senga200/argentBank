import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserProfile } from "../Actions/UserAction";

export const fetchUserProfileAsync = createAsyncThunk(
  "user/fetchUserProfile",
  async (token) => {
    return fetchUserProfile(token);
  }
);

const userSlice = createSlice({
  name: "profile",
  initialState: null,
  reducers: {
    // userProfileUpdate: Cette action n'est pas nécessaire car les données sont gérées par fetchUserProfileAsync.fulfilled
  },
  extraReducers: (builder) => {
    //builder pour declarer les reducers
    //addcase : gestionnaire d'action et deux parametres : le type d'action et fonction de rappel pour MAJ le state. fulfilled : action réussie
    builder.addCase(fetchUserProfileAsync.fulfilled, (state, action) => {
      // Met à jour le state avec les données du profil utilisateur
      return action.payload;
    });
  },
});

export default userSlice.reducer;
