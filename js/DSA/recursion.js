// Print hello world 5 time using recursion
// function app(n) {
//   if (n === 0) return 0;
//   console.log("Hello, World!");
//   return app(n - 1);
// }
// app(5);

// function app(n) {
//   if (n === 1) {
//     return n;
//   }
//   return `${n} ${app(n - 1)} ${n}`;
// }
// app(9);
// console.log("aman", app(9));

// function app(n,k){
//   let arr = Array.from({ length: n }, (_,i)=> i+1)
//   function helper(arr,startIndex){
//       if (arr.length === 1) {
//           return arr[0];
//       }
// Recursive case
//       let indexToRemove = (startIndex + k - 1) % arr.length;
//       arr.splice(indexToRemove, 1);
//       return helper(arr, indexToRemove);
//   }
//   return helper(arr,0)
// }
// app(5,2)

// function app(n,k){
//   if(n === 1){
//       return 0
//   }
//   else{
//       return [app(n-1,k)+k] % n
//   }
// }
// app(5,3)

// function app(n) {
//   if (n > 5) return n;
//   console.log(n);
// this is called tail recursion because it is the last function call
//   return app(n + 1);
// }
// app(5);

//function fibo(n) {
//if (n < 2) return n;
// this is not tail recursion first this is called fibo(n - 1)
// and second this is called fibo(n - 2)
// and do the addition of it return fibo(n - 1) + fibo(n - 2); this extra step is not tail recursion
//return fibo(n - 1) + fibo(n - 2);
//}

//fibo(4);

// function binarySearchRecursion(arr, target, s, e) {
//   if (s > e) {
//     return -1; // Target not found
//   }

//   // Ensure mid is an integer
//   let mid = Math.floor(s + (e - s) / 2);

//   if (arr[mid] === target) {
//     return mid; // Target found, return its index
//   }

//   if (target < arr[mid]) {
//     return binarySearchRecursion(arr, target, s, mid - 1); // Search left half
//   }

//   return binarySearchRecursion(arr, target, mid + 1, e); // Search right half
// }

// // Example usage
// let arr = [1, 3, 5, 7, 9, 11];
// let result = binarySearchRecursion(arr, 9, 0, arr.length - 1);
// console.log(result);

// function app(n) {
//   if (n === 5) return n;
//   app(n + 1);
// }
// app(5);

// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }
// console.log(factorial(5));

// function sumArray(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }
//   return arr[0] + sumArray(arr.slice(1));
// }
// console.log(sumArray([1, 2, 3, 4, 5]));

// var findTheWinner = function (n, k) {
//   let arr = Array.from({ length: n }, (_, i) => i + 1);

//   function helper(arr, startIndex) {
//     // Base case
//     if (arr.length === 1) {
//       return arr[0];
//     }
//     // Recursive case
//     let indexToRemove = (startIndex + k - 1) % arr.length;
//     arr.splice(indexToRemove, 1);
//     return helper(arr, indexToRemove);
//   }

//   return helper(arr, 0);
// };
// console.log(findTheWinner(3, 3));

// function winner(n, k) {
//   function helper(n) {
//     if (n === 1) return 0;
//     return (helper(n - 1) + k) % n;
//   }
//   return helper(n) + 1;
// }
// console.log(winner(3, 2));

// function app(n,k){
//   //  by using iterative method
//   let sur = 0;
//   for(let i = 2; i <= n; i++){
//       sur = (sur+k)%i
//   }
//   return sur+1
// }
// app(5,3)
