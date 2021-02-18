/**
 * [简单]204. 计数质数
 * https://leetcode-cn.com/problems/count-primes/
 * 
 * 
统计所有小于非负整数 n 的质数的数量。

 

示例 1：

输入：n = 10
输出：4
解释：小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
示例 2：

输入：n = 0
输出：0
示例 3：

输入：n = 1
输出：0
 

提示：

0 <= n <= 5 * 106

 */

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let sum = 0
  for (let i = 2; i < n; i++) {
    if (isPrimes(i)) {
      sum++
    }
  }
  return sum
}

function isPrimes(n) {
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

write(countPrimes(10)) // 4
write(countPrimes(0)) // 0
write(countPrimes(1)) // 0

// tag: 暴力解法
