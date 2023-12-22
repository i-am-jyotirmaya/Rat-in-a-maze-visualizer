import localforage from "localforage";
import { CurrentMazeData, MazeData } from "../types/maze";

export const userMazes = localforage.createInstance({
  driver: localforage.LOCALSTORAGE,
  description: "Storage for mazes created by user.",
  name: "userMazes",
  storeName: "userMazes",
});

export const currentMaze = localforage.createInstance({
  driver: localforage.LOCALSTORAGE,
  description: "Storage for maze being built (in prog)",
  name: "currentMaze",
  storeName: "currentMazeData",
});

export const getUserMazes = async (): Promise<MazeData[]> => {
  return (await userMazes.getItem<MazeData[]>("mazes", (err) => console.error(err))) ?? [];
};

export const saveUserMaze = async (maze: MazeData) => {
  const mazes = await getUserMazes();
  mazes.push(maze);
  userMazes.setItem("mazes", mazes, (err) => console.error(err));
};

/**
 * Returns the last unsaved maze that was in edit mode. If no maze is found, returns null.
 */
export const getCurrentMaze = async (): Promise<CurrentMazeData | null> => {
  return await currentMaze.getItem("maze");
};
