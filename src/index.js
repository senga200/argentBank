import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Routes";
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
console.log("store de index", store.getState());

reportWebVitals();
