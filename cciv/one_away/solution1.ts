function is(s1: string, s2: string) {
  if (s1.length === s2.length) {
    return isOneReplacementAway(s1, s2);
  } else if (s2.length - 1 === s1.length) {
    return isOneInsertionAway(s1, s2);
  } else if (s2.length + 1 === s1.length) {
    return isOneInsertionAway(s2, s1);
  } else {
    return false;
  }
}

function isOneReplacementAway(s1: string, s2: string) {
  if (s1.length !== s2.length) throw new Error('length is different.');
  let diff = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      diff++;
    }
  }
  return diff <= 1;
}

function isOneInsertionAway(s1: string, s2: string) {
  if (Math.abs(s1.length - s2.length) > 1) {
    return false;
  }
  let p1 = 0;
  let p2 = 0;
  let shifted = false;
  while (p1 < s1.length && p2 < s2.length) {
    if (s1[p1] === s2[p2]) {
      p1++;
      p2++;
    } else {
      if (shifted) {
        return false;
      }
      p2++;
      shifted = true;
    }
  }
  return shifted;
}

console.log(is('ple', 'pale')); // t
console.log(is('ple', 'paale')); // f
console.log(is('ple', 'pee')); // t
console.log(is('ple', 'pea')); // f
