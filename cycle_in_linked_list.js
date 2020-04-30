class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function hasCycle(node) {
  if (node == null) {
    return false;
  }

  let fast = node.next;
  let slow = node;

  while (fast != null && slow != null && fast.next.next != null) {
    if (fast == slow) {
      return true;
    }
    fast = fast.next.next;
    slow = slow.next;
  }

  return false;
}

// test case 1
// let node1 = new ListNode(1);
// let node2 = new ListNode(2);
// let node3 = new ListNode(3);
// let node4 = new ListNode(4);
// let node5 = new ListNode(5);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node1;

// console.log(hasCycle(node1));

// test case 2
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(hasCycle(node1));
