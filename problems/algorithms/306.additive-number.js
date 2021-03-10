/**
 * [中等]306. 累加数
 * https://leetcode-cn.com/problems/additive-number/
 * 
 * 
累加数是一个字符串，组成它的数字可以形成累加序列。

一个有效的累加序列必须至少包含 3 个数。除了最开始的两个数以外，字符串中的其他数都等于它之前两个数相加的和。

给定一个只包含数字 '0'-'9' 的字符串，编写一个算法来判断给定输入是否是累加数。

说明: 累加序列里的数不会以 0 开头，所以不会出现 1, 2, 03 或者 1, 02, 3 的情况。

示例 1:

输入: "112358"
输出: true 
解释: 累加序列为: 1, 1, 2, 3, 5, 8 。1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
示例 2:

输入: "199100199"
输出: true 
解释: 累加序列为: 1, 99, 100, 199。1 + 99 = 100, 99 + 100 = 199
进阶:
你如何处理一个溢出的过大的整数输入?
*/

/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {
  for (let i = 0; i < num.length - 1; i++) {
    const num1 = num.slice(0, i + 1)
    if (num1.indexOf('0') === 0 && i !== 0) {
      continue
    }
    for (let j = i + 1; j < num.length; j++) {
      const num2 = num.slice(i + 1, j + 1)
      if (num2.indexOf('0') === 0 && j !== i + 1) {
        continue
      }
      if (helper(num1, num2, num.slice(j + 1))) {
        return true
      }
    }
  }
  return false
}

function helper(num1, num2, rest) {
  const next = String(Number(num1) + Number(num2))
  if (rest.length < next.length) {
    return false
  }
  if (rest === next) {
    return true
  }

  const restNext = rest.slice(0, next.length)
  if (restNext === next) {
    return helper(num2, next, rest.slice(next.length))
  }
  return false
}

write('algorithms: 306. 累加数', 'title')

write(isAdditiveNumber('101')) // true
write(isAdditiveNumber('1023')) // false
write(isAdditiveNumber('112358')) // true
write(isAdditiveNumber('199100199')) // true

// tag:递归
