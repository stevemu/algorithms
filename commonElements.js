// time: O(n) space: O(1)
function commonElements(A, B) {
  let common = [];

  let b = 0;

  for (let a = 0; a < A.length; a++) {
    while (B[b] < A[a]) {
      b++;
    }
    if (B[b] == A[a]) {
      common.push(A[a]);
      b++;
    }
  }

  return common;
}


// O(n) space: O(n)
// function commonElements(A, B) {
//   let common = [];
//   let Bs = [];
//   for (let i = 0; i < B.length; i++) {
//     Bs[B[i]] = true;
//   }
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] in Bs) {
//       common.push(A[i]);
//     }
//   }

//   return common;
// }


console.log(
	commonElements([13, 27, 35, 40, 49, 55], [17, 35, 39, 40, 55, 58, 60])
);

// O(n log n) 
// function commonElements(A, B) {
//   let common = [];
//   for (let i = 0; i < A.length; i++) {
//     let left = 0;
//     let right = B.length;

//     while (left < right) {
//       let mid = Math.floor((left + right) / 2);
//       if (B[mid] == A[i]) {
//         common.push(B[mid]);
//         break;
//       } else if (A[i] > B[mid]) {
//         left = mid + 1;
//       } else {
//         right = mid;
//       }

//     }
//   }

//   return common;

// }


// brute force O(n^2)
// function commonElements(A, B) {
//   let common = [];
//   for (let i = 0; i < A.length; i++) {
//     for (let j = 0; j < B.length; j++) {
//       if (A[i] == B[j]) {
//         common.push(A[i]);
//       }
//     }
//   }

//   return common;

// }

