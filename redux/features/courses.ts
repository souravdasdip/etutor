import { CourseProps } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const name = "courses";

const initialState: CourseProps[] = [
  {
    title: "Machine Learning A-Z™: Hands-On Python & R In Data...",
    price: 57,
    rating: 5,
    cat: "DESIGN",
    image: "https://via.placeholder.com/244x183",
    enrolled: "265.7K",
  },
  {
    title: "Machine Learning A-Z™: Hands-On Python & R In Data...",
    price: 57,
    rating: 5,
    cat: "DESIGN",
    image: "https://via.placeholder.com/244x183",
    enrolled: "265.7K",
  },
  {
    title: "Machine Learning A-Z™: Hands-On Python & R In Data...",
    price: 57,
    rating: 5,
    cat: "DESIGN",
    image: "https://via.placeholder.com/244x183",
    enrolled: "265.7K",
  },
  {
    title: "Machine Learning A-Z™: Hands-On Python & R In Data...",
    price: 57,
    rating: 5,
    cat: "DESIGN",
    image: "https://via.placeholder.com/244x183",
    enrolled: "265.7K",
  },
  {
    title: "Machine Learning A-Z™: Hands-On Python & R In Data...",
    price: 57,
    rating: 5,
    cat: "DESIGN",
    image: "https://via.placeholder.com/244x183",
    enrolled: "265.7K",
  },
  {
    title: "Machine Learning A-Z™: Hands-On Python & R In Data...",
    price: 57,
    rating: 5,
    cat: "DESIGN",
    image: "https://via.placeholder.com/244x183",
    enrolled: "265.7K",
  },
  {
    title: "Machine Learning A-Z™: Hands-On Python & R In Data...",
    price: 57,
    rating: 5,
    cat: "DESIGN",
    image: "https://via.placeholder.com/244x183",
    enrolled: "265.7K",
  },
  {
    title: "Machine Learning A-Z™: Hands-On Python & R In Data...",
    price: 57,
    rating: 5,
    cat: "DESIGN",
    image: "https://via.placeholder.com/244x183",
    enrolled: "265.7K",
  },
];

const coursesSlice = createSlice({
  name,
  initialState,
  reducers: {},
});

export const coursesActions = coursesSlice.actions;
export const coursesReducer = coursesSlice.reducer;
