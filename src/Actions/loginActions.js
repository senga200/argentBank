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
      console.log("reponse fetch loginAction:", response);
      const userData = await response.json();
      store.dispatch(loginSuccess(userData.body));
      window.localStorage.setItem("token", userData.body.token);
      window.localStorage.setItem("connecté", true);

      console.log("localStorage:", window.localStorage.getItem("token"));
      console.log(
        "et puis ça c'est le token du userData du fetch loginAction:",
        userData.body.token
      );

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
