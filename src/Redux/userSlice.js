import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "profile",
  initialState: { firstName: "", lastName: "" },
  reducers: {
    setProfile: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    setProfileFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { setProfile, setProfileFailure } = userSlice.actions;
