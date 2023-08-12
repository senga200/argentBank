// import { loginSuccess, loginFailure } from "../Redux/authSlice";

// export async function loginAction(store, { username, password, rememberMe }) {
//   try {
//     const response = await fetch("http://localhost:3001/api/v1/user/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, password }),
//     });

//     if (response.ok) {
//       // Connexion réussie
//       const userData = await response.json();
//       store.dispatch(loginSuccess(userData));
//     } else {
//       // Connexion échouée
//       store.dispatch(loginFailure());
//     }
//   } catch (error) {
//     console.error("Error during login:", error);
//     store.dispatch(loginFailure());
//   }
// }
