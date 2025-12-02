// function solveNQueens(n) {
//   const result = [];

//   function isValid(board, row, col) {
//     // Check vertically upwards
//     for (let i = row; i >= 0; i--) {
//       if (board[i][col] === "Q") return false;
//     }

//     // Check upper-left diagonal
//     for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
//       if (board[i][j] === "Q") return false;
//     }

//     // Check upper-right diagonal
//     for (let i = row, j = col; i >= 0 && j < board.length; i--, j++) {
//       if (board[i][j] === "Q") return false;
//     }

//     return true;
//   }

//   function solve(board, row) {
//     if (row === board.length) {
//       result.push(board.map((r) => r.join("")));
//       return;
//     }

//     for (let col = 0; col < board.length; col++) {
//       if (isValid(board, row, col)) {
//         board[row][col] = "Q";
//         solve(board, row + 1);
//         board[row][col] = "."; // Backtrack
//       }
//     }
//   }

//   const board = Array.from({ length: n }, () => Array(n).fill("."));
//   solve(board, 0);
//   return result;
// }

// // Example usage
// const solutions = solveNQueens(4);
// console.log(solutions);

// var permute = function(nums) {
//   let res = [];
//   let n = nums.length;
//   function helper(i) {
//       if (i === n - 1) {
//           res.push([...nums]); // Copy current permutation
//           return;
//       }
//       for (let j = i; j < n; j++) {
//           console.log(`before --- nums[i]: ${nums[i]}, nums[j]: ${nums[j]}`);
//           [nums[i], nums[j]] = [nums[j], nums[i]]; // Swap
//           console.log(`before: nums[i]= ${nums[i]}, nums[j]= ${nums[j]}`);
//           helper(i + 1);
//           console.log(`after --- nums[i]: ${nums[i]}, nums[j]: ${nums[j]}`);
//           [nums[i], nums[j]] = [nums[j], nums[i]]; // Backtrack
//           console.log(`after: nums[i]= ${nums[i]}, nums[j]= ${nums[j]}`);
//       }
//   }
//   helper(0);
//   return res;
// };

// console.log(permute([1, 2, 3]));
