// authActions.js
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionsTypes";

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (userData) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userData,
  };
};

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};

export const loginAction = ({ username, password, rememberMe }) => {
  return async (dispatch) => {
    dispatch(loginRequest());

    try {
      // Ici, vous effectuerez une requête vers votre serveur pour authentifier l'utilisateur.
      // Par exemple, vous pouvez utiliser fetch ou Axios pour envoyer les informations d'identification au serveur.
      // Le serveur vérifiera les informations et renverra une réponse.

      // Exemple d'utilisation de fetch (vous devrez adapter cela à votre backend):
      const response = await fetch("votre/url/de/connexion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Connexion réussie
        const userData = await response.json();
        dispatch(loginSuccess(userData));
      } else {
        // Connexion échouée
        const errorData = await response.json();
        dispatch(loginFailure(errorData.message));
      }
    } catch (error) {
      // Erreur lors de la connexion
      dispatch(loginFailure("An error occurred during login."));
    }
  };
};

export default loginAction;

// //test
// export const LOGIN_REQUEST = "LOGIN_REQUEST";
// export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
// export const LOGIN_FAILURE = "LOGIN_FAILURE";

// export const loginRequest = () => {
//   return {
//     type: LOGIN_REQUEST,
//   };
// };

// export const loginSuccess = (userData) => {
//   return {
//     type: LOGIN_SUCCESS,
//     payload: userData,
//   };
// };

// export const loginFailure = (error) => {
//   return {
//     type: LOGIN_FAILURE,
//     payload: error,
//   };
// };

// export const loginAction = ({ username, password, rememberMe }) => {
//   return async (dispatch) => {
//     dispatch(loginRequest());

//     try {
//       // Simulation d'un délai pour simuler une requête asynchrone
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       // Affichage des valeurs dans la console
//       console.log("Username:", username);
//       console.log("Password:", password);
//       console.log("Remember Me:", rememberMe);

//       // Affichage d'une action de succès (simulée)
//       dispatch(
//         loginSuccess({ username: "JohnDoe", email: "john@example.com" })
//       );
//     } catch (error) {
//       // Affichage d'une action d'échec (simulée)
//       dispatch(loginFailure("An error occurred during login."));
//     }
//   };
// };
