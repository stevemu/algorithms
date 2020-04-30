// my solution - recursively

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
    return this;
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

// console.log(root);

function findClosestValueInBstHelper(root, target, closestValue = Infinity) {
  let newClosestValue =
    Math.abs(root.value - target) < closestValue ? root.value : closestValue;
  if (root.left && target < root.value) {
    return findClosestValueInBstHelper(root.left, target, newClosestValue);
  } else if (root.right && target >= root.value) {
    return findClosestValueInBstHelper(root.right, target, newClosestValue);
  } else {
    return newClosestValue;
  }
}

// traverseTree(root);

function findClosestValueInBst(tree, target) {
  return findClosestValueInBstHelper(tree, target);
}

console.log(findClosestValueInBst(root, 12));
