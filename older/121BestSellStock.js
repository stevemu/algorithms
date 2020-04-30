// function maxProfit(prices) {
//     let maxProfit = 0;
//     for (let i = 0; i < prices.length; i++) {
//         for (let j = i; j < prices.length; j++) {
//             if (prices[j] - prices[i] > maxProfit) {
//                 maxProfit = prices[j] - prices[i];
//             }
//         }
//     }

//     return maxProfit;
// }

function maxProfit(prices) {
    let minPrice = Number.MAX_VALUE;
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            // console.log(maxProfit);
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
}
console.log(maxProfit([7,1,5,3,6,4]));