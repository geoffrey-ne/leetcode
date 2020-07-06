/**
 * [中等]29. 两数相除
 * https://leetcode-cn.com/problems/divide-two-integers/
 * 

给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。

返回被除数 dividend 除以除数 divisor 得到的商。

整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2

示例 1:

输入: dividend = 10, divisor = 3
输出: 3
解释: 10/3 = truncate(3.33333..) = truncate(3) = 3

par

示例 2:

输入: dividend = 7, divisor = -3
输出: -2
解释: 7/-3 = truncate(-2.33333..) = -2
 
提示：

被除数和除数均为 32 位有符号整数。
除数不为 0。
假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。本题中，如果除法结果溢出，则返回 231 − 1。

 */

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const isPositive = (dividend >= 0 && divisor > 0) || (dividend <= 0 && divisor < 0)
  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)

  let res = 0

  if (divisor === 1) {
    res = dividend
  } else {
    res = divideSub(dividend, divisor)
  }

  const max = Math.pow(2, 31)
  if (!isPositive && res < -max) {
    res = -max
  }
  if (isPositive && res > max - 1) {
    res = max - 1
  }
  return isPositive ? res : -res
}

function divideSub(dividend, divisor) {
  if (dividend < divisor) {
    return 0
  }
  let count = 1
  let newdivisor = divisor
  while (newdivisor + newdivisor < dividend) {
    count = count + count
    newdivisor = newdivisor + newdivisor
  }

  return count + divideSub(dividend - newdivisor, divisor)
}

var divide1 = function (dividend, divisor) {
  const isPositive = (dividend >= 0 && divisor > 0) || (dividend <= 0 && divisor < 0)
  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)
  let res = 0
  if (divisor === 1) {
    res = dividend
  } else {
    while (dividend >= divisor) {
      dividend -= divisor
      res++
    }
  }

  const max = Math.pow(2, 31)

  if (!isPositive && res < -max) {
    res = -max
  }

  if (isPositive && res > max - 1) {
    res = max - 1
  }

  return isPositive ? res : -res
}

write('algorithms: 29. 两数相除', 'title')
write(divide(1, 2)) // 0
write(divide(-2147483648, -1)) // 2147483647
write(divide(-2147483648, 1)) // -2147483648
write(divide(10, 3)) // 3
write(divide(1, 1)) // 1
write(divide(7, -3)) // -2

// tag: 数字运算
