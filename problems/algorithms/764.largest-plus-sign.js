/**
 * [中等]764. 最大加号标志
 * https://leetcode-cn.com/problems/largest-plus-sign/
 * 
在一个 n x n 的矩阵 grid 中，除了在数组 mines 中给出的元素为 0，其他每个元素都为 1。
mines[i] = [xi, yi] 表示 grid[xi][yi] == 0

返回 grid 中包含 1 的最大的 轴对齐 加号标志的阶数。如果未找到加号标志，则返回 0 。

一个 k 阶由 1 组成的 “轴对称”加号标志 具有中心网格 grid[r][c] == 1 ，
以及4个从中心向上、向下、向左、向右延伸，长度为 k-1，由 1 组成的臂。
注意，只有加号标志的所有网格要求为 1 ，别的网格可能为 0 也可能为 1 。

示例 1：

0 0 0 0
0 1 1 0
0 1 1 0
0 0 0 0

1 1 1 1 1
1 1 1 1 1
1 1 1 1 1
1 1 1 1 1
1 1 0 1 1

1 1 1 1 1
1 2 2 2 1
1 2 3 2 1
1 2 2 2 1
1 1 1 1 1

1 2 3 2 1

1 1 1 1 1 1
1 2 2 2 2 1
1 2 3 3 2 1
1 2 3 3 2 1
1 2 2 2 2 1
1 1 1 1 1 1

输入: n = 5, mines = [[4, 2]]
输出: 2
解释: 在上面的网格中，最大加号标志的阶只能是2。一个标志已在图中标出。

示例 2：

0

输入: n = 1, mines = [[0, 0]]
输出: 0
解释: 没有加号标志，返回 0 。

提示：

1 <= n <= 500
1 <= mines.length <= 5000
0 <= xi, yi < n
每一对 (xi, yi) 都 不重复

 */

/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function (n, mines) {
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(n))
  const banned = new Set()
  for (const vec of mines) {
    banned.add(vec[0] * n + vec[1])
  }
  let ans = 0
  for (let i = 0; i < n; i++) {
    let count = 0
    /* left */
    for (let j = 0; j < n; j++) {
      if (banned.has(i * n + j)) {
        count = 0
      } else {
        count++
      }
      dp[i][j] = Math.min(dp[i][j], count)
    }
    count = 0
    /* right */
    for (let j = n - 1; j >= 0; j--) {
      if (banned.has(i * n + j)) {
        count = 0
      } else {
        count++
      }
      dp[i][j] = Math.min(dp[i][j], count)
    }
  }
  for (let i = 0; i < n; i++) {
    let count = 0
    /* up */
    for (let j = 0; j < n; j++) {
      if (banned.has(j * n + i)) {
        count = 0
      } else {
        count++
      }
      dp[j][i] = Math.min(dp[j][i], count)
    }
    count = 0
    /* down */
    for (let j = n - 1; j >= 0; j--) {
      if (banned.has(j * n + i)) {
        count = 0
      } else {
        count++
      }
      dp[j][i] = Math.min(dp[j][i], count)
      ans = Math.max(ans, dp[j][i])
    }
  }
  return ans
}

write('algorithms: 764. 最大加号标志', 'title')

// write(orderOfLargestPlusSign(5, [[4, 2]])) // 2
// write(orderOfLargestPlusSign(6, [[4, 2]])) // 3
// write(
//   orderOfLargestPlusSign(5, [
//     [0, 0],
//     [0, 3],
//     [1, 1],
//     [1, 4],
//     [2, 3],
//     [3, 0],
//     [4, 2],
//   ])
// ) // 1

write(
  orderOfLargestPlusSign(20, [
    [0, 0],
    [0, 2],
    [0, 5],
    [0, 7],
    [0, 8],
    [0, 9],
    [0, 10],
    [0, 12],
    [0, 19],
    [1, 1],
    [1, 2],
    [1, 7],
    [1, 8],
    [1, 11],
    [1, 14],
    [1, 15],
    [1, 16],
    [1, 17],
    [1, 18],
    [2, 0],
    [2, 4],
    [2, 5],
    [2, 8],
    [2, 9],
    [2, 11],
    [2, 12],
    [2, 14],
    [2, 15],
    [2, 19],
    [3, 3],
    [3, 4],
    [3, 6],
    [3, 8],
    [3, 9],
    [3, 11],
    [3, 14],
    [3, 15],
    [3, 16],
    [3, 18],
    [4, 0],
    [4, 6],
    [4, 8],
    [4, 9],
    [4, 11],
    [4, 12],
    [4, 14],
    [4, 15],
    [4, 16],
    [4, 17],
    [4, 19],
    [5, 2],
    [5, 4],
    [5, 6],
    [5, 7],
    [5, 8],
    [5, 9],
    [5, 12],
    [5, 14],
    [5, 19],
    [6, 6],
    [6, 10],
    [6, 11],
    [6, 12],
    [6, 13],
    [6, 15],
    [6, 16],
    [6, 18],
    [7, 1],
    [7, 2],
    [7, 3],
    [7, 5],
    [7, 8],
    [7, 11],
    [7, 15],
    [7, 16],
    [8, 0],
    [8, 2],
    [8, 4],
    [8, 5],
    [8, 8],
    [8, 9],
    [8, 12],
    [8, 13],
    [8, 14],
    [8, 15],
    [8, 16],
    [8, 19],
    [9, 0],
    [9, 1],
    [9, 2],
    [9, 3],
    [9, 8],
    [9, 9],
    [9, 10],
    [9, 11],
    [9, 12],
    [9, 14],
    [9, 19],
    [10, 0],
    [10, 3],
    [10, 5],
    [10, 7],
    [10, 8],
    [10, 9],
    [10, 11],
    [10, 14],
    [10, 15],
    [10, 16],
    [10, 17],
    [11, 1],
    [11, 4],
    [11, 11],
    [11, 13],
    [11, 15],
    [11, 16],
    [12, 0],
    [12, 3],
    [12, 4],
    [12, 12],
    [12, 13],
    [12, 16],
    [12, 17],
    [13, 1],
    [13, 2],
    [13, 3],
    [13, 5],
    [13, 7],
    [13, 8],
    [13, 9],
    [13, 11],
    [13, 15],
    [13, 16],
    [13, 17],
    [13, 19],
    [14, 0],
    [14, 1],
    [14, 6],
    [14, 7],
    [14, 9],
    [14, 10],
    [14, 13],
    [14, 14],
    [14, 19],
    [15, 1],
    [15, 5],
    [15, 7],
    [15, 9],
    [15, 13],
    [15, 14],
    [15, 15],
    [15, 16],
    [15, 18],
    [15, 19],
    [16, 0],
    [16, 1],
    [16, 3],
    [16, 4],
    [16, 8],
    [16, 12],
    [16, 13],
    [16, 14],
    [16, 15],
    [16, 16],
    [16, 17],
    [17, 0],
    [17, 1],
    [17, 2],
    [17, 3],
    [17, 4],
    [17, 5],
    [17, 7],
    [17, 9],
    [17, 10],
    [17, 12],
    [17, 13],
    [17, 14],
    [17, 15],
    [17, 17],
    [17, 18],
    [18, 0],
    [18, 3],
    [18, 4],
    [18, 5],
    [18, 6],
    [18, 8],
    [18, 9],
    [18, 11],
    [18, 13],
    [18, 14],
    [18, 16],
    [18, 17],
    [19, 0],
    [19, 1],
    [19, 3],
    [19, 4],
    [19, 5],
    [19, 7],
    [19, 9],
    [19, 10],
    [19, 14],
    [19, 15],
  ])
) // 2

// write(orderOfLargestPlusSign(1, [[0, 0]])) // 0

// tag:
