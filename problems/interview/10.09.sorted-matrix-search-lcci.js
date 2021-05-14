/**
 * [中等]面试题 10.09. 排序矩阵查找
 * https://leetcode-cn.com/problems/sorted-matrix-search-lcci/
 * 
给定M×N矩阵，每一行、每一列都按升序排列，请编写代码找出某元素。

示例:

现有矩阵 matrix 如下：

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
给定 target = 5，返回 true。

给定 target = 20，返回 false。

*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const M = matrix.length
  if (M === 0) {
    return false
  }
  const N = matrix[0].length
  if (N === 0) {
    return false
  }

  let row = 0
  let col = N - 1
  while (row < M && col >= 0) {
    const cur = matrix[row][col]
    if (cur === target) {
      return true
    } else if (cur > target) {
      col--
    } else {
      row++
    }
  }
  return false
}

write('algorithms: 面试题 10.09. 排序矩阵查找', 'title')

const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
]

write(searchMatrix(matrix, 5)) // true
write(searchMatrix(matrix, 20)) // false
write(searchMatrix([[-1, 3]], 3)) // true

// tag: 矩阵；
