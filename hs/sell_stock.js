// [7,1,5,3,6,4]

// function bestProfit(prices) {
//   let bestPrice = -Infinity;
//   for (let i = 0; i < prices.length - 1; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       let currentPrice = prices[j] - prices[i];
//       if (currentPrice > bestPrice) {
//         bestPrice = currentPrice;
//       }
//     }
//   }
//   return bestPrice;
// }

function bestProfit(prices) {
  let lowestPrice = Infinity;
  let bestPrice = -Infinity;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < lowestPrice) {
      lowestPrice = prices[i];
    } else {
      let price = prices[i] - lowestPrice;
      bestPrice = Math.max(price, bestPrice);
    }
  }

  return bestPrice;
}


const prices = [7,1,5,3,6,4];
console.log(bestProfit(prices));