export async function fetchUserProfile(store, token) {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "GET",
      headers: {
        // sensé utiliser le token pour authentifier l'utilisateur
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const userProfileData = await response.json();
      console.log("userProfileData:", userProfileData);
      store.dispatch({ type: "userProfileUpdate", payload: userProfileData });
    } else {
      throw new Error("Erreur lors du chargement du profil utilisateur");
    }
  } catch (error) {
    console.error("Erreur dans fetch user profile:", error);
    throw error;
  }
}
