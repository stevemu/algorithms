// function isUique(s: string) {
//   const map: Record<string, boolean> = {};
//   for (const c of s) {
//     if (c in map) {
//       return false;
//     } else {
//       map[c] = true;
//     }
//   }
//   return true;
// }

function isUique(s: string) {
  let checker = 0;
  for (const c of s) {
    let val = c.charCodeAt(0) - 'a'.charCodeAt(0);
    if ((checker & (1 << val)) > 0) {
      return false;
    }
    checker |= (1 << val);
  }
  return true;
}

console.log(isUique('abcdefa')); //f
console.log(isUique('abcdef')); //t