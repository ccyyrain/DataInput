import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  componentValues: "",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setComponentValues: (state, action) => {
      state.componentValues = action.payload;
    },
  },
});

export const { setComponentValues } = appSlice.actions;

export default appSlice.reducer;
