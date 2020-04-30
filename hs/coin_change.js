// https://leetcode.com/problems/coin-change-2/

let map = {};

// v1
// function makeChange(coins, money) {
//   return makeChangeHelper(coins, money, 0);
// }

// function makeChangeHelper(coins, money, index) {
//   if (money == 0) {
//     return 1;
//   }
//   if (index >= coins.length) {
//     return 0;
//   }
//   let key = `${money}-${index}`;
//   if (key in map) {
//     return map[key];
//   }
//   let moneyUsed = 0;
//   let ways = 0;
//   while (moneyUsed <= money) {
//     let remains = money - moneyUsed;
//     ways += makeChangeHelper(coins, remains, index + 1);
//     moneyUsed += coins[index];
//   }
//   map[key] = ways;
//   return ways;
// }

// v2
// function makeChange(coins, money, idx = 0) {
//   if (money == 0) return 1;
//   if (coins.length <= idx) return 0;
  
//   let ways = 0;
//   let moneyUsed = 0;
//   while (moneyUsed <= money) {
//     let remains = money - moneyUsed;
//     ways += makeChange(coins, remains, idx + 1);
//     moneyUsed += coins[idx];
//   }
//   return ways;
// }

// v3
// function makeChange(coins, remains, idx = 0) {
//   if (remains == 0) return 1;
//   if (coins.length <= idx) return 0;
  
//   let ways = 0;
//   while (remains >= 0) {
//     ways += makeChange(coins, remains, idx + 1);
//     remains -= coins[idx];
//   }
//   return ways;
// }

// let cache = {};

// function makeChange(changes, amount) {
//   if (amount === 0) {
//     return 0;
//   } else if (amount < 0) {
//     return Infinity;
//   }

//   if (amount in cache) {
//     return cache[amount];
//   }

//   let minWays = Infinity;
//   for (const change of changes) {
//     const remaining = amount - change;
//     const ways = makeChange(changes, remaining);
//     minWays = Math.min(ways, minWays);
//   }

//   cache[amount] = minWays + 1;

//   return cache[amount]
// }

const makeChangeHelper = (changes, amount) => {
  if (amount === 0) {
    return 0;
  } else if (amount < 0) {
    return Infinity;
  }

  let minNoCoins = Infinity;
  for (let change of changes) {
    const remaining = amount - change;
    let noCoins = makeChangeHelper(changes, remaining);
    minNoCoins = Math.min(noCoins, minNoCoins);
  }

  return minNoCoins + 1;
}

const makeChange = (changes, amount) => {
  const result = makeChangeHelper(changes, amount);
  return result ? -1 : result;
}


// console.log(makeChange([1,2,5], 4)); //2
// console.log(makeChange([1,2,5], 5));//1
console.log(makeChange([2], 3));