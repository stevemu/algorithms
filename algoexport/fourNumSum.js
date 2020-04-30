function fourNumberSum(array, targetSum) {
  let hash = {};
  let result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const diff = targetSum - (array[i] + array[j]);
      if (diff in hash) {
        for (let pair of hash[diff]) {
          result.push([...pair, array[i], array[j]]);
        }
      }
    }

    for (let j = 0; j < i; j++) {
      let sum = array[j] + array[i];
      if (sum in hash) {
        hash[sum].push([array[i], array[j]]);
      } else {
        hash[sum] = [[array[i], array[j]]];
      }
    }
  }

  return result;
}

console.log(fourNumberSum([7, 6, 4, -1, 1, 2], 16));
