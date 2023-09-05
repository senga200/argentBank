import { loginSuccess, loginFailure } from "../Redux/authSlice";

//export async function loginAction(store, { email, password }) {
export async function loginAction(store, { email, password, rememberMe }) {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      console.log("reponse fetch loginAction:", response);
      const userData = await response.json();
      store.dispatch(loginSuccess(userData.body));
      // on appele le dispatch pour envoyer l'action loginSuccess à Redux avec les données utilisateur userdata, à voir pour mettre le if rememberMe ici pour le stocker dans localstorage.setItem("token", userData.token);
      console.log("userData du fetch loginAction:", userData);
      //condition pour le rememberMe
      if (rememberMe) {
        localStorage.setItem("token", userData.body.token);
        console.log("rememberMe:", rememberMe);
      }
    } else {
      throw new Error("erreur dans ton fetch !!! ");
    }
  } catch (error) {
    console.error(
      "Erreur de connexion loginAction: mauvais mot de passe ?",
      error
    );
    console.log("erreur dans ton fetch !!! mauvais mot de passe ? d'email ? ");
    // Connexion échouée on envoie l'action loginFailure à Redux
    store.dispatch(loginFailure());
    throw error;
  }
}

//////////////////////////////////////////
//fetch test classique :
// import { loginSuccess, loginFailure } from "../Redux/authSlice";

// //remmeberMe en paramètre au meme titre que email et password

// export function loginAction(store, { email, password }) {
//   fetch("http://localhost:3001/api/v1/user/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   })
//     .then((response) => {
//       if (response.ok) {
//         console.log("reponse fetch loginAction:", response);
//         return response.json();
//       } else {
//         throw new Error("Connexion échouée");
//       }
//     })
//     .then((userData) => {
//       store.dispatch(loginSuccess(userData.body));
//       // on appele le dispatch pour envoyer l'action loginSuccess à Redux avec les données utilisateur userdata, à voir pour mettre le if rememberMe ici pour le stocker dans localstorage.setItem("token", userData.token);
//       console.log("userData du fetch loginAction:", userData);
//     })
//     .catch((error) => {
//       console.error("Erreur de connexion fetch loginAction:", error);
//       // Connexion échouée on envoie l'action loginFailure à Redux
//       store.dispatch(loginFailure());
//     });
// }
