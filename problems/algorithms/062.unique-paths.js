/**
 * [中等]62. 不同路径
 * https://leetcode-cn.com/problems/unique-paths/
 * 
 * 
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

问总共有多少条不同的路径？

例如，上图是一个7 x 3 的网格。有多少可能的路径？

111
111

示例 1:

输入: m = 3, n = 2
输出: 3
解释:
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向右 -> 向下
2. 向右 -> 向下 -> 向右
3. 向下 -> 向右 -> 向右
示例 2:

输入: m = 7, n = 3
输出: 28
 

提示：

1 <= m, n <= 100
题目数据保证答案小于等于 2 * 10 ^ 9

 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  if (m === 1 || n === 1) {
    return 1
  }
  const cache = {}
  return helper(1, 1, m, n, m + n - 2, cache)
}

function helper(x, y, m, n, step, cache) {
  if (x > m || y > n) {
    return 0
  }
  if (step === 0) {
    return 1
  }
  if (typeof cache[`${x},${y}`] === 'undefined') {
    cache[`${x},${y}`] = helper(x + 1, y, m, n, step - 1, cache) + helper(x, y + 1, m, n, step - 1, cache)
  }
  return cache[`${x},${y}`]
}

write('algorithms: 62. 不同路径', 'title')

write(uniquePaths(3, 2)) // 3
write(uniquePaths(7, 3)) // 28

// tag: 回溯
