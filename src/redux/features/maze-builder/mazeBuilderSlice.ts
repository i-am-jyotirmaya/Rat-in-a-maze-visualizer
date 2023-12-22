import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MazePoint } from "../../../types/maze";

export type MazeBuilderState = {
  rows: number;
  columns: number;
  name: string;
  maze: number[][];
  start: MazePoint;
  end: MazePoint;
};

const initialState: MazeBuilderState = {
  rows: 0,
  columns: 0,
  name: "",
  maze: [],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 0 },
};

export const mazeBuilderSlice = createSlice({
  name: "mazeBuilder",
  initialState,
  reducers: {
    setMazeSize: (state, action: PayloadAction<{ rows: number; columns: number }>) => {
      state.rows = action.payload.rows;
      state.columns = action.payload.columns;
    },
    setMazeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    initializeMaze: (state) => {
      state.maze = new Array(state.rows).fill(0).map(() => new Array(state.columns).fill(0));
    },
    setStart: (state, action: PayloadAction<MazePoint>) => {
      state.start = action.payload;
    },
    setEnd: (state, action: PayloadAction<MazePoint>) => {
      state.end = action.payload;
    },
    setMaze: (state, action: PayloadAction<number[][]>) => {
      state.maze = action.payload;
    },
  },
});

export const { setMazeSize, setMazeName, initializeMaze, setStart, setEnd, setMaze } = mazeBuilderSlice.actions;
export default mazeBuilderSlice.reducer;
