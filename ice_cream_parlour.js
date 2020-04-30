// https://www.youtube.com/watch?v=Ifwf3DBN1sc&list=PLI1t_8YX-ApvMthLj56t1Rf-Buio5Y8KL&index=2

// function ice(arr, money) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (i == j) continue;
//       else if (arr[i] + arr[j] == money) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// }

// function ice(arr, money) {
//   let hash = {};
//   for (let i = 0; i < arr.length; i++) {
//     let amount = arr[i];
//     if (amount in hash) {
//       hash[amount].push(i);
//     } else {
//       hash[amount] = [i];
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     const complement = money - arr[i];
//     if (complement in hash) {
//       for (let idx of hash[complement]) {
//         if (arr[idx] + arr[i] == money) {
//           return [i, idx];
//         }
//       }
//     }
//   }

//   return [];
// }


function ice(arr, money) {
  const sortedArr = [...arr];
  sortedArr.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length; i++) {
    let amount = sortedArr[i];
    const complement = money - amount;
    let idx = binarySearch(arr, i + 1, sortedArr.length - 1, complement);
    if (idx >= 0) {
      let indices = getIndices(arr, amount, complement);
      return indices;
    }
  }

  return null;
}

function getIndices(arr, val1, val2) {
  let idx1 = getIndex(arr, val1, -1);
  let idx2 = getIndex(arr, val2, idx1);
  return [idx1, idx2];
}

function getIndex(arr, val, excludeVal) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == val && val !== excludeVal) {
      return i;
    }
  }
  return -1;
}

function binarySearch(arr, left, right, val) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] == val) {
      return mid;
    } else if (arr[mid] <= val) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return -1;
}

// console.log(ice([1,9,5,4,2,6,5], 10));
// console.log(ice([1,9,5,4,2,6,5], 11));
console.log(ice([1,9,5,4,2,6,5], 10));