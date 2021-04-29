/**
 * [中等]面试题 08.02. 迷路的机器人
 * https://leetcode-cn.com/problems/robot-in-a-grid-lcci/
 * 
设想有个机器人坐在一个网格的左上角，网格 r 行 c 列。机器人只能向下或向右移动，但不能走到一些被禁止的网格（有障碍物）。
设计一种算法，寻找机器人从左上角移动到右下角的路径。

网格中的障碍物和空位置分别用 1 和 0 来表示。

返回一条可行的路径，路径由经过的网格的行号和列号组成。左上角为 0 行 0 列。如果没有可行的路径，返回空数组。

示例 1:

输入:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
输出: [[0,0],[0,1],[0,2],[1,2],[2,2]]
解释: 
输入中标粗的位置即为输出表示的路径，即
0行0列（左上角） -> 0行1列 -> 0行2列 -> 1行2列 -> 2行2列（右下角）
说明：r 和 c 的值均不超过 100。

*/

/**
 * @param {number[][]} obstacleGrid
 * @return {number[][]}
 */
var pathWithObstacles1 = function (obstacleGrid) {
  obstacleGrid.row = obstacleGrid.length
  if (obstacleGrid.row === 0) {
    return []
  }
  obstacleGrid.col = obstacleGrid[0].length
  for (let row = obstacleGrid.row - 1; row >= 0; row--) {
    let isSomeRowAll1 = true
    for (let col = obstacleGrid.col - 1; col >= 0; col--) {
      if (col === obstacleGrid.col - 1 && row === obstacleGrid.row - 1) {
        if (obstacleGrid[row][col] === 1) {
          return []
        }
        isSomeRowAll1 = false
        continue
      }
      if (
        (typeof obstacleGrid[row + 1] === 'undefined' ||
          obstacleGrid[row + 1][col] === 1) /* 下方为1 */ &&
        (typeof obstacleGrid[row][col + 1] === 'undefined' ||
          obstacleGrid[row][col + 1] === 1) /* 右方为1 */
      ) {
        // 如果当前节点的右节点和下节点全是1，则当前节点也为1
        obstacleGrid[row][col] = 1
      }
      if (isSomeRowAll1 && obstacleGrid[row][col] === 0) {
        isSomeRowAll1 = false
      }
    }
    if (isSomeRowAll1) {
      return []
    }
  }
  for (let col = obstacleGrid.col - 1; col >= 0; col--) {
    let isSomeColAll1 = true
    for (let row = obstacleGrid.row - 1; row >= 0; row--) {
      if (isSomeColAll1 && obstacleGrid[row][col] === 0) {
        isSomeColAll1 = false
      }
    }
    if (isSomeColAll1) {
      return []
    }
  }

  const res = []
  helper1(obstacleGrid, 0, 0, [], res)
  return res[0] || []
}

function helper1(grid, r, c, cur, res, cache = new Set()) {
  if (grid[r][c] === 1 || res.length > 0) {
    return
  }
  cur.push([r, c])
  if (grid.row === r + 1 && grid.col === c + 1) {
    res.push([...cur])
  }
  if (c + 1 < grid.col) {
    helper1(grid, r, c + 1, cur, res)
  }
  if (r + 1 < grid.row) {
    helper1(grid, r + 1, c, cur, res)
  }
  cache.add(`${r},${c}`)
  cur.pop()
}

var pathWithObstacles = function (obstacleGrid) {
  obstacleGrid.row = obstacleGrid.length
  if (obstacleGrid.row === 0) {
    return []
  }
  obstacleGrid.col = obstacleGrid[0].length
  const res = []
  helper(obstacleGrid, 0, 0, [], res)
  return res[0] || []
}

function helper(grid, r, c, cur, res) {
  if (grid[r][c] === 1 || res.length > 0) {
    return
  }
  cur.push([r, c])
  if (grid.row === r + 1 && grid.col === c + 1) {
    res.push([...cur])
  }
  if (c + 1 < grid.col) {
    helper(grid, r, c + 1, cur, res)
  }
  if (r + 1 < grid.row) {
    helper(grid, r + 1, c, cur, res)
  }
  grid[r][c] = 1
  cur.pop()
}

write('algorithms: 面试题 08.02. 迷路的机器人', 'title')

write(pathWithObstacles([[0]])) // [[0, 0]]

write(
  pathWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
) // [[0,0],[0,1],[0,2],[1,2],[2,2]]

write(
  pathWithObstacles([
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0],
  ])
)

// tag: 矩阵
