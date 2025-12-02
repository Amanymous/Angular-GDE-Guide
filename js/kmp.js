//  kmp algo
// string - abcabcabspl
// substring - abcabs
// a b c a b s
// 0 0 0 0 0 0
// a a b a a a c
// 0 1 0 1 2 2 0

function calculateLpsTable(substring) {
  let i = 1;
  let j = 0;
  let lps = new Array(substring.length).fill(0);
  while (i < substring.length) {
    if (substring[i] === substring[j]) {
      lps[i] = j + 1;
      i += 1;
      j += 1;
    } else {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i += 1;
      }
    }
  }
  return lps;
}
// const res = calculateLpsTable('aabaaac')
// console.log("res=",res);

// a b c a b c a b s p l
// a b c a b s
// 0 0 0 1 2 0

function searchSubString(string, substring) {
  let lengthOfString = string.length;
  let lengthOfSubString = substring.length;
  let lps = calculateLpsTable(substring);
  let i = 0;
  let j = 0;
  while (i < lengthOfString) {
    if (string[i] === substring[j]) {
      i += 1;
      j += 1;
    } else {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i += 1;
      }
    }
    if (j === lengthOfSubString) {
      return true;
    }
  }
  return false;
}
const result = searchSubString("abcabcabspl", "abcabs");
console.log(result);
