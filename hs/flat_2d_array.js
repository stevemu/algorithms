class Vector2D {

  constructor(arr) {
    this.arr = arr;
    this.inner = 0;
    this.outer = 0;
  }

  moveToNext() {
    while (this.outer < this.arr.length && this.inner === this.arr[this.outer].length) {
      this.outer++;
      this.inner = 0;
    }
  }

  hasNext() {
    this.moveToNext();
    return this.outer === this.arr.length;
  }

  next() {
    this.moveToNext();
    if (this.outer == this.arr.length) return null;
    return this.arr[this.outer][this.inner++];
  }


}


const iterator = new Vector2D([[1,2],[3],[4]]);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
// console.log(iterator.next());
