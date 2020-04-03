function mergeSort(arr) {
  if (arr.length == 1) {
    return arr;
  }
  let mid = Math.floor((0 + arr.length - 1) / 2);
  let leftHalf = arr.slice(0, mid + 1);
  let rightHalf = arr.slice(mid + 1, arr.length);
  return mergeSortedArray(mergeSort(leftHalf), mergeSort(rightHalf));
}

function mergeSortedArray(leftHalf, rightHalf) {
  let arr = [];
  let left = 0;
  let right = 0;
  let k = 0;
  while (left < leftHalf.length && right < rightHalf.length) {
    if (leftHalf[left] < rightHalf[right]) {
      arr[k++] = leftHalf[left++];
    } else {
      arr[k++] = rightHalf[right++];
    }
  }
  while (left < leftHalf.length) {
    arr[k++] = leftHalf[left++];
  }
  while (right < rightHalf.length) {
    arr[k++] = rightHalf[right++];
  }
  return arr;
}

let arr = [8,5,2,9,5,6,3];
console.log(mergeSort(arr));