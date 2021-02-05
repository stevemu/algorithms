// time: O(N^2) space: O(1)
// const isUnique = (str: string) => {
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < str.length; j++) {
//       if (i === j) continue;
//       else if (str[i] === str[j]) {
//         return false;
//       }
//     }
//   }

//   return true;
// }

// time: O(nlog(n)) space: O(log(n))
const isUnique = (str: string) => {
  let s = str.split('').sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  })
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(isUnique('abcd'));// true
console.log(isUnique('aabb'));// false