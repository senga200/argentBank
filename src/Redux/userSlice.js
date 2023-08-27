import { createSlice } from "@reduxjs/toolkit";
import { fetchUserProfileAsync } from "../Actions/UserAction";

const userSlice = createSlice({
  name: "profile",
  initialState: null,
  reducers: {
    // userProfileUpdate: Cette action n'est pas nécessaire car les données sont gérées par fetchUserProfileAsync.fulfilled
  },
  extraReducers: (builder) => {
    //extraReducers : interception des actions générées par createAsyncThunk
    //builder pour construire des reducers supplementaires qui ne sont pas générées par createSlice
    //addcase : gestionnaire d'action et deux parametres : le type d'action et fonction de rappel pour MAJ le state. fulfilled : action réussie
    builder.addCase(fetchUserProfileAsync.fulfilled, (state, action) => {
      // Met à jour le state avec les données du profil utilisateur
      return action.payload;
    });
  },
});

export default userSlice.reducer;
