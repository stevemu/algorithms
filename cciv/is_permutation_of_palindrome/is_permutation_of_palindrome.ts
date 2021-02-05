// //1.4

// type CharFrequencyMap = Record<string, number>;

// function isPermuationOfPalindrone(s: string) {
//   const count = buildCharFrequencyMap(s);
//   return checkNoMoreOneOdd(count);
// }

// function checkNoMoreOneOdd(countMap: CharFrequencyMap) {
//   let oddFound = false;
//   for (let count of Object.values(countMap)) {
//     if (count % 2 === 1) {
//       if (oddFound) {
//         return false;
//       }
//       oddFound = true;
//     }
//   }
//   return true;
// }

// function buildCharFrequencyMap(s: string) {
//   const count: CharFrequencyMap = {};
//   for (let c of s) {
//     if (c === ' ') continue;
//     c = c.toLowerCase();
//     if (c in count) {
//       count[c]++;
//     } else {
//       count[c] = 1;
//     }
//   }
//   return count;
// }

// console.log(isPermuationOfPalindrone('Tact Coa'));