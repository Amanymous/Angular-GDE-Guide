function quickSort(nums, low, high) {
  if (low >= high) return;

  let m = Math.floor((low + high) / 2); // Correct midpoint calculation
  let pivot = nums[m]; // Pivot value
  console.log("pivot=", pivot);

  while (low <= high) {
    // Move low pointer to the right as long as it's less than pivot
    while (nums[low] < pivot) {
      low++;
    }

    // Move high pointer to the left as long as it's greater than pivot
    while (nums[high] > pivot) {
      high--;
    }

    if (low <= high) {
      // Swap the values at low and high pointers
      let temp = nums[low];
      nums[low] = nums[high];
      nums[high] = temp;

      low++;
      high--;
    }
  }

  // Recursively sort the two halves
  if (low < high) {
    quickSort(nums, low, high);
    quickSort(nums, low, high);
  }
}

let nums = [5, 4, 3, 2, 1];
quickSort(nums, 0, nums.length - 1);
console.log(nums);
