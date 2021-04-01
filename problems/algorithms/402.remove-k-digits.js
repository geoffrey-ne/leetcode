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
  if (num.length === k) {
    return '0'
  } else if (k === 0) {
    return num
  }

  const indexOf0 = num.findIndex(n => n === '0')
  if (indexOf0 < k)
  
  
  else if (num[1] === '0' && k > 0) {
    // 可以降两位
    return removeKdigits(num.slice(2), k - 1)
  }
}

write('algorithms: 402. 移掉K位数字', 'title')

write(removeKdigits('1432219', 3)) // 1219
write(removeKdigits('10200', 1)) // 200
write(removeKdigits('10', 2)) // 0

// tag: 未完成
