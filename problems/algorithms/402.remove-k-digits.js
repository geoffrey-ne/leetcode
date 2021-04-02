/**
 * [中等]402. 移掉K位数字
 * https://leetcode-cn.com/problems/remove-k-digits/
 * 
 * 
给定一个以字符串表示的非负整数 num，移除这个数中的 k 位数字，使得剩下的数字最小。

注意:

num 的长度小于 10002 且 ≥ k。
num 不会包含任何前导零。
示例 1 :

输入: num = "1432219", k = 3
输出: "1219"
解释: 移除掉三个数字 4, 3, 和 2 形成一个新的最小的数字 1219。
示例 2 :

输入: num = "10200", k = 1
输出: "200"
解释: 移掉首位的 1 剩下的数字为 200. 注意输出不能有任何前导零。
示例 3 :

输入: num = "10", k = 2
输出: "0"
解释: 从原数字移除所有的数字，剩余为空就是0。

1245512466 5

1234512346 5

前6个数中会有1个边成首个数字

123412345 4

112345 1



*/

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  // 处理特殊
  if (num.length === 0 || num.length === k) {
    return '0'
  } else if (k === 0) {
    return num
  }

  for (let i = 0; i < num.length - 1; i++) {
    if (num[i] > num[i + 1]) {
      const pre = num.substring(0, i)
      if (i === 0) {
        while (i < num.length - 1 && num[i + 1] === '0') {
          i++
        }
      }
      const end = num.slice(i + 1)
      return removeKdigits(pre + end, k - 1)
    }
  }
  return removeKdigits(num.slice(0, num.length - 1), k - 1)
}

write('algorithms: 402. 移掉K位数字', 'title')

write(removeKdigits('1234567890', 9)) // 0
write(removeKdigits('112', 1)) // 11
write(removeKdigits('1107', 1)) // 107
write(removeKdigits('10', 1)) // 0
write(removeKdigits('1432219', 3)) // 1219
write(removeKdigits('123456', 3)) // 123
write(removeKdigits('10200', 1)) // 200
write(removeKdigits('10200', 2)) // 0
write(removeKdigits('10', 2)) // 0

// tag: 递归；单调栈
