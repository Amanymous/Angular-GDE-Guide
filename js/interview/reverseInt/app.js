function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");
  // if(n<0) return parseInt(reversed) * -1
  return parseInt(reversed) * Math.sign(n);
}

//   let number = num.split('')
//   let newString = '';
//   for (let i = str.length-1; i >= 0; i--) {
//   newString += str[i];
//   }
//   return newString
// console.log(reverseInt(112));

module.exports = reverseInt;

// let result = ''
// let count = 1
// for(let i = 0; i<num.length; i++){
//     if(num[i] == num[i+1]){
//         console.log(num[i]);
//         count++
//     }

//     else{
//         result+= count + num[i]
//         console.log("else:",num[i]);
//         count = 1
//     }
// }
// return result

// ===========================
// let words = str.split(" "); // Split the string into an array of words

// Iterate over each word
//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];

//     if (word[i]) {
//       let lastLetter = word[word.length - 1]; // Get the last letter
//       let modifiedWord = lastLetter + word.substring(0, word.length - 1); // Move the last letter to the front
//       words[i] = modifiedWord; // Update the word in the array
//     }
//   }

//   let modifiedStr = words.join(" "); // Join the words back into a string
//   return modifiedStr
