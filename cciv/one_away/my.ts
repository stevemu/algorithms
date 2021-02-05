function is(str1: string, str2: string) {
  const count1 = getCount(str1);
  const count2 = getCount(str2);
  const diff = getDiff(count1, count2);
  return diff <= 1;
}

function getCount(str: string) {
  const hash = {};
  for (const c of str) {
    if (c in hash) {
      hash[c]++;
    } else {
      hash[c] = 1;
    }
  }
  return hash;
}

function getDiff(hash1: Record<string, number>, hash2: Record<string, number>) {
  // reduce count in hash1 by count in hash2
  for (const k of Object.keys(hash2)) {
    if (k in hash1) {
      hash1[k] -= hash2[k];
    } else {
      hash1[k] = -hash2[k];
    }
  }
  let diff = 0;
  for (const count of Object.values(hash1)) {
    diff += Math.abs(count);
  }

  return diff;
}

console.log(is('pale', 'ple')); // true
console.log(is('pale', 'ple1')); // false
console.log(is('pales', 'pale'));
console.log(is('pale', 'bake'));

