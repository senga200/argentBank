import React from "react";
import "./SignIn.css";
//imoort de loginActions pour la connexion
import { loginAction } from "../Actions/loginActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { useStore } from "react-redux";
import { useNavigate } from "react-router-dom";

//import { useSelector } from "react-redux";

// import { signIn } from "../store/user/actions";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  //const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const store = useStore();
  const handleSubmit = (e) => {
    e.preventDefault();
    loginAction(store, { username, password, rememberMe });
    navigate("/dashboard"); // ou user
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
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
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
