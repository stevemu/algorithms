function is(str: string) {
  const bitVector = getVector(str);
  // if at most one bit is 1
  // or is 0
  // that means it is a permutation
  return isAtMost1Bit(bitVector) || bitVector === 0;
}

// 00100
// 00011
function isAtMost1Bit(bitVector: number): boolean {
  return (bitVector & bitVector - 1) === 0;
}

function getVector(str: string) {
  let vector = 0;
  for (let c of str) {
    if (c === ' ') continue;
    const charNum = getCharNum(c.toLowerCase());
    vector = toggle(vector, charNum);
  }
  return vector;
}

function getCharNum(c: string) {
  return c.charCodeAt(0) - 'a'.charCodeAt(0);
}

// 0101
// 0100
// 1011
function toggle(vector: number, index: number): number {
  if (index < 0) return vector;
  const mask = 1 << index;
  if ((mask & vector) === 0) {
    vector = vector | mask;
  } else {
    vector = ~mask & vector;
  }
  console.log(vector.toString(2));

  return vector;
}

// console.log(is('Tact Coa'));
// console.log(is('aabbcd'));
// console.log(is('Tact Coaaa'));