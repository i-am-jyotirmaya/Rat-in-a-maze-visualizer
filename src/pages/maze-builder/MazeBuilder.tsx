import { useEffect, useState } from "react";
import "./MazeBuilder.scss";
import { Button } from "../../components/button/Button";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { MazeData } from "../../types/maze";
import { getCurrentMaze, getUserMazes } from "../../utils/localforageUtils";
import { useAppDispatch } from "../../redux/hooks";

type MazeSize = {
  columns: number;
  rows: number;
};

export const MazeBuilder = () => {
  const isNewMaze = useLocation().state?.newMaze;

  const dispatch = useAppDispatch();

  const [mazes, setMazes] = useState<MazeData[]>([]);
  const [mazeSize, setMazeSize] = useState<MazeSize | null>(null);
  const [mazeSizeInputVisibility, setMazeSizeInputVisibility] = useState(!!mazeSize);
  const [mazeBuilderVisibility, setMazeBuilderVisibility] = useState(!!mazeSize);

  // useEffect to load essential information
  useEffect(() => {
    // Simluate a async method
    (async () => {
      // Step 1: Load user-mazes
      const userMazes = await getUserMazes();
      setMazes(userMazes);

      // Step 2: Retrieve if any maze is in progress.
      const inProgMaze = await getCurrentMaze();
      if (inProgMaze) {
        setMazeSize({ columns: inProgMaze.columns, rows: inProgMaze.rows });
        setMazeSizeInputVisibility(false);
        setMazeBuilderVisibility(true);
      }
    })();
  }, []);

  const createMazesList = () =>
    mazes.length > 0 ? (
      mazes.map((maze, index) => <div key={`maze-${index}`}>{`maze-${index}`}</div>)
    ) : (
      <div className="no-maze-message">
        <p>You don't have any mazes.</p>
        <p>
          Click on the <span className="action">Build new</span> button above.
        </p>
      </div>
    );

  const handleBuildMaze = () => {
    if (!mazeSize) setMazeSizeInputVisibility(true);
    else if (mazeSize) {
      setMazeSizeInputVisibility(false);
      setMazeBuilderVisibility(true);
    }
  };

  return (
    <section className="maze-builder-section">
      <Button onClick={handleBuildMaze}>Build new</Button>
      <Link to="/maze-builder">Build</Link>
      <div className="maze-list">
        <h1 className="title">My mazes</h1>
        {createMazesList()}
      </div>
    </section>
  );
};
