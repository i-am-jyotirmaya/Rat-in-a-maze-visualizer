import { useState } from "react";
import "./MazeBuilder.scss";

export const MazeBuilder = () => {
  const [mazes, setMazes] = useState([]);
  const createMazesList = () => mazes.map((maze, index) => <div key={`maze-${index}`}>{`maze-${index}`}</div>);

  return (
    <>
      <button className="btn primary">Build new</button>
      <div className="maze-list">
        <h1 className="title">My mazes</h1>
        {createMazesList()}
      </div>
      <div className="maze-builder">
        <div className="builder-options">
          <label htmlFor=""></label>
          <input type="text" />
        </div>
      </div>
    </>
  );
};
