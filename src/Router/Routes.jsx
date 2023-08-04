import React from "react";
//import ReactDOM from 'react-dom';
import { createBrowserRouter } from "react-router-dom";
import Header from "../Components/Header";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
// import Login from '../Pages/Login'
// import Profile from '../Pages/Profile'
// import Transfer from '../Pages/Transfer'
// import Deposit from '../Pages/Deposit'
// import Withdrawal from '../Pages/Withdrawal'
// import NotFound from '../Pages/NotFound'
// import PrivateRoute from './PrivateRoute'
// import PublicRoute from './PublicRoute'
// import './index.css'
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
    path: "/*",
    element: <h1>404</h1>,
  },
  // {
  //   path: "/logement/:id",
  //   element:(
  //     <>
  //     {/* <Navbar />

  //     <Footer /> */}
  //     </>
  //   )

  // },
  // {
  //   path: "/about",
  //   element:(
  //     <>
  //     {/* <Navbar />

  //     <Footer /> */}
  //     </>
  //   )

  // },
  // { path: "*", element: (
  //   <>
  //   <Navbar />
  //   <Error />
  //   </>
  // ) },
]);

export default router;
