// This is a 2D array containing 1s and 0s representing the maze.
export const mazeData = [
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 0, 1, 1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [0, 1, 1, 1, 0, 1, 1, 0, 1, 1],
  [0, 0, 0, 1, 0, 0, 0, 0, 1, 1],
  [0, 0, 1, 1, 0, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0, 0, 1, 1],
  [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
];

// start = 0,0
// dest =  9,8
const createSolveFunction = (dest_x: number, dest_y: number) => {
  const tracker = [
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 0, 1, 1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0, 1, 1, 0, 1, 1],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 1],
    [0, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 0, 0, 0, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  ];
  const path: string[] = [];
  const move = (x: number, y: number) => {
    if (y < 0 || y > tracker.length || x < 0 || x > tracker[0].length) {
      console.log("Exceeded bounds! Returning.");
      return false;
    }
    if (tracker[y][x] === 1) {
      console.log(`Found a wall at ${x} ${y}.`);
      return false;
    }

    if (tracker[y][x] === -1) {
      console.log(`Already visited ${x} ${y}.`);
      return false;
    }

    if (dest_x === x && dest_y === y) {
      console.log("Reached Destination.");
      return true;
    }

    tracker[y][x] = -1;

    const l = move(x - 1, y);
    const r = move(x + 1, y);
    const u = move(x, y - 1);
    const d = move(x, y + 1);

    if (l) {
      path.push("L");
      return true;
    }
    if (r) {
      path.push("R");
      return true;
    }
    if (u) {
      path.push("U");
      return true;
    }
    if (d) {
      path.push("D");
      return true;
    }

    return false;
  };

  return () => {
    move(0, 0);

    console.log(path);
  };
};
