export const createSolver = (
  maze: number[][],
  visit: (x: number, y: number) => void,
  success: (x: number, y: number) => void,
  fail: (x: number, y: number) => void
) => {
  const MAZE_HEIGHT = maze.length;
  const MAZE_WIDTH = maze[0].length;
  const visited = Array.from(Array(MAZE_HEIGHT), () => Array(MAZE_WIDTH).fill(0));
  const delayInMs = 100;
  const backtrack = async (x: number, y: number) => {
    console.log(`Solving ${x} ${y}`);
    await delay(delayInMs);
    // sleep(delayInMs);
    if (x < 0 || x >= MAZE_WIDTH || y < 0 || y >= MAZE_HEIGHT) {
      console.log("Exceeded at " + x + " " + y);
      return false;
    }

    if (visited[y][x] === 1 || maze[y][x] === 1) {
      console.log(`Visited a wall at ${x} ${y}`);
      // Either visited or a wall
      return false;
    }

    if (x === 8 && y === 9) {
      console.log("Found the dest");
      return true;
    }

    visited[y][x] = 1;
    visit(x, y);

    // backtrack(x - 1, y) ? success(x, y) : fail(x, y);
    // backtrack(x, y - 1) ? success(x, y) : fail(x, y);
    // backtrack(x, y + 1) ? success(x, y) : fail(x, y);
    // backtrack(x + 1, y) ? success(x, y) : fail(x, y);
    // const promiseArray = [
    //   async () => ((await backtrack(x - 1, y)) ? success(x, y) : fail(x, y)),
    //   async () => ((await backtrack(x, y - 1)) ? success(x, y) : fail(x, y)),
    //   async () => ((await backtrack(x, y + 1)) ? success(x, y) : fail(x, y)),
    //   async () => ((await backtrack(x + 1, y)) ? success(x, y) : fail(x, y)),
    // ];

    // await Promise.all(promiseArray);
    if (await backtrack(x - 1, y)) {
      success(x, y);
      return true;
    }
    fail(x, y);
    if (await backtrack(x, y - 1)) {
      success(x, y);
      return true;
    }
    fail(x, y);
    if (await backtrack(x, y + 1)) {
      success(x, y);
      return true;
    }
    fail(x, y);
    if (await backtrack(x + 1, y)) {
      success(x, y);
      return true;
    }
    fail(x, y);
    return false;
  };

  return () => {
    console.log("Solving");
    backtrack(0, 0);
  };
};

const delay = (delayInms: number) => {
  return new Promise((resolve) => setTimeout(resolve, delayInms));
};

function sleep(milliseconds: number) {
  const start = new Date().getTime();
  for (let i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
