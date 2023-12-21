import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { MazeBuilder } from "./components/maze-builder/MazeBuilder.tsx";
import { Maze } from "./components/maze/Maze.tsx";
import { Playground } from "./components/playground/Playground.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="play" element={<Playground />} />
      <Route path="maze-builder" element={<MazeBuilder />} />
      <Route path="maze-solver" element={<Maze />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
