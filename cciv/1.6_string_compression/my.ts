// function compress(s: string) {
//   let start = 0;
//   let end = 0;
//   let result = '';
//   let count = 0;
//   while (start < s.length) {
//     if (s[start] === s[end]) {
//       end++;
//       count++;
//     } else {
//       result += s[start];
//       result += count;
//       start = end;
//       count = 0;
//     }
//   }
//   return result;
// }

// console.log(compress('aabcccccaaa'));