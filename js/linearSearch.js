function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index if the target is found
    }
  }
  return -1; // Return -1 if the target is not found in the array
}
// O(1) best  and worst O(n) and average O(n)
// Example usage:
const myArray = [2, 5, 8, 12, 16, 23, 38, 42];
const targetValue = 16;
const result = linearSearch(myArray, targetValue);

console.log(result); // Output: 4 (index of the target value)
