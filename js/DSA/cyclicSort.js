// function cyclicSortSafe(arr) {
//   let i = 0;
//   while (i < arr.length) {
//     let correct = arr[i] - 1;
//     // Check if the value is in the valid range [1, arr.length]
//     if (arr[i] >= 1 && arr[i] <= arr.length && arr[i] !== arr[correct]) {
//       swap(arr, i, correct);
//     } else {
//       i++;
//     }
//   }
// }

// function swap(arr, first, second) {
//   let temp = arr[first];
//   arr[first] = arr[second];
//   arr[second] = temp;
// }

// // Test it
// let arr = [3, 1, 0];
// cyclicSortSafe(arr);
// console.log(arr); // Output: [1, 2, 3, 5, 40]

// function app(arr) {
//   let i = 0;
//   while (i < arr.length) {
//     if (arr[i] !== i + 1) {
//       let correct = arr[i] - 1;
//       if (arr[i] !== arr[correct]) {
//         [arr[i], arr[correct]] = [arr[correct], arr[i]];
//       } else {
//         return arr[i];
//       }
//     } else {
//       i++;
//     }
//   }
//   return -1;
// }
// console.log(app([1, 3, 4, 2, 2]));

function app(arr) {
  let i = 0;
  while (i < arr.length) {
    let correct = arr[i] - 1;
    if (arr[i] != arr[correct]) {
      [arr[i], arr[correct]] = [arr[correct], arr[i]];
    } else {
      i++;
    }
  }
  let newArr = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] != index + 1) {
      newArr.push(arr[index], index + 1);
    }
  }
  return newArr;
}
app([2, 1, 4, 2, 6, 5]);
