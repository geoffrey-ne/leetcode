/**
 * [中等]7. 整数反转
 * https://leetcode-cn.com/problems/reverse-integer/
 * 
给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:

输入: 123
输出: 321
 示例 2:

输入: -123
输出: -321
示例 3:

输入: 120
输出: 21
注意:

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let res = 0
  while (x) {
    const cur = x % 10
    res = res * 10 + cur
    if (res > Math.pow(2, 31) - 1 || res < -Math.pow(2, 31)) {
      return 0
    }
    x = parseInt(x / 10)
  }
  return res
}

var reverse1 = function (x) {
  if (Math.floor(Math.abs(x) / 10) === 0) {
    return x
  }
  let isNagtive = x < 0
  let res = x.toString().split('')
  if (isNagtive) {
    res.splice(0, 1)
  }
  res.reverse()
  while (res[0] === '0') {
    res.splice(0, 1)
  }
  res = res.join('')
  res = isNagtive ? Number(`-${res}`) : Number(res)
  if (res > Math.pow(2, 31) - 1 || res < -Math.pow(2, 31)) {
    return 0
  }
  return res
}

write('algorithms: 7. 整数反转', 'title')

write(reverse(123)) // 321
write(reverse(-123)) // -321
write(reverse(120)) // 21
write(reverse(1534236469)) // 0
