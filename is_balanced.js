// https://www.youtube.com/watch?v=IhJGJG-9Dx8&list=PLI1t_8YX-Apv-UiRlnZwqqrRT8D1RhriX&index=1

const TERMS = {'(': ')', '[' : ']', '{' : '}'};

function isBalanced(s) {
  const stack = [];
  for (let c of s) {
    if (isOpenTerm(c)) {
      stack.push(c);
    } else {
      if (stack.length == 0 || !matches(stack.pop(), c)) {
        return false;
      }
    }
  }
  return stack.length == 0;
}

function isOpenTerm(c) {
  return c in TERMS;
}

function matches(openTerm, closeTerm) {
  return closeTerm == TERMS[openTerm];
}

console.log(isBalanced('()[]((()))'));
// console.log(isBalanced('()['));