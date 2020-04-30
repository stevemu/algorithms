// let assert = require("assert");

function coinChange (coins, amount, depth = 0) {

    if (amount === 0) {
        return depth;
    }

    let currentDepthsArr = [];
    for (let coin of coins) {
        let remaining = amount - coin;
        // console.log(remaining);
        if (remaining < 0) {
            currentDepthsArr.push(Infinity);
        } else {
            // when the depth increases, the ways is increased by 1
            let currentDepths = coinChange(coins, remaining, depth + 1);
            // console.log(remaining, ways);
            currentDepthsArr.push(currentDepths);
        }
    }

    // return lowest ways
    let lowestDepth = Math.min(...currentDepthsArr);

    if (lowestDepth === Infinity) return -1;

    return lowestDepth;

}



// console.log(coinChange([1,2,5], 3)); // 2

console.log(coinChange([1,2,5], 11)); // 3
// console.log(coinChange([1,2,5], 10)); // 2
// console.log(coinChange([2], 3)); // -1
// console.log(coinChange([1,2,5], 100)); // 20
// console.log(coinChange([186,419,83,408], 6249));