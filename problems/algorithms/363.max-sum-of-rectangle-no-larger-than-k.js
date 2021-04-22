/**
 * [困难]363. 矩形区域不超过 K 的最大数值和
 * https://leetcode-cn.com/problems/max-sum-of-rectangle-no-larger-than-k/
 * 
 * 
给你一个 m x n 的矩阵 matrix 和一个整数 k ，找出并返回矩阵内部矩形区域的不超过 k 的最大数值和。

题目数据保证总会存在一个数值和不超过 k 的矩形区域。


示例 1：

1  0  1
0 -2  3

输入：matrix = [[1,0,1],[0,-2,3]], k = 2
输出：2
解释：蓝色边框圈出来的矩形区域 [[0, 1], [-2, 3]] 的数值和是 2，且 2 是不超过 k 的最大数字（k = 2）。
示例 2：

输入：matrix = [[2,2,-1]], k = 3
输出：3
 

提示：

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-100 <= matrix[i][j] <= 100
-105 <= k <= 105
 

进阶：如果行数远大于列数，该如何设计解决方案？

*/

/**
 * dp
 *
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix1 = function (matrix, k) {
  let res = Number.MIN_SAFE_INTEGER
  const m = matrix.length
  const n = matrix[0].length

  for (let i1 = 1; i1 <= m; i1++) {
    for (let j1 = 1; j1 <= n; j1++) {
      const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
      dp[i1][j1] = matrix[i1 - 1][j1 - 1]
      for (let i2 = i1; i2 <= m; i2++) {
        for (let j2 = j1; j2 <= n; j2++) {
          const cur = (dp[i2][j2] =
            dp[i2 - 1][j2] + dp[i2][j2 - 1] + matrix[i2 - 1][j2 - 1] - dp[i2 - 1][j2 - 1])

          if (cur === k) {
            return k
          }
          res = cur < k && cur > res ? cur : res
        }
      }
    }
  }
  return res
}

/**
 * 详见java题解
 *
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function (matrix, k) {
  let max = Number.MIN_SAFE_INTEGER
  const rows = matrix.length
  const cols = matrix[0].length

  // O(cols ^ 2 * rows)
  for (let l = 0; l < cols; l++) {
    // 从左边界开始
    const rowSum = []
    for (let r = l; r < cols; r++) {
      // 枚举又边界
      for (let i = 0; i < rows; i++) {
        rowSum[i] = (rowSum[i] || 0) + matrix[i][r]
      }
      max = Math.max(max, dpmax(rowSum, k))
      if (max === k) {
        return k
      }
    }
  }
  return max
}

// 在数组 arr 中，求不超过 k 的最大值
function dpmax(arr, k) {
  let rollSum = arr[0]
  let rollMax = rollSum
  // O(rows)
  for (let i = 1; i < arr.length; i++) {
    if (rollSum > 0) {
      rollSum += arr[i]
    } else {
      rollSum = arr[i]
    }
    rollMax = rollSum > rollMax ? rollSum : rollMax
  }
  if (rollMax <= k) {
    return rollMax
  }
  // O(rows ^ 2)
  let max = Number.MIN_SAFE_INTEGER
  for (let l = 0; l < arr.length; l++) {
    let sum = 0
    for (let r = l; r < arr.length; r++) {
      sum += arr[r]
      if (sum > max && sum <= k) {
        max = sum
      }
      if (max === k) {
        return k
      }
    }
  }
  return max
}

write('algorithms: 363. 矩形区域不超过 K 的最大数值和', 'title')

write(
  maxSumSubmatrix(
    [
      [1, 0, 1],
      [0, -2, 3],
    ],
    2
  )
) // 2

write(maxSumSubmatrix([[2, 2, -1]], 3)) // 3

// tag: 矩阵；dp；
