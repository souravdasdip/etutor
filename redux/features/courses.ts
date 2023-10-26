import { CourseProps } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const name = "courses";

const initialState: CourseProps[] = [
  {
    title: "Machine Learning A-Z™: Hands-On Python & R In Data...",
    price: 57,
    rating: 5.0,
    cat: "DESIGN",
    image: "https://via.placeholder.com/244x183",
    enrolled: "5.7K",
  },
  {
    title: "Beginner to Pro in Excel: Financial Modeling and Valuati...",
    price: 57,
    rating: 4.7,
    cat: "TECH",
    image: "https://via.placeholder.com/244x183",
    enrolled: "152.2K",
  },
  {
    title: "The Python Mega Course: Build 10 Real World Applications",
    price: 70,
    rating: 5.0,
    cat: "PROGRAMMING",
    image: "https://via.placeholder.com/244x183",
    enrolled: "65.9K",
  },
  {
    title: "Copywriting - Become a Freelance Copywriter, your ow...",
    price: 50,
    rating: 4.5,
    cat: "MARKETING",
    image: "https://via.placeholder.com/244x183",
    enrolled: "25K",
  },
  {
    title: "Machine Learning A-Z™: Hands-On Python & R In Data...",
    price: 87,
    rating: 5,
    cat: "DESIGN",
    image: "https://via.placeholder.com/244x183",
    enrolled: "69.1K",
  },
  {
    title: "Machine Learning A-Z™: Hands-On Python & R In Data...",
    price: 68,
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
