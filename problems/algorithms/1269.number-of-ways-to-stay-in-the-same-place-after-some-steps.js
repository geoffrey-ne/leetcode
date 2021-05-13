/**
 * [困难]1269. 停在原地的方案数
 * https://leetcode-cn.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/
 * 
 * 
有一个长度为 arrLen 的数组，开始有一个指针在索引 0 处。

每一步操作中，你可以将指针向左或向右移动 1 步，或者停在原地（指针不能被移动到数组范围外）。

给你两个整数 steps 和 arrLen ，请你计算并返回：在恰好执行 steps 次操作以后，指针仍然指向索引 0 处的方案数。

由于答案可能会很大，请返回方案数 模 10^9 + 7 后的结果。

 

示例 1：

输入：steps = 3, arrLen = 2
输出：4
解释：3 步后，总共有 4 种不同的方法可以停在索引 0 处。
向右，向左，不动
不动，向右，向左
向右，不动，向左
不动，不动，不动
示例  2：

输入：steps = 2, arrLen = 4
输出：2
解释：2 步后，总共有 2 种不同的方法可以停在索引 0 处。
向右，向左
不动，不动
示例 3：

输入：steps = 4, arrLen = 2
输出：8
 

提示：

1 <= steps <= 500
1 <= arrLen <= 10^6

*/

/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays1 = function (steps, arrLen) {
  return helper(steps, arrLen, 0)
}

function helper(steps, arrLen, curIndex, cache = {}) {
  const cacheKey = `${steps},${curIndex}`
  if (steps === 0) {
    if (curIndex === 0) {
      return 1
    }
    return 0
  }
  if (cache[cacheKey]) {
    return cache[cacheKey]
  }
  // 剪枝 - 即使一直左移也回不去了
  if (curIndex > steps) {
    return 0
  } else if (curIndex === steps) {
    return 1
  }
  // 不动
  let res = helper(steps - 1, arrLen, curIndex, cache)
  // 左移
  if (curIndex > 0) {
    res += helper(steps - 1, arrLen, curIndex - 1, cache)
  }
  // 右移
  if (curIndex < arrLen - 1) {
    res += helper(steps - 1, arrLen, curIndex + 1, cache)
  }
  return (cache[cacheKey] = res % (Math.pow(10, 9) + 7))
}

var numWays = function (steps, arrLen) {
  const MODULO = 1000000007
  let maxColumn = Math.min(arrLen - 1, steps)
  const dp = new Array(steps + 1).fill(0).map(() => new Array(maxColumn + 1).fill(0))
  dp[0][0] = 1
  for (let i = 1; i <= steps; i++) {
    for (let j = 0; j <= maxColumn; j++) {
      dp[i][j] = dp[i - 1][j]
      if (j - 1 >= 0) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j - 1]) % MODULO
      }
      if (j + 1 <= maxColumn) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j + 1]) % MODULO
      }
    }
  }
  return dp[steps][0]
}

write('algorithms: 1269. 停在原地的方案数', 'title')

write(numWays(3, 2)) // 4
write(numWays(2, 4)) // 2
write(numWays(4, 2)) // 8
write(numWays(27, 7)) // 127784505

// tag: 递归；DP
