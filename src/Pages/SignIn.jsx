import React from "react";
import "./SignIn.css";
//imoort de loginAction pour la connexion
import { loginAction } from "../Actions/loginActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { useStore } from "react-redux";
import { useNavigate } from "react-router-dom";

//import { useSelector } from "react-redux";
// import { signIn } from "../store/user/actions";

const LoginForm = () => {
  const [username, setUsername] = useState(""); // récupère le username saisi
  const [password, setPassword] = useState(""); // récupère le password saisi
  const [isError, setIsError] = useState(false); //gerer l alerte*
  const [errorMessage, setErrorMessage] = useState("");

  //const [loginFailure, setLoginFailure] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  //const token = useSelector((state) => state.login.token);
  //const dispatch = useDispatch();

  const store = useStore(); // accès au store
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value); // récupère la valeur saisie
    // Supprimer la classe error-shake lors de la saisie
    document.querySelector(".sign-in_form").classList.remove("error-shake");
    setIsError(false); // Réinitialiser l'état d'erreur
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // Supprimer la classe error-shake lors de la saisie
    document.querySelector(".sign-in_form").classList.remove("error-shake");
    setIsError(false); // Réinitialiser l'état d'erreur
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
    console.log("Remember me:", e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("rememberMe", e.target.checked);
    try {
      // mettre rememberMe dans le store en paramètre de loginAction
      await loginAction(store, { email: username, password }); // appel de loginAction -> on recupere le username et password saisis par l'utilisateur et le store en paramètre pour pouvoir accéder au dispatch et au state du store dans loginAction (voir loginAction.js) et donc à l'objet token qui est dans le state du store (voir loginReducer.js)
      navigate("/user");
    } catch (err) {
      //alert("Mauvais e-mail ou mot de passe");
      setIsError(true);
      setErrorMessage("Mauvais e-mail ou mot de passe");
      document.querySelector(".sign-in_form").classList.add("error-shake");
    }
  };

  return (
    <div className="sign-in_container ">
      <div className="form_container">
        {/* <div className="sign-in_form"> */}
        <div className={`sign-in_form ${isError ? "error-shake" : ""}`}>
          <div className="sign-in_icon">
            <FontAwesomeIcon icon={faUserCircle} />
          </div>

          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input_form">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                required
              />
              <span className="error-message"></span>
            </div>

            <div className="input_form">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>

            <div className="input_form_checkbox">
              <label htmlFor="rememberMe">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                Remember me
              </label>
            </div>

            <button type="submit">Sign In</button>
          </form>
          {isError && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

////////////////////////////
// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { loginAction } from "../Actions/loginActions";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
// import { useSelector } from "react-redux";

// const SignIn = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isError, setIsError] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const loginToken = useSelector((state) => state.auth.token);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//     document.querySelector(".sign-in_form").classList.remove("error-shake");
//     setIsError(false);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//     document.querySelector(".sign-in_form").classList.remove("error-shake");
//     setIsError(false);
//   };

//   const handleRememberMeChange = (e) => {
//     setRememberMe(e.target.checked);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await loginAction(dispatch, { email: username, password });
//       navigate("/user");
//     } catch (err) {
//       setIsError(true);
//       setErrorMessage("Mauvais e-mail ou mot de passe");
//       document.querySelector(".sign-in_form").classList.add("error-shake");
//     }
//   };

//   useEffect(() => {
//     if (loginToken) {
//       navigate("/user");
//     }
//   }, [loginToken, navigate]);

//   return (
//     <div className="sign-in_container">
//       <div className="form_container">
//         <div className={`sign-in_form ${isError ? "error-shake" : ""}`}>
//           <div className="sign-in_icon">
//             <FontAwesomeIcon icon={faUserCircle} />
//           </div>
//           <h1>Sign In</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="input_form">
//               <label htmlFor="username">Username</label>
//               <input
//                 type="text"
//                 id="username"
//                 value={username}
//                 onChange={handleUsernameChange}
//                 required
//               />
//               <span className="error-message"></span>
//             </div>

//             <div className="input_form">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={handlePasswordChange}
//                 required
//               />
//             </div>

//             <div className="input_form_checkbox">
//               <label htmlFor="rememberMe">
//                 <input
//                   type="checkbox"
//                   id="rememberMe"
//                   checked={rememberMe}
//                   onChange={handleRememberMeChange}
//                 />
//                 Remember me
//               </label>
//             </div>

//             <button type="submit">Sign In</button>
//           </form>
//           {isError && <p className="error-message">{errorMessage}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;
