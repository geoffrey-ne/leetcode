/**
 * [中等]50. Pow(x, n)
 * https://leetcode-cn.com/problems/powx-n/
 * 
实现 pow(x, n) ，即计算 x 的 n 次幂函数。

示例 1:

输入: 2.00000, 10
输出: 1024.00000
示例 2:

输入: 2.10000, 3
输出: 9.26100
示例 3:

输入: 2.00000, -2
输出: 0.25000
解释: 2-2 = 1/22 = 1/4 = 0.25
说明:

-100.0 < x < 100.0
n 是 32 位有符号整数，其数值范围是 [−231, 231 − 1] 。

 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  let res = 0
  if (x === 0) {
    return 0
  } else if (n === 0) {
    return 1
  } else if (n < 0) {
    res = helper(1 / x, -n)
  } else {
    res = helper(x, n)
  }

  return res.toFixed(5)
}

function helper(x, n) {
  if (n === 1) {
    return x
  } else if (n % 2 === 0) {
    return helper(x * x, parseInt(n / 2))
  } else {
    return x * helper(x * x, parseInt((n - 1) / 2))
  }
}

write('algorithms: 50. Pow(x, n)', 'title')

write(myPow(0.44528, 0)) // 1
write(myPow(2.0, 10)) // 1024.00000
write(myPow(2.1, 3)) // 9.26100
write(myPow(2.0, -2)) // 0.25000

// tag: 数学计算
