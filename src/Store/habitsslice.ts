import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
const slice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value++;
    },
    decrement: (state, action) => {
      state.value--;
    },
  },
});
export const {increment, decrement} =  slice.actions;
export default slice.reducer