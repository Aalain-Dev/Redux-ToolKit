import { createSlice } from "@reduxjs/toolkit";

export interface Habit {
  id: number;
  name: string;
  frequency: string;
  completedDates: string[];
  createdAt: string;
}

interface HabitsState {
  habits: Habit[];
}

const initialState: HabitsState = {
  habits: [],
};

const HabitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: () => {},
  },
});
export const { addHabit } = HabitSlice.actions;
export default HabitSlice.reducer;