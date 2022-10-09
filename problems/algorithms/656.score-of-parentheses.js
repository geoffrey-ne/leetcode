/**
 * [中等]856. 括号的分数
 * https://leetcode-cn.com/problems/score-of-parentheses/
 * 
 * 
给定一个平衡括号字符串 S，按下述规则计算该字符串的分数：

() 得 1 分。
AB 得 A + B 分，其中 A 和 B 是平衡括号字符串。
(A) 得 2 * A 分，其中 A 是平衡括号字符串。
 

示例 1：

输入： "()"
输出： 1
示例 2：

输入： "(())"
输出： 2
示例 3：

输入： "()()"
输出： 2
示例 4：

输入： "(()(()))"
输出： 6
)
2
1
(


提示：

S 是平衡括号字符串，且只含有 ( 和 ) 。
2 <= S.length <= 50

 */

/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
  const stack = []
  for (const c of s) {
    if (c === '(') {
      stack.push('(')
    } else {
      const last = stack.pop()
      let cur
      if (last === '(') {
        cur = 1
      } else {
        cur = last * 2
        stack.pop()
      }
      while (stack.length > 0 && stack[stack.length - 1] !== '(') {
        cur += stack.pop()
      }
      stack.push(cur)
    }
  }
  return stack[0]
}

write('algorithms: 856. 括号的分数', 'title')

write(scoreOfParentheses('()')) // 1
write(scoreOfParentheses('(())')) // 2
write(scoreOfParentheses('()()')) // 2
write(scoreOfParentheses('(()(()))')) // 6

// tag: 字符串；栈
