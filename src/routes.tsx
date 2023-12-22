import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import { Playground } from "./components/playground/Playground";
import { MazeBuilder } from "./pages/maze-builder/MazeBuilder";
import { Maze } from "./pages/maze/Maze";
import { Home } from "./pages/home/Home";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="play" element={<Playground />} />
      <Route path="maze-builder" element={<MazeBuilder />}>
        <Route path="new" element={<div>New Maze</div>} />
      </Route>
      <Route path="maze-solver" element={<Maze />} />
    </Route>
  )
);
