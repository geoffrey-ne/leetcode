/**
 * [中等]201. 数字范围按位与
 * https://leetcode-cn.com/problems/bitwise-and-of-numbers-range/
 * 
 * 
给定范围 [m, n]，其中 0 <= m <= n <= 2147483647，返回此范围内所有数字的按位与（包含 m, n 两端点）。

示例 1: 

输入: [5,7]
输出: 4
示例 2:

输入: [0,1]
输出: 0

 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function (m, n) {
  if (m === 0) {
    return 0
  }
  if (m === n) {
    return m
  }
  let pow = 0
  while (Math.pow(2, pow) <= m) {
    pow++
  }

  if (Math.pow(2, pow) > n) {
    return Math.pow(2, pow - 1)
  }
  return 0
}

write(rangeBitwiseAnd(3, 3)) // 3
write(rangeBitwiseAnd(5, 6)) // 4
write(rangeBitwiseAnd(6, 7)) // 6
write(rangeBitwiseAnd(1, 2)) // 0
write(rangeBitwiseAnd(2, 4)) // 0
write(rangeBitwiseAnd(4, 8)) // 0
write(rangeBitwiseAnd(5, 7)) // 4
write(rangeBitwiseAnd(0, 1)) // 0

// tag: 未完成
