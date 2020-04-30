function partialApplication(func, ...fixedArgs) {
  return function(...remaingArgs) {
    return func.apply(this, [...fixedArgs, ...remaingArgs]);
  }
}

function plus(a, b) {
  return a + b;
}

const tenPlusX = partialApplication(plus, 10);
console.log(tenPlusX(20));