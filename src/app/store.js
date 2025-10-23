import { configureStore } from "@reduxjs/toolkit";
import task from "../features/tasks/taskSlice";
export const store = configureStore({
  reducer: {
    task: task,
  },
});
