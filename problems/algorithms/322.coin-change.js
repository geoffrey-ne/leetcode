/**
 * [中等]322. 零钱兑换
 * https://leetcode-cn.com/problems/coin-change/
 * 
 * 
给定不同面额的硬币 coins 和一个总金额 amount。
编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

你可以认为每种硬币的数量是无限的。

示例 1：

输入：coins = [1, 2, 5], amount = 11
输出：3 
解释：11 = 5 + 5 + 1
示例 2：

输入：coins = [2], amount = 3
输出：-1
示例 3：

输入：coins = [1], amount = 0
输出：0
示例 4：

输入：coins = [1], amount = 1
输出：1
示例 5：

输入：coins = [1], amount = 2
输出：2
 

提示：

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104

 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = Array(amount + 1).fill(amount + 1)
  dp[0] = 0
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < coins.length; j++) {
      const coin = coins[j]
      if (i - coin < 0) continue
      dp[i] = Math.min(dp[i], 1 + dp[i - coin])
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount]
}

var coinChange = function (coins, amount) {
  var dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for (let c of coins) {
    for (let i = c; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - c] + 1)
    }
  }
  return dp[amount] == Infinity ? -1 : dp[amount]
}

write('algorithms: 322. 零钱兑换', 'title')

write(coinChange([1, 2, 5], 11)) // 3
write(coinChange([2], 3)) // -1

// tag: DP；背包问题
