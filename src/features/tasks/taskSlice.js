import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const task = createSlice({
  name: "tasks",
  initialState: { value: 0 },
  reducers: {
    addtask: {
      reducer(state, action) {
        console.log(state.value);
        state.value += action.payload;
      },
    },
    toggletask: {},
    deletetask: {},
    setfilter: {},
  },
});
export const { addtask, toggletask, deletetask, setfilter } = task.actions;
export default task.reducer;
