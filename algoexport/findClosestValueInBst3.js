// recursively, learned from the solution

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
  return findClosestValueInBstHelper(tree, target, Infinity);
}

function findClosestValueInBstHelper(tree, target, closest) {
  if (tree === null) {
    return closest;
  }
  if (Math.abs(target - tree.value) < Math.abs(target - closest)) {
    closest = tree.value;
  }
  if (target > tree.value) {
    return findClosestValueInBstHelper(tree.right, target, closest);
  } else if (target < tree.value) {
    return findClosestValueInBstHelper(tree.left, target, closest);
  } else {
    return closest;
  }
}

console.log(findClosestValueInBst(root, 12));
