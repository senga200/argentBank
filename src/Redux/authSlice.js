import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    token: null, // null ca veut dire que l'utilisateur n'est pas connecté et qu'il n'a pas de token, donc besoin de isAuthenticated: false, ????
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    loginFailure: (state) => {
      //pas besion de d'action et de payload
      state.token = null;
      state.isAuthenticated = false;
    },
    // logout: (state) => {
    //   state.token = null;
    //   state.isAuthenticated = false;
    // },
  },
});
// ajouter logout dans l'export
export const { loginSuccess, loginFailure } = authSlice.actions; // ou = authSlice ??

export default authSlice.reducer; // ou = authSlice ??
