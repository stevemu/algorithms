/**
 * initialize your data structure here.
 */

class MinHeap {
  constructor() {
    this.items = [];
    this.size = 0;
  }
  
  getSize() {
    return this.size;
  }

  peek() {
    if (this.size == 0) return null;
    return this.items[0];
  }

  poll() {
    let item = this.items[0];
    this.items[0] = this.items[this.size - 1];
    this.size--;
    this.items.pop();
    this.heapifyDown();
    return item;
  }

  add(num) {
    this.items[this.size] = num;
    this.size++;
    this.heapifyUp();
  }

  heapifyUp() {
    let idx = this.size - 1;
    while (this.hasParent(idx) && this.getParent(idx) > this.items[idx]) {
      this.swap(this.getParentIdx(idx), idx);
      idx = this.getParentIdx(idx);
    }
  }

  heapifyDown() {
    let idx = 0;
    while (this.hasLeftChild(idx)) {
      let smallerIdx = this.getLeftChildIdx(idx);
      if (this.hasRightChild(idx) && this.getRightChild(idx) < this.items[smallerIdx]) {
        smallerIdx = this.getRightChildIdx(idx);
      }
      if (this.items[smallerIdx] > this.items[idx]) {
        break;
      }
      this.swap(idx, smallerIdx);
      idx = smallerIdx;
    }
  }

  hasLeftChild(idx) {
    return this.getLeftChildIdx(idx) < this.size;
  }

  getLeftChildIdx(idx) {
    return 2 * idx + 1;
  }

  hasRightChild(idx) {
    return this.getRightChildIdx(idx) < this.size;
  }

  getRightChildIdx(idx) {
    return 2 * idx + 2;
  }

  getRightChild(idx) {
    return this.items[this.getRightChildIdx(idx)];
  }

  hasParent(idx) {
    const parentIdx = Math.floor((idx - 1) / 2);
    return parentIdx >= 0;
  }

  getParent(idx) {
    return this.items[this.getParentIdx(idx)];
  }

  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  swap(idx1, idx2) {
    const temp = this.items[idx1];
    this.items[idx1] = this.items[idx2];
    this.items[idx2] = temp;
  }

}

class MaxHeap {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  peek() {
    if (this.size == 0) return null;
    return this.items[0];
  }

  poll() {
    let item = this.items[0];
    this.items[0] = this.items[this.size - 1];
    this.size--;
    this.items.pop();
    this.heapifyDown();
    return item;
  }

  add(num) {
    this.items[this.size] = num;
    this.size++;
    this.heapifyUp();
  }

  heapifyUp() {
    let idx = this.size - 1;
    while (this.hasParent(idx) && this.getParent(idx) < this.items[idx]) {
      this.swap(this.getParentIdx(idx), idx);
      idx = this.getParentIdx(idx);
    }
  }

  heapifyDown() {
    let idx = 0;
    while (this.hasLeftChild(idx)) {
      let biggerIdx = this.getLeftChildIdx(idx);
      if (this.hasRightChild(idx) && this.getRightChild(idx) > this.items[biggerIdx]) {
        biggerIdx = this.getRightChildIdx(idx);
      }
      if (this.items[biggerIdx] < this.items[idx]) {
        break;
      }
      this.swap(idx, biggerIdx);
      idx = biggerIdx;
    }
  }

  hasLeftChild(idx) {
    return this.getLeftChildIdx(idx) < this.size;
  }

  getLeftChildIdx(idx) {
    return 2 * idx + 1;
  }

  hasRightChild(idx) {
    return this.getRightChildIdx(idx) < this.size;
  }

  getRightChildIdx(idx) {
    return 2 * idx + 2;
  }

  getRightChild(idx) {
    return this.items[this.getRightChildIdx(idx)];
  }

  hasParent(idx) {
    const parentIdx = Math.floor((idx - 1) / 2);
    return parentIdx >= 0;
  }

  getParent(idx) {
    return this.items[this.getParentIdx(idx)];
  }

  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  swap(idx1, idx2) {
    const temp = this.items[idx1];
    this.items[idx1] = this.items[idx2];
    this.items[idx2] = temp;
  }

}


var MedianFinder = function() {
    this.maxHeap = new MaxHeap();
    this.minHeap = new MinHeap();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (num < this.maxHeap.peek() || this.maxHeap.getSize() == 0) {
        this.maxHeap.add(num);
      
    } else {
        this.minHeap.add(num);
    }

    // console.log(this.maxHeap);
    // console.log(this.minHeap);
    this.rebalance();
};

MedianFinder.prototype.rebalance = function() {
    const smallerHeap = this.minHeap.getSize() < this.maxHeap.getSize() ? this.minHeap : this.maxHeap;
    const biggerHeap = this.minHeap.getSize() >= this.maxHeap.getSize() ? this.minHeap : this.maxHeap;
    if ((biggerHeap.getSize() - smallerHeap.getSize()) >= 2) {
        smallerHeap.add(biggerHeap.poll());
    }
}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const smallerHeap = this.minHeap.getSize() < this.maxHeap.getSize() ? this.minHeap : this.maxHeap;
    const biggerHeap = this.minHeap.getSize() >= this.maxHeap.getSize() ? this.minHeap : this.maxHeap;
    if (biggerHeap.getSize() == smallerHeap.getSize()) {
        return (smallerHeap.peek() + biggerHeap.peek()) / 2;
    } else {
        return biggerHeap.peek();
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
var obj = new MedianFinder()
obj.addNum(-1)
// console.log(obj);
obj.addNum(-2)
// console.log(obj);
obj.addNum(-3)
var param_2 = obj.findMedian()
// console.log(obj);
console.log(param_2);