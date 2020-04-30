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

exports.MinHeap = MinHeap;

// let heap = new MinHeap();
// heap.add(3);
// heap.add(4);
// heap.add(8);
// heap.add(1);
// heap.add(5);
// heap.add(9);
// heap.add(10);
// heap.add(6);
// heap.add(9);
// // console.log(heap.items);
// let item = heap.poll();
// // console.log(item);
// console.log(heap.items);
