/**
 * [中等]633. 平方数之和
 * https://leetcode-cn.com/problems/sum-of-square-numbers/
 * 
 * 
给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 pow(a, 2) + pow(b, 2) = c 。

示例 1：

输入：c = 5
输出：true
解释：1 * 1 + 2 * 2 = 5
示例 2：

输入：c = 3
输出：false
示例 3：

输入：c = 4
输出：true
示例 4：

输入：c = 2
输出：true
示例 5：

输入：c = 1
输出：true
 
196
225

421

提示：

0 <= c <= pow(2, 31) - 1

*/

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  const max = Math.floor(Math.sqrt(c))
  if (c === 0 || max * max === c) {
    return true
  }
  const needSet = new Set()
  for (let i = 1; i <= max; i++) {
    const powI = Math.pow(i, 2)
    if (needSet.has(powI) || powI * 2 === c) {
      return true
    }
    needSet.add(c - powI)
  }
  return false
}

/**
 * 枚举的解答都比我的快。。。
 *
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum1 = function (c) {
  for (let a = 0; a * a <= c; a++) {
    const b = Math.sqrt(c - a * a)
    if (b === parseInt(b)) {
      return true
    }
  }
  return false
}

/**
 * 双指针
 *
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum2 = function (c) {
  let left = 0
  let right = Math.floor(Math.sqrt(c))
  while (left <= right) {
    const sum = left * left + right * right
    if (sum === c) {
      return true
    } else if (sum > c) {
      right--
    } else {
      left++
    }
  }
  return false
}

write('algorithms: 633. 平方数之和', 'title')

write(judgeSquareSum(5)) // true
write(judgeSquareSum(3)) // false
write(judgeSquareSum(4)) // true
write(judgeSquareSum(2)) // true
write(judgeSquareSum(1)) // true

// tag: 数字；平方数；双指针
