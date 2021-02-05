//1.4
type CharFrequencyMap = Record<string, number>;

function isPermuationOfPalindrone2(s: string) {
  const count: CharFrequencyMap = {};
  let oddCount = 0;
  for (let c of s) {
    if (c === ' ') continue;
    c = c.toLowerCase();
    if (c in count) {
      count[c]++;
    } else {
      count[c] = 1;
    }
    if (count[c] % 2 === 1) {
      oddCount += 1;
    }
    if (oddCount > 1) {
      return false;
    }
  }
  return true;
}

console.log(isPermuationOfPalindrone2('Tact Coa'));
// abcdba