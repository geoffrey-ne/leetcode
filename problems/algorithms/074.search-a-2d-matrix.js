/**
 * [中等]74. 搜索二维矩阵
 * https://leetcode-cn.com/problems/search-a-2d-matrix/
 * 
 * 
编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：

每行中的整数从左到右按升序排列。
每行的第一个整数大于前一行的最后一个整数。

示例 1：

输入：matrix = [
  [1,3,5,7],
  [10,11,16,20],
  [23,30,34,60]
], target = 3
输出：true

示例 2：

输入：matrix = [
  [1,3,5,7],
  [10,11,16,20],
  [23,30,34,60]
], target = 13
输出：false
 
提示：

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length
  const n = matrix[0].length

  let left = 0
  let right = m * n - 1

  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    const middleRow = Math.floor(middle / n)
    const middleCol = middle % n
    const middleVal = matrix[middleRow][middleCol]
    if (middleVal === target) {
      return true
    } else if (middleVal > target) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }
  return false
}

write('algorithms: 74. 搜索二维矩阵', 'title')

write(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
) // true
write(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
) // false

write(searchMatrix([[1, 3]], 3)) // true

// tag: 矩阵；二分查找
