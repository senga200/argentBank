import { createSlice } from "@reduxjs/toolkit";

// Initialisation du state //en vérifiant le localStorage
const initialState = {
  //token: localStorage.getItem("token"), // Récupérer le token du localStorage
  token: null,
  isAuthenticated: !!localStorage.getItem("token"), // Vérifier si le token est présent
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      console.log("loginSuccess");
      state.token = action.payload.token; // Mettre à jour le token dans le state
      state.isAuthenticated = true;
    },
    loginFailure: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
    logOut: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token"); // Supprimer le token du localStorage
    },
  },
});

export const { loginSuccess, loginFailure, logOut } = authSlice.actions;

export default authSlice.reducer;
