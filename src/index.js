import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Routes";
import { loginSuccess } from "./Redux/authSlice";
//import { createBrowserHistory } from "history";
//import authReducer from "./Reducer/authReducer";

// REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import updateSlice from "./Redux/updateSlice";
//import rootReducer from "./Reducer/indexReducer";

import authReducer from "./Redux/authSlice";
import userSlice from "./Redux/userSlice";

const store = configureStore({
  reducer: {
    auth: authReducer, //auth: authSlice
    profile: userSlice,
    update: updateSlice,
  },
  //mettre false en production à cause du store
  devTools: true,
});

//vérifier si le token est présent dans le local storage lors de la visite ultérieure de la page

window.addEventListener("load", () => {
  const token = localStorage.getItem("token");
  if (token) {
    store.dispatch(loginSuccess({ token: token }));
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
console.log("store de index", store.getState());

reportWebVitals();
