/**
 * [简单]1260. 二维网格迁移
 * https://leetcode-cn.com/problems/shift-2d-grid/
 * 
 * 
给你一个 m 行 n 列的二维网格 grid 和一个整数 k。你需要将 grid 迁移 k 次。

每次「迁移」操作将会引发下述活动：

位于 grid[i][j] 的元素将会移动到 grid[i][j + 1]。
位于 grid[i][n - 1] 的元素将会移动到 grid[i + 1][0]。
位于 grid[m - 1][n - 1] 的元素将会移动到 grid[0][0]。
请你返回 k 次迁移操作后最终得到的 二维网格。

示例 1：

[1,2,3,4,5,6,7,8,9]

123
456
789

912
345
678

输入：grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
输出：[[9,1,2],[3,4,5],[6,7,8]]
示例 2：



输入：grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
输出：[[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
示例 3：

输入：grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
输出：[[1,2,3],[4,5,6],[7,8,9]]
 

提示：

m == grid.length
n == grid[i].length
1 <= m <= 50
1 <= n <= 50
-1000 <= grid[i][j] <= 1000
0 <= k <= 100

*/

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  const m = grid.length
  const n = grid[0].length
  k = k % (m * n)

  if (k % n === 0) {
    return swapArr(grid, m - k / n)
  }

  const arr = grid.reduce((pre, cur) => {
    return [...pre, ...cur]
  }, [])

  const resArr = swapArr(arr, m * n - k)
  for (let i = 0; i < m; i++) {
    grid[i] = resArr.slice(i * n, (i + 1) * n)
  }
  return grid
}

const swapArr = (arr, index) => [...arr.slice(index), ...arr.slice(0, index)]

write('algorithms: 1260. 二维网格迁移', 'title')

write(
  shiftGrid(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    1
  )
) // [[9,1,2],[3,4,5],[6,7,8]]

write(
  shiftGrid(
    [
      [3, 8, 1, 9],
      [19, 7, 2, 5],
      [4, 6, 11, 10],
      [12, 0, 21, 13],
    ],
    4
  )
) // [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]

write(
  shiftGrid(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    9
  )
) // [[1,2,3],[4,5,6],[7,8,9]]

// tags: 矩阵;平移
