// CiCI, p. 67


function allIntegers() {
  let n = 1000;
  let map = {};
  for (let c = 0; c < n; c++) {
    for (let d = 0; d < n; d++) {
      let sum = c + d;
      if (sum in map) {
        map[sum].push([c, d]);
      } else {
        map[sum] = [[c, d]];
      }
    }
  }

  for (let a = 0; a < n; a++) {
    for (let b = 0; b < n; b++) {
      let sum = a + b;
      let pairs = map[sum];
      for (let pair of pairs) {
        console.log(`${a}^2 + ${b}^2 = ${pair[0]}^2 + ${pair[1]}^2 `);
      }
    }
  }
}

// O(n^3)
// function allIntegers() {
//   let limit = 100;
//   let count = 0;

// 	for (let a = 0; a < limit; a++) {
// 		for (let b = 0; b < limit; b++) {
// 			for (let c = 0; c < limit; c++) {
// 				let d = Math.pow(Math.pow(a, 3), Math.pow(b, 3), Math.pow(c, 3), 1 / 3);
// 				if (
// 					Math.pow(a, 2) + Math.pow(b, 2) ==
//           Math.pow(c, 2) + Math.pow(d, 2) &&
//           d >= 0 && d <= limit
// 				) {
//           console.log(`${a}^2 + ${b}^2 = ${c}^2 + ${d}^2 `);
//           count++;
// 					break;
// 				}
// 			}
// 		}
//   }
//   console.log(count);
// }

// O(n^4)
// function allIntegers() {
//   let limit = 100;

//   for (let a = 0; a < limit; a++) {
//     for (let b = 0; b < limit; b++) {
//       for (let c = 0; c < limit; c++) {
//         for (let d = 0; d < limit; d++) {
//           if (a == b && b == c && c == d) continue;
//           if (Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2) + Math.pow(d, 2)) {
//             console.log(`${a}^2 + ${b}^2 = ${c}^2 + ${d}^2 `);
//             break;
//           }
//         }
//       }
//     }
//   }
// }

allIntegers();
