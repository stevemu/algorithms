function maxSumIncreasingSubsequence(array) {
  let sum = array.map(() => 0);
  let seq = array.map(() => null);
  for (let i = 0; i < array.length; i++) {
    let corrent = array[i];
    sum[i] = corrent;
    for (let j = 0; j < i; j++) {
      if (array[j] < corrent && corrent + sum[j] > sum[i]) {
        sum[i] = corrent + sum[j];
        seq[i] = j;
      }
    }
  }

  // console.log(sum);
  // console.log(seq);

  const seqNums = [];
  const maxNum = Math.max(...sum);
  console.log(maxNum);
  let idx = sum.indexOf(maxNum);

  while (idx !== null) {
    console.log(idx);
    seqNums.unshift(array[idx]);
    idx = seq[idx];
  }

  return [maxNum, seqNums];
}

console.log(maxSumIncreasingSubsequence([8, 12, 2, 3, 15, 5, 7]));
