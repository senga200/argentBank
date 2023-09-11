import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Routes";

// REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { loginSuccess } from "./Redux/authSlice";
import authReducer from "./Redux/authSlice";
import userSlice from "./Redux/userSlice";

const store = configureStore({
  reducer: {
    auth: authReducer, //auth: authSlice
    profile: userSlice,
  },
});

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
