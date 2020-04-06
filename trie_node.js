class Node {
  constructor() {
    this.children = {};
  }

  add(str) {
    this.addHelper(str, 0);
  }

  addHelper(str, idx) {
    if (idx == str.length) {
      return;
    }
    if (!(str[idx] in this.children)) {
      const node = new Node();
      this.children[str[idx]] = node;
    }
    this.children[str[idx]].addHelper(str, idx + 1);
  }

  findCount(str) {
    return this.findCountHelper(str, 0);
  }

  findCountHelper(str, idx) {
    if (str.length == idx) {
      return Object.keys(this.children).length;
    }
    if (!(str[idx] in this.children)) {
      return 0;
    }
    return this.children[str[idx]].findCountHelper(str, idx + 1);
  }
}

const node = new Node();
node.add('abc');
node.add('acc');
node.add('aec');
node.add('azc');
// console.log(JSON.stringify(node));

// console.log(node.children['a'].children['b']);
console.log(node.findCount('a'));