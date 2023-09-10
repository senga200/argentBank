import React from "react";
import { createBrowserRouter } from "react-router-dom";
// imprt { Navigate } from "react-router-dom";
import Header from "../Components/Header";
import HeaderUser from "../Components/HeaderUser";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import Err404 from "../Pages/Err404";
import User from "../Pages/User";
import Footer from "../Components/Footer";

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

//////////////essai pour rester connecté/////////////////////
// const isLoggedIn = window.localStorage.getItem("loggedIn");
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         <Home />
//         <Footer />
//       </>
//     ),
//   },

//   {
//     path: "/sign-in",
//     element: isLoggedIn ? (
//       <Navigate to="/user" />
//     ) : (
//       <>
//         <Header />
//         <SignIn />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "/user",
//     element: isLoggedIn ? (
//       <>
//         <HeaderUser />
//         <User />
//       </>
//     ) : (
//       <Navigate to="/sign-in" />
//     ),
//   },

//   {
//     path: "/*",
//     element: (
//       <>
//         <Header />
//         <Err404 />
//         <Footer />
//       </>
//     ),
//   },
// ]);

// export default router;
