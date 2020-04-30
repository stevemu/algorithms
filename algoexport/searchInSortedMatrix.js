function searchInSortedMatrix(
  matrix,
  target,
  r = matrix.length - 1,
  c = matrix[0].length - 1
) {
  if (matrix[r][c] == target) return [r, c];
  if (r == matrix.length || c < 0) return [-1, -1];
  if (target > matrix[r][c])
    return searchInSortedMatrix(matrix, target, r + 1, c);
  else if (target < matrix[r][c])
    return searchInSortedMatrix(matrix, target, r, c - 1);
}
