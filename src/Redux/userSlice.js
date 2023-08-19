import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "profile",
  initialState: null,
  reducers: {
    updateProfile: (state, action) => {
      console.log("action", action);
      return action.payload;
    },
  },
});

export const { updateProfile } = userSlice.actions;
export default userSlice.reducer;
