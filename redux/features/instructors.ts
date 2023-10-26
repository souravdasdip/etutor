import { InstructorProps } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const name = "instructor";

const initialState: InstructorProps[] = [
  {
    image: "https://via.placeholder.com/244x244",
    name: "Devon Lane",
    position: "Senior Developer",
    rating: "4.5",
    student_number: 854,
  },
  {
    image: "https://via.placeholder.com/244x244",
    name: "Devon Lane",
    position: "Senior Developer",
    rating: "4.5",
    student_number: 854,
  },
  {
    image: "https://via.placeholder.com/244x244",
    name: "Devon Lane",
    position: "Senior Developer",
    rating: "4.5",
    student_number: 854,
  },
  {
    image: "https://via.placeholder.com/244x244",
    name: "Devon Lane",
    position: "Senior Developer",
    rating: "4.5",
    student_number: 854,
  },
];

const instructorSlice = createSlice({
  name,
  initialState,
  reducers: {},
});

export const instructorActions = instructorSlice.actions;
export const instructorReducer = instructorSlice.reducer;
