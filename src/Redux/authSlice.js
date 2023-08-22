// import { createSlice } from "@reduxjs/toolkit";

// const authSlice = createSlice({
//   name: "authSlice",
//   initialState: {
//     token: null,
//     // null ca veut dire que l'utilisateur n'est pas connecté et qu'il n'a pas de token, donc besoin de isAuthenticated: false, ????
//     // isAuthenticated: false,
//   },
//   reducers: {
//     loginSuccess: (state, action) => {
//       console.log("loginSuccess");
//       state.token = action.token;
//       //state.token = action.payload.token;
//       console.log("action", action);
//       state.isAuthenticated = true;
//     },
//     loginFailure: (state) => {
//       //pas besion de d'action et de payload
//       state.token = null;
//       state.isAuthenticated = false;
//     },
//     // logout: (state) => {
//     //   state.token = null;
//     //   state.isAuthenticated = false;
//     // },
//   },
// });
// // ajouter logout dans l'export
// export const { loginSuccess, loginFailure } = authSlice.actions;

// export default authSlice.reducer;

// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Initialisation du state en vérifiant le localStorage
const initialState = {
  token: localStorage.getItem("token"), // Récupérer le token du localStorage
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
