// let { FirstName:fname,lastName:lname } = person
// // console.log(person);

// function reducedArray(nums, fn, init) {
//     if (nums.length === 0) {
//       return init;
//     }

//     let val = init;
//     for (let i = 0; i < nums.length; i++) {
//       val = fn(val, nums[i]);
//     }

//     return val;
//   }

//   const nums = [1, 2, 3, 4];
//   const fn = function sum(accum, curr) { return accum + curr*curr; };
//   const init = 100;

//   const reducedVal = reducedArray(nums, fn, init);
//   console.log(reducedVal); // Output: 10

// In this example, we're using the reducedArray function to reduce
// the array nums using the sum function. The initial value is set
// to 100. When we call reducedArray with these arguments, it returns
// the final value of 130, which is the result of applying the sum
// function to each element of the nums array starting with the initial
// value of 100. In this case, the sum function computes the sum of the
// squares of each element in nums and adds it to the initial value.

// function reduceArray(nums, init) {
//   if (nums.length <= 0) return null
//   if (init <= 0) return Error('Init value must be greater then 0')
//   let val = init;
//   for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i],i);
//     val += nums[i]*nums[i];
//     console.log(val);
//   }

//   return val;
// }
// console.log(reduceArray([1], 1));

// var reduce = function(nums, fn, init) {
//   if(nums.length){nums.forEach(num=> init = fn(init, num))}
//   return init
// };

// var reduce = function (nums, fn, init) {
//   if (nums.length === 0) return init;

//   let result = fn(init, nums[0]);
//   nums.forEach((value, index) => {
//     if (index) result = fn(result, value);
//   });

//   return result;
// };
// const fn = function sum(accum, curr) { return accum + curr*curr; };
// console.log(reduce([1,2,3,4],fn,100));

// var reduce = function(nums, fn, init) {
//   let answer = init;
//   for (let i = 0; i < nums.length; i++) {
//       answer = fn(answer, nums[i])
//   }
//   return answer
// };

// var reduce = function (nums, fn, init) {
//   let res = init;
//   nums.forEach(x => (res = fn(res, x)));

//   return res;
// };

// type Fn = (accum: number, curr: number) => number

// function reduce(nums: number[], fn: Fn, init: number): number {
//     return nums.length === 0
//         ? init
//         : reduce(nums.slice(1), fn, fn(init, nums[0]));
// };

// var reduce = function(nums, fn, init) {
//   let result = init;
//   if (nums.length > 0) {
//       for (const num of nums) {
//           result = fn(result, num);
//       }
//   }

//   return result;
// }

// const reduce = (a, f, x) => {
//   for (const y of a)
//       x = f(x, y)
//   return x
// }

// var reduce = function(nums, fn, init) {
//   const ans =nums.reduce(fn,init)
//   return ans
// };

// var reduce = function(nums, fn, init) {
//   for (let num of nums) {
//       init = fn(init,num)
//   }
//   return init
// };

var reduce = function (nums, fn, init) {
  // Return init value if array is empty
  if (nums.length === 0) return init;

  // If init value is undefine then first item in the array is assigned
  let accumilate = init ?? nums[0];

  // If first item of the the array is assigned, then start count from 1 if not 0
  let start = accumilate === init ? 0 : 1;

  // Simple for loop
  for (let i = start; i < nums.length; i++) {
    accumilate = fn(accumilate, nums[i]);
  }

  return accumilate;
};

// Intuition
// The reduce function is used to apply a given function to each element of an array and return a single accumulated value.

// Approach
// Check if the input array is empty. If it is, return the initial value.
// If an initial value is provided, set the accumulator to the initial value. Otherwise, set it to the first element of the array.
// Determine the starting index for the loop based on whether an initial value was provided. If an initial value was provided, start the loop at index 0. Otherwise, start at index 1.
// Iterate over the input array using a simple for loop starting at the determined starting index.
// Apply the given function to the accumulator and the current element of the array, and update the accumulator with the result.
// Once all elements of the array have been processed, return the final accumulated value.

const arr = [
  { name: "foo", value: 1 },
  { name: "bar", value: 2 },
];

const result = arr.reduce((a, b) => ({ ...a, [b.name]: b }), {});

console.log(result);
// { foo: { name: "foo", value: 1 }, bar: { name: "bar", value: 2 } }
