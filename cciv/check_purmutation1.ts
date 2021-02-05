// 1.2

function checkPurmutation(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let map: Record<string, number> = createCountMap(a);
  return isMapContains(map, b);
}

function createCountMap(s: string): Record<string, number> {
  let map: Record<string, number> = {};
  s.split('').reduce((acc, c) => {
    if (c in map) {
      map[c]++;
    } else {
      map[c] = 1;
    }
    return map;
  }, map);
  return map;
}

function isMapContains(map: Record<string, number>, s: string) {
  for (const c of s) {
    if (!(c in map)) {
      return false;
    }
    map[c]--;
    if (map[c] < 0) {
      return false;
    }
  }
  return true;
}

console.log(checkPurmutation('abcde', 'edcba')); // true
console.log(checkPurmutation('abcde', 'edcaa')); // false
