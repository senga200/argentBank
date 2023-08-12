import React from "react";
//import ReactDOM from 'react-dom';
import { createBrowserRouter } from "react-router-dom";
import Header from "../Components/Header";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import User from "../Pages/User";

// import { AuthContextProvider } from './context/AuthContext'
// import { UserContextProvider } from './context/UserContext'
// import { BankContextProvider } from './context/BankContext'
// import { TransactionContextProvider } from './context/TransactionContext'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/sign-in",
    element: (
      <>
        <Header />
        <SignIn />
      </>
    ),
  },
  {
    path: "/user",
    element: (
      <>
        <Header />
        <User />
      </>
    ),
  },

  {
    path: "/*",
    element: <h1>404</h1>,
  },
]);

export default router;
