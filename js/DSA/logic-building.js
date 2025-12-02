// 1) reverse string
// function reverseString(str) {
//     let result = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         result += str[i];
//     }
//     return result;
// }

// console.log(reverseString("Hello")); // "olleH"

// const reverseString = str => str.split('').reverse().join('')
// console.log(reverseString('hi'))

// function reverseString(str) {
//   let result = '';
//   for (const char of str) {
//     result = char + result;
//     console.log({char} , {result})
//   }
//   return result;
// }
// console.log(reverseString('hi'))

// 2)  Palindrome Check
// function isPalindrome(str) {
//   let result = str.length;

//   for (let i = 0; i < result / 2; i++) {
//     console.log(`Comparing ${str[i]} with ${str[result - i - 1]}`);

//     if (str[i] !== str[result - i - 1]) {
//       return "not palindrome";
//     }
//   }

//   return "palindrome";
// }
// isPalindrome("racecar");

// function isPalindrome(str) {
//     let j = str.length - 1
//     for (let i = 0; i < str.length / 2; i++) {
//         if (str[i] != str[j]) {
//             console.log(str[i],str[j])
//             return false;
//         }
//         j--;
//     }
//     return true;
// }

// console.log(isPalindrome("level"));   // <-- This is required!

//
// 3) longestWord
// function longestWord(sentence) {
//   // split sentence into words
//   const words = sentence.split(" ");

//   let longest = "";

//   for (let word of words) {
//     if (word.length > longest.length) {
//       longest = word;
//     }
//   }

//   return longest;
// }

// console.log(longestWord("This is a sample sentence")); // "sentence"

// 4) Factorial
// function app(n) {
//   if (n === 0 || n === 1) return 1;
//   return n * app(n - 1);
// }
// app(1);

// function factorial(n) {
//     if (n === 0 || n === 1) return 1;
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

// console.log(factorial(4)); // 120

// 5) fibonacci
// function app(n) {
//   let a = 0;
//   let b = 1;
//   let temp;
//   for (let i = 0; i <= n; i++) {
//     temp = a + b;
//     a = b;
//     b = temp;
//   }
//   return temp;
// }
// app(10);

// function app(n){
//     let a = 0;
//     let b = 1;
//     let result = "";  // store as string since no arrays allowed

//     if (n >= 1) result += a;      // add first number
//     if (n >= 2) result += " " + b; // add second number

//     for (let i = 3; i <= n; i++) {
//         let c = a + b;
//         result += " " + c;
//         a = b;
//         b = c;
//     }

//     return result;
// }
// app(10)

// function fibonacciList(count) {
//     const list = [0, 1];

//     for (let i = 2; i < count; i++) {
//         list.push(list[i - 1] + list[i - 2]);
//     }

//     return list;
// }

// console.log(fibonacciList(10));
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// 6) Remove Duplicates

// function app(arr){
//     let duplicates = new Set(arr)
//     return duplicates
// }
// app([1,22,33,22,41,40,41])

const arr = [1, 2, 2, 3, 4, 4];
const unique = arr.filter((value, index) => arr.indexOf(value) === index);

console.log(unique); // [1, 2, 3, 4]

// const arr = [1, 2, 2, 3, 4, 4];

// const unique = arr.reduce((acc, val) => {
//   if (!acc.includes(val)) acc.push(val);
//   return acc;
// }, []);

// console.log(unique); // [1, 2, 3, 4]

// const arr = [
//   { id: 1, name: "a" },
//   { id: 2, name: "b" },
//   { id: 1, name: "a" }
// ];

// const unique = arr.filter((obj, index, self) =>
//   index === self.findIndex(o => o.id === obj.id)
// );

// console.log(unique);

// const arr = [1, 2, 2, 3, 4, 4];
// const seen = {};
// const unique = [];

// for (let i = 0; i < arr.length; i++) {
//   let value = arr[i];

//   if (!seen[value]) {
//     seen[value] = true;
//     unique.push(value);
//   }
// }

// console.log(unique); // [1, 2, 3, 4]

// 7) Count Vowels

// function countVowels(str) {
//   let vowels = "aeiouAEIOU";
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }
// countVowels("this is awsome");

// function countVowels(str) {
//   let vowels = "aeiouAEIOU";
//   return str.split("").reduce((count, char) => {
//     return vowels.includes(char) ? count + 1 : count;
//   }, 0);
// }

// countVowels("this is awsomeaa");

// 8) Missing Number

// function missingNum(arr) {
//   const n = arr.length; // length of array is N (one missing number)

//   // expected sum of numbers from 0 to n
//   const sumExpected = (n * (n + 1)) / 2;

//   // sum of actual array elements
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return sumExpected - sum;
// }

// console.log(missingNum([0, 3, 1])); // 2

// 9) Case a Sentence
// function caseSentence() {
//   let sentence = "hello world from js";
//   let words = sentence.split(" "); // split sentence into words
//   let titleCase = "";

//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     // capitalize first letter + add rest of word
//     let capitalized = word.charAt(0).toUpperCase() + word.slice(1);

//     // add a space if not the first word
//     if (i > 0) {
//       titleCase += " ";
//     }

//     titleCase += capitalized;
//   }
// }

// 10) Check Anagrams
function anagram(str1, str2) {
  // if lengths differ, cannot be anagrams
  if (str1.length !== str2.length) return false;

  let counter = {};

  // count characters in str1
  for (let char of str1) {
    counter[char] = (counter[char] || 0) + 1;
  }

  // subtract counts using str2
  for (let char of str2) {
    if (!counter[char]) {
      return false; // char missing or too many occurrences
    }
    counter[char] -= 1;
  }

  return true;
}

// Example usage
console.log(anagram("silent", "listen")); // true
console.log(anagram("Silient", "listen")); // false (case-sensitive)
console.log(anagram("silient", "listen")); // false
