// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;

//   const mid = Math.floor(arr.length / 2);
//   const left = mergeSort(arr.slice(0, mid));
//   const right = mergeSort(arr.slice(mid));

//   return merge(left, right);
// }

// function merge(left, right) {
//   const result = [];
//   let i = 0,
//     j = 0;

//   while (i < left.length && j < right.length) {
//     if (left[i] < right[j]) {
//       result.push(left[i]);
//       i++;
//     } else {
//       result.push(right[j]);
//       j++;
//     }
//   }

//   // Manually add remaining items from left
//   while (i < left.length) {
//     result.push(left[i]);
//     i++;
//   }

//   // Manually add remaining items from right
//   while (j < right.length) {
//     result.push(right[j]);
//     j++;
//   }

//   return result;
// }

// // Example usage:
// const array = [38, 27, 43, 3, 9, 82, 10];
// const sortedArray = mergeSort(array);
// console.log(sortedArray); // [3, 9, 10, 27, 38, 43, 82]

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = [];
  let right = [];

  for (let i = 0; i < mid; i++) {
    left.push(arr[i]);
  }
  for (let j = mid; j < arr.length; j++) {
    right.push(arr[j]);
  }

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

const arr = [38, 27, 43, 3, 9, 82, 10];
const sortArray = mergeSort(arr);
console.log(sortArray);
