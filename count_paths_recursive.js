// https://www.youtube.com/watch?v=P8Xa2BitN3I&list=PLI1t_8YX-ApvMthLj56t1Rf-Buio5Y8KL&index=11


const paths = {};

function countPaths(grid, row, col) {
  if (!isValid(grid, row, col)) {
    return 0;
  }
  if (isAtEnd(grid, row, col)) {
    return 1;
  }

  if (`${row},${col}` in paths) {
    return paths[`${row},${col}`];
  }

  const noOfPaths =  countPaths(grid, row + 1, col) + countPaths(grid, row, col + 1);
  paths[`${row},${col}`] = noOfPaths;
  return noOfPaths;
}

function isValid(grid, row, col) {
  if (row == grid.length) {
    return false;
  } else if (col == grid[row].length) {
    return false;
  } else {
    return grid[row][col] == true;
  }
}

function isAtEnd(grid, row, col) {
  return row == grid.length - 1 && col == grid[row].length - 1;
}

const grid = [
  [true, true, true, true, false, true],
  [true, false, true, true, true, true],
  [true, true, true, true, false, true],
  [false, false, true, true, true, true],
  [true, true, true, true, true, true],
  [true, true, true, false, true, true]
]

// const grid = [
//   [true, false],
//   [true, true]
// ]

const result = countPaths(grid, 0, 0);
console.log(result);