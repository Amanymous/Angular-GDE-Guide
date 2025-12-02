// function app(r,c){
//   if(r === 1 || c === 1){
//       return 1
//   }
//   let left = app(r-1,c)
//   let right = app(r,c-1)
//   return left + right
// }
// app(4,4)

// function app(r, c, path = "") {
//   // Base case: If we're at the first row or first column, there's only one way to go
//   if (r === 1 && c === 1) {
//     console.log(path); // Log the full path when bottom-right is reached
//     return 1;
//   }

//   let count = 0;

//   // Move down
//   if (r > 1) {
//     count += app(r - 1, c, path + "D");
//   }

//   // Move right
//   if (c > 1) {
//     count += app(r, c - 1, path + "R");
//   }

//   return count;
// }
// let totalPaths = app(3, 3);
// console.log("Total Paths:", totalPaths);

// function app(p, r, c) {
//   // Base case: If we're at the first row or first column, there's only one way to go
//   if (r === 1 && c === 1) {
//     console.log(p); // Log the full path when bottom-right is reached
//     return 1;
//   }

//   let count = 0;
//   if (r > 1 && c > 1) {
//     count += app(p + "D", r - 1, c - 1);
//   }

//   // Move down
//   if (r > 1) {
//     count += app(p + "V", r - 1, c);
//   }

//   // Move right
//   if (c > 1) {
//     count += app(p + "H", r, c - 1);
//   }

//   return count;
// }
// let totalPaths = app("", 3, 3);
// console.log("Total Paths:", totalPaths);

// function pathRestrictions(p, maze, r, c) {
//   if (r === maze.length - 1 && c === maze[0].length - 1) {
//     console.log(p);
//     return;
//   }

//   if (!maze[r][c]) {
//     return;
//   }

//   if (r < maze.length - 1) {
//     pathRestrictions(p + "D", maze, r + 1, c);
//   }

//   if (c < maze[0].length - 1) {
//     pathRestrictions(p + "R", maze, r, c + 1);
//   }
// }
// const maze = [
//   [true, true, true],
//   [true, false, true],
//   [true, true, true],
// ];

// pathRestrictions("", maze, 0, 0);

// function allPath(p, maze, r, c) {
//   // Base case: when we reach the bottom-right corner
//   if (r === maze.length - 1 && c === maze[0].length - 1) {
//     console.log(p);
//     return;
//   }

//   // If current cell is not valid (blocked), return
//   if (!maze[r][c]) {
//     return;
//   }

//   // Mark the current cell as visited to avoid cycles
//   maze[r][c] = false;

//   // Move Down
//   if (r < maze.length - 1) {
//     allPath(p + "D", maze, r + 1, c);
//   }

//   // Move Right
//   if (c < maze[0].length - 1) {
//     allPath(p + "R", maze, r, c + 1);
//   }

//   // Move Up
//   if (r > 0) {
//     allPath(p + "U", maze, r - 1, c);
//   }

//   // Move Left
//   if (c > 0) {
//     allPath(p + "L", maze, r, c - 1);
//   }

//   // Unmark the cell (backtracking)
//   maze[r][c] = true;
// }
// const maze = [
//   [true, true, true],
//   [true, true, true],
//   [true, true, true],
// ];

// allPath("", maze, 0, 0);

function allPathPrint(p, maze, r, c, path, step) {
  // Base case: reached destination
  if (r === maze.length - 1 && c === maze[0].length - 1) {
    path[r][c] = step;

    // Print the path matrix
    for (let row of path) {
      console.log(JSON.stringify(row));
    }
    console.log(p);
    return;
  }

  // If cell is blocked or already visited
  if (!maze[r][c]) {
    return;
  }

  // Mark this cell as visited
  maze[r][c] = false;
  path[r][c] = step;

  // Explore all 4 directions
  if (r < maze.length - 1) {
    allPathPrint(p + "D", maze, r + 1, c, path, step + 1);
  }

  if (c < maze[0].length - 1) {
    allPathPrint(p + "R", maze, r, c + 1, path, step + 1);
  }

  if (r > 0) {
    allPathPrint(p + "U", maze, r - 1, c, path, step + 1);
  }

  if (c > 0) {
    allPathPrint(p + "L", maze, r, c - 1, path, step + 1);
  }

  // Backtrack: unmark cell
  maze[r][c] = true;
  path[r][c] = 0;
}
const maze = [
  [true, true, true],
  [true, true, true],
  [true, true, true],
];

const path = Array.from({ length: maze.length }, () =>
  Array(maze[0].length).fill(0)
);

allPathPrint("", maze, 0, 0, path, 1);
