// let data = [40, 30, 12, 25, 1, 99];
// for (i = 0; i < arr.length; i++) {
//   console.log("i:", i);
//   for (j = 0; j < arr.length; j++) {
//     console.log("j:", j);
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
//   console.log(arr);
// }

function bubbleSort(arr) {
  for (let i = arr.lenght; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function bubbleSor(arr) {
  const swap = (arr, id1, id2) => {
    [arr[id1], arr[id2]] = [arr[id2], arr[id1]];
  };
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; i++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

// function bubbleSort(arr) {
//     const length = arr.length;

//     // Outer loop for the number of passes
//     for (let i = 0; i < length - 1; i++) {
//       // Inner loop for pairwise comparisons and swapping
//       for (let j = 0; j < length - 1 - i; j++) {
//         // Compare adjacent elements
//         if (arr[j] > arr[j + 1]) {
//           // Swap elements if they are in the wrong order
//           const temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//         }
//       }
//     }

//     return arr;
//   }

//   // Example usage:
//   const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
//   const sortedArray = bubbleSort(unsortedArray);

//   console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]

// function bubbleSort(arr) {
//     let swap = true;
//     while (swap) {
//         swap = false;
//         arr = arr.map((item, index) => {
//             if (arr[index + 1] && item > arr[index + 1]) {
//                 swap = true;
//                 return arr[index + 1];
//             }
//             return item;
//         });
//     }
//     return arr;
// }

// console.log(bubbleSort([5,3,8,2,1,4]));

// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr.forEach((item, index) => {
//             if (arr[index + 1] && item > arr[index + 1]) {
//                 let temp = item;
//                 arr[index] = arr[index + 1];
//                 arr[index + 1] = temp;
//             }
//         });
//     }
//     return arr;
// }
// console.log(bubbleSort([5,3,8,2,1,4]));

// function bubbleSort(arr) {
//     let swap = true;
//     while (swap) {
//         swap = false;
//         arr = arr.reduce((acc, item, index) => {
//             if (arr[index + 1] && item > arr[index + 1]) {
//                 swap = true;
//                 acc.push(arr[index + 1]);
//                 acc.push(item);
//             } else {
//                 acc.push(item);
//             }
//             return acc;
//         }, []);
//     }
//     return arr;
// }
// console.log(bubbleSort([5,3,8,2,1,4]));

// function safeNumberCompare(a, b) {
//     if (Number.isNaN(a) || Number.isNaN(b)) {
//         return NaN;
//     }
//     if (!Number.isFinite(a) && !Number.isFinite(b)) {
//         return a < b ? -1 : 1;
//     }
//     if (!Number.isFinite(a)) {
//         return -1;
//     }
//     if (!Number.isFinite(b)) {
//         return 1;
//     }
//     return a < b ? -1 : (a > b ? 1 : 0);
// }
// console.log(safeNumberCompare(5, 3));  // returns 1
// console.log(safeNumberCompare(NaN, 3));  // returns NaN
// console.log(safeNumberCompare(Infinity, -Infinity));  // returns 1

// function safeNumberCompare(a, b) {
//     return Math.sign(Math.max(a, b) - Math.min(a, b));
// }
// console.log(safeNumberCompare(5, 3));  // returns 1
// console.log(safeNumberCompare(NaN, 3));  // returns NaN
// console.log(safeNumberCompare(Infinity, -Infinity));  // returns 1

// const numbersAsString = '1,2,3,4,5';
// const numbers = numbersAsString.split(',').map(Number);
// const addition = numbers.reduce(function(acc, cur) {
//   return acc + cur;
// }, 0);
// console.log(addition);

// const adder = {
//     value: 0,
//     add: function(num) {
//       this.value += num;
//     }
//   };

//   adder.add(5);
//   adder.add(5);
//   console.log(adder.value); // 10

// const numbers = [1, 2, 3, 4, 5];
// const addition = numbers.reduce(function(acc, cur) {
//   acc.value += cur;
//   return acc;
// }.bind({value:0}), {value:0});
// console.log(addition.value);

// const add = (callback) => {
//     const numbers = [1, 2, 3, 4, 5];
//     return numbers.reduce(callback, 0);
// }

// function add(a) {
//     return {
//       'aman': function (b) {
//           console.log("call",a,b);
//           return a + b;
//       },
//     };
//   }

// The code you provided is a valid JavaScript syntax. It defines a function add(a) that returns an object containing a property "aman" which is a function that takes one argument b and returns the sum of a and b.

// The add(a) function takes a single argument a, and returns an object with a single property, "aman", which is a function that takes a single argument b. The function then logs the value of a and b to the console and returns the sum of a and b.

// You can call the function add(a) and use the returned object to call the "aman" function, like this:

// console.log(add(1).aman(1));
// const result = add(5);
// console.log(result.aman(3));
