function recursive(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      if (array[i] === target) return true;
    } else if (array[i] === target) return false;
  }
  return false;
}
console.log(recursive([1, [2, [3, 4], 5], 6], 4));
