/**
 * [中等]63. 不同路径 II
 * https://leetcode-cn.com/problems/unique-paths-ii/
 * 
 * 
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

网格中的障碍物和空位置分别用 1 和 0 来表示。

说明：m 和 n 的值均不超过 100。

示例 1:

输入:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
输出: 2
解释:
3x3 网格的正中间有一个障碍物。
从左上角到右下角一共有 2 条不同的路径：
1. 向右 -> 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右 -> 向右

 */

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const row = obstacleGrid.length
  if (row === 0) {
    return 0
  }
  const col = obstacleGrid[0].length
  if (col === 0) {
    return 0
  }
  const cache = {}
  return helper(0, 0, row, col, obstacleGrid, cache)
}

function helper(x, y, row, col, obstacleGrid, cache) {
  if (x === row - 1 && y === col - 1) {
    cache[`${x},${y}`] = obstacleGrid[x][y] === 1 ? 0 : 1
  } else if (x >= row || y >= col) {
    return 0
  } else if (typeof cache[`${x},${y}`] === 'undefined') {
    if (obstacleGrid[x][y] === 1) {
      cache[`${x},${y}`] = 0
    } else {
      cache[`${x},${y}`] =
        helper(x + 1, y, row, col, obstacleGrid, cache) +
        helper(x, y + 1, row, col, obstacleGrid, cache)
    }
  }
  return cache[`${x},${y}`]
}

write('algorithms: 63. 不同路径 II', 'title')

write(uniquePathsWithObstacles([[1]])) // 0

write(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
) // 2

write(
  uniquePathsWithObstacles([
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
  ])
) // 4

// tag: 回溯
