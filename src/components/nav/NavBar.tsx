import { Link, NavLink } from "react-router-dom";
import "./NavBar.scss";

export const NavBar = () => {
  return (
    <nav className="nav-bar">
      <a href="/">RatInAMaze</a>
      <div className="nav-links">
        <ul className="links">
          <NavLink
            to="maze-builder"
            className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "link active" : "link")}
          >
            <li>Maze builder</li>
          </NavLink>
          <NavLink
            to="maze-solver"
            className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "link active" : "link")}
          >
            <li>Maze solver</li>
          </NavLink>
          <NavLink
            to="play"
            className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "link active" : "link")}
          >
            <li>Playground</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};
