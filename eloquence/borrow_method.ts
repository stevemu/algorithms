let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
// console.log(map.hasOwnProperty("one"));
const r = Object.prototype.hasOwnProperty.call(map, 'one')
console.log(r);
// → true