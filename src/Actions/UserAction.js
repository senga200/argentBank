export async function fetchUserProfile(token) {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const userProfileData = await response.json();
      console.log("userProfileData du fetchUserProfile:", userProfileData);
      return userProfileData; // Retourne les données au lieu de dispatch donc suppresssion de store.dispatch
    } else {
      throw new Error("Erreur lors du chargement du profil utilisateur");
    }
  } catch (error) {
    console.error("Erreur dans fetch user profile:", error);
    throw error;
  }
}
