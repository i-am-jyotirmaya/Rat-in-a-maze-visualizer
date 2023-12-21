import "./Cell.scss";

interface CellProps {
  x: number;
  y: number;
  state: "current" | "visited" | "invalid" | "idle" | "wall";
}

export const Cell: React.FC<CellProps> = ({ state }): JSX.Element => {
  const colorMap = {
    current: "yellow",
    visited: "green",
    invalid: "red",
    idle: "white",
    wall: "black",
  };

  return <div className="cell" style={{ backgroundColor: colorMap[state] }}></div>;
};
