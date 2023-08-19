import { updateProfile } from "../Redux/userSlice";

export async function fetchUserProfile(store, token) {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const userProfileData = await response.json();
      console.log("userProfileData dis moi que c est ok", userProfileData);
      store.dispatch(updateProfile(userProfileData));
      //return userProfileData;
    } else {
      // throw new Error("erreur dans fetch user profile");
      // Connexion échouée on envoie l'action loginFailure à Redux
      store.dispatch(updateProfile());
    }
  } catch (error) {
    console.error("Erreur dans fetch user profile:", error);
    //throw error;
    store.dispatch(updateProfile());
  }
}
