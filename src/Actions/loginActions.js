// import { loginSuccess, loginFailure } from "../Redux/authSlice";

// export async function loginAction(store, { email, password, rememberMe }) {
//   try {
//     const response = await fetch("http://localhost:3001/api/v1/user/login", {
//       method: "POST",
//       headers: {
//         // type de contenu de la requête POST est de type JSON
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     if (response.ok) {
//       // Connexion réussie
//       const userData = await response.json();
//       // on appele le dispatch pour envoyer l'action loginSuccess à Redux avec les données utilisateur userdata
//       store.dispatch(loginSuccess(userData.body));
//     } else {
//       // Connexion échouée on envoie l'action loginFailure à Redux
//       store.dispatch(loginFailure());
//     }
//   } catch (error) {
//     console.error("Error de connexion loginActions", error);
//     store.dispatch(loginFailure());
//   }
// }

import { loginSuccess, loginFailure } from "../Redux/authSlice";

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
      const userData = await response.json();
      // Stocker le token dans le localStorage si rememberMe est vrai
      if (rememberMe) {
        localStorage.setItem("token", userData.token);
      }
      store.dispatch(loginSuccess(userData.body));
    } else {
      store.dispatch(loginFailure());
    }
  } catch (error) {
    console.error("Error de connexion loginActions", error);
    store.dispatch(loginFailure());
  }
}
