/**
 * [困难]224. 基本计算器
 * https://leetcode-cn.com/problems/basic-calculator/
 * 
 * 
实现一个基本的计算器来计算一个简单的字符串表达式 s 的值。

示例 1：

输入：s = "1 + 1"
输出：2
示例 2：

输入：s = " 2-1 + 2 "
输出：3
示例 3：

输入：s = "(1+(4+5+2)-3)+(6+8)"
输出：23
 
提示：

1 <= s.length <= 3 * 105
s 由数字、'+'、'-'、'('、')'、和 ' ' 组成
s 表示一个有效的表达式

*/
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const arr = []
  for (let i = 0; i < s.length; i++) {
    const cur = s[i]
    if (cur === ' ') {
      continue
    }
    if (cur !== ')') {
      arr.push(cur)
    } else {
      let expression = []
      do {
        // 获取括号内的算式
        expression.unshift(arr.pop())
      } while (arr.length > 0 && arr[arr.length - 1] !== '(')
      // 弹出 (
      arr.pop()
      // 弹入计算结果
      arr.push(cal(expression))
    }
  }
  return cal(arr)
}

/**
 * 用于计算一个正确的算式，如：4+5-2
 *
 * @param {Array} expression
 */
function cal(expression) {
  if (expression.length === 0) {
    return 0
  }
  const nums = []
  const operators = []
  let p1 = 0
  let p2 = 0
  while (p2 < expression.length) {
    const cur = expression[p2]
    if (/^[+-]$/.test(cur)) {
      operators.push(cur)
      nums.push(Number(expression.slice(p1, p2).join('')))
      p2++
      p1 = p2
    } else {
      if (p2 === expression.length - 1) {
        nums.push(Number(expression.slice(p1, p2 + 1).join('')))
      }
      p2++
    }
  }
  let res = nums.shift() || 0
  while (operators.length > 0) {
    const operator = operators.shift()
    const num2 = nums.shift() || 0
    if (operator === '+') {
      res += num2
    } else {
      res -= num2
    }
  }
  return res
}

write('algorithms: 224. 基本计算器', 'title')

write(calculate('2-(5-6)')) // 3
write(calculate('2147483647')) // 2147483647
write(calculate('(1+(4+5+2)-3)+(6+8)')) // 23
write(calculate('1 + 1')) // 2
write(calculate(' 2-1 + 2 ')) // 3

// tag: 双栈；递归
