import { Cell } from "../cell/Cell";
import { mazeData } from "../../data/data";
import "./Maze.scss";
import { MouseEventHandler, useCallback, useState } from "react";
import { createSolver } from "../../utils/solver";

type coord = {
  x: number;
  y: number;
};

const states = ["idle", "wall", "visited", "success", "invalid"];

export const Maze = () => {
  const MAZE_WIDTH = 10;
  const MAZE_HEIGHT = 10;

  const [maze, setMaze] = useState(mazeData);

  const solve = useCallback(
    createSolver(
      maze,
      (x, y) => {
        setMaze((oldMaze) => {
          const newMaze = [...oldMaze];
          newMaze[y][x] = 2;
          return newMaze;
        });
      },
      (x, y) => {
        setMaze((oldMaze) => {
          const newMaze = [...oldMaze];
          newMaze[y][x] = 3;
          return newMaze;
        });
      },
      (x, y) => {
        setMaze((oldMaze) => {
          const newMaze = [...oldMaze];
          newMaze[y][x] = 4;
          return newMaze;
        });
      }
    ),
    []
  );

  const getMazeCellMatrix = () => {
    const cellMatrix = [];
    for (let i = 0; i < MAZE_WIDTH; i++) {
      const cellRow = [];
      for (let j = 0; j < MAZE_HEIGHT; j++) {
        cellRow.push(
          <Cell
            x={j}
            y={i}
            key={`${i}-${j}`}
            state={states[maze[j][i]] as "idle" | "wall" | "visited" | "invalid" | "current"}
          />
        );
      }
      cellMatrix.push(
        <div key={i} className="matrix-row">
          {cellRow}
        </div>
      );
    }
    return cellMatrix;
  };

  return (
    <div className="maze-container">
      <div className="maze" data-maze-width={MAZE_WIDTH} data-maze-height={MAZE_HEIGHT}>
        {getMazeCellMatrix()}
      </div>
      <button onClick={() => solve()}>Start</button>
    </div>
  );
};
