import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { coursesReducer } from "./features/courses";
import { instructorReducer } from "./features/instructors";

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    instructors: instructorReducer,
  },
});

export const appDispatch = store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
