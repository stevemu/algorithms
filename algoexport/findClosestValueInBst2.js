// my solution - iteratively

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (this.value == null) {
      this.value = value;
    } else if (value < this.value && !this.left) {
      this.left = new BST(value);
    } else if (value >= this.value && !this.right) {
      this.right = new BST(value);
    } else if (value < this.value) {
      this.left.insert(value);
    } else if (value > this.value) {
      this.right.insert(value);
    }
  }
}

let root = new BST();
root.insert(10);
root.insert(5);
root.insert(15);
root.insert(2);
root.insert(5);
root.insert(1);
root.insert(15);
root.insert(13);
root.insert(22);
root.insert(14);

function findClosestValueInBst(tree, target) {
  let closestValue = Infinity;

  let currentNode = tree;
  while (currentNode) {
    if (
      Math.abs(target - currentNode.value) < Math.abs(target - closestValue)
    ) {
      closestValue = currentNode.value;
    }
    if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else {
      break;
    }
  }
  return closestValue;
}

console.log(findClosestValueInBst(root, 12));
