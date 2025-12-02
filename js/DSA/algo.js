// What is algorithim? (step by step instruction to solve the problem)
// Why analysis of algorithm?
// how to compares algorithm?
//  What is rate of growth?

// let arr = [1,2,3,4,4]
// array ki timing hamesha same rahy gi 
// chahy array ki time zayada ya kam hun


// find the sum of all element of array
//  We are finding What is rate of growth?
// function sumofAll(arr){
//     let sum = 0 // this will be constant(c) time
//     for(let i = 0; i < arr.length; i++){  // loop (c)
//         sum += arr[i]
//     }
//     return sum
// }
// suppose array size is n 
// what will be the time complexity = c+ loop(c) +c => c + n*c + c = nc+2c => n(n+2)
//  this is linear complexity this is based on number of terms like linear graph
// console.log('sum:',sumofAll([1,2,3,4,4]));


// Example : 1
// function find the indexOf element in array if present return index if not -1
// function getIndex(ind) {
//     let arr = [1, 4, 6, 8, 10];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === ind) {
//         return i;
//       }
//       else{
//         console.log("jfied");
//     //    no need to use else block
//         continue
//       }
//     }
//     return -1
//   }
// console.log("Index:",getIndex(11));

