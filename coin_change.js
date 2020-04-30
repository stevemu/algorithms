// https://leetcode.com/problems/coin-change/

let cache = {};

// v1
// function coinChangeHelper (coins, amount) {
   
//   if (amount < 0) {
//       return Infinity;
//   }
 
//   if (amount === 0) {
//       return 1;
//   }

//   if (amount in cache) {
//       return cache[amount];
//   }

//   let lowestCount = Infinity;
//   for (let coin of coins) {
//       let remaining = amount - coin;
//       let count = coinChangeHelper(coins, remaining);
//       if (count < lowestCount) {
//           lowestCount = count;
//       }
//   }

//   cache[amount] = lowestCount + 1;
//   return lowestCount + 1;
// }

// const coinChange = (coins, amount) => {
//   let result = coinChangeHelper(coins, amount) - 1;
//   if (result === Infinity) return -1;
//   return result;
// }

// v2
// const coinChange = (coins, amount) => {
// 	if (amount < 0) {
// 		return Infinity;
// 	}

// 	if (amount === 0) {
// 		return 1;
// 	}

// 	let lowestCount = Infinity;
// 	for (let coin of coins) {
// 		let remaining = amount - coin;
// 		let count = coinChange(coins, remaining);
// 		if (count < lowestCount) {
// 			lowestCount = count;
// 		}
// 	}

// 	return lowestCount + 1;
// };

// console.log(coinChange([1,2], 3)); 
// console.log(coinChange([2,1], 3)); //2
// console.log(coinChange([1,2,5], 11));


function coinChangeHelper(money, coins) {
    if (money == 0) return 1;
    else if (money < 0) return Infinity;

    let lowestSteps = Infinity;
    for (const coin of coins) {
        const remaining = money - coin;
        const steps = coinChangeHelper(remaining, coins);
        lowestSteps = Math.min(lowestSteps, steps);
    }
    return lowestSteps + 1;
}

function coinChange(money, coins) {
    const result = coinChangeHelper(money, coins);
    return result == Infinity ? -1 : result - 1;
}

// console.log(coinChange(3,[2,1])); //2
console.log(coinChange(11, [1,2,5]));