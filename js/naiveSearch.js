function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) {
        console.log("j:", j, "short.length - 1:", short.length - 1);
        count++;
      }
    }
  }
  return count;
}
console.log(naiveSearch("hello world", "lo"));

// function naiveSearch(long, short) {
//     let count = 0;
//     for (let i = 0; i <= long.length - short.length; i++) {
//       if (long.slice(i, i + short.length) === short) {
//         count++;
//       }
//     }
//     return count;
//   }

//   console.log(naiveSearch("hello world", "lo"));

// function naiveSearch(long, short) {
//     let count = 0;

//     // Iterate through each character in 'long'
//     for (let i = 0; i < long.length; i++) {

//       // Assume a match at the current position in 'long'
//       let isMatch = true;

//       // Check if 'short' matches starting from the current position in 'long'
//       for (let j = 0; j < short.length; j++) {

//         // If a mismatch is found, update 'isMatch' and break the inner loop
//         if (short[j] !== long[i + j]) {
//           isMatch = false;
//           break;
//         }
//       }

//       // If 'isMatch' is still true, a complete match is found
//       if (isMatch) {
//         count++;
//       }
//     }

//     return count;
//   }

//   // Example usage:
//   const result = naiveSearch("hello world", "lo");
//   console.log("Total Matches:", result);
