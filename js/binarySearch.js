// Binary Search Pseudocode
// THIS FUNCTION ACCEPTS A SORTED ARRAY AND VALUE
// 1) CREATE A LEFT TO POINTER AT THE START OF THE ARRAY AND A
// RIGHT POINTER AT THE END OF THE ARRAY
// 2) WHILE THE LEFT POINTER COMES BEFORE THE RIGHT POINTER:
//   - create a pointer in the middle
//   - if you find the value you want, return the index
//   - if the value is to small , move the left pointer up
//   - if the value is to large , move the right pointer down
//   - if you never find the value return -1
// Example
// [2,5,6,9,13,15,28,30]
//  S=2   M=9     E=30
// [2,5,6,9,13,15,28,30]
//    S=13  M=15  E=30

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor(start + end) / 2;
  console.log(start, middle, end);
  while (middle !== val) {
    if (val < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  console.log(start, middle, end);
  return middle;
}
binarySearch([1, 88, 0, 99, 3, 11, 22, 77, 89, 2], 11);
