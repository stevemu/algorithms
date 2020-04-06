class Node {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }

  insert(data) {
    if (data < this.data) {
      if (this.left == null) {
        this.left = new Node(data);
      } else {
        this.left.insert(data);
      }
    } else {
      if (this.right == null) {
        this.right = new Node(data);
      } else {
        this.right.insert(data);
      }
    }
  }

  contains(data) {
    if (this.data == data) {
      return true;
    }
    if (data < this.data) {
      if (this.left == null) {
        return false;
      } else {
        return this.left.contains(data);
      }
    } else {
      if (this.right == null) {
        return false;
      } else {
        return this.right.contains(data);
      }
    }
  }

  printInOrder() {
    if (this.left) {
      this.left.printInOrder();
    }
    console.log(this.data);
    if (this.right) {
      this.right.printInOrder();
    }

  }


}

let root = new Node(10);
root.insert(5);
root.insert(15);
root.insert(8);
// console.log(root);
console.log(root.contains(10));
// root.printInOrder();