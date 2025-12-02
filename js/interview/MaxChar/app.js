function maxChar(str) {
  // const charMap = [];
  // let max = 0;
  // let maxChar = '';

  // for (let char of str) {
  //   if (charMap[char]) {
  //     charMap[char]++;
  //   } else {
  //     charMap[char] = 1;
  //   }
  // }

  // for (let char in charMap) {
  //   if (charMap[char] > max) {
  //     max = charMap[char];
  //     maxChar = char;
  //   }
  // }
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charMap[char] = charMap[char] + 1 || 1;

    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}
console.log("chars:",maxChar("aabbbiiiiiii"));


module.exports = maxChar;


// function maxChar(str) {
//   const charMap = Array.from(str).reduce((map, char) => {
//     map.set(char, (map.get(char) || 0) + 1);
//     return map;
//   }, new Map());

//   let max = 0;
//   let maxChar = '';

//   charMap.forEach((count, char) => {
//     if (count > max) {
//       max = count;
//       maxChar = char;
//     }
//   });

//   return maxChar;
// }

// function maxChar(str) {
//   const charMap = new Map();
//   let max = 0;
//   let maxChar = '';

//   Array.from(str).forEach((char) => {
//     charMap.set(char, (charMap.get(char) || 0) + 1);

//     if (charMap.get(char) > max) {
//       max = charMap.get(char);
//       maxChar = char;
//     }
//   });

//   return maxChar;
// }

// function maxChar(str) {
//   const charMap = new Map();
//   let max = 0;
//   let maxChar = '';

//   Array.from(str).map((char) => {
//     charMap.set(char, (charMap.get(char) || 0) + 1);

//     if (charMap.get(char) > max) {
//       max = charMap.get(char);
//       maxChar = char;
//     }
//   });

//   return maxChar;
// }

// function maxChar(str) {
//   const charMap = new Map();
//   let max = 0;
//   let maxChar = '';

//   for (let char of str) {
//     charMap.set(char, (charMap.get(char) || 0) + 1);

//     if (charMap.get(char) > max) {
//       max = charMap.get(char);
//       maxChar = char;
//     }
//   }

//   return maxChar;
// }

// function maxChar(str) {
//   const charMap = {};
//   let max = 0;
//   let maxChar = '';

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   }

//   const keys = Object.keys(charMap);
//   for (let i = 0; i < keys.length; i++) {
//     const char = keys[i];
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }

//   return maxChar;
// }







