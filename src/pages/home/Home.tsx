import { useState, useEffect } from "react";
import { Button } from "../../components/button/Button";
import { MazeData } from "../../types/maze";
import { getUserMazes, getCurrentMaze } from "../../utils/localforageUtils";
import "./Home.scss";
import { useAppSelector } from "../../redux/hooks";
import { Link, useNavigate } from "react-router-dom";

type MazeSize = {
  columns: number;
  rows: number;
};

export const Home = () => {
  const [mazes, setMazes] = useState<MazeData[]>([]);
  const [mazeSize, setMazeSize] = useState<MazeSize | null>(null);
  const navigate = useNavigate();

  const { isMazeInProgress, loading, userMazes } = useAppSelector((state) => state.home);

  const createMazesList = () =>
    userMazes.length > 0 ? (
      userMazes.map((maze, index) => <div key={`maze-${index}`}>{`maze-${index}`}</div>)
    ) : (
      <div className="no-maze-message">
        <p>You don't have any mazes.</p>
        <p>
          Click on the <span className="action">Build new</span> button above.
        </p>
      </div>
    );

  const handleBuildMaze = (newMaze: boolean) => {
    return () => {
      navigate("/maze-builder", { replace: true, state: { newMaze } });
    };
  };

  return (
    <section className="home-section">
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <>
          <div className="home-button-holder">
            {isMazeInProgress ? (
              <Button onClick={handleBuildMaze(false)}>Continue where you left off -&gt;</Button>
            ) : (
              <></>
            )}
            <Button onClick={handleBuildMaze(true)}>Build new +</Button>
          </div>
          <div className="maze-list">
            <h1 className="title">My mazes</h1>
            {createMazesList()}
          </div>
        </>
      )}
    </section>
  );
};
