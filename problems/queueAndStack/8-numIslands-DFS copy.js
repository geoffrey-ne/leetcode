/**
 * 求岛屿数量 - DFS版
 *
 * https://leetcode-cn.com/explore/learn/card/queue-stack/219/stack-and-dfs/883/
 *
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const row = grid.length
  const col = grid[0] && grid[0].length

  if (row <= 0 || col <= 0) {
    return 0
  }

  const visits = []
  for (let i = 0; i < row; i++) {
    visits[i] = []
  }
  let res = 0
  const stack = []
  for (let x = 0; x < row; x++) {
    for (let y = 0; y < col; y++) {
      if (grid[x][y] == 1 && !visits[x][y]) {
        res++
        stack.push([x, y])
      }
      while (stack.length > 0) {
        const [i, j] = stack.pop()
        if (i >= 0 && i < row && j >= 0 && j < col && !visits[i][j] && grid[i][j] == 1) {
          stack.push([i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1])
          visits[i][j] = 1
        }
      }
    }
  }
  return res
}

write('queueAndStack 1. numIslands', 'title')
write(
  numIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
  ])
) // 1
write(
  numIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
  ])
) // 3
