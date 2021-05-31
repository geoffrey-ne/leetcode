/**
 * [简单]342. 4的幂
 * https://leetcode-cn.com/problems/power-of-four/
 * 
 * 
给定一个整数，写一个函数来判断它是否是 4 的幂次方。如果是，返回 true ；否则，返回 false 。

整数 n 是 4 的幂次方需满足：存在整数 x 使得 n == 4x

示例 1：

输入：n = 16
输出：true
示例 2：

输入：n = 5
输出：false
示例 3：

输入：n = 1
输出：true
 

提示：

-231 <= n <= 231 - 1
 

进阶：

你能不使用循环或者递归来完成本题吗？

*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  let positionOf1 = -1
  let cur = 0
  while (n > 0) {
    if (n % 2 !== 0) {
      if (positionOf1 >= 0) {
        return false
      }
      positionOf1 = cur
      if (positionOf1 % 2 !== 0) {
        return false
      }
    }
    n >>= 1
    cur++
  }
  return positionOf1 >= 0
}

write('algorithms: 342. 4的幂', 'title')

write(isPowerOfFour(1)) // true
write(isPowerOfFour(16)) // true
write(isPowerOfFour(3)) // false
write(isPowerOfFour(4)) // true
write(isPowerOfFour(5)) // false

// tag: 位运算
