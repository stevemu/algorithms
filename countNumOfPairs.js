function numOfPairs(arr, k) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = true;
  }
  for (let i = 0; i < arr.length; i++) {
    let biggerTarget = arr[i] + k;
    let smallerTarget = arr[i] - k;
    if (biggerTarget in map) {
      console.log(`${arr[i]} ${biggerTarget}`);
    }
    if (smallerTarget in map) {
      console.log(`${arr[i]} ${smallerTarget}`);
    }

  }
  
}
numOfPairs([1,7,5,9,2,12,3], 2);


// function numOfPairs(arr, k) {
//   arr.sort((a, b) => a - b);
//   // 1,2,3,5,7,9,12
//   for (let i = 0; i < arr.length; i++) {
//     // 1 + 2 = 3
//     // 1 - 2 = -1
//     let biggerOtherSide = arr[i] + k;
//     let left = i + 1;
//     let right = arr.length - 1;

//     while (left < right) {
//       let mid = Math.floor((left + right) / 2);
//       if (arr[mid] == biggerOtherSide) {
//         console.log(`${arr[i]} ${arr[mid]}`);
//         break;
//       } else if (arr[mid] < biggerOtherSide) {
//         left = mid + 1;
//       } else {
//         right = mid;
//       }
//     }
//   }
// }
// numOfPairs([1,7,5,9,2,12,3], 2);


// function numOfPairs(arr, k) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (Math.abs(arr[i] - arr[j]) == k) {
//         console.log(`${arr[i]} ${arr[j]}`);
//       }
//     }
//   }
// }

