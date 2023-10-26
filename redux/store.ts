import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { cartReducer } from "./features/cart";
import { coursesReducer } from "./features/courses";
import { instructorReducer } from "./features/instructors";

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    instructors: instructorReducer,
    cart: cartReducer,
  },
});

export const appDispatch = store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
