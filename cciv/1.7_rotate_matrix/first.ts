function rotateMatrix(matrix: Array<number>[]) {
  if (matrix.length === 0) return;

  for (let layer = 0; layer < matrix.length / 2; layer++) {
    // copy top
    const top = matrix[layer].slice(layer, matrix.length - layer);
    
    // copy right
    const right = [];
    for (let i = layer; i <= matrix.length - 1 - layer; i++) {
      right.push(matrix[i][matrix.length - 1 - layer]);
    }

    // overwrite right with top
    for (let i = 0; i < top.length; i++) {
      
    }

  }



}

const matrix: Array<number>[] = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16],
];

rotateMatrix(matrix);
console.log(matrix);