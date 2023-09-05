import React from "react";
//import ReactDOM from 'react-dom';
import { createBrowserRouter } from "react-router-dom";
import Header from "../Components/Header";
import HeaderUser from "../Components/HeaderUser";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import Err404 from "../Pages/Err404";
import User from "../Pages/User";
import Footer from "../Components/Footer";

// import { AuthContextProvider } from './context/AuthContext'
// import { UserContextProvider } from './context/UserContext'
// import { BankContextProvider } from './context/BankContext'
// import { TransactionContextProvider } from './context/TransactionContext'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
        <Footer />
      </>
    ),
  },

  {
    path: "/sign-in",
    element: (
      <>
        <Header />
        <SignIn />
        <Footer />
      </>
    ),
  },
  {
    path: "/user",
    element: (
      <>
        <HeaderUser />
        <User />
        <Footer />
      </>
    ),
  },

  {
    path: "/*",
    element: (
      <>
        <Header />
        <Err404 />
        <Footer />
      </>
    ),
  },
]);

export default router;
