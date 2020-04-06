let map = {};

function makeChange(coins, money) {
  return makeChangeHelper(coins, money, 0);
}

function makeChangeHelper(coins, money, index) {
  if (money == 0) {
    return 1;
  }
  if (index >= coins.length) {
    return 0;
  }
  let key = `${money}-${index}`;
  if (key in map) {
    return map[key];
  }
  let moneyUsed = 0;
  let ways = 0;
  while (moneyUsed <= money) {
    let remains = money - moneyUsed;
    ways += makeChangeHelper(coins, remains, index + 1);
    moneyUsed += coins[index];
  }
  map[key] = ways;
  return ways;
}

console.log(makeChange([2,1], 3));