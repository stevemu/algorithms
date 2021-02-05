class Group<T> {
  arr: Array<T> = []

  static from<T>(arr: T[]) {
    const g = new Group();
    for (const item of arr) {
      g.add(item);
    }
    return g;
  }

  add(num: T) {
    if (!this.arr.includes(num)) {
      this.arr.push(num);
    }
  }

  delete(num: T) {
    this.arr = this.arr.filter(n => {
      return n !== num;
    })
  }

  has(num: T) {
    return this.arr.includes(num);
  }

  [Symbol.iterator]() {
    return new GroupIterator<T>(this);
  }
}

class GroupIterator<T> {
  arr: T[]
  idx: number = 0
  constructor(group: Group<T>) {
    this.arr = group.arr;
  }

  next() {
    if (this.idx >= this.arr.length) {
      return {done: true};
    }
    return {value: this.arr[this.idx++], done: false};
  }
}

// let group = Group.from([10, 20]);
// console.log(group.has(10));
// // → true
// console.log(group.has(30));
// // → false
// group.add(10);
// group.delete(10);
// console.log(group.has(10));

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}