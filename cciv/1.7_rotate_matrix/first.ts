function rotateMatrix(matrix: Array<number>[]) {
  if (matrix.length === 0) return;

  const n = matrix.length;
  const top = [...matrix[0]];

  // move left edge to top
  const leftEdge = [];
  for (let i = n - 1; i >= 0; i--) {
    leftEdge.push(matrix[i][0]);
  }
  matrix[0] = [...leftEdge];

  // move bottom edge to left
  const bottomEdge = matrix[n - 1];
  for (let i = 0; i < n; i++) {
    matrix[i][0] = bottomEdge[i];
  }

  // move right edge to bottom edge
  const rightEdge = [top[n - 1]];
  for (let i = 1; i < n; i++) {
    rightEdge[i] = matrix[i][n - 1];
  }
  matrix[n - 1] = rightEdge.reverse();

  // moved the (saved) top edge to right edge
  for (let i = 0; i < n; i++) {
    matrix[i][n - 1] = top[i];
  }

  console.log(matrix);
}

const matrix: Array<number>[] = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16],
];

console.log(rotateMatrix(matrix));