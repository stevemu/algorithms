
class MyQueue {
  constructor() {
    this.oldestOneOnTop = [];
    this.newestOneOnTop = [];
  }

  peek() {
    this.shiftStacks();
    return this.oldestOneOnTop[this.oldestOneOnTop.length - 1];
  }

  dequeue() {
    this.shiftStacks();
    return this.oldestOneOnTop.pop();
  }

  enqueue(v) {
    this.newestOneOnTop.push(v);
  }

  shiftStacks() {
    if (this.oldestOneOnTop.length == 0) {
      while (this.newestOneOnTop.length !== 0) {
        this.oldestOneOnTop.push(this.newestOneOnTop.pop());
      }
    }
  }

}

const q = new MyQueue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());