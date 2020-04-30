// function* inf() {
//   let i = 0;
//   while (i < 3) {
//     yield i++;
//   }
// }

// let iterator = inf();
// console.log(iterator.next()); // i = 1, print 0
// console.log(iterator.next()); // print 1, i = 2
// console.log(iterator.next()); // print 2, i = 3
// console.log(iterator.next()); // 

// function* t2() {
//   let r = yield 'foo'
//   return r;
// }

// let iterator = t2();
// console.log(iterator.next());
// console.log(iterator.next(222));
// console.log(iterator.next(222));

const arr = [[1,5], [2], [5,7]];
function* twoDarray(arr) {
  let inner = 0;
  let outer = 0;

  function moveToNext() {
    if (outer < arr.length && inner == arr[outer].length) {
      outer++;
      inner = 0;
    }
  }
 
  while (outer < arr.length) {
    moveToNext();
    if (outer === arr.length) break;
    yield arr[outer][inner++];
  }
  
}

let iterator = twoDarray(arr);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());