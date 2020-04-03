// https://www.youtube.com/watch?v=P8Xa2BitN3I&list=PLI1t_8YX-ApvMthLj56t1Rf-Buio5Y8KL&index=11

function countPaths(grid) {
  const paths = grid.map(row => {
    return row.map(col => {
      return 0;
    })
  })
  
  const lastRowIdx = paths.length - 1;
  const lastColIdx = paths[lastRowIdx].length - 1;
  paths[lastRowIdx][lastColIdx] = 1;
  for (let row = lastRowIdx; row >= 0; row--) {
    for (let col = lastColIdx; col >= 0; col--) {
      if (row == lastRowIdx && col == lastColIdx) continue;
      if (grid[row][col] == false) continue;
      paths[row][col] = getPath(paths, row, col, lastRowIdx, lastColIdx);
    }
  }
  console.log(paths);
  return paths[0][0];
}

function getPath(paths, row, col, lastRowIdx, lastColIdx) {
  let right = 0;
  if (col <= lastColIdx - 1) {
    right = paths[row][col + 1];
  }
  let down = 0;
  if (row <= lastRowIdx - 1) {
    down = paths[row + 1][col];
  }
  let total = 0;
  if (right > 0) {
    total += right;
  }
  if (down >= 0) {
    total += down;
  }
  return total;
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
//   [true, true, true],
//   [true, false, true],
//   [true, true, true],
//   [true, true, true]
// ]

const result = countPaths(grid);
console.log(result);