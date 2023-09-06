// import { createSlice } from "@reduxjs/toolkit";
// import { updateUserProfileAsync } from "../Actions/updateAction";

// const initialState = {
//   firstName: "",
//   lastName: "",
// };

// const updateSlice = createSlice({
//   name: "update",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(updateUserProfileAsync.fulfilled, (state, action) => {
//       return action.payload;
//     });
//   },
// });

// export default updateSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { updateUserProfileAsync } from "../Actions/updateAction";

const initialState = {
  // Initialisez les propriétés que vous souhaitez suivre ici, par exemple :
  firstName: "",
  lastName: "",
};

const updateSlice = createSlice({
  name: "update",
  initialState,
  reducers: {
    updateFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    updateLastName: (state, action) => {
      state.lastName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateUserProfileAsync.fulfilled, (state, action) => {
      // Mettre à jour les propriétés du state en fonction de action.payload
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      console.log("firstName:", state.firstName);
    });
  },
});

export const { updateFirstName, updateLastName } = updateSlice.actions;

export default updateSlice.reducer;
