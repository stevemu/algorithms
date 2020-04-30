// let assert = require("assert");

const coinChangeWorkerClosure = () => {
    let cache = {};

    return function coinChangeWorker (coins, amount) {
     
        if (amount < 0) {
            return Infinity;
        }
       
        if (amount === 0) {
            return 1;
        }
    
        // console.log(amount in cache);
        if (amount in cache) {
            return cache[amount];
        }

        let lowestCount = Infinity;
        for (let coin of coins) {
            let remaining = amount - coin;
            let count = coinChangeWorker(coins, remaining);
            if (count < lowestCount) {
                lowestCount = count;
            }
        }
    
        cache[amount] = lowestCount + 1;
        return lowestCount + 1;
    }
}

const coinChange = (coins, amount) => {
    let coinChangeWorker = coinChangeWorkerClosure();
    let result = coinChangeWorker(coins, amount) - 1;
    if (result === Infinity) return -1;
    return result;
}

// console.log(coinChange([1,2,5], 3)); // 2

// console.log(coinChange([1,2,5], 11)); // 3
// console.log(coinChange([1,2,5], 10)); // 2
// console.log(coinChange([2], 3)); // -1
// console.log(coinChange([1,2,5], 100)); // 20
console.log(coinChange([186,419,83,408], 6249));



// v1:

// const coinChangeWorkerClosure = () => {
//     let cache = {};

//     return function coinChangeWorker (coins, amount) {
     
//         if (amount < 0) {
//             return -1;
//         }
       
//         if (amount === 0) {
//             return 1;
//         }
    
//         // console.log(amount in cache);
//         if (amount in cache) {
//             return cache[amount];
//         }

//         let counts = [];
//         for (let coin of coins) {
//             let remaining = amount - coin;
//             let count = coinChangeWorker(coins, remaining);
//             // console.log(count);
//             counts.push(count);
//         }
    
//         // remove all -1s from the counts
//         counts = counts.filter((num) => {
//             return num >= 1;
//         })
    
//         if (counts.length === 0) {
//             return 0;
//         }
        
//         let lowestCount = Math.min(...counts);
//         cache[amount] = lowestCount + 1;
//         return lowestCount + 1;
//     }
// }

// const coinChange = (coins, amount) => {
//     let coinChangeWorker = coinChangeWorkerClosure();
//     let result = coinChangeWorker(coins, amount) - 1;
//     return result;
// }