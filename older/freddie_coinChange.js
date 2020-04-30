const solutions = []
const CoinChange = (coins, amount) => {
    for (let coin in coins) {
        if (coins[coin] === amount) {
            return 1
        }
    }
    let result = 0;
    let coincount = Infinity;
    let key = amount
    if (solutions[key] != null) {
        return solutions[key]
    }
    for (let coin in coins) {
        let currentamount = amount - coins[coin]
        if (currentamount < 0) {
            result = Infinity
        } else {
            result = CoinChange(coins, currentamount)
        }
        coincount = Math.min(coincount, result)
    }
    solutions[key] = coincount + 1
    return coincount += 1
}
// console.log(CoinChange([1, 2, 3, 5], 12))
let assert = require('assert')
// assert(CoinChange([1, 2, 3, 5], 3) == 1)
// assert(CoinChange([1, 2, 3, 5], 5) == 1)
// assert(CoinChange([1, 2, 3, 5], 6) == 2)
// assert(CoinChange([1,2,3,5],12) == 3)
assert(CoinChange([1, 2, 3, 5], 99) == 21)
assert(CoinChange([1,2,3,5],974) == 196)