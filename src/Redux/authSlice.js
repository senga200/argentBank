import { createSlice } from "@reduxjs/toolkit";

// Initialisation du state //en vérifiant le localStorage
const initialState = {
  token: null,
  // Vérifier si le token est présent
  isAuthenticated: localStorage.getItem("token") !== null,
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
    // rememberMe: (state, action) => {
    //   console.log("rememberMe");
    //   state.token = action.payload.token; // Mettre à jour le token dans le state
    //   state.isAuthenticated = true;
    // },
  },
});

export const { loginSuccess, loginFailure, logOut } = authSlice.actions;

export default authSlice.reducer;
