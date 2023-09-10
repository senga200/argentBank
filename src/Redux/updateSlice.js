/////////////////////essai du 09/09
import { createSlice } from "@reduxjs/toolkit";
import { updateUserProfileAsync } from "../Actions/updateAction";

const initialState = {
  firstName: "",
  lastName: "",
};

const updateSlice = createSlice({
  name: "update",
  initialState,
  reducers: {
    updateFirstName: (state, action) => {
      state.firstName = action.payload;
      console.log("action.payload dans le slice", action.payload);
    },
    updateLastName: (state, action) => {
      state.lastName = action.payload;
    },
    updateFailure: (state, action) => {
      state.error = action.payload;

      console.log("Erreur lors de la mise à jour du profil utilisateur");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateUserProfileAsync.fulfilled, (state, action) => {
      // Mettre à jour les propriétés du state en fonction de action.payload
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      console.log("firstName:", state.firstName);
    });
    builder.addCase(updateUserProfileAsync.rejected, (state, action) => {
      state.error = action.error.message;
      console.log("Erreur lors de la mise à jour du profil utilisateur");
    });
  },
});

export const { updateFirstName, updateLastName, updateFailure } =
  updateSlice.actions;

export default updateSlice.reducer;
