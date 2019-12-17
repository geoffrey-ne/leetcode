/**
 * 加一：https://leetcode-cn.com/explore/learn/card/array-and-string/198/introduction-to-array/772/
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let i = digits.length - 1
  while (i >= 0) {
    const res = digits[i] + 1
    if (res < 10) {
      digits[i] = res
      break
    }
    digits[i] = 0
    i--
  }
  if (i === -1) {
    digits.unshift(1)
  }
  return digits
}

/**
给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

示例 1:

输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123。
示例 2:

输入: [4,3,2,1]
输出: [4,3,2,2]
解释: 输入数组表示数字 4321。
 */

write('arrayAndString 3. plusOne', 'title')

write(plusOne([1, 2, 3])) // [1,2,4]
write(plusOne([4, 3, 2, 1])) // [4,3,2,2]
write(plusOne([9, 9, 9, 9, 9])) // [1,0,0,0,0,0]
