import { createSlice } from "@reduxjs/toolkit";
import { updateUserProfileAsync } from "../Actions/updateAction";

const updateSlice = createSlice({
  name: "update",
  initialState: null,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateUserProfileAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default updateSlice.reducer;
