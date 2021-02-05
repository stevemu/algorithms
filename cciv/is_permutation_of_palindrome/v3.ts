
function isPermuationOfPalindrone3(s: string) {
  let oddCount = 0;
  let map: Record<string, number> = {};
  for (const c of s) {
    (c in map) ? map[c]++ : map[c] = 1;
    if (map[c] % 2 === 1) {
      oddCount++;
    } else {
      oddCount--;
    }
  }
  return oddCount <= 1;
}

console.log(isPermuationOfPalindrone3('abba'));
console.log(isPermuationOfPalindrone3('abcdba'));