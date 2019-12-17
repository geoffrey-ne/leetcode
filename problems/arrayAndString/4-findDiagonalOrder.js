/**
 * 对角线遍历：https://leetcode-cn.com/explore/learn/card/array-and-string/199/introduction-to-2d-array/774/
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
  if (matrix.length === 0) {
    return matrix[0]
  }
  const M = matrix.length
  const N = matrix[0].length
  const total = M + N - 1
  const res = []
  for (let i = 0; i < total; i++) {
    if (i % 2 === 0) {
      let row = Math.min(i, M - 1)
      let col = i - row
      while (col < N && col <= i) {
        res.push(matrix[row--][col++])
      }
    } else {
      let col = Math.min(i, N - 1)
      let row = i - col

      while (row < M && row <= i) {
        res.push(matrix[row++][col--])
      }
    }
  }
  return res
}

/**
给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。

示例:

输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

输出:  [1,2,4,7,5,3,6,8,9]

说明:

给定矩阵中的元素总数不会超过 100000 。


[0, 0] [0, 1] [1, 0] [2, 0] [1, 1], [0, 2], [1, 2] [2, 1], [2, 2]


 */

write('arrayAndString 4. findDiagonalOrder', 'title')

write(
  findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
) // [1,2,4,7,5,3,6,8,9]
