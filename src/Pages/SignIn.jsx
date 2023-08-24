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
  //const [loginFailure, setLoginFailure] = useState(false);
  //const [rememberMe, setRememberMe] = useState(false);

  //const dispatch = useDispatch();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value); // récupère la valeur saisie
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const handleRememberMeChange = (e) => {
  //   setRememberMe(e.target.checked);
  // };

  const store = useStore(); // accès au store
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // mettre rememberMe dans le store en paramètre de loginAction
      await loginAction(store, { email: username, password }); // appel de loginAction -> on recupere le username et password saisis par l'utilisateur et le store en paramètre pour pouvoir accéder au dispatch et au state du store dans loginAction (voir loginAction.js) et donc à l'objet token qui est dans le state du store (voir loginReducer.js)
      navigate("/user");
    } catch (err) {
      alert("Mauvais e-mail ou mot de passe");
    }
  };

  //const token = useSelector((state) => state.login.token);

  return (
    <div className="sign-in_container ">
      <div className="form_container">
        <div className="sign-in_form">
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
                  //checked={rememberMe}
                  // onChange={handleRememberMeChange}
                />
                Remember me
              </label>
            </div>
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
