import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Routes";
//import authReducer from "./Reducer/authReducer";

// REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
//import rootReducer from "./Reducer/indexReducer";

import authReducer from "./Redux/authSlice";
import userReducer from "./Redux/userSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: userReducer,
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
