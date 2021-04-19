/**
 * [中等]48. 旋转图像
 * https://leetcode-cn.com/problems/rotate-image/
 * 
给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。

你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

示例 1：


输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[[7,4,1],[8,5,2],[9,6,3]]
示例 2：


输入：matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
输出：[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
示例 3：

输入：matrix = [[1]]
输出：[[1]]
示例 4：

输入：matrix = [[1,2],[3,4]]
输出：[[3,1],[4,2]]
 

提示：

matrix.length == n
matrix[i].length == n
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000

 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const N = matrix.length

  let start = 0
  let end = N - 1
  while (start < end) {
    for (let i = start; i < end; i++) {
      const points = [
        [start, i],
        [i, end],
        [end, N - i - 1],
        [N - i - 1, start],
      ]
      let pre = matrix[points[0][0]][points[0][1]]
      for (let j = 0; j < points.length - 1; j++) {
        const [nextRow, nextCol] = points[j + 1]
        const tmp = matrix[nextRow][nextCol]
        matrix[nextRow][nextCol] = pre
        pre = tmp
      }
      matrix[points[0][0]][points[0][1]] = pre
    }
    start++
    end--
  }
}

write('algorithms: 48. 旋转图像', 'title')

write(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
)
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]

write(
  rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
)
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]

// tag: 矩阵
