let {MinHeap} = require('./min_heap');
let {MaxHeap} = require('./max_heap');

function getMedians(arr) {
  const minHeap = new MinHeap();
  const maxHeap = new MaxHeap();

  const medians = [];

  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    addNumber(number, maxHeap, minHeap);
    rebalance(maxHeap, minHeap);
    const m = getMedian(maxHeap, minHeap);
    medians[i] = m;
  }

  return medians;
}

function addNumber(number, minHeap, maxHeap) {
  if (minHeap.getSize() == 0 || number < minHeap.peek()) {
    minHeap.add(number);
  } else {
    maxHeap.add(number);
  }
}

function rebalance(minHeap, maxHeap) {
  const smallerHeap = minHeap.getSize() < maxHeap.getSize() ? minHeap : maxHeap;
  const biggerHeap = minHeap.getSize() >= maxHeap.getSize() ? minHeap : maxHeap;
  if ((biggerHeap.getSize() - smallerHeap.getSize()) >= 2) {
    smallerHeap.add(biggerHeap.poll());
  }
}

function getMedian(minHeap, maxHeap) {
  const smallerHeap = minHeap.getSize() < maxHeap.getSize() ? minHeap : maxHeap;
  const biggerHeap = minHeap.getSize() >= maxHeap.getSize() ? minHeap : maxHeap;
  if (smallerHeap.getSize() == biggerHeap.getSize()) {
    return (smallerHeap.peek() + biggerHeap.peek()) / 2;
  } else {
    return biggerHeap.peek();
  }
}

// const arr = [5,2,8,1]
// const arr = [5,2,8,1]
const arr = [2,3,4]
console.log(getMedians(arr));