/**
 * [困难]1106. 解析布尔表达式
 * https://leetcode-cn.com/problems/parsing-a-boolean-expression/
 * 
 * 
给你一个以字符串形式表述的 布尔表达式（boolean） expression，返回该式的运算结果。

有效的表达式需遵循以下约定：

"t"，运算结果为 True
"f"，运算结果为 False
"!(expr)"，运算过程为对内部表达式 expr 进行逻辑 非的运算（NOT）
"&(expr1,expr2,...)"，运算过程为对 2 个或以上内部表达式 expr1, expr2, ... 进行逻辑 与的运算（AND）
"|(expr1,expr2,...)"，运算过程为对 2 个或以上内部表达式 expr1, expr2, ... 进行逻辑 或的运算（OR）
 

示例 1：

输入：expression = "!(f)"
输出：true
示例 2：

输入：expression = "|(f,t)"
输出：true
示例 3：

输入：expression = "&(t,f)"
输出：false
示例 4：

输入：expression = "|(&(t,f,t),!(t))"
输出：false
 

提示：

1 <= expression.length <= 20000
expression[i] 由 {'(', ')', '&', '|', '!', 't', 'f', ','} 中的字符组成。
expression 是以上述形式给出的有效表达式，表示一个布尔值。

*/

/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function (expression) {
  const stack = []
  const operatorStack = []
  for (let i = 0; i < expression.length; i++) {
    const c = expression[i]
    if (c !== ')' && c !== ',') {
      if (c === '|' || c === '&' || c === '!') {
        operatorStack.push(c)
      } else {
        stack.push(c)
      }
    } else if (c === ')') {
      const op = operatorStack.pop()
      let res = stack.pop()
      if (op === '!') {
        stack.pop()
        stack.push(res === 't' ? 'f' : 't')
      } else {
        while (stack[stack.length - 1] !== '(') {
          res = cal(res, stack.pop(), op)
        }
        stack.pop()
        stack.push(res)
      }
    }
  }
  return stack[0] === 't'
}

function cal(boolean1, boolean2, op) {
  if (op === '&') {
    return boolean1 === 'f' || boolean2 === 'f' ? 'f' : 't'
  } else {
    return boolean1 === 't' || boolean2 === 't' ? 't' : 'f'
  }
}

write('algorithms: 1106. 解析布尔表达式', 'title')

write(parseBoolExpr('|(f,f,f,t)')) // true
write(parseBoolExpr('&(|(f))')) // false
write(parseBoolExpr('!(f)')) // true
write(parseBoolExpr('|(f,t)')) // true
write(parseBoolExpr('&(t,f)')) // false
write(parseBoolExpr('|(&(t,f,t),!(t))')) // false

// tag: 栈
