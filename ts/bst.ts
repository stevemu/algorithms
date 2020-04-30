// https://www.youtube.com/watch?v=i_Q0v_Ct5lY&list=PLI1t_8YX-Apv-UiRlnZwqqrRT8D1RhriX&index=6

class BstNode {
  left: BstNode
  right: BstNode
  constructor(public val: number) {
    this.left = null;
    this.right = null;
  }
}

let root = new BstNode(50);
const node10 = new BstNode(10);
const node80 = new BstNode(80);
const node5 = new BstNode(5);
const node30 = new BstNode(60);
const node70 = new BstNode(70);
const node90 = new BstNode(90);
const node20 = new BstNode(20);
const node40 = new BstNode(40);
const node85 = new BstNode(85);

root.left = node10;
root.right = node80;
node10.left = node5;
node10.right = node30;
node30.left = node20;
node30.right = node40;
node80.left = node70;
node80.right = node90;
node90.left = node85;

const isBst = (root: BstNode) => {
  return isBstHelper(root, -Infinity, Infinity);
}

let incorrectNode: BstNode

const isBstHelper = (root: BstNode, min: number, max: number) => {
  if (root === null) {
    return true;
  }
  if (root.val < min || root.val > max) {
    incorrectNode = root;
    return false;
  }
  return isBstHelper(root.left, min, root.val - 1) && isBstHelper(root.right, root.val + 1, max);
}

console.log(isBst(root));
console.log(incorrectNode);