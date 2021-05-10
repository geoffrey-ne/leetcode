/**
 * [中等]面试题 08.11. 硬币
 * https://leetcode-cn.com/problems/coin-lcci/
 * 
硬币。给定数量不限的硬币，币值为25分、10分、5分和1分，编写代码计算n分有几种表示法。(结果可能会很大，你需要将结果模上1000000007)

示例1:

 输入: n = 5
 输出：2
 解释: 有两种方式可以凑成总金额:
5=5
5=1+1+1+1+1
示例2:

 输入: n = 10
 输出：4
 解释: 有四种方式可以凑成总金额:
10=10
10=5+5
10=5+1+1+1+1+1
10=1+1+1+1+1+1+1+1+1+1
说明：

注意:

你可以假设：

0 <= n (总金额) <= 1000000

*/

/**
 * @param {number} n
 * @return {number}
 */
var waysToChange = function (n) {
  const dp = new Array(n + 1).fill(0)
  dp[0] = 1
  for (const coin of [1, 5, 10, 25]) {
    for (let i = coin; i < n + 1; i++) {
      dp[i] = (dp[i] + dp[i - coin]) % 1000000007
    }
  }
  return dp[n]
}

write('algorithms: 面试题 08.11. 硬币', 'title')

write(waysToChange(5)) // 2
write(waysToChange(10)) // 4

// tag: 我也不知道算啥思路
