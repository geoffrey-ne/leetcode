/**
 * [中等]227. 基本计算器 II
 * https://leetcode-cn.com/problems/basic-calculator-ii/
 * 
 * 
给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。
整数除法仅保留整数部分。

示例 1：
输入：s = "3+2*2"
输出：7

示例 2：
输入：s = " 3/2 "
输出：1

示例 3：
输入：s = " 3+5 / 2 "
输出：5

提示：
1 <= s.length <= 3 * 105
s 由整数和算符 ('+', '-', '*', '/') 组成，中间由一些空格隔开
s 表示一个 有效表达式
表达式中的所有整数都是非负整数，且在范围 [0, 231 - 1] 内
题目数据保证答案是一个 32-bit 整数

*/

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let frontNum = 0
  let frontOp = ''
  let curNumStr = ''

  for (let i = 0; i < s.length; i++) {
    const cur = s[i]
    if (cur === ' ') {
      continue
    }

    if (/^[*/]$/.test(cur)) {
      let nextNumStr = ''
      // 如果当前是乘除，则可以直接计算
      while (!/^[+\-*/]$/.test(s[i + 1]) && i + 1 < s.length) {
        nextNumStr += s[i + 1]
        i++
      }
      curNumStr = String(cal(Number(curNumStr), Number(nextNumStr), cur))
    } else if (/^[+-]$/.test(cur)) {
      if (frontOp) {
        frontNum = cal(frontNum, Number(curNumStr), frontOp)
      } else {
        frontNum = Number(curNumStr)
      }
      frontOp = cur
      curNumStr = ''
    } else {
      curNumStr += cur
    }
  }

  if (frontOp) {
    frontNum = cal(frontNum, Number(curNumStr), frontOp)
  } else if (curNumStr.length > 0) {
    frontNum = Number(curNumStr)
  }

  return frontNum || 0
}

function cal(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    case '/':
      return Math.floor(num1 / num2)
  }
  return 0
}

write('algorithms: 227. 基本计算器 II', 'title')

write(calculate('3+2*2')) // 7
write(calculate(' 3/2 ')) // 1
write(calculate(' 3+5 / 2 ')) // 5
// write(calculate('2-(5-6)')) // 3
write(calculate('2147483647')) // 2147483647
// write(calculate('(1+(4+5+2)-3)+(6+8)')) // 23
write(calculate('1 + 1')) // 2
write(calculate(' 2-1 + 2 ')) // 3

// tag
