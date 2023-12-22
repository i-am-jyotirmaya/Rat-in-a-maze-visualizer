import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MazeData } from "../../../types/maze";

export type HomeState = {
  loading: boolean;
  userMazes: MazeData[];
  isMazeInProgress: boolean;
};

const initialState: HomeState = {
  loading: false,
  userMazes: [],
  isMazeInProgress: false,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    startFetchData: (state) => {
      state.loading = true;
    },
    completeFetchData: (state, action: PayloadAction<HomeState>) => {
      state.isMazeInProgress = action.payload.isMazeInProgress;
      state.userMazes = action.payload.userMazes;
      state.loading = false;
    },
    failFetchData: (state, action) => {},
  },
});

export const { completeFetchData, failFetchData, startFetchData } = homeSlice.actions;
export default homeSlice.reducer;
