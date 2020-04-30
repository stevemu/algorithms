function lonelyInteger(arr: number[]) {
  let result = 0;
  for (const i of arr) {
    result ^= i;
  }
  return result;
}

const arr: number[] = [9,1,2,3,2,9,1,7,7];
console.log(lonelyInteger(arr));