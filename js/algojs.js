const powerOfTwo = function (n) {
  if (n === 1) return true;
  if (n <= 0) return false;
  if (n % 2 !== 0) return false;
  else return powerOfTwo(n / 2);
};
console.log(powerOfTwo(100));
// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) continue;
//   console.log(i);
// }

// function containsDuplicate(nums){
//     const set = new Set()
//     for(let num of nums){
//         if(set.has(num)){
//             return true
//         }
//         set.add(num)
//     }
//     return false
// }
// console.log(containsDuplicate([1,2,3,4,5,5]));

// const removeDuplicates = function (s) {
//   let stack = [];
//   for (let ch of s) {
//     stack[stack.length - 1] === ch ? stack.pop() : stack.push(ch);
//   }
//   return stack.join("");
// };
// console.log(removeDuplicates("abbaca"));

// const obj = {};
// if (Object.keys(obj).length === 0) {
//   console.log("Object is empty");
// }
// if (Object.entries(obj).length === 0) {
//   console.log("Object is empty");
// }
// if (Object.values(obj).length === 0) {
//   console.log("Object is empty");
// }
// if (JSON.stringify(obj) === "{}") {
//   console.log("Object is empty");
// }

// const add = function (...n) {
//   const res = n.reduce((acc, num) => acc + num, 1);
//   return res;
// };
// console.log(add(1, 2, 3, 4));

// const isPalindrome = function (x) {
//   if (x < 0) return false;
//   x = x.toString();
//   let left = 0;
//   let right = x.length - 1;
//   while (left < right) {
//     if (x[left] !== x[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// };
// console.log(isPalindrome(101));

// const minStartValue = (nums) => {
//   let sumUp = 0;
//   let minSum = 1;
//   for (let num of nums) {
//     sumUp += num;
//     minSum = Math.min(sumUp, minSum);
//   }
//   if (minSum > 0) return 1;
//   return -1 * minSum + 1;
// };

// console.log(minStartValue(-1, -2, -3));

// const movesZeroes = function (num) {
//   let left = 0;
//   let right = 0;
//   while (right < num.length) {
//     if (num[right] !== 0) {
//       [num[left], num[right]] = [num[right], num[left]];
//       left++;
//     }
//     right++;
//   }
//   return num;
// };
// console.log(movesZeroes([0, 3, 12, 0, 0]));

const n = 6;
const arr1 = Array.from(Array(n).keys());
console.log(arr1);
const arr2 = new Array(n).fill().map((_, index) => index);
console.log(arr2);
