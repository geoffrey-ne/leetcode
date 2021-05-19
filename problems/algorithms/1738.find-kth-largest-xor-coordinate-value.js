/**
 * [中等]1738. 找出第 K 大的异或坐标值
 * https://leetcode-cn.com/problems/find-kth-largest-xor-coordinate-value/
 * 
 * 
给你一个二维矩阵 matrix 和一个整数 k ，矩阵大小为 m x n 由非负整数组成。

矩阵中坐标 (a, b) 的 值 可由对所有满足 0 <= i <= a < m 且 0 <= j <= b < n 的元素 matrix[i][j]（下标从 0 开始计数）执行异或运算得到。

请你找出 matrix 的所有坐标中第 k 大的值（k 的值从 1 开始计数）。


示例 1：

输入：matrix = [[5,2],[1,6]], k = 1
输出：7
解释：坐标 (0,1) 的值是 5 XOR 2 = 7 ，为最大的值。
示例 2：

输入：matrix = [[5,2],[1,6]], k = 2
输出：5
解释：坐标 (0,0) 的值是 5 = 5 ，为第 2 大的值。
示例 3：

输入：matrix = [[5,2],[1,6]], k = 3
输出：4
解释：坐标 (1,0) 的值是 5 XOR 1 = 4 ，为第 3 大的值。
示例 4：

输入：matrix = [[5,2],[1,6]], k = 4
输出：0
解释：坐标 (1,1) 的值是 5 XOR 2 XOR 1 XOR 6 = 0 ，为第 4 大的值。
 

提示：

m == matrix.length
n == matrix[i].length
1 <= m, n <= 1000
0 <= matrix[i][j] <= 106
1 <= k <= m * n

*/

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const cache = new Map()
var kthLargestValue1 = function (matrix, k) {
  const m = matrix.length
  const n = matrix[0].length
  const key = `${m},${n},${matrix.toString()}`
  if (!cache[key]) {
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
    dp[0][0] = matrix[0][0]
    const list = [dp[0][0]]
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (i === 0) {
          if (j === 0) {
            continue
          }
          dp[i][j] = dp[i][j - 1] ^ matrix[i][j]
        } else if (j === 0) {
          dp[i][j] = dp[i - 1][j] ^ matrix[i][j]
        } else {
          dp[i][j] = dp[i - 1][j] ^ dp[i][j - 1] ^ dp[i - 1][j - 1] ^ matrix[i][j]
        }
        list.push(dp[i][j])
      }
    }
    list.sort((a, b) => b - a)
    cache[key] = list
  }

  return cache[key][k - 1]
}

var kthLargestValue = function(matrix, k) {
  const m = matrix.length, n = matrix[0].length;
  const pre = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  const results = [];
  for (let i = 1; i < m + 1; i++) {
      for (let j = 1; j < n + 1; j++) {
          pre[i][j] = pre[i - 1][j] ^ pre[i][j - 1] ^ pre[i - 1][j - 1] ^ matrix[i - 1][j - 1];
          results.push(pre[i][j]);
      }
  }
  results.sort((a, b) => b - a);
  return results[k - 1];
}

write('algorithms: 1738. 找出第 K 大的异或坐标值', 'title')

const matrix = [
  [5, 2],
  [1, 6],
]

write(kthLargestValue(matrix, 1)) // 7
write(kthLargestValue(matrix, 2)) // 5
write(kthLargestValue(matrix, 3)) // 4
write(kthLargestValue(matrix, 4)) // 0

// tags: 位运算；异或
