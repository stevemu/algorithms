function quickSort(array) {
  return quickSortHelper(array, 0, array.length - 1);
}

function quickSortHelper(array, startIdx, endIdx) {
  if (startIdx >= endIdx) return;

  let leftIdx = startIdx + 1;
  let rightIdx = endIdx;
  let pivotIdx = startIdx;

  while (rightIdx >= leftIdx) {
    if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
      swap(leftIdx, rightIdx, array);
    }
    if (array[leftIdx] <= array[pivotIdx]) {
      leftIdx++;
    }
    if (array[rightIdx] >= array[pivotIdx]) {
      rightIdx--;
    }
  }

  swap(pivotIdx, rightIdx, array);
  let isLeftSubarraySmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
  if (isLeftSubarraySmaller) {
    quickSortHelper(array, startIdx, rightIdx - 1);
    quickSortHelper(array, rightIdx + 1, endIdx);
  } else {
    quickSortHelper(array, rightIdx + 1, endIdx);
    quickSortHelper(array, startIdx, rightIdx - 1);
  }

}

function swap(a, b, array) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

let arr = [8,5,2,9,5,6,3];
console.log(quickSort(arr));
console.log(arr);