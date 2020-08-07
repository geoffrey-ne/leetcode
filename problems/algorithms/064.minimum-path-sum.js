/**
 * [中等]64. 最小路径和
 * https://leetcode-cn.com/problems/minimum-path-sum/
 * 
 * 
给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。

示例:

输入:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 7
解释: 因为路径 1→3→1→1→1 的总和最小。

 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  if (grid.length === 0) {
    return 0
  }

  const firstRow = grid[0]
  for (let i = 1; i < firstRow.length; i++) {
    firstRow[i] = firstRow[i] + firstRow[i - 1]
  }
  for (let i = 1; i < grid.length; i++) {
    grid[i][0] = grid[i][0] + grid[i - 1][0]
  }

  for (let i = 1; i < grid.length; i++) {
    const row = grid[i]
    for (let j = 1; j < row.length; j++) {
      row[j] = Math.min(row[j - 1], grid[i - 1][j]) + row[j]
    }
  }
  const lastRow = grid[grid.length - 1]
  return lastRow[lastRow.length - 1]
}

write('algorithms: 64. 最小路径和', 'title')

write(
  minPathSum([
    [1, 2],
    [1, 1],
  ])
) // 3

write(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
) // 7

// tag: 回溯
