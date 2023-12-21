"use strict";
exports.__esModule = true;
exports.mazeData = void 0;
// This is a 2D array containing 1s and 0s representing the maze.
exports.mazeData = [
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
var createSolveFunction = function (dest_x, dest_y) {
    var tracker = [
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
    var path = [];
    var move = function (x, y) {
        if (y < 0 || y > tracker.length || x < 0 || x > tracker[0].length) {
            console.log("Exceeded bounds! Returning.");
            return false;
        }
        if (tracker[y][x] === 1) {
            console.log("Found a wall at ".concat(x, " ").concat(y, "."));
            return false;
        }
        if (tracker[y][x] === -1) {
            console.log("Already visited ".concat(x, " ").concat(y, "."));
            return false;
        }
        if (dest_x === x && dest_y === y) {
            console.log("Reached Destination.");
            return true;
        }
        tracker[y][x] = -1;
        var l = move(x - 1, y);
        var r = move(x + 1, y);
        var u = move(x, y - 1);
        var d = move(x, y + 1);
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
    return function () {
        move(0, 0);
        console.log(path);
    };
};
