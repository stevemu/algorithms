// const symbolObject = function () {
//   return this;
// }.call(Symbol('a'));
// console.log(symbolObject);
// console.log(typeof symbolObject);
// console.log(symbolObject instanceof Symbol);
// console.log(symbolObject.constructor == Symbol);
const o = Object(Symbol('a'));
console.log(Object.prototype.toString.call(o));
// console.log(o);
