/**
 * [中等]59. 螺旋矩阵 II
 * https://leetcode-cn.com/problems/spiral-matrix-ii/
 * 
给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

示例 1：

输入：n = 3
输出：[[1,2,3],[8,9,4],[7,6,5]]
示例 2：

输入：n = 1
输出：[[1]]

提示：

1 <= n <= 20

n = 4

1   2  3  4
12 13 14  5
11 16 15  6
10  9  8  7
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let left = 0
  let right = n - 1
  let top = 0
  let bottom = n - 1
  const mat = []
  for (let i = 0; i < n; i++) {
    mat[i] = []
  }
  let num = 1
  while (num <= n * n) {
    // 左到右
    for (let i = left; i <= right; i++) {
      mat[top][i] = num++
    }
    top++
    // 上到下
    for (let i = top; i <= bottom; i++) {
      mat[i][right] = num++
    }
    right--
    // 右到左
    for (let i = right; i >= left; i--) {
      mat[bottom][i] = num++
    }
    bottom--
    // 下到上
    for (let i = bottom; i >= top; i--) {
      mat[i][left] = num++
    }
    left++
  }
  return mat
}

write('algorithms: 59. 螺旋矩阵 II', 'title')

write(generateMatrix(3)) // [[1,2,3],[8,9,4],[7,6,5]]
write(generateMatrix(1)) // [[1]]

// tag: 矩阵
