// https://www.youtube.com/watch?v=R4Nh-EgWjyQ&list=PLQbxgIKVVeTM1hG0CJDOHOBriqFJJPM20&index=12


function getBiggistRegion(matrix) {
  let maxRegion = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] == 1) {
        maxRegion = Math.max(getRegionSize(matrix, row, col), maxRegion);
      }
      
    }
  }
  return maxRegion;
}

function getRegionSize(matrix, row, col) {
  if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[row].length) {
    return 0;
  }
  if (matrix[row][col] == 0) {
    return 0;
  }
  matrix[row][col] = 0;
  let size = 1;
  for (let r = row - 1; r <= row + 1; r++) {
    for (let c = col - 1; c <= col + 1; c++) {
      if (r == row && c == col) continue;
      size += getRegionSize(matrix, r, c);
    }
  }
  return size;
}

let matrix = [
  [0,0,0,1,0,0,0],
  [0,1,0,1,1,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0],
  [0,0,0,1,1,0,0]
]

console.log(getBiggistRegion(matrix));