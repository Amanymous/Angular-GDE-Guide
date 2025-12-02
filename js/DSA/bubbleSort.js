// function app(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }
// app([3, 1, 5, 99, 4]);

// function app(arr, n) {
//   if (n <= 1) return arr;
//   for (let i = 0; i < n - 1; i++) {
//     // arr[i+1] < arr[i] => ascending arr[i] < arr[i+1] => descending
//     if (arr[i + 1] < arr[i]) {
//       let temp = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = temp;
//     }
//   }
//   return app(arr, n - 1);
// }
// let arr = [3, 1, 5, 99, 4];
// console.log(app(arr, arr.length));

function bubbleSort(arr) {
  let swapped;

  // run the steps n - 1 times
  for (let i = 0; i < arr.length; i++) {
    swapped = false;

    // for each step, the max item will come at the last respective index
    for (let j = 1; j < arr.length - i; j++) {
      // swap if the current item is smaller than the previous one
      if (arr[j] < arr[j - 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        swapped = true;
      }
    }

    // if no swaps happened in this pass, the array is already sorted
    if (!swapped) {
      break;
    }
  }

  return arr;
}

// Test the function
let arr = [5, 1, 4, 2, 8];
console.log(bubbleSort(arr)); // Output: [1, 2, 4, 5, 8]
