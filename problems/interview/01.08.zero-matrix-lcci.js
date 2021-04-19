/**
 * [中等]面试题 01.08. 零矩阵
 * https://leetcode-cn.com/problems/rzero-matrix-lcci/
 * 
 * 
编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。

示例 1：

输入：
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
输出：
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
示例 2：

输入：
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
输出：
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]

*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return matrix
  }
  const rows = new Set()
  const cols = new Set()
  const rowCount = matrix.length
  const colCount = matrix[0].length
  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      if (matrix[row][col] === 0) {
        rows.add(row)
        cols.add(col)
      }
    }
  }

  for (const row of rows) {
    for (let i = 0; i < colCount; i++) {
      matrix[row][i] = 0
    }
  }

  for (const col of cols) {
    for (let i = 0; i < rowCount; i++) {
      matrix[i][col] = 0
    }
  }
}

write('algorithms: 面试题 01.08. 零矩阵', 'title')

write(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
)
// [
//   [1,0,1],
//   [0,0,0],
//   [1,0,1]
// ]

write(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
)

// [
//   [0,0,0,0],
//   [0,4,5,0],
//   [0,3,1,0]
// ]

// tag: 矩阵

// 另一种思路：使用第一行和第一列作为标记

// - 1. 第一行第一列是否有0，如果有，则在最后全置零，如果没有，那么第一行列则可以完全用作标记
// - 2. 遍历矩阵，遇到0时，将该节点的行列对应第一行第一列的位置置为0
// - 3. 遍历第一行第一列，遇到0就将整行|列置为0
// - 4. 最后判断第一步中是否需要将第一行|列置为0
