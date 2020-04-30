const arr = [4,2,8,1,2,9,10];

function bubbleSort(arr) {
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        isSorted = false;
      }
    }
  }
  return arr;
}

function swap(arr, i, j) {
  [arr[j], arr[i]] = [arr[i], arr[j]]
}

console.log(bubbleSort(arr));