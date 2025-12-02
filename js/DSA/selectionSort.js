// function app(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//       let min = i;
//       for (let j = i + 1; j <= arr.length - 1; j++) { // Include last element
//           if (arr[j] < arr[min]) {
//               min = j;
//           }
//       }
//       if (min !== i) {
//           let temp = arr[i];
//           arr[i] = arr[min];
//           arr[min] = temp;
//       }
//   }
//   return arr;
// }

// let arr = [2, 5, 1, 3, 4];
// console.log(app(arr));  // Output: [1, 2, 3, 4, 5]

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Find the index of the max element in the unsorted part
    let last = arr.length - i - 1;
    let maxIndex = getMaxIndex(arr, 0, last);
    // Swap the max element with the last element of the unsorted part
    swap(arr, maxIndex, last);
  }
}

function swap(arr, first, second) {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
}

function getMaxIndex(arr, start, end) {
  let max = start;
  for (let i = start; i <= end; i++) {
    if (arr[max] < arr[i]) {
      max = i;
    }
  }
  return max;
}

// Example usage:
let numbers = [5, 3, 8, 4, 2];
selectionSort(numbers);
console.log("Sorted (ascending):", numbers); // Output: [2, 3, 4, 5, 8]
