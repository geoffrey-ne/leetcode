/**
 * [简单]面试题 16.05. 阶乘尾数
 * https://leetcode-cn.com/problems/factorial-zeros-lcci/
 * 
设计一个算法，算出 n 阶乘有多少个尾随零。

示例 1:

输入: 3
输出: 0
解释: 3! = 6, 尾数中没有零。
示例 2:

输入: 5
输出: 1
解释: 5! = 120, 尾数中有 1 个零.
说明: 你算法的时间复杂度应为 O(log n) 。

2 * 5 * 10 * 15

3000

15 / 5



*/

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let res = 0
  while (n >= 5) {
    const count = Math.floor(n / 5)
    res += count
    n = count
  }
  return res
}

write('algorithms: 面试题 16.05. 阶乘尾数', 'title')

write(trailingZeroes(3)) // 0
write(trailingZeroes(5)) // 1
write(trailingZeroes(15)) // 3
write(trailingZeroes(16)) // 3
write(trailingZeroes(20)) // 4

// tag: 数学
