/**
 * [困难]32. 最长有效括号
 * https://leetcode-cn.com/problems/longest-valid-parentheses/
 * 

给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。

示例 1:

输入: "(()"
输出: 2
解释: 最长有效括号子串为 "()"
示例 2:
输出: 4
解释: 最长有效括号子串为 "()()"


 */

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let res = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')') {
      continue
    }
    let left = 1
    let j = i + 1
    let len = 1
    while (j < s.length && left >= 0) {
      if (s[j] === '(') {
        left++
      } else if (s[j] === ')') {
        left--
      }
      if (left === 0) {
        len += j - i
        res = Math.max(res, len)
        i = j
      }
      j++
    }
  }
  return res
}

write('algorithms: 32. 最长有效括号', 'title')

write(longestValidParentheses('()(()')) // 2
write(longestValidParentheses('(()')) // 2
write(longestValidParentheses(')()())')) // 4
write(longestValidParentheses('((())())')) // 8
write(longestValidParentheses('((())())()')) // 10
write(longestValidParentheses('(((())())()')) // 10

// tag: 字符串;DP;栈
