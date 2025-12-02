function app(S, T) {
  let p1 = S.length - 1,
    p2 = T.length - 1;
  while (p1 >= 0 || p2 >= 0) {
    if (S[p1] === "#" || T[p2] === "#") {
      if (S[p1] === "#") {
        let backCount = 2;
        while (backCount > 0) {
          console.log("before p1:", p1, "backCount:", backCount);
          p1--;
          backCount--;
          console.log("after p1:", p1, "backCount:", backCount);
          if (S[p1] === "#") {
            // S[p1] = "n";
            console.log(S[p1], backCount);
            backCount += 2;
            console.log(S[p1], backCount);
          }
        }
      }
      if (T[p2] === "#") {
        // T[p2] = "m";
        let backCount = 2;
        while (backCount > 0) {
          console.log("before p2:", p2, "backCount:", backCount);
          p2--;
          backCount--;
          console.log("after p2:", p2, "backCount:", backCount);
          if (T[p2] === "#") {
            backCount += 2;
          }
        }
      }
    } else {
      if (S[p1] !== T[p2]) {
        return false;
      } else {
        p1--;
        p2--;
      }
    }
  }
  return true;
}
const string1 = "ab#z";
const string2 = "az#8z";
console.log(app(string1, string2));
