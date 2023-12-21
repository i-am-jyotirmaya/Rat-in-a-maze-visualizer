import { Outlet } from "react-router-dom";
import "./App.scss";
import { MazeBuilder } from "./components/maze-builder/MazeBuilder";
import { Maze } from "./components/maze/Maze";
import { NavBar } from "./components/nav/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
