import { loginSuccess, loginFailure } from "../Redux/authSlice";

export async function loginAction(store, { username, password, rememberMe }) {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        // indiquer le type de contenu de la requête POST est de type JSON
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      // Connexion réussie
      const userData = await response.json();
      // on appele le dispatch pour envoyer l'action loginSuccess à Redux avec les données utilisateur userdata
      store.dispatch(loginSuccess(userData));
    } else {
      // Connexion échouée on envoie l'action loginFailure à Redux
      store.dispatch(loginFailure());
    }
  } catch (error) {
    console.error("Error de connexion loginActions", error);
    store.dispatch(loginFailure());
  }
}
