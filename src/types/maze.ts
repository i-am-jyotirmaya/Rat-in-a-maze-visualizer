export type MazeData = {
  name: string;
  matrix: number[][];
  rows: number;
  columns: number;
  createdDateTime: Date;
  modifiedDateTime: Date;
  isSynced: boolean;
  isDraft: boolean;
};

export type CurrentMazeData = {
  name: string;
  matrix: number[][];
  rows: number;
  columns: number;
};

export type MazePoint = {
  x: number;
  y: number;
};
