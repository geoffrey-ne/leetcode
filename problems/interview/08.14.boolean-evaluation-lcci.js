/**
 * [中等]面试题 08.14. 布尔运算
 * https://leetcode-cn.com/problems/boolean-evaluation-lcci/
 * 
给定一个布尔表达式和一个期望的布尔结果 result，布尔表达式由 0 (false)、1 (true)、& (AND)、 | (OR) 和 ^ (XOR) 符号组成。
实现一个函数，算出有几种可使该表达式得出 result 值的括号方法。

示例 1:

输入: s = "1^0|0|1", result = 0

输出: 2
解释: 两种可能的括号方法是
1^(0|(0|1))
1^((0|0)|1)
示例 2:

输入: s = "0&0&0&1^1|0", result = 1

输出: 10
提示：

运算符的数量不超过 19 个

*/

/**
 * @param {string} s
 * @param {number} result
 * @return {number}
 */
var countEval = function (s, result) {
  if (s.length === 0 || s.length % 2 === 0) {
    return 0
  }
  const res = helper(s, 0, s.length - 1)
  return res[result]
}

function helper(s, start, end, cache = {}) {
  const res = [0, 0]
  if (start === end) {
    res[Number(s[start])] = 1
    return res
  }
  const key = s.substring(start, end + 1)
  if (cache[key]) {
    return cache[key]
  }
  for (let i = start; i < end; i += 2) {
    const preRes = helper(s, start, i, cache)
    const afterRes = helper(s, i + 2, end, cache)
    const operator = s[i + 1]

    if (operator === '^') {
      // 0 ^ 0 || 1 ^ 1
      res[0] += preRes[0] * afterRes[0] + preRes[1] * afterRes[1]
      // 0 ^ 1 || 1 ^ 0
      res[1] += preRes[0] * afterRes[1] + preRes[1] * afterRes[0]
    } else if (operator === '&') {
      // 0 & 0 || 0 && 1 || 1 && 0
      res[0] += preRes[0] * afterRes[0] + preRes[0] * afterRes[1] + preRes[1] * afterRes[0]
      // 1 & 1
      res[1] += preRes[1] * afterRes[1]
    } else if (operator === '|') {
      // 0 | 0
      res[0] += preRes[0] * afterRes[0]
      // 0 | 1 || 1 | 0 || 1 | 1
      res[1] += preRes[0] * afterRes[1] + preRes[1] * afterRes[0] + preRes[1] * afterRes[1]
    }
  }
  return (cache[key] = res)
}

write('algorithms: 面试题 08.14. 布尔运算', 'title')

write(countEval('1^0|0|1', 0)) // 2
write(countEval('0&0&1^1|0', 1)) // 4
write(countEval('0&0&0', 0))  // 2
write(countEval('0&0&0&1^1|0', 1)) // 10

// tag: 递归
