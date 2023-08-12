import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Routes";
import authReducer from "./Reducer/authReducer";

// REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducer/indexReducer";
//import authReducer from "./slices/authSlice"; // Importez le authReducer depuis le bon chemin

// const store = configureStore({
//   reducer: {
//     root: rootReducer,
//     auth: authReducer,
//   // mettre false en production à cause du store
//   devTools: true,
// });

const store = configureStore({
  reducer: rootReducer,
  auth: authReducer,
  //mettre false en production à cause du store
  devTools: true,
});

console.log("store", store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
