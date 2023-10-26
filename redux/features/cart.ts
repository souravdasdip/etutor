import { CourseProps } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const name = "cart";

const initialState: CourseProps[] = [];

const cartSlice = createSlice({
  name,
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CourseProps>) => {
      return [...state, action.payload];
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
