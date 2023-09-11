import React from "react";
import "./SignIn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess, loginFailure } from "../Redux/authSlice";

const LoginForm = () => {
  const [username, setUsername] = useState(""); // récupère le username saisi
  const [password, setPassword] = useState(""); // récupère le password saisi
  const [isError, setIsError] = useState(false); //gerer l alerte*
  const [errorMessage, setErrorMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // récupère la valeur saisie et supprimer la classe error-shake lors de la saisie
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    document.querySelector(".sign-in_form").classList.remove("error-shake");
    setIsError(false); // Réinitialiser l'état d'erreur
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
    fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: username, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("erreur dans ton fetch !!! ");
        }
        return response.json();
      })
      .then((response) => {
        console.log("reponse fetch loginAction:", response);
        dispatch(loginSuccess(response.body));
        console.log("localStorage:", window.localStorage.getItem("token"));
        console.log(
          "et puis ça c'est le token du userData du fetch loginAction:",
          response.body.token
        );

        //condition pour le rememberMe
        if (rememberMe) {
          localStorage.setItem("token", response.body.token);
          console.log("rememberMe:", rememberMe);
        }
        navigate("/user");
      })
      .catch((error) => {
        setIsError(true);
        setErrorMessage("Mauvais e-mail ou mot de passe");
        document.querySelector(".sign-in_form").classList.add("error-shake");
        dispatch(loginFailure());
      });
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
