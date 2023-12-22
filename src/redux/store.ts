import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./features/home/homeSlice";
import mazeBuilderSlice from "./features/maze-builder/mazeBuilderSlice";

export const store = configureStore({
  reducer: {
    home: homeSlice,
    mazeBuilder: mazeBuilderSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
