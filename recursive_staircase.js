//https://www.youtube.com/watch?v=eREiwuvzaUM&list=PLQbxgIKVVeTM1hG0CJDOHOBriqFJJPM20&index=2

// iterative
function stair(steps) {
  let paths = [0, 1, 2];
  for (let i = 3; i <= steps; i++) {
    paths[0] = paths[1];
    paths[1] = paths[2];
    paths[2] = paths[0] + paths[1];
  }
  return paths[2];
}

console.log(stair(3, [1,2]));




// dp
// function stair(steps) {
//   let paths = [];
//   paths[0] = 0;
//   paths[1] = 1;
//   paths[2] = 2;
//   for (let i = 3; i <= steps; i++) {
//     paths[i] = paths[i - 1] + paths[i - 2];
//   }
//   return paths[steps];
// }

// console.log(stair(3, [1,2]));


// memo
// let memo = {};
// function stair(steps) {
//   if (steps < 0) return 0;
//   if (steps == 0) return 1;
//   if (steps in memo) {
//     return memo[steps];
//   }
//   memo[steps] = stair(steps - 1) + stair(steps - 2);
//   return memo[steps];
// }

// console.log(stair(3, [1,2]));

// recursive
// function stair(left, steps) {
//   if (left < 0) return 0;
//   if (left == 0) return 1;
//   let total = 0;
//   for (let step of steps) {
//     total += stair(left - step, steps);
//   }
//   return total;
// }

// console.log(stair(10, [1,2]));
// console.log(stair(2, [1,2]));
