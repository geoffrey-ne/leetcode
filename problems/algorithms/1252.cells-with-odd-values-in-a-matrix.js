/**
 * [简单]1252. 奇数值单元格的数目
 * https://leetcode-cn.com/problems/cells-with-odd-values-in-a-matrix/
 * 
 * 
给你一个 m x n 的矩阵，最开始的时候，每个单元格中的值都是 0。

另有一个二维索引数组 indices，indices[i] = [ri, ci] 指向矩阵中的某个位置，其中 ri 和 ci 分别表示指定的行和列（从 0 开始编号）。

对 indices[i] 所指向的每个位置，应同时执行下述增量操作：

ri 行上的所有单元格，加 1 。
ci 列上的所有单元格，加 1 。
给你 m、n 和 indices 。请你在执行完所有 indices 指定的增量操作后，返回矩阵中 奇数值单元格 的数目。

示例 1：
输入：m = 2, n = 3, indices = [[0,1],[1,1]]

0 0 0    1 2 1   1 3 1
0 0 0    0 1 0   1 3 1

输出：6
解释：最开始的矩阵是 [[0,0,0],[0,0,0]]。
第一次增量操作后得到 [[1,2,1],[0,1,0]]。
最后的矩阵是 [[1,3,1],[1,3,1]]，里面有 6 个奇数。

示例 2：
输入：m = 2, n = 2, indices = [[1,1],[0,0]]
输出：0
解释：最后的矩阵是 [[2,2],[2,2]]，里面没有奇数。

0 0  0 1  2 2
0 0  1 2  2 2
 
提示：

1 <= m, n <= 50
1 <= indices.length <= 100
0 <= ri < m
0 <= ci < n
 

进阶：你可以设计一个时间复杂度为 O(n + m + indices.length) 且仅用 O(n + m) 额外空间的算法来解决此问题吗？

*/

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
  let res = 0
  const matrix = new Array(m).fill(0).map(() => new Array(n).fill(0))
  for (const index of indices) {
    for (let i = 0; i < n; i++) {
      matrix[index[0]][i]++
    }
    for (let i = 0; i < m; i++) {
      matrix[i][index[1]]++
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if ((matrix[i][j] & 1) !== 0) {
        res++
      }
    }
  }
  return res
}

// 空间优化：因为  **变动** 是每行和每列一起变，所以可以把一行和一列看做一个整体
/**
 * rows = [0, 0]
 * cols = [0, 0, 0]
 */

var oddCells1 = function (m, n, indices) {
  const rows = new Array(m).fill(0)
  const cols = new Array(n).fill(0)
  for (const index of indices) {
    rows[index[0]]++
    cols[index[1]]++
  }
  let res = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (((rows[i] + cols[j]) & 1) !== 0) {
        res++
      }
    }
  }
  return res
}

// 空间优化 + 计数优化
var oddCells2 = function (m, n, indices) {
  const rows = new Array(m).fill(0)
  const cols = new Array(n).fill(0)
  for (const index of indices) {
    rows[index[0]]++
    cols[index[1]]++
  }
  let oddx = 0,
    oddy = 0
  for (let i = 0; i < m; i++) {
    if ((rows[i] & 1) !== 0) {
      oddx++
    }
  }
  for (let i = 0; i < n; i++) {
    if ((cols[i] & 1) !== 0) {
      oddy++
    }
  }
  return oddx * (n - oddy) + (m - oddx) * oddy
}

write('algorithms: 1252. 奇数值单元格的数目', 'title')

write(
  oddCells(2, 3, [
    [0, 1],
    [1, 1],
  ])
) // 6

write(
  oddCells(2, 2, [
    [1, 1],
    [0, 0],
  ])
) // 0

// tags: 矩阵;空间优化
